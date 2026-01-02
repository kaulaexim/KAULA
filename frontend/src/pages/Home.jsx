import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Globe, Package, Award, TrendingUp } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';

const Home = () => {
  const features = [
    {
      icon: Globe,
      title: 'Global Export Excellence',
      description: 'Serving international markets with premium ceramic products'
    },
    {
      icon: Package,
      title: 'Export-Ready Packaging',
      description: 'Professional packaging ensuring safe global delivery'
    },
    {
      icon: Award,
      title: 'Quality Certified',
      description: 'International quality standards and certifications'
    },
    {
      icon: TrendingUp,
      title: 'Competitive Pricing',
      description: 'Direct manufacturer pricing for bulk orders'
    }
  ];

  const stats = [
    { number: '15+', label: 'Years Experience' },
    { number: '50+', label: 'Countries Served' },
    { number: '10000+', label: 'Projects Completed' },
    { number: '100%', label: 'Client Satisfaction' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1703838634804-5fb39159f94e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwyfHxsdXh1cnklMjBjZXJhbWljJTIwdGlsZXMlMjBzaG93cm9vbXxlbnwwfHx8fDE3NjczNDg5MDJ8MA&ixlib=rb-4.1.0&q=85"
            alt="Ceramic Showroom"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/70" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            Premium Porcelain Slabs &<br />Kitchen Sinks Exporter
          </h1>
          <p className="text-xl md:text-2xl text-slate-200 mb-8 max-w-3xl mx-auto">
            KAULA EXIM - Your trusted partner for world-class ceramic products. Serving architects, builders, and distributors globally.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100 text-lg px-8">
                Request Catalogue
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/ceramic-slabs">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8">
                View Products
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-slate-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Why Choose KAULA EXIM</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Leading the ceramic export industry with excellence, reliability, and innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 hover:shadow-xl transition-shadow duration-300 border-slate-200">
                <feature.icon className="h-12 w-12 text-slate-900 mb-4" />
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Product Range</h2>
            <p className="text-xl text-slate-600">Premium quality products for global markets</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Porcelain Slabs */}
            <div className="relative group overflow-hidden rounded-lg shadow-lg h-96">
              <img
                src="https://images.unsplash.com/photo-1737110623339-a31471ad130d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwxfHxsYXJnZSUyMGZvcm1hdCUyMHRpbGVzfGVufDB8fHx8MTc2NzM0ODkxN3ww&ixlib=rb-4.1.0&q=85"
                alt="Porcelain Slabs"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent flex flex-col justify-end p-8">
                <h3 className="text-3xl font-bold text-white mb-2">Porcelain Slabs</h3>
                <p className="text-slate-200 mb-4">Large-format porcelain slabs for floors, walls, and countertops</p>
                <Link to="/porcelain-slabs">
                  <Button className="bg-white text-slate-900 hover:bg-slate-100">
                    Explore Range
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Stone Veneers */}
            <div className="relative group overflow-hidden rounded-lg shadow-lg h-96">
              <img
                src="https://images.pexels.com/photos/6238607/pexels-photo-6238607.jpeg"
                alt="Stone Veneers"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent flex flex-col justify-end p-8">
                <h3 className="text-3xl font-bold text-white mb-2">Stone Veneers</h3>
                <p className="text-slate-200 mb-4">Natural stone veneers for elegant wall cladding and facades</p>
                <Link to="/stone-veneers">
                  <Button className="bg-white text-slate-900 hover:bg-slate-100">
                    Explore Range
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Kitchen Sinks */}
            <div className="relative group overflow-hidden rounded-lg shadow-lg h-96">
              <img
                src="https://images.unsplash.com/photo-1597497522150-2f50bffea452?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBraXRjaGVuJTIwc2lua3xlbnwwfHx8fDE3NjczNDg5MjJ8MA&ixlib=rb-4.1.0&q=85"
                alt="Kitchen Sinks"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent flex flex-col justify-end p-8">
                <h3 className="text-3xl font-bold text-white mb-2">Kitchen Sinks</h3>
                <p className="text-slate-200 mb-4">Fire clay, granite composite, and stainless steel sinks</p>
                <Link to="/kitchen-sinks">
                  <Button className="bg-white text-slate-900 hover:bg-slate-100">
                    View Collection
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Sanitary Ware */}
            <div className="relative group overflow-hidden rounded-lg shadow-lg h-96">
              <img
                src="https://images.pexels.com/photos/3741317/pexels-photo-3741317.jpeg"
                alt="Sanitary Ware"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent flex flex-col justify-end p-8">
                <h3 className="text-3xl font-bold text-white mb-2">Sanitary Ware</h3>
                <p className="text-slate-200 mb-4">Complete range of premium bathroom fixtures and fittings</p>
                <Link to="/sanitary-ware">
                  <Button className="bg-white text-slate-900 hover:bg-slate-100">
                    View Collection
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Order?</h2>
          <p className="text-xl text-slate-300 mb-8">
            Contact us today for product catalogues, pricing, and export inquiries
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100 text-lg px-8">
              Get in Touch
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;