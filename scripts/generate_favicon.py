#!/usr/bin/env python3
"""
Generate favicon files for KAULA EXIM website
Creates the exact sun symbol from the KAULA logo:
- Solid central blue circle
- 8 curved C-shaped rays (like crescents/parentheses) opening outward
- Rays equally spaced at 45-degree intervals
"""

from PIL import Image, ImageDraw
import math
import os

# KAULA brand blue color (extracted from logo)
KAULA_BLUE = (0, 102, 204)  # Deep blue from the logo
WHITE = (255, 255, 255)

def draw_crescent_ray(draw, center_x, center_y, angle, inner_radius, outer_radius, thickness, color):
    """
    Draw a single C-shaped/crescent ray
    The crescent opens outward from the center
    """
    angle_rad = math.radians(angle)
    
    # Calculate the position for the crescent
    # The crescent is positioned along the ray direction
    ray_center_dist = (inner_radius + outer_radius) / 2
    ray_x = center_x + ray_center_dist * math.cos(angle_rad)
    ray_y = center_y + ray_center_dist * math.sin(angle_rad)
    
    # The crescent arc parameters
    arc_radius = (outer_radius - inner_radius) / 2
    
    # Draw the crescent as an arc (C-shape opening outward)
    # Arc spans about 180 degrees, opening toward outside
    arc_start = angle - 90
    arc_end = angle + 90
    
    # Create bounding box for the arc
    bbox = [
        ray_x - arc_radius - thickness/2,
        ray_y - arc_radius - thickness/2,
        ray_x + arc_radius + thickness/2,
        ray_y + arc_radius + thickness/2
    ]
    
    # Draw the arc with thickness
    for t in range(-int(thickness/2), int(thickness/2) + 1):
        adjusted_radius = arc_radius + t * 0.3
        if adjusted_radius > 0:
            arc_bbox = [
                ray_x - adjusted_radius,
                ray_y - adjusted_radius,
                ray_x + adjusted_radius,
                ray_y + adjusted_radius
            ]
            draw.arc(arc_bbox, arc_start, arc_end, fill=color, width=max(1, int(thickness * 0.4)))


def draw_kaula_sun_symbol(draw, center_x, center_y, size, color):
    """
    Draw the exact KAULA sun symbol:
    - Solid central circle
    - 8 C-shaped crescent rays opening outward
    - Rays at 0°, 45°, 90°, 135°, 180°, 225°, 270°, 315°
    """
    
    # Calculate proportions based on size
    central_radius = size * 0.22  # Central circle
    ray_inner = size * 0.32      # Where rays start
    ray_outer = size * 0.48      # Where rays end
    ray_thickness = size * 0.08  # Thickness of each ray arc
    
    # Draw central solid circle
    draw.ellipse(
        [center_x - central_radius, center_y - central_radius,
         center_x + central_radius, center_y + central_radius],
        fill=color
    )
    
    # Draw 8 crescent rays at 45-degree intervals
    num_rays = 8
    for i in range(num_rays):
        angle = i * 45  # 0°, 45°, 90°, 135°, 180°, 225°, 270°, 315°
        draw_crescent_ray_v2(draw, center_x, center_y, angle, ray_inner, ray_outer, ray_thickness, color, size)


def draw_crescent_ray_v2(draw, cx, cy, angle_deg, inner_r, outer_r, thickness, color, total_size):
    """
    Draw a C-shaped crescent ray that opens outward
    This version creates the exact look from the KAULA logo
    """
    angle_rad = math.radians(angle_deg)
    
    # Position of the crescent center along the ray
    mid_r = (inner_r + outer_r) / 2
    crescent_cx = cx + mid_r * math.cos(angle_rad)
    crescent_cy = cy + mid_r * math.sin(angle_rad)
    
    # Crescent arc radius (height of the C-shape)
    arc_height = (outer_r - inner_r) * 0.9
    
    # The crescent opens outward, so arc faces away from center
    # We draw an arc from angle-90 to angle+90
    arc_start_angle = angle_deg - 80
    arc_end_angle = angle_deg + 80
    
    # Calculate arc width (how thick the stroke is)
    stroke_width = max(2, int(thickness))
    
    # Draw the arc
    bbox = [
        crescent_cx - arc_height,
        crescent_cy - arc_height,
        crescent_cx + arc_height,
        crescent_cy + arc_height
    ]
    
    draw.arc(bbox, arc_start_angle, arc_end_angle, fill=color, width=stroke_width)


