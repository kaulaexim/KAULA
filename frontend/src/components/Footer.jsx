import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <img 
              src="https://customer-assets.emergentagent.com/job_premiumceramics/artifacts/9woqnxtc_LOGO.jpg" 
              alt="KAULA EXIM" 
              className="h-12 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-slate-400 text-sm leading-relaxed">
              KAULA EXIM PRIVATE LTD - Your trusted partner for premium ceramic slabs and kitchen sinks export worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-slate-400 hover:text-white transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/porcelain-slabs" className="text-slate-400 hover:text-white transition-colors text-sm">
                  Porcelain Slabs
                </Link>
              </li>
              <li>
                <Link to="/stone-veneers" className="text-slate-400 hover:text-white transition-colors text-sm">
                  Stone Veneers
                </Link>
              </li>
              <li>
                <Link to="/kitchen-sinks" className="text-slate-400 hover:text-white transition-colors text-sm">
                  Kitchen Sinks
                </Link>
              </li>
              <li>
                <Link to="/sanitary-ware" className="text-slate-400 hover:text-white transition-colors text-sm">
                  Sanitary Ware
                </Link>
              </li>
              <li>
                <Link to="/why-kaula" className="text-slate-400 hover:text-white transition-colors text-sm">
                  Why KAULA
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-400 hover:text-white transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Products</h3>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li>Large Format Porcelain Slabs</li>
              <li>Stone Veneers</li>
              <li>Fine Fire Clay Kitchen Sinks</li>
              <li>Granite Composite Sinks</li>
              <li>Stainless Steel Sinks</li>
              <li>Sanitary Ware Products</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-slate-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-400 text-sm">
                  Lobby 2, Sakar-9, 13th Floor, Ashram Road, Near City Gold Cinema, Ahmedabad, Gujarat 380009, India
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-slate-400" />
                <a href="tel:+919898067267" className="text-slate-400 hover:text-white transition-colors text-sm">
                  +91 98980 67267
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-slate-400" />
                <a href="mailto:contact@thekaula.com" className="text-slate-400 hover:text-white transition-colors text-sm">
                  contact@thekaula.com
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Globe className="h-5 w-5 text-slate-400" />
                <a href="https://www.thekaula.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors text-sm">
                  www.thekaula.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-slate-400 text-sm">
              © {new Date().getFullYear()} KAULA EXIM PRIVATE LTD. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-slate-400">
              <span>Export Excellence</span>
              <span>•</span>
              <span>Global Quality Standards</span>
              <span>•</span>
              <span>Trusted Worldwide</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;