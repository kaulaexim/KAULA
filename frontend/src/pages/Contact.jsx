import { useState } from 'react';
import { MapPin, Phone, Mail, Globe, Send } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Card } from '../components/ui/card';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    country: '',
    phone: '',
    productInterest: '',
    quantity: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Mock form submission
    console.log('Form submitted:', formData);
    toast.success('Thank you! Your inquiry has been submitted. We will contact you soon.');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      country: '',
      phone: '',
      productInterest: '',
      quantity: '',
      message: ''
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Us',
      content: 'Lobby 2, Sakar-9, 13th Floor, Ashram Road, Near City Gold Cinema, Ahmedabad, Gujarat 380009, India'
    },
    {
      icon: Phone,
      title: 'Call Us',
      content: '+91 98980 67267',
      link: 'tel:+919898067267'
    },
    {
      icon: Mail,
      title: 'Email Us',
      content: 'contact@thekaula.com',
      link: 'mailto:contact@thekaula.com'
    },
    {
      icon: Globe,
      title: 'Website',
      content: 'www.thekaula.com',
      link: 'https://www.thekaula.com'
    }
  ];

  return (
    <div className="min-h-screen pt-32">
      {/* Hero Section */}
      <section className="relative py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Get in touch with our export team. We're here to help with product inquiries, pricing, samples, and shipping information.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="p-6 border-slate-200 hover:shadow-lg transition-shadow">
                <info.icon className="h-8 w-8 text-slate-900 mb-3" />
                <h3 className="font-semibold text-slate-900 mb-2">{info.title}</h3>
                {info.link ? (
                  <a href={info.link} className="text-slate-600 hover:text-slate-900 text-sm">
                    {info.content}
                  </a>
                ) : (
                  <p className="text-slate-600 text-sm">{info.content}</p>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Send an Inquiry</h2>
            <p className="text-xl text-slate-600">Fill out the form below and we'll get back to you within 24 hours</p>
          </div>

          <Card className="p-8 border-slate-200">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name" className="text-slate-900">Full Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="mt-2 border-slate-300"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-slate-900">Email Address *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="mt-2 border-slate-300"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="country" className="text-slate-900">Country *</Label>
                  <Input
                    id="country"
                    name="country"
                    type="text"
                    value={formData.country}
                    onChange={handleChange}
                    required
                    placeholder="United States"
                    className="mt-2 border-slate-300"
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-slate-900">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 234 567 8900"
                    className="mt-2 border-slate-300"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="productInterest" className="text-slate-900">Product Interest *</Label>
                  <Select
                    value={formData.productInterest}
                    onValueChange={(value) => setFormData({ ...formData, productInterest: value })}
                    required
                  >
                    <SelectTrigger className="mt-2 border-slate-300">
                      <SelectValue placeholder="Select product" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ceramic-slabs">Ceramic Slabs</SelectItem>
                      <SelectItem value="kitchen-sinks">Kitchen Sinks</SelectItem>
                      <SelectItem value="both">Both Products</SelectItem>
                      <SelectItem value="other">Other / General Inquiry</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="quantity" className="text-slate-900">Estimated Quantity</Label>
                  <Input
                    id="quantity"
                    name="quantity"
                    type="text"
                    value={formData.quantity}
                    onChange={handleChange}
                    placeholder="e.g., 1000 sqm or 50 units"
                    className="mt-2 border-slate-300"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="message" className="text-slate-900">Message *</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Please provide details about your requirements, timeline, and any specific questions..."
                  rows={6}
                  className="mt-2 border-slate-300"
                />
              </div>

              <div className="flex justify-center">
                <Button
                  type="submit"
                  size="lg"
                  className="bg-slate-900 hover:bg-slate-800 text-white px-12"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Send Inquiry
                </Button>
              </div>
            </form>
          </Card>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Find Us</h2>
            <p className="text-xl text-slate-600">Our office location in Ahmedabad, Gujarat</p>
          </div>

          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.9876543210987!2d72.5714!3d23.0225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDAxJzIxLjAiTiA3MsKwMzQnMTcuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="KAULA EXIM Location"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;