import { Package, Shield, Truck, DollarSign, HeadphonesIcon, Globe } from 'lucide-react';
import { Card } from '../components/ui/card';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const WhyKaula = () => {
  const reasons = [
    {
      icon: Package,
      title: 'Export-Ready Packaging',
      description: 'Professional packaging designed for international shipping. Each product is carefully packed to ensure damage-free delivery across continents. We use quality materials and proven methods to protect your investment.'
    },
    {
      icon: Shield,
      title: 'Quality Control',
      description: 'Rigorous quality checks at every stage. Our experienced team inspects each product before export to ensure it meets international standards. We maintain detailed quality documentation for complete transparency.'
    },
    {
      icon: Truck,
      title: 'Reliable Logistics',
      description: 'Partnerships with leading global freight forwarders. We handle all documentation, customs clearance, and shipping coordination. Track your shipments in real-time with our logistics support team.'
    },
    {
      icon: DollarSign,
      title: 'Competitive Pricing',
      description: 'Direct manufacturer relationships mean better prices for you. We offer volume discounts and flexible payment terms for international buyers. Get premium quality without premium prices.'
    },
    {
      icon: HeadphonesIcon,
      title: 'Dedicated Support',
      description: 'Experienced export team available to assist you throughout the process. From product selection to delivery, we provide personalized support. Multi-lingual team ready to help in your preferred language.'
    },
    {
      icon: Globe,
      title: 'Global Experience',
      description: 'Over 15 years of international export experience. We understand different market requirements and regulations. Successfully serving clients in 50+ countries across all continents.'
    }
  ];

  const certifications = [
    'ISO 9001:2015 Quality Management',
    'Export Excellence Certification',
    'Indian Ceramic Standards Compliance',
    'International Building Code Approved',
    'Environmental Management Standards',
    'Product Safety Certifications'
  ];

  const process = [
    {
      step: '01',
      title: 'Inquiry & Consultation',
      description: 'Share your requirements and we provide detailed product information, specifications, and pricing.'
    },
    {
      step: '02',
      title: 'Sample & Approval',
      description: 'Request samples to evaluate quality. We ship samples worldwide for your assessment.'
    },
    {
      step: '03',
      title: 'Order Confirmation',
      description: 'Finalize order details, quantities, and payment terms. We provide proforma invoice for your approval.'
    },
    {
      step: '04',
      title: 'Quality Inspection',
      description: 'Products undergo thorough quality checks. Pre-shipment inspection reports available upon request.'
    },
    {
      step: '05',
      title: 'Export Documentation',
      description: 'We handle all export documents including certificates of origin, packing lists, and invoices.'
    },
    {
      step: '06',
      title: 'Shipping & Delivery',
      description: 'Professional packaging and coordinated shipping to your destination port with tracking details.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Why Choose KAULA | Export Excellence & Quality Assurance | KAULA</title>
        <meta name="description" content="Discover why KAULA is your trusted partner for ceramic exports. Export-ready packaging, quality control, reliable logistics, competitive pricing, dedicated support, and 15+ years of global experience." />
        <meta name="keywords" content="why choose KAULA, ceramic export partner, export excellence, quality assurance, ceramic exporter India, reliable export partner, international ceramic supplier" />
        <link rel="canonical" href="https://www.thekaula.com/why-kaula" />
        <meta property="og:title" content="Why Choose KAULA | Export Excellence" />
        <meta property="og:description" content="Your trusted partner for hassle-free ceramic exports. Quality products, reliable service, competitive pricing." />
        <meta property="og:url" content="https://www.thekaula.com/why-kaula" />
      </Helmet>

      <div className="min-h-screen pt-32">
        {/* Hero Section */}
        <section className="relative py-20 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-5xl font-bold mb-6">Why Choose KAULA</h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Your trusted partner for hassle-free ceramic exports. Quality products, reliable service, and competitive pricing for global markets.
              </p>
            </div>
          </div>
        </section>

        {/* Main Reasons */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Six Reasons to Partner With Us</h2>
              <p className="text-xl text-slate-600">Excellence at every step of your export journey</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {reasons.map((reason, index) => (
                <Card key={index} className="p-8 border-slate-200 hover:shadow-xl transition-shadow duration-300">
                  <reason.icon className="h-12 w-12 text-slate-900 mb-4" />
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">{reason.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{reason.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Export Process */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Export Process</h2>
              <p className="text-xl text-slate-600">Simple, transparent, and efficient</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {process.map((item, index) => (
                <div key={index} className="relative">
                  <div className="bg-white p-8 rounded-lg border border-slate-200 h-full">
                    <div className="text-5xl font-bold text-slate-200 mb-4">{item.step}</div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">{item.title}</h3>
                    <p className="text-slate-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Certifications & Standards</h2>
              <p className="text-xl text-slate-600">Committed to quality and compliance</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <Card key={index} className="p-6 border-slate-200 hover:shadow-lg transition-shadow">
                  <div className="flex items-center space-x-3">
                    <Shield className="h-6 w-6 text-slate-900 flex-shrink-0" />
                    <span className="text-slate-700 font-medium">{cert}</span>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-slate-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Start Your Export Journey?</h2>
            <p className="text-xl text-slate-300 mb-8">
              Join hundreds of satisfied clients worldwide who trust KAULA for their ceramic needs
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100 text-lg px-8">
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default WhyKaula;
