import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Helmet } from 'react-helmet-async';

const StoneVeneers = () => {
  const features = [
    'Authentic natural stone appearance',
    'Lightweight compared to natural stone',
    'Easy and fast installation',
    'Cost-effective alternative to full stone',
    'Durable and weather-resistant',
    'Low maintenance requirements',
    'Wide range of colors and textures',
    'Suitable for interior and exterior use'
  ];

  const specifications = [
    { label: 'Thickness', value: '15mm - 25mm' },
    { label: 'Stone Types', value: 'Marble, Granite, Slate, Sandstone' },
    { label: 'Finish Options', value: 'Natural, Polished, Honed, Textured' },
    { label: 'Panel Sizes', value: 'Custom sizes available' }
  ];

  const applications = [
    'Interior Wall Cladding',
    'Exterior Facade',
    'Feature Walls',
    'Fireplace Surrounds',
    'Column Cladding',
    'Accent Walls',
    'Commercial Buildings',
    'Residential Projects'
  ];

  const stoneTypes = [
    {
      name: 'Marble Veneers',
      description: 'Elegant marble veneers offering luxury aesthetics with easier installation'
    },
    {
      name: 'Granite Veneers',
      description: 'Durable granite stone veneers perfect for high-traffic areas'
    },
    {
      name: 'Slate Veneers',
      description: 'Natural slate texture with contemporary appeal for modern designs'
    },
    {
      name: 'Sandstone Veneers',
      description: 'Warm and rustic sandstone appearance for traditional settings'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Natural Stone Veneers Exporter India | Marble, Granite Stone Cladding | KAULA</title>
        <meta name="description" content="Premium natural stone veneers - marble, granite, slate, sandstone. Lightweight stone cladding for interior walls, exterior facades. Export quality from India." />
        <meta name="keywords" content="stone veneers, natural stone cladding, marble veneers, granite veneers, stone veneer exporter India, wall cladding, stone facade, interior stone veneer" />
        <link rel="canonical" href="https://www.thekaula.com/stone-veneers" />
      </Helmet>

      <div className="min-h-screen pt-32">
      {/* Hero Section */}
      <section className="relative py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Premium Stone Veneers</h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Transform your spaces with authentic natural stone veneers. Combining the beauty of natural stone with modern installation convenience and cost-effectiveness.
            </p>
          </div>
        </div>
      </section>

      {/* Product Gallery */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative group overflow-hidden rounded-lg shadow-lg h-80 md:col-span-2">
              <img
                src="https://customer-assets.emergentagent.com/job_premiumceramics/artifacts/89q6rade_WhatsApp%20Image%202026-01-05%20at%202.49.27%20PM.jpeg"
                alt="Premium Natural Stone Veneers - Marble and Granite Stone Cladding"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="relative group overflow-hidden rounded-lg shadow-lg h-80">
              <img
                src="https://customer-assets.emergentagent.com/job_premiumceramics/artifacts/89q6rade_WhatsApp%20Image%202026-01-05%20at%202.49.27%20PM.jpeg"
                alt="Stone Veneer Wall Cladding for Interior and Exterior"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>
        </div>
      </section>

      {/* Product Overview */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">What Are Stone Veneers?</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Stone veneers are thin slices of natural stone that provide the authentic look and feel of full-thickness stone at a fraction of the weight and cost. Perfect for both interior and exterior applications.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                Our stone veneers are precision-cut from premium natural stone blocks, maintaining all the natural beauty and variation of the source material while offering superior ease of installation and structural advantages.
              </p>
              <Link to="/contact">
                <Button className="bg-slate-900 hover:bg-slate-800">
                  Request Product Catalogue
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Key Features</h3>
              <div className="space-y-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-slate-900 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-600">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stone Types */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Available Stone Types</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {stoneTypes.map((stone, index) => (
              <Card key={index} className="p-8 border-slate-200 hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-semibold text-slate-900 mb-3">{stone.name}</h3>
                <p className="text-slate-600 leading-relaxed">{stone.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Technical Specifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specifications.map((spec, index) => (
              <Card key={index} className="p-6 border-slate-200">
                <h4 className="font-semibold text-slate-900 mb-2">{spec.label}</h4>
                <p className="text-slate-600 text-sm">{spec.value}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Applications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {applications.map((application, index) => (
              <Card key={index} className="p-6 border-slate-200 hover:shadow-lg transition-shadow">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-slate-900 flex-shrink-0" />
                  <span className="text-slate-700 font-medium">{application}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Choose Stone Veneers</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              The perfect balance of beauty, cost, and practicality
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-100 mb-4">
                <CheckCircle className="h-8 w-8 text-slate-900" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Cost-Effective</h3>
              <p className="text-slate-600">30-50% less expensive than full-thickness natural stone</p>
            </div>

            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-100 mb-4">
                <CheckCircle className="h-8 w-8 text-slate-900" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Lightweight</h3>
              <p className="text-slate-600">Easier installation with reduced structural requirements</p>
            </div>

            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-100 mb-4">
                <CheckCircle className="h-8 w-8 text-slate-900" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Authentic Beauty</h3>
              <p className="text-slate-600">Real natural stone with all its unique characteristics</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Interested in Stone Veneers?</h2>
          <p className="text-xl text-slate-300 mb-8">
            Contact us for samples, detailed specifications, and export pricing
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100 text-lg px-8">
              Send Inquiry
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
      </div>
    </>
  );
};

export default StoneVeneers;