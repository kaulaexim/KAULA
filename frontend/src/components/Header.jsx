import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef(null);

  const navigation = [
    { name: 'Home', path: '/' },
    { 
      name: 'About Us', 
      path: '/about',
      dropdown: [
        { name: 'About Us', path: '/about' },
        { name: 'Why KAULA', path: '/why-kaula' }
      ]
    },
    { name: 'Porcelain Slabs', path: '/porcelain-slabs' },
    { name: 'Stone Veneers', path: '/stone-veneers' },
    { name: 'Kitchen Sinks', path: '/kitchen-sinks' },
    { name: 'Sanitary Ware', path: '/sanitary-ware' },
    { name: 'Contact', path: '/contact' }
  ];

  const isActive = (path) => location.pathname === path;
  const isAboutActive = () => location.pathname === '/about' || location.pathname === '/why-kaula';

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsAboutDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

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
              <a href="mailto:contact@thekaula.com" className="flex items-center space-x-2 hover:text-slate-300 transition-colors">
                <Mail className="h-4 w-4" />
                <span>contact@thekaula.com</span>
              </a>
            </div>
            <div className="hidden sm:block text-slate-300">
              Premium Porcelain Slabs & Kitchen Sink Exporter
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
              src="https://customer-assets.emergentagent.com/job_premiumceramics/artifacts/id7kq5a3_KAULA_Logo_Transparent_HighRes.png" 
              alt="KAULA" 
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              item.dropdown ? (
                <div key={item.name} className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setIsAboutDropdownOpen(!isAboutDropdownOpen)}
                    className={`text-sm font-medium transition-colors relative group flex items-center ${
                      isAboutActive()
                        ? 'text-slate-900'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {item.name}
                    <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${isAboutDropdownOpen ? 'rotate-180' : ''}`} />
                    <span
                      className={`absolute -bottom-1 left-0 w-full h-0.5 bg-slate-900 transition-transform origin-left ${
                        isAboutActive() ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                      }`}
                    />
                  </button>
                  
                  {/* Dropdown Menu */}
                  {isAboutDropdownOpen && (
                    <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-slate-200 py-2 z-50">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.path}
                          onClick={() => setIsAboutDropdownOpen(false)}
                          className={`block px-4 py-2 text-sm transition-colors ${
                            isActive(subItem.path)
                              ? 'bg-slate-100 text-slate-900 font-medium'
                              : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                          }`}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
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
              )
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
              item.dropdown ? (
                <div key={item.name}>
                  <div className="px-4 py-2 text-sm font-semibold text-slate-900">
                    {item.name}
                  </div>
                  {item.dropdown.map((subItem) => (
                    <Link
                      key={subItem.name}
                      to={subItem.path}
                      onClick={() => setIsMenuOpen(false)}
                      className={`block px-8 py-2 rounded-md text-base font-medium transition-colors ${
                        isActive(subItem.path)
                          ? 'bg-slate-100 text-slate-900'
                          : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                      }`}
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              ) : (
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
              )
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
