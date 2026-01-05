import { CheckCircle, Target, Eye, Award } from 'lucide-react';
import { Card } from '../components/ui/card';

const About = () => {
  const values = [
    {
      icon: Award,
      title: 'Quality Excellence',
      description: 'We maintain the highest quality standards in every product we export'
    },
    {
      icon: Target,
      title: 'Customer Focus',
      description: 'Our clients success is our priority, delivering value at every step'
    },
    {
      icon: CheckCircle,
      title: 'Reliability',
      description: 'Consistent quality, timely delivery, and dependable partnerships'
    },
    {
      icon: Eye,
      title: 'Innovation',
      description: 'Continuously evolving our product range to meet market demands'
    }
  ];

  return (
    <div className="min-h-screen pt-32">
      {/* Hero Section */}
      <section className="relative py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">About KAULA EXIM</h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              A trusted name in ceramic exports, delivering premium quality products to international markets for over 15 years.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  KAULA EXIM PRIVATE LTD is a leading merchant exporter specializing in premium ceramic slabs and kitchen sinks. Based in Ahmedabad, Gujarat, we have built a strong reputation in the international trade market through our commitment to quality and customer satisfaction.
                </p>
                <p>
                  Our extensive product portfolio includes large-format porcelain slabs, ceramic tiles, and granite composite kitchen sinks, all sourced from India's finest manufacturers. We work closely with architects, designers, builders, and distributors across the globe.
                </p>
                <p>
                  With a deep understanding of global quality standards and export regulations, we ensure seamless delivery of products to our international clients. Our team of experts provides comprehensive support from product selection to final delivery.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://customer-assets.emergentagent.com/job_premiumceramics/artifacts/89q6rade_WhatsApp%20Image%202026-01-05%20at%202.49.27%20PM.jpeg"
                alt="Premium Stone Veneers - Natural Stone Cladding"
                className="rounded-lg shadow-xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8 border-slate-200">
              <div className="flex items-center mb-4">
                <Target className="h-8 w-8 text-slate-900 mr-3" />
                <h3 className="text-2xl font-bold text-slate-900">Our Mission</h3>
              </div>
              <p className="text-slate-600 leading-relaxed">
                To provide world-class ceramic products to international markets, establishing long-term partnerships built on trust, quality, and reliability. We aim to be the preferred export partner for ceramic solutions globally.
              </p>
            </Card>

            <Card className="p-8 border-slate-200">
              <div className="flex items-center mb-4">
                <Eye className="h-8 w-8 text-slate-900 mr-3" />
                <h3 className="text-2xl font-bold text-slate-900">Our Vision</h3>
              </div>
              <p className="text-slate-600 leading-relaxed">
                To become a globally recognized brand in ceramic exports, known for excellence in product quality, customer service, and innovative solutions. We envision expanding our reach to serve every continent with premium Indian ceramics.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-slate-600">The principles that guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-100 mb-4">
                  <value.icon className="h-8 w-8 text-slate-900" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{value.title}</h3>
                <p className="text-slate-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/7222235/pexels-photo-7222235.jpeg"
                alt="Quality Control"
                className="rounded-lg shadow-xl w-full h-96 object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Commitment to Excellence</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-white flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Quality Assurance</h4>
                    <p className="text-slate-300">Every product undergoes rigorous quality checks before export</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-white flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Export Expertise</h4>
                    <p className="text-slate-300">Deep knowledge of international regulations and standards</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-white flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Customer Support</h4>
                    <p className="text-slate-300">Dedicated team providing end-to-end assistance</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-white flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Timely Delivery</h4>
                    <p className="text-slate-300">Efficient logistics ensuring on-time global shipments</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;