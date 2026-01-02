import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Ceramic Slabs', path: '/ceramic-slabs' },
    { name: 'Stone Veneers', path: '/stone-veneers' },
    { name: 'Kitchen Sinks', path: '/kitchen-sinks' },
    { name: 'Sanitary Ware', path: '/sanitary-ware' },
    { name: 'Why KAULA', path: '/why-kaula' },
    { name: 'Contact', path: '/contact' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200">
      {/* Top Bar */}
      <div className="bg-slate-800 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <a href="tel:+919898067267" className="flex items-center space-x-2 hover:text-slate-300 transition-colors">
                <Phone className="h-4 w-4" />
                <span>+91 98980 67267</span>
              </a>
              <a href="mailto:p.zala@thekaula.com" className="flex items-center space-x-2 hover:text-slate-300 transition-colors">
                <Mail className="h-4 w-4" />
                <span>p.zala@thekaula.com</span>
              </a>
            </div>
            <div className="hidden sm:block text-slate-300">
              Premium Ceramic Slabs & Kitchen Sink Exporter
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="https://customer-assets.emergentagent.com/job_premiumceramics/artifacts/9woqnxtc_LOGO.jpg" 
              alt="KAULA EXIM" 
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium transition-colors relative group ${
                  isActive(item.path)
                    ? 'text-slate-900'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {item.name}
                <span
                  className={`absolute -bottom-1 left-0 w-full h-0.5 bg-slate-900 transition-transform origin-left ${
                    isActive(item.path) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}
                />
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link to="/contact">
              <Button className="bg-slate-900 hover:bg-slate-800 text-white">
                Request Catalogue
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-slate-600 hover:text-slate-900 hover:bg-slate-100"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white">
          <nav className="px-4 py-4 space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-3 rounded-md text-base font-medium transition-colors ${
                  isActive(item.path)
                    ? 'bg-slate-100 text-slate-900'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
              <Button className="w-full mt-2 bg-slate-900 hover:bg-slate-800 text-white">
                Request Catalogue
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;