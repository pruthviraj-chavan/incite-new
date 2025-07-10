import React from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import { WhatsAppButton } from '../components/common/WhatsAppButton';
import { Card } from '../components/common/Card';
import { Section } from '../components/common/Section';

export const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6 text-blue-600" />,
      title: 'Address',
      details: ['Incite Computers Radhanagari', 'Main Road, Radhanagari', 'Kolhapur, Maharashtra 416209']
    },
    {
      icon: <Phone className="h-6 w-6 text-green-600" />,
      title: 'Phone',
      details: ['+91 9423281767', '+91 9423281767']
    },
    {
      icon: <Mail className="h-6 w-6 text-purple-600" />,
      title: 'Email',
      details: ['info@incitecomputer.com', 'support@incitecomputer.com']
    },
    {
      icon: <Clock className="h-6 w-6 text-orange-600" />,
      title: 'Hours',
      details: ['Monday - Saturday: 9:00 AM - 7:00 PM', 'Sunday: 10:00 AM - 4:00 PM']
    }
  ];

  const faqs = [
    {
      question: 'What are the fees for government courses?',
      answer: 'All government-recognized courses like MS-CIT, Tally, and Typing have very affordable fees. Contact us for current pricing and available discounts.'
    },
    {
      question: 'Do you provide job placement assistance?',
      answer: 'Yes, we provide career guidance and job placement assistance for all our certified students. We have partnerships with local businesses and organizations.'
    },
    {
      question: 'Can I get my computer repaired while taking a course?',
      answer: 'Absolutely! We offer comprehensive computer repair services along with our training programs. Student discounts are available.'
    },
    {
      question: 'Do you offer online classes?',
      answer: 'We primarily focus on hands-on, in-person training for the best learning experience. However, we do provide online support and resources.'
    },
    {
      question: 'What documents do I need for course enrollment?',
      answer: 'You need a valid ID proof (Aadhar card), educational certificates, and passport-size photographs. Specific requirements vary by course.'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <Section background="gradient" className="pt-8">
        <div className="text-center fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get in
            <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              {' '}Touch
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Ready to start your journey with technology? We're here to help you every step of the way.
          </p>
          <WhatsAppButton text="Chat with Us Now" size="lg" />
        </div>
      </Section>

      {/* Contact Information */}
      <Section>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((info, index) => (
            <Card key={index} className="text-center slide-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="p-6">
                <div className="flex justify-center mb-4 icon-bounce">
                  {info.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{info.title}</h3>
                <div className="space-y-1">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600 text-sm">{detail}</p>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Contact Form & Map */}
      <Section background="gray">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="fade-in">
            <div className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Your last name"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  >
                    <option value="">Select a subject</option>
                    <option value="course-inquiry">Course Inquiry</option>
                    <option value="service-request">Service Request</option>
                    <option value="product-inquiry">Product Inquiry</option>
                    <option value="general">General Question</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>
                <WhatsAppButton text="Send Message" size="lg" className="w-full justify-center" />
              </form>
            </div>
          </Card>

          {/* Map */}
          <div className="fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden h-full">
              <div className="p-6 bg-gradient-to-r from-blue-600 to-green-600 text-white">
                <h3 className="text-xl font-bold mb-2">Visit Our Center</h3>
                <p className="text-blue-100">Located in the heart of Radhanagari</p>
              </div>
              <div className="p-6">
                <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center mb-6">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600">Interactive Map</p>
                    <p className="text-sm text-gray-500">Incite Computers Radhanagari</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-blue-600 mt-1" />
                    <div>
                      <p className="font-medium text-gray-900">Main Road, Radhanagari</p>
                      <p className="text-sm text-gray-600">Kolhapur, Maharashtra 416209</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-green-600" />
                    <p className="text-gray-900">+91 9423281767</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-purple-600" />
                    <p className="text-gray-900">info@incitecomputer.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section>
        <div className="text-center mb-12 fade-in">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600">Quick answers to common questions</p>
        </div>
        <div className="max-w-3xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <Card key={index} className="slide-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </Card>
          ))}
        </div>
        <div className="text-center mt-8">
          <WhatsAppButton text="Ask More Questions" size="lg" variant="secondary" />
        </div>
      </Section>

      {/* Quick Contact Options */}
      <Section background="gradient">
        <div className="text-center fade-in">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Get Instant Support</h2>
          <p className="text-lg text-gray-600 mb-8">Choose the best way to reach us</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <WhatsAppButton text="WhatsApp Chat" size="lg" variant="green" />
            <WhatsAppButton text="Call Now" size="lg" variant="secondary" />
            <WhatsAppButton text="Visit Center" size="lg" variant="primary" />
          </div>
        </div>
      </Section>
    </div>
  );
};