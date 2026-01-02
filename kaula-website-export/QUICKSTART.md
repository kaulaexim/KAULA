# KAULA EXIM Website - Quick Start Guide

## 📦 What You Have

Your complete KAULA EXIM website package includes:
- ✅ Full React frontend with 8 pages
- ✅ FastAPI backend with MongoDB integration
- ✅ SEO optimized with meta tags
- ✅ All source code and configurations
- ✅ Professional design with cool color scheme

## 🚀 Quick Start (Local Development)

### Step 1: Extract Files
```bash
tar -xzf kaula-website-export.tar.gz
cd kaula-website-export
```

### Step 2: Install MongoDB (if not installed)
**Ubuntu/Debian:**
```bash
sudo apt-get update
sudo apt-get install mongodb
sudo systemctl start mongodb
```

**MacOS:**
```bash
brew install mongodb-community
brew services start mongodb-community
```

**Windows:**
Download from https://www.mongodb.com/try/download/community

### Step 3: Setup Backend
```bash
cd backend
pip install -r requirements.txt
python server.py
```
Backend will run on: http://localhost:8001

### Step 4: Setup Frontend (New Terminal)
```bash
cd frontend
yarn install
yarn start
```
Frontend will run on: http://localhost:3000

## 📋 File Locations

**Important Files:**
- Frontend Pages: `frontend/src/pages/`
- Components: `frontend/src/components/`
- Backend API: `backend/server.py`
- Styles: `frontend/src/index.css` & `frontend/src/App.css`

## 🌐 Pages Included

1. **Home** (/) - Landing page with hero section
2. **About Us** (/about) - Company information
3. **Porcelain Slabs** (/porcelain-slabs) - Product details with specs
4. **Stone Veneers** (/stone-veneers) - Stone veneer products
5. **Kitchen Sinks** (/kitchen-sinks) - 3 types with tabs
6. **Sanitary Ware** (/sanitary-ware) - Bathroom products
7. **Why KAULA** (/why-kaula) - Export advantages
8. **Contact** (/contact) - Inquiry form and map

## 🔧 Configuration Files

**Frontend Environment** (`frontend/.env`):
```env
REACT_APP_BACKEND_URL=http://localhost:8001
```

**Backend Environment** (`backend/.env`):
```env
MONGO_URL=mongodb://localhost:27017
DB_NAME=kaula_exim
```

## 📦 Production Deployment

### Build Frontend
```bash
cd frontend
yarn build
```
Output: `frontend/build/` folder contains production files

### Deploy Options:
1. **Vercel** (Recommended for frontend)
2. **Netlify** 
3. **AWS S3 + CloudFront**
4. **Heroku** (For backend)
5. **DigitalOcean**

## 🎨 Customization

### Change Colors
Edit `frontend/src/index.css` (Tailwind config section)

### Add New Pages
1. Create file in `frontend/src/pages/NewPage.jsx`
2. Add route in `frontend/src/App.js`
3. Add navigation link in `frontend/src/components/Header.jsx`

### Update Company Info
Edit these files:
- Header: `frontend/src/components/Header.jsx`
- Footer: `frontend/src/components/Footer.jsx`
- SEO: `frontend/public/index.html`

## 📝 Key Features

✅ **SEO Optimized**
- Meta tags, Open Graph, Twitter Cards
- Structured Data (JSON-LD)
- Optimized titles and descriptions

✅ **Responsive Design**
- Mobile, Tablet, Desktop layouts
- Modern UI with Shadcn components

✅ **Contact System**
- Inquiry form with validation
- Product selection dropdown
- Toast notifications

## 🆘 Troubleshooting

**Port Already in Use:**
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Kill process on port 8001
lsof -ti:8001 | xargs kill -9
```

**Module Not Found:**
```bash
cd frontend
rm -rf node_modules yarn.lock
yarn install
```

**MongoDB Connection Error:**
```bash
# Check if MongoDB is running
sudo systemctl status mongodb

# Start MongoDB
sudo systemctl start mongodb
```

## 📞 Support

For technical support regarding KAULA EXIM:
- **Email**: contact@thekaula.com
- **Phone**: +91 98980 67267

## 📄 License

Proprietary - KAULA EXIM PRIVATE LTD

---

**Website Ready for Production! 🎉**
