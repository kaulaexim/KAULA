# KAULA EXIM Website

## Premium Porcelain Slabs, Stone Veneers & Kitchen Sink Exporter Website

This is a professional export business website for KAULA EXIM PRIVATE LTD, featuring:

- 🏠 Home page with hero section
- 📄 About Us - Company information
- 🏺 Porcelain Slabs - Large format tiles (800x1600mm, 800x3200mm, 1200x2400mm, 1600x3200mm)
- 🪨 Stone Veneers - Natural stone cladding
- 🚰 Kitchen Sinks - Fire Clay, Granite Composite, Stainless Steel
- 🚿 Sanitary Ware - Complete bathroom solutions
- ✨ Why KAULA - Export advantages
- 📞 Contact - Inquiry form and location

## Tech Stack

- **Frontend**: React 19, Tailwind CSS, Shadcn UI Components
- **Backend**: FastAPI (Python), MongoDB
- **SEO**: React Helmet Async, Comprehensive Meta Tags
- **Icons**: Lucide React

## Directory Structure

```
kaula-website-export/
├── frontend/                 # React Frontend Application
│   ├── public/              # Static files
│   ├── src/
│   │   ├── components/      # Reusable components (Header, Footer)
│   │   │   └── ui/         # Shadcn UI components
│   │   ├── pages/          # All page components
│   │   ├── App.js          # Main app component
│   │   └── index.css       # Global styles
│   ├── package.json        # Frontend dependencies
│   └── .env                # Frontend environment variables
│
├── backend/                 # FastAPI Backend
│   ├── server.py           # Main API server
│   ├── requirements.txt    # Python dependencies
│   └── .env                # Backend environment variables
│
└── README.md               # This file
```

## Setup Instructions

### Prerequisites
- Node.js 16+ and Yarn
- Python 3.9+
- MongoDB

### Frontend Setup

```bash
cd frontend
yarn install
yarn start
```

The frontend will run on `http://localhost:3000`

### Backend Setup

```bash
cd backend
pip install -r requirements.txt
python server.py
```

The backend API will run on `http://localhost:8001`

### Environment Variables

**Frontend (.env)**
```
REACT_APP_BACKEND_URL=http://localhost:8001
```

**Backend (.env)**
```
MONGO_URL=mongodb://localhost:27017
DB_NAME=kaula_exim
```

## Production Build

To create a production build of the frontend:

```bash
cd frontend
yarn build
```

The optimized production files will be in the `frontend/build` directory.

## Features

### SEO Optimized
- Comprehensive meta tags (title, description, keywords)
- Open Graph tags for social sharing
- Twitter card integration
- Structured data (JSON-LD)
- Geo tags for local SEO
- Canonical URLs

### Responsive Design
- Mobile-first approach
- Tablet and desktop optimized
- Smooth animations and transitions
- Professional color scheme (slate grey, charcoal, white)

### Interactive Elements
- Contact inquiry form with validation
- Product category tabs (Kitchen Sinks)
- Toast notifications
- Smooth scroll navigation
- Image hover effects

## Contact Information

**Company**: KAULA EXIM PRIVATE LTD
**Email**: contact@thekaula.com
**Phone**: +91 98980 67267
**Website**: https://www.thekaula.com
**Address**: Lobby 2, Sakar-9, 13th Floor, Ashram Road, Near City Gold Cinema, Ahmedabad, Gujarat 380009, India

## Product Categories

1. **Porcelain Slabs**
   - Sizes: 800x1600mm, 800x3200mm, 1200x2400mm, 1600x3200mm
   - Thickness: 6mm, 9mm, 12mm, 15mm, 20mm
   - Finishes: Polished, Matt, Textured, Natural

2. **Stone Veneers**
   - Marble, Granite, Slate, Sandstone
   - Interior and exterior applications

3. **Kitchen Sinks**
   - Fine Fire Clay
   - Granite Composite
   - Stainless Steel (304 Grade)

4. **Sanitary Ware**
   - Toilets & Commodes
   - Wash Basins
   - Urinals
   - Bathroom Accessories

## License

This is a proprietary website for KAULA EXIM PRIVATE LTD.

---

Built with ❤️ using modern web technologies.
