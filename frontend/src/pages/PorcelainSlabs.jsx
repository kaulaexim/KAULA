import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Helmet } from 'react-helmet-async';

const PorcelainSlabs = () => {
  const applications = [
    'Flooring - Residential & Commercial',
    'Wall Cladding - Interior & Exterior',
    'Kitchen Countertops',
    'Bathroom Vanities',
    'Table Tops',
    'Facade Applications'
  ];

  const specifications = [
    { label: 'Sizes Available', value: '800x1600mm, 800x3200mm, 1200x2400mm, 1600x3200mm' },
    { label: 'Thickness', value: '6mm, 9mm, 12mm, 15mm, 20mm' },
    { label: 'Finishes', value: 'Polished, Matt, Textured, Natural' },
    { label: 'Edge Options', value: 'Natural, Rectified, Beveled' }
  ];

  const features = [
    'High durability and scratch resistance',
    'Low water absorption rate',
    'Stain and chemical resistant',
    'UV resistant - ideal for outdoor use',
    'Easy to clean and maintain',
    'Heat resistant up to 300°C',
    'Frost resistant',
    'Eco-friendly production'
  ];

  const productImages = [
    'https://customer-assets.emergentagent.com/job_premiumceramics/artifacts/1mpmykh9_Stratum%20Portoro.jpg',
    'https://images.pexels.com/photos/9867320/pexels-photo-9867320.jpeg',
    'https://images.pexels.com/photos/6238607/pexels-photo-6238607.jpeg'
  ];

  return (
    <>
      <Helmet>
        <title>Large Format Porcelain Slabs Exporter India | 800x3200mm, 1200x2400mm | KAULA</title>
        <meta name="description" content="Premium large-format porcelain slabs in sizes 800x1600mm, 800x3200mm, 1200x2400mm, 1600x3200mm. Thickness 6mm, 9mm, 12mm, 15mm, 20mm. Export quality porcelain tiles from India to worldwide." />
        <meta name="keywords" content="porcelain slabs exporter, large format porcelain tiles, 800x3200mm porcelain slabs, porcelain slab manufacturer India, large format tiles, porcelain countertops, porcelain wall cladding" />
        <link rel="canonical" href="https://www.thekaula.com/porcelain-slabs" />
        <meta property="og:title" content="Large Format Porcelain Slabs Exporter | KAULA" />
        <meta property="og:description" content="Premium porcelain slabs in multiple sizes and finishes. Export quality from India." />
        <meta property="og:url" content="https://www.thekaula.com/porcelain-slabs" />
      </Helmet>

      <div className="min-h-screen pt-32">
        {/* Hero Section */}
        <section className="relative py-20 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-5xl font-bold mb-6">Large-Format Porcelain Slabs</h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Premium porcelain slabs offering exceptional durability, stunning aesthetics, and versatile applications for residential and commercial projects.
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
                    alt={`Porcelain Slab ${index + 1}`}
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
                  Our large-format porcelain slabs are engineered to perfection, combining cutting-edge technology with timeless design. These porcelain slabs offer unmatched versatility for contemporary architecture and interior design projects.
                </p>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Manufactured using advanced pressing and firing techniques, our slabs deliver superior strength, minimal porosity, and exceptional surface consistency. Perfect for creating seamless, elegant spaces with minimal grout lines.
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

        {/* CTA Section */}
        <section className="py-20 bg-slate-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">Interested in Our Porcelain Slabs?</h2>
            <p className="text-xl text-slate-300 mb-8">
              Contact us for detailed specifications, samples, and export pricing
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

export default PorcelainSlabs;
