import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';

const KitchenSinks = () => {
  const benefits = [
    'Exceptional durability and strength',
    'Scratch and chip resistant',
    'Heat resistant up to 280°C',
    'Non-porous surface - hygienic and easy to clean',
    'Stain resistant - won\'t absorb colors or odors',
    'Noise reduction technology',
    'UV resistant - colors won\'t fade',
    'Eco-friendly materials'
  ];

  const specifications = [
    { label: 'Material', value: 'Granite Composite (80% Granite + 20% Resin)' },
    { label: 'Bowl Configurations', value: 'Single, Double, 1.5 Bowl' },
    { label: 'Installation', value: 'Undermount, Drop-in, Flush Mount' },
    { label: 'Colors Available', value: 'Black, White, Grey, Beige, Brown' }
  ];

  const useCases = [
    'Residential Kitchens',
    'Commercial Kitchens',
    'Restaurant & Hospitality',
    'Healthcare Facilities',
    'Laboratory Applications',
    'Utility Rooms'
  ];

  const productImages = [
    'https://images.unsplash.com/photo-1597497522150-2f50bffea452?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBraXRjaGVuJTIwc2lua3xlbnwwfHx8fDE3NjczNDg5MjJ8MA&ixlib=rb-4.1.0&q=85',
    'https://images.unsplash.com/photo-1646592491489-ebdf758b9d11?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHwzfHxtb2Rlcm4lMjBraXRjaGVuJTIwc2lua3xlbnwwfHx8fDE3NjczNDg5MjJ8MA&ixlib=rb-4.1.0&q=85',
    'https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg'
  ];

  return (
    <div className="min-h-screen pt-32">
      {/* Hero Section */}
      <section className="relative py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Premium Kitchen Sinks</h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              High-performance granite composite kitchen sinks designed for modern living. Combining beauty, durability, and functionality for residential and commercial applications.
            </p>
          </div>
        </div>
      </section>

      {/* Product Gallery */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {productImages.map((image, index) => (
              <div key={index} className="relative group overflow-hidden rounded-lg shadow-lg h-80">
                <img
                  src={image}
                  alt={`Kitchen Sink ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Description */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Product Overview</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Our granite composite kitchen sinks represent the perfect fusion of natural stone beauty and modern engineering. Made from 80% natural granite and 20% high-grade acrylic resin, these sinks offer unparalleled durability and aesthetic appeal.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                Designed to withstand the demands of daily use, our sinks are resistant to scratches, stains, and heat. The non-porous surface prevents bacterial growth, making them ideal for food preparation areas in both residential and commercial settings.
              </p>
              <Link to="/contact">
                <Button className="bg-slate-900 hover:bg-slate-800">
                  Request Product Catalogue
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Key Benefits</h3>
              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-slate-900 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-600">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
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

      {/* Use Cases */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Ideal For</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <Card key={index} className="p-6 border-slate-200 hover:shadow-lg transition-shadow">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-slate-900 flex-shrink-0" />
                  <span className="text-slate-700 font-medium">{useCase}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Choose Our Kitchen Sinks</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Premium quality meets exceptional value
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-100 mb-4">
                <CheckCircle className="h-8 w-8 text-slate-900" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Lifetime Durability</h3>
              <p className="text-slate-600">Built to last with superior materials and construction</p>
            </div>

            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-100 mb-4">
                <CheckCircle className="h-8 w-8 text-slate-900" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Easy Maintenance</h3>
              <p className="text-slate-600">Simple cleaning with minimal upkeep required</p>
            </div>

            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-100 mb-4">
                <CheckCircle className="h-8 w-8 text-slate-900" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Modern Design</h3>
              <p className="text-slate-600">Contemporary aesthetics that complement any kitchen</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Interested in Our Kitchen Sinks?</h2>
          <p className="text-xl text-slate-300 mb-8">
            Contact us for detailed specifications, samples, and bulk pricing
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
  );
};

export default KitchenSinks;