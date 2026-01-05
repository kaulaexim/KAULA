import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Helmet } from 'react-helmet-async';

const KitchenSinks = () => {
  const sinkTypes = [
    {
      id: 'fireclay',
      name: 'Fine Fire Clay Kitchen Sink',
      description: 'Premium fire clay sinks offering timeless elegance and exceptional durability. Handcrafted with traditional manufacturing techniques for a luxurious finish.',
      features: [
        'Handcrafted fine fire clay construction',
        'High-gloss glazed finish',
        'Scratch and stain resistant',
        'Non-porous surface - hygienic',
        'Heat resistant up to 350°C',
        'Classic farmhouse and undermount styles',
        'Resistant to thermal shock',
        'Easy to clean and maintain'
      ],
      specs: [
        { label: 'Material', value: 'Fine Fire Clay with Glazed Finish' },
        { label: 'Bowl Options', value: 'Single, Double Bowl' },
        { label: 'Installation', value: 'Farmhouse, Undermount' },
        { label: 'Colors', value: 'White, Biscuit, Almond' }
      ]
    },
    {
      id: 'granite',
      name: 'Granite Composite Kitchen Sink',
      description: 'High-performance granite composite sinks combining 80% natural granite with advanced resin technology. Perfect blend of beauty and functionality.',
      features: [
        'Exceptional durability and strength',
        'Scratch and chip resistant',
        'Heat resistant up to 280°C',
        'Non-porous surface - prevents bacterial growth',
        'Stain resistant - won\'t absorb colors',
        'Noise reduction technology',
        'UV resistant - colors won\'t fade',
        'Eco-friendly materials'
      ],
      specs: [
        { label: 'Material', value: '80% Granite + 20% Acrylic Resin' },
        { label: 'Bowl Options', value: 'Single, Double, 1.5 Bowl' },
        { label: 'Installation', value: 'Undermount, Drop-in, Flush Mount' },
        { label: 'Colors', value: 'Black, White, Grey, Beige, Brown, Mocha' }
      ]
    },
    {
      id: 'stainless',
      name: 'Stainless Steel Kitchen Sink',
      description: 'Professional-grade stainless steel sinks perfect for modern kitchens. Durable, hygienic, and designed for heavy-duty use in residential and commercial settings.',
      features: [
        'Premium 304 stainless steel construction',
        'Corrosion and rust resistant',
        'Heat resistant - safe for hot pots',
        'Hygienic non-porous surface',
        'Sound dampening pads reduce noise',
        'Modern contemporary design',
        'Easy to clean and sanitize',
        'Long-lasting durability'
      ],
      specs: [
        { label: 'Material', value: '304 Grade Stainless Steel' },
        { label: 'Gauge', value: '16, 18, 20 Gauge Options' },
        { label: 'Bowl Options', value: 'Single, Double, Triple Bowl' },
        { label: 'Finish', value: 'Satin, Mirror Polish, Brushed' }
      ]
    }
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
    'https://customer-assets.emergentagent.com/job_premiumceramics/artifacts/9iwafziv_BS331810SBP%20Sink%20Test%202.jpg',
    'https://customer-assets.emergentagent.com/job_premiumceramics/artifacts/86nr6mw9_780500%2015%20Longran%20Ultra%20PG_3.jpg',
    'https://images.unsplash.com/photo-1646592491489-ebdf758b9d11?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHwzfHxtb2Rlcm4lMjBraXRjaGVuJTIwc2lua3xlbnwwfHx8fDE3NjczNDg5MjJ8MA&ixlib=rb-4.1.0&q=85'
  ];

  return (
    <>
      <Helmet>
        <title>Fire Clay Kitchen Sink Exporter India | Burly Sink, Fine Fire Clay Sink, Farmhouse Sink | KAULA EXIM</title>
        <meta name="description" content="Buy premium Fine Fire Clay Kitchen Sinks, Burly Sinks, Granite Composite & Stainless Steel Sinks from India's leading exporter. Handcrafted fireclay farmhouse sinks. ISO certified quality. Global shipping available." />
        <meta name="keywords" content="fire clay kitchen sink, burly sink, fine fire clay sink, fireclay sink, farmhouse fire clay sink, fire clay sink India, burly kitchen sink, handcrafted fire clay sink, fire clay sink manufacturer, fire clay sink exporter, fireclay farmhouse sink, granite composite sink, stainless steel sink, kitchen sink India, kitchen sink exporter" />
        <link rel="canonical" href="https://www.thekaula.com/kitchen-sinks" />
        <meta property="og:title" content="Fire Clay Kitchen Sink & Burly Sink Exporter | KAULA EXIM" />
        <meta property="og:description" content="Premium Fine Fire Clay Kitchen Sinks and Burly Sinks from India. Handcrafted quality, global shipping." />
        <meta property="og:image" content="https://customer-assets.emergentagent.com/job_premiumceramics/artifacts/9iwafziv_BS331810SBP%20Sink%20Test%202.jpg" />
      </Helmet>

      <div className="min-h-screen pt-32">
      {/* Hero Section */}
      <section className="relative py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Fire Clay Kitchen Sink & Burly Sink Exporter India</h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Premium Fine Fire Clay Kitchen Sinks, Burly Sinks, Granite Composite Sinks & Stainless Steel Sinks. Handcrafted fireclay farmhouse sinks with exceptional durability. ISO certified manufacturer exporting worldwide.
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

      {/* Sink Types Tabs */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Kitchen Sink Collection</h2>
            <p className="text-xl text-slate-600">Choose from three premium sink types to match your needs</p>
          </div>

          <Tabs defaultValue="fireclay" className="w-full">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 mb-8 h-auto">
              <TabsTrigger value="fireclay" className="text-base py-3">Fine Fire Clay</TabsTrigger>
              <TabsTrigger value="granite" className="text-base py-3">Granite Composite</TabsTrigger>
              <TabsTrigger value="stainless" className="text-base py-3">Stainless Steel</TabsTrigger>
            </TabsList>

            {sinkTypes.map((sink) => (
              <TabsContent key={sink.id} value={sink.id} className="mt-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  <div>
                    <h3 className="text-3xl font-bold text-slate-900 mb-4">{sink.name}</h3>
                    <p className="text-slate-600 leading-relaxed mb-6">
                      {sink.description}
                    </p>
                    <Link to="/contact">
                      <Button className="bg-slate-900 hover:bg-slate-800">
                        Request Product Catalogue
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>

                  <div>
                    <h4 className="text-2xl font-bold text-slate-900 mb-6">Key Features</h4>
                    <div className="space-y-3">
                      {sink.features.map((feature, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <CheckCircle className="h-6 w-6 text-slate-900 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Specifications */}
                <div className="mt-12">
                  <h4 className="text-2xl font-bold text-slate-900 mb-6 text-center">Technical Specifications</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {sink.specs.map((spec, index) => (
                      <Card key={index} className="p-6 border-slate-200">
                        <h5 className="font-semibold text-slate-900 mb-2">{spec.label}</h5>
                        <p className="text-slate-600 text-sm">{spec.value}</p>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-white">
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

      {/* CTA Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Find Your Perfect Kitchen Sink</h2>
          <p className="text-xl text-slate-300 mb-8">
            Contact us for detailed specifications, samples, and bulk pricing for all sink types
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