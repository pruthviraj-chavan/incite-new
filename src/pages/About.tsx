import React from 'react';
import { Award, Users, MapPin, Clock, Target, Heart } from 'lucide-react';
import { WhatsAppButton } from '../components/common/WhatsAppButton';
import { Card } from '../components/common/Card';
import { Section } from '../components/common/Section';

export const About: React.FC = () => {
  const stats = [
    { number: '10+', label: 'Years Experience', icon: <Clock className="h-8 w-8 text-blue-600" /> },
    { number: '2000+', label: 'Students Trained', icon: <Users className="h-8 w-8 text-green-600" /> },
    { number: '15+', label: 'Certified Courses', icon: <Award className="h-8 w-8 text-purple-600" /> },
    { number: '500+', label: 'Happy Customers', icon: <Heart className="h-8 w-8 text-red-600" /> }
  ];

  const team = [
    {
      name: 'Rahul Sharma',
      role: 'Founder & Lead Instructor',
      experience: '15+ years',
      expertise: 'MS-CIT, Tally, Network Administration',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      name: 'Priya Patil',
      role: 'Senior Instructor',
      experience: '10+ years',
      expertise: 'Graphics Design, MS Office, Typing',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      name: 'Suresh Jadhav',
      role: 'Technical Support Head',
      experience: '12+ years',
      expertise: 'Hardware Repair, Network Setup, Troubleshooting',
      image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=300'
    }
  ];

  const certifications = [
    {
      name: 'MKCL Authorized Center',
      description: 'Official partner for MS-CIT and KLiCK courses',
      logo: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=200'
    },
    {
      name: 'PM Vishwakarma Partner',
      description: 'Authorized training center for skill development',
      logo: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=200'
    },
    {
      name: 'ISO Certified',
      description: 'Quality management system certification',
      logo: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=200'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <Section background="gradient" className="pt-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About
              <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                {' '}Incite Computers
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Empowering Radhanagari with technology education and IT services since 2014. 
              We are the leading provider of government-recognized computer training and professional IT solutions.
            </p>
            <div className="flex items-center mb-6">
              <MapPin className="h-5 w-5 text-blue-600 mr-2" />
              <span className="text-gray-600">Serving Radhanagari, Maharashtra</span>
            </div>
            <WhatsAppButton text="Connect with Us" size="lg" />
          </div>
          <div className="fade-in" style={{ animationDelay: '0.2s' }}>
            <img
              src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Incite Computers Training Center"
              className="rounded-xl shadow-xl"
            />
          </div>
        </div>
      </Section>

      {/* Stats Section */}
      <Section>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center slide-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="p-6">
                <div className="flex justify-center mb-4 icon-bounce">
                  {stat.icon}
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Mission & Vision */}
      <Section background="gray">
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="fade-in">
            <div className="flex items-center mb-6">
              <Target className="h-8 w-8 text-blue-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
            </div>
            <p className="text-lg text-gray-600 mb-6">
              To provide accessible, quality IT education and professional technology services to the people of Radhanagari, 
              enabling them to build successful careers in the digital age.
            </p>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <Award className="h-5 w-5 text-blue-600 mr-2 mt-1" />
                <span>Deliver government-recognized certification programs</span>
              </li>
              <li className="flex items-start">
                <Users className="h-5 w-5 text-green-600 mr-2 mt-1" />
                <span>Provide personalized attention to every student</span>
              </li>
              <li className="flex items-start">
                <Heart className="h-5 w-5 text-red-600 mr-2 mt-1" />
                <span>Support local community through technology empowerment</span>
              </li>
            </ul>
          </div>
          <div className="fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center mb-6">
              <Heart className="h-8 w-8 text-green-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
            </div>
            <p className="text-lg text-gray-600 mb-6">
              To be the most trusted and preferred destination for IT education and technology services in Radhanagari, 
              bridging the digital divide and creating opportunities for all.
            </p>
            <div className="bg-gradient-to-r from-blue-100 to-green-100 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Core Values</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Excellence:</strong> Commitment to quality in everything we do</li>
                <li>• <strong>Accessibility:</strong> Making technology education affordable for all</li>
                <li>• <strong>Innovation:</strong> Staying current with latest technology trends</li>
                <li>• <strong>Community:</strong> Contributing to local development and growth</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Team Section */}
      <Section>
        <div className="text-center mb-12 fade-in">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Expert Team</h2>
          <p className="text-lg text-gray-600">Experienced professionals dedicated to your success</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <Card key={index} className="text-center slide-in-up hover-lift" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="p-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                <p className="text-sm text-gray-600 mb-3">{member.experience}</p>
                <p className="text-sm text-gray-700">{member.expertise}</p>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Certifications */}
      <Section background="gradient">
        <div className="text-center mb-12 fade-in">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Certifications & Partnerships</h2>
          <p className="text-lg text-gray-600">Officially recognized and certified by government bodies</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <Card key={index} className="text-center slide-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="p-6">
                <img
                  src={cert.logo}
                  alt={cert.name}
                  className="w-16 h-16 mx-auto mb-4 object-cover rounded-lg"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{cert.name}</h3>
                <p className="text-gray-600">{cert.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Community Involvement */}
      <Section>
        <div className="text-center mb-12 fade-in">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Community Involvement</h2>
          <p className="text-lg text-gray-600">Making a positive impact in Radhanagari</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="fade-in">
            <img
              src="https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=500"
              alt="Community Workshop"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Free Digital Literacy Workshops</h3>
              <p className="text-gray-600 mb-4">
                Regular workshops for senior citizens and rural communities to bridge the digital divide
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Monthly workshops for 50+ participants</li>
                <li>• Basic computer skills training</li>
                <li>• Digital payment systems education</li>
                <li>• Government services online access</li>
              </ul>
            </div>
          </Card>
          <Card className="fade-in" style={{ animationDelay: '0.2s' }}>
            <img
              src="https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=500"
              alt="School Partnership"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">School Partnership Program</h3>
              <p className="text-gray-600 mb-4">
                Collaborating with local schools to provide computer education and infrastructure
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Computer lab setup in 5 schools</li>
                <li>• Teacher training programs</li>
                <li>• Student scholarship programs</li>
                <li>• Free educational software licensing</li>
              </ul>
            </div>
          </Card>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="gradient">
        <div className="text-center fade-in">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Join Our Community?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Become part of the Incite Computers family and transform your future with technology
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <WhatsAppButton text="Get Started Today" size="lg" />
            <WhatsAppButton text="Visit Our Center" size="lg" variant="secondary" />
          </div>
        </div>
      </Section>
    </div>
  );
};