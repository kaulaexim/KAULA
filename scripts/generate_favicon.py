#!/usr/bin/env python3
"""
Generate favicon files for KAULA EXIM website
Creates the sun-like symbol from the KAULA logo with blue circle and radiating curved elements
"""

from PIL import Image, ImageDraw
import math
import os

# KAULA brand blue color
KAULA_BLUE = (0, 123, 255)  # Bright blue similar to the logo
WHITE = (255, 255, 255)

def draw_kaula_symbol(draw, center_x, center_y, radius, color, bg_color=None):
    """Draw the KAULA sun symbol - central circle with radiating curved elements"""
    
    # Calculate sizes based on radius
    inner_radius = radius * 0.35  # Central circle
    ray_start = radius * 0.45    # Where rays start
    ray_end = radius * 0.95      # Where rays end
    ray_width = radius * 0.12    # Width of each ray
    
    # Draw central circle
    draw.ellipse(
        [center_x - inner_radius, center_y - inner_radius,
         center_x + inner_radius, center_y + inner_radius],
        fill=color
    )
    
    # Draw 8 radiating rays/petals
    num_rays = 8
    for i in range(num_rays):
        angle = (i * 360 / num_rays) - 90  # Start from top
        angle_rad = math.radians(angle)
        
        # Calculate ray points - creating curved petal shapes
        # Start point (near center)
        start_x = center_x + ray_start * math.cos(angle_rad)
        start_y = center_y + ray_start * math.sin(angle_rad)
        
        # End point (outer edge)
        end_x = center_x + ray_end * math.cos(angle_rad)
        end_y = center_y + ray_end * math.sin(angle_rad)
        
        # Draw tapered ray/petal shape
        # Calculate perpendicular offset for width
        perp_angle = angle_rad + math.pi / 2
        
        # Narrower at the end, wider at the start
        start_offset = ray_width * 0.8
        end_offset = ray_width * 0.3
        
        # Create polygon points for the ray
        points = [
            # Start side 1
            (start_x + start_offset * math.cos(perp_angle),
             start_y + start_offset * math.sin(perp_angle)),
            # End side 1
            (end_x + end_offset * math.cos(perp_angle),
             end_y + end_offset * math.sin(perp_angle)),
            # End side 2
            (end_x - end_offset * math.cos(perp_angle),
             end_y - end_offset * math.sin(perp_angle)),
            # Start side 2
            (start_x - start_offset * math.cos(perp_angle),
             start_y - start_offset * math.sin(perp_angle)),
        ]
        
        draw.polygon(points, fill=color)


def create_favicon(size, output_path):
    """Create a favicon at the specified size"""
    # Create image with transparent background
    img = Image.new('RGBA', (size, size), (255, 255, 255, 0))
    draw = ImageDraw.Draw(img)
    
    # Calculate center and radius
    center = size // 2
    radius = size // 2 - 2  # Leave small margin
    
    # Draw the KAULA symbol
    draw_kaula_symbol(draw, center, center, radius, KAULA_BLUE)
    
    return img


def create_favicon_with_background(size, output_path, bg_color=WHITE):
    """Create a favicon with solid background"""
    img = Image.new('RGB', (size, size), bg_color)
    draw = ImageDraw.Draw(img)
    
    center = size // 2
    radius = size // 2 - 2
    
    draw_kaula_symbol(draw, center, center, radius, KAULA_BLUE)
    
    return img


def main():
    output_dir = '/app/frontend/public'
    
    # Create various sizes
    sizes = {
        'favicon-16x16.png': 16,
        'favicon-32x32.png': 32,
        'favicon-48x48.png': 48,
        'apple-touch-icon.png': 180,
        'logo192.png': 192,
        'logo512.png': 512,
    }
    
    for filename, size in sizes.items():
        output_path = os.path.join(output_dir, filename)
        
        # Apple touch icon and larger sizes with white background
        if 'apple' in filename or size >= 180:
            img = create_favicon_with_background(size, output_path, WHITE)
        else:
            img = create_favicon(size, output_path)
        
        img.save(output_path, 'PNG')
        print(f"Created {filename} ({size}x{size})")
    
    # Create ICO file with multiple sizes
    ico_sizes = [16, 32, 48]
    ico_images = []
    for size in ico_sizes:
        img = create_favicon(size, None)
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
    
    print("\nAll favicon files created successfully!")


if __name__ == '__main__':
    main()
