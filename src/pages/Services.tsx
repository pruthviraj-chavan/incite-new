import React from 'react';
import { Monitor, Users, Network, Cpu, Wrench, Shield, Clock, CheckCircle } from 'lucide-react';
import { WhatsAppButton } from '../components/common/WhatsAppButton';
import { Card } from '../components/common/Card';
import { Section } from '../components/common/Section';

export const Services: React.FC = () => {
  const services = [
    {
      icon: <Monitor className="h-12 w-12 text-blue-600" />,
      title: 'Computer Repair',
      description: 'Professional repair services for laptops, desktops, and all computer hardware',
      features: ['Hardware diagnostics', 'Software troubleshooting', 'Data recovery', 'Virus removal', 'Performance optimization'],
      image: 'https://images.pexels.com/photos/5474294/pexels-photo-5474294.jpeg?auto=compress&cs=tinysrgb&w=500'
    },
    {
      icon: <Users className="h-12 w-12 text-green-600" />,
      title: 'IT Consulting',
      description: 'Expert guidance for businesses to optimize their technology infrastructure',
      features: ['Technology planning', 'System integration', 'Digital transformation', 'Cost optimization', 'Security assessment'],
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=500'
    },
    {
      icon: <Network className="h-12 w-12 text-purple-600" />,
      title: 'Network Setup',
      description: 'Complete network installation and configuration for homes and businesses',
      features: ['LAN/WAN setup', 'WiFi configuration', 'Security implementation', 'Network monitoring', 'Troubleshooting'],
      image: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=500'
    },
    {
      icon: <Cpu className="h-12 w-12 text-orange-600" />,
      title: 'Custom PC Build',
      description: 'Tailored computer systems built to your specific requirements and budget',
      features: ['Gaming PCs', 'Workstations', 'Budget builds', 'Component selection', 'Assembly & testing'],
      image: 'https://images.pexels.com/photos/2399840/pexels-photo-2399840.jpeg?auto=compress&cs=tinysrgb&w=500'
    },
    {
      icon: <Wrench className="h-12 w-12 text-red-600" />,
      title: 'Software Installation',
      description: 'Professional software installation and configuration services',
      features: ['OS installation', 'Software setup', 'Driver installation', 'System optimization', 'License management'],
      image: 'https://images.pexels.com/photos/5052875/pexels-photo-5052875.jpeg?auto=compress&cs=tinysrgb&w=500'
    },
    {
      icon: <Shield className="h-12 w-12 text-indigo-600" />,
      title: 'Cybersecurity',
      description: 'Protect your digital assets with comprehensive security solutions',
      features: ['Antivirus installation', 'Firewall configuration', 'Data backup', 'Security training', 'Incident response'],
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=500'
    }
  ];

  const caseStudies = [
    {
      title: 'Local Business Network Setup',
      client: 'Radhanagari Trading Company',
      description: 'Implemented complete network infrastructure for 20+ workstations with secure file sharing and internet access.',
      results: ['100% uptime achieved', '50% faster file transfers', 'Enhanced security protocols'],
      image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=500'
    },
    {
      title: 'School Computer Lab Setup',
      client: 'Government High School',
      description: 'Set up 30 computer workstations with educational software for MS-CIT training program.',
      results: ['30 computers configured', '200+ students trained', 'Government certification achieved'],
      image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=500'
    },
    {
      title: 'Data Recovery Success',
      client: 'Local CA Office',
      description: 'Successfully recovered 500GB of critical financial data from crashed hard drive.',
      results: ['100% data recovery', '24-hour turnaround', 'Business continuity maintained'],
      image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=500'
    }
  ];

  const testimonials = [
    {
      name: 'Suresh Patil',
      business: 'Patil Electronics',
      text: 'Excellent service! They fixed my computer quickly and at a reasonable price. Highly recommended!',
      rating: 5
    },
    {
      name: 'Priya Sharma',
      business: 'Sharma Medical Store',
      text: 'Professional network setup service. Our billing system now works perfectly across all counters.',
      rating: 5
    },
    {
      name: 'Raj Jadhav',
      business: 'Jadhav Traders',
      text: 'Great IT consulting service. They helped us choose the right software for our inventory management.',
      rating: 5
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <Section background="gradient" className="pt-8">
        <div className="text-center fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Professional
            <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              {' '}IT Services
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Comprehensive technology solutions for individuals and businesses in Radhanagari
          </p>
          <WhatsAppButton text="Get Service Quote" size="lg" />
        </div>
      </Section>

      {/* Services Grid */}
      <Section>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="slide-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="mr-4 icon-bounce">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <WhatsAppButton text="Book Service" size="sm" className="w-full justify-center" />
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Case Studies */}
      <Section background="gray">
        <div className="text-center mb-12 fade-in">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Success Stories</h2>
          <p className="text-lg text-gray-600">See how we've helped local businesses and organizations</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <Card key={index} className="slide-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <img
                src={study.image}
                alt={study.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{study.title}</h3>
                <p className="text-sm text-blue-600 font-medium mb-3">{study.client}</p>
                <p className="text-gray-600 mb-4">{study.description}</p>
                <div className="space-y-2">
                  {study.results.map((result, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      {result}
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Why Choose Our Services */}
      <Section>
        <div className="text-center mb-12 fade-in">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Services?</h2>
          <p className="text-lg text-gray-600">Experience professional IT support with local expertise</p>
        </div>
        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-center fade-in">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Quick Response</h3>
            <p className="text-gray-600">Same-day service for urgent issues</p>
          </div>
          <div className="text-center fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert Team</h3>
            <p className="text-gray-600">Certified professionals with years of experience</p>
          </div>
          <div className="text-center fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Guaranteed Work</h3>
            <p className="text-gray-600">All services backed by our quality guarantee</p>
          </div>
          <div className="text-center fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Monitor className="h-8 w-8 text-orange-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Local Support</h3>
            <p className="text-gray-600">Serving Radhanagari community for years</p>
          </div>
        </div>
      </Section>

      {/* Customer Testimonials */}
      <Section background="gradient">
        <div className="text-center mb-12 fade-in">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
          <p className="text-lg text-gray-600">Real feedback from satisfied customers</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="slide-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <div key={i} className="h-5 w-5 text-yellow-400">★</div>
                  ))}
                </div>
                <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-blue-600">{testimonial.business}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section>
        <div className="text-center fade-in">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Need IT Support?</h2>
          <p className="text-lg text-gray-600 mb-8">Get in touch with our expert team for all your technology needs</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <WhatsAppButton text="Get Free Quote" size="lg" />
            <WhatsAppButton text="Emergency Support" size="lg" variant="secondary" />
          </div>
        </div>
      </Section>
    </div>
  );
};