def draw_kaula_sun_v3(draw, cx, cy, size, color):
    """
    Draw KAULA sun symbol with precise C-shaped rays
    Using polygon method for cleaner rendering at small sizes
    """
    # Central circle radius
    center_r = size * 0.20
    
    # Draw central circle
    draw.ellipse([cx - center_r, cy - center_r, cx + center_r, cy + center_r], fill=color)
    
    # Ray parameters
    ray_start = size * 0.28   # Distance from center where ray starts
    ray_end = size * 0.46     # Distance from center where ray ends
    ray_width = size * 0.10   # Width of the ray stroke
    arc_depth = size * 0.08   # How much the C-curve bends
    
    # Draw 8 rays
    for i in range(8):
        angle = math.radians(i * 45 - 90)  # Start from top
        
        # Calculate ray center line points
        start_x = cx + ray_start * math.cos(angle)
        start_y = cy + ray_start * math.sin(angle)
        end_x = cx + ray_end * math.cos(angle)
        end_y = cy + ray_end * math.sin(angle)
        
        # Calculate the curve midpoint (bent outward)
        mid_dist = (ray_start + ray_end) / 2
        # Perpendicular offset for C-curve (opening outward = away from center)
        perp_angle = angle + math.pi / 2
        
        # For the C-shape, we curve it perpendicular to the ray direction
        # The curve opens to one side, making a parenthesis shape
        curve_offset = arc_depth
        mid_x = cx + mid_dist * math.cos(angle) + curve_offset * math.cos(perp_angle)
        mid_y = cy + mid_dist * math.sin(angle) + curve_offset * math.sin(perp_angle)
        
        # Draw as thick arc using multiple lines
        points_count = 12
        for t in range(points_count):
            t1 = t / points_count
            t2 = (t + 1) / points_count
            
            # Quadratic bezier interpolation
            p1x = (1-t1)**2 * start_x + 2*(1-t1)*t1 * mid_x + t1**2 * end_x
            p1y = (1-t1)**2 * start_y + 2*(1-t1)*t1 * mid_y + t1**2 * end_y
            p2x = (1-t2)**2 * start_x + 2*(1-t2)*t2 * mid_x + t2**2 * end_x
            p2y = (1-t2)**2 * start_y + 2*(1-t2)*t2 * mid_y + t2**2 * end_y
            
            draw.line([(p1x, p1y), (p2x, p2y)], fill=color, width=max(1, int(ray_width)))


def create_favicon(size):
    """Create a favicon at the specified size with transparent background"""
    img = Image.new('RGBA', (size, size), (255, 255, 255, 0))
    draw = ImageDraw.Draw(img)
    
    center = size // 2
    symbol_size = size // 2 - 1
    
    draw_kaula_sun_v3(draw, center, center, symbol_size, KAULA_BLUE)
    
    return img


def create_favicon_with_bg(size, bg_color=WHITE):
    """Create a favicon with solid background"""
    img = Image.new('RGB', (size, size), bg_color)
    draw = ImageDraw.Draw(img)
    
    center = size // 2
    symbol_size = size // 2 - 1
    
    draw_kaula_sun_v3(draw, center, center, symbol_size, KAULA_BLUE)
    
    return img


def main():
    output_dir = '/app/frontend/public'
    
    # Create various sizes
    sizes_transparent = {
        'favicon-16x16.png': 16,
        'favicon-32x32.png': 32,
        'favicon-48x48.png': 48,
    }
    
    sizes_with_bg = {
        'apple-touch-icon.png': 180,
        'logo192.png': 192,
        'logo512.png': 512,
    }
    
    # Create transparent PNGs
    for filename, size in sizes_transparent.items():
        output_path = os.path.join(output_dir, filename)
        img = create_favicon(size)
        img.save(output_path, 'PNG')
        print(f"Created {filename} ({size}x{size})")
    
    # Create PNGs with white background
    for filename, size in sizes_with_bg.items():
        output_path = os.path.join(output_dir, filename)
        img = create_favicon_with_bg(size, WHITE)
        img.save(output_path, 'PNG')
        print(f"Created {filename} ({size}x{size})")
    
    # Create ICO file with multiple sizes
    ico_sizes = [16, 32, 48]
    ico_images = []
    for size in ico_sizes:
        img = create_favicon(size)
        ico_images.append(img)
    
    # Save as ICO
    ico_path = os.path.join(output_dir, 'favicon.ico')
    ico_images[0].save(
        ico_path,
        format='ICO',
        sizes=[(s, s) for s in ico_sizes],
        append_images=ico_images[1:]
    )
    print(f"Created favicon.ico (multi-size: {ico_sizes})")
    
    print("\n✅ All favicon files created with exact KAULA sun symbol!")


if __name__ == '__main__':
    main()
