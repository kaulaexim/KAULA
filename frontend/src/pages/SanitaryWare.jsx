import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Helmet } from 'react-helmet-async';

const SanitaryWare = () => {
  const productCategories = [
    {
      name: 'Toilets & Commodes',
      description: 'Modern water closets including wall-hung, floor-mounted, and smart toilets with advanced features'
    },
    {
      name: 'Wash Basins',
      description: 'Premium ceramic basins in various styles - countertop, wall-mounted, pedestal, and vessel basins'
    },
    {
      name: 'Urinals',
      description: 'Commercial-grade urinals with water-saving technology for public and commercial installations'
    },
    {
      name: 'Bathroom Accessories',
      description: 'Complete range of faucets, showers, accessories, and fittings to complement your bathroom'
    }
  ];

  const features = [
    'Premium quality vitreous china',
    'Water-efficient designs',
    'Easy to clean glazed surface',
    'Stain and odor resistant',
    'Contemporary and classic designs',
    'Durable and long-lasting',
    'International quality standards',
    'Eco-friendly manufacturing'
  ];

  const specifications = [
    { label: 'Material', value: 'Vitreous China / Ceramic' },
    { label: 'Finish', value: 'High-Gloss White, Ivory' },
    { label: 'Standards', value: 'ISO Certified' },
    { label: 'Water Efficiency', value: 'Dual Flush Systems Available' }
  ];

  const applications = [
    'Residential Bathrooms',
    'Commercial Buildings',
    'Hotels & Hospitality',
    'Hospitals & Healthcare',
    'Educational Institutions',
    'Shopping Malls',
    'Airports & Transit',
    'Public Facilities'
  ];

  return (
    <>
      <Helmet>
        <title>Premium Sanitary Ware Exporter India | Toilets, Wash Basins, Bathroom Fixtures | KAULA</title>
        <meta name="description" content="Leading exporter of premium sanitary ware from India. High-quality toilets, wash basins, urinals, and bathroom accessories. ISO certified, water-efficient designs for residential and commercial projects." />
        <meta name="keywords" content="sanitary ware exporter, bathroom fixtures India, toilets exporter, wash basins supplier, ceramic sanitary ware, bathroom accessories, vitreous china, water closet exporter" />
        <link rel="canonical" href="https://www.thekaula.com/sanitary-ware" />
        <meta property="og:title" content="Premium Sanitary Ware Exporter India | KAULA" />
        <meta property="og:description" content="High-quality sanitary ware - toilets, wash basins, and bathroom fixtures from India's leading exporter." />
        <meta property="og:url" content="https://www.thekaula.com/sanitary-ware" />
      </Helmet>

      <div className="min-h-screen pt-32">
        {/* Hero Section */}
        <section className="relative py-20 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-5xl font-bold mb-6">Premium Sanitary Ware</h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Complete range of high-quality sanitary ware products for residential and commercial projects. Combining functionality, hygiene, and contemporary design.
              </p>
            </div>
          </div>
        </section>

        {/* Product Categories */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Sanitary Ware Collection</h2>
              <p className="text-xl text-slate-600">Comprehensive solutions for all your bathroom needs</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {productCategories.map((category, index) => (
                <Card key={index} className="p-8 border-slate-200 hover:shadow-xl transition-shadow">
                  <h3 className="text-2xl font-semibold text-slate-900 mb-3">{category.name}</h3>
                  <p className="text-slate-600 leading-relaxed">{category.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Product Overview */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Premium Quality Sanitary Products</h2>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Our sanitary ware collection is manufactured using premium vitreous china and advanced ceramic technology. Each product undergoes rigorous quality control to ensure durability, hygiene, and aesthetic excellence.
                </p>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Designed for both residential and commercial applications, our products meet international quality standards while offering water efficiency and easy maintenance.
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
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Perfect For</h2>
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

        {/* Why Choose Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Choose Our Sanitary Ware</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Quality, hygiene, and design excellence
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-100 mb-4">
                  <CheckCircle className="h-8 w-8 text-slate-900" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Hygienic Design</h3>
                <p className="text-slate-600">Non-porous glazed surface prevents bacterial growth</p>
              </div>

              <div className="text-center p-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-100 mb-4">
                  <CheckCircle className="h-8 w-8 text-slate-900" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Water Efficient</h3>
                <p className="text-slate-600">Dual flush and low-flow options for water conservation</p>
              </div>

              <div className="text-center p-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-100 mb-4">
                  <CheckCircle className="h-8 w-8 text-slate-900" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Easy Maintenance</h3>
                <p className="text-slate-600">Stain-resistant surface for effortless cleaning</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-slate-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">Interested in Our Sanitary Ware?</h2>
            <p className="text-xl text-slate-300 mb-8">
              Contact us for product catalogues, specifications, and bulk export pricing
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

export default SanitaryWare;
