import React from 'react';
import { Clock, Users, Award, BookOpen } from 'lucide-react';
import { WhatsAppButton } from '../components/common/WhatsAppButton';
import { Card } from '../components/common/Card';
import { Section } from '../components/common/Section';

export const Courses: React.FC = () => {
  const courses = [
    {
      title: 'MS-CIT',
      subtitle: 'Maharashtra State Certificate in Information Technology',
      duration: '2 months',
      students: '500+ enrolled',
      description: 'Comprehensive course covering MS Office, internet basics, and AI tools. Government recognized certificate.',
      image: 'https://images.pexels.com/photos/5474294/pexels-photo-5474294.jpeg?auto=compress&cs=tinysrgb&w=500',
      syllabus: ['MS Word', 'MS Excel', 'MS PowerPoint', 'Internet & Email', 'AI Tools Introduction']
    },
    {
      title: 'Tally',
      subtitle: 'Complete Accounting Software Training',
      duration: '1-2 months',
      students: '300+ enrolled',
      description: 'Master Tally software for accounting, inventory management, and GST compliance.',
      image: 'https://images.pexels.com/photos/6863183/pexels-photo-6863183.jpeg?auto=compress&cs=tinysrgb&w=500',
      syllabus: ['Tally Basics', 'Accounting Entries', 'GST Implementation', 'Inventory Management', 'Reports & Analysis']
    },
    {
      title: 'English Typing',
      subtitle: 'Professional Typing Skills',
      duration: 'Flexible',
      students: '400+ enrolled',
      description: 'Develop fast and accurate typing skills for professional and government jobs.',
      image: 'https://images.pexels.com/photos/270640/pexels-photo-270640.jpeg?auto=compress&cs=tinysrgb&w=500',
      syllabus: ['Keyboard Familiarization', 'Speed Building', 'Accuracy Training', 'Professional Documents', 'Certification Test']
    },
    {
      title: 'Marathi Typing',
      subtitle: 'Regional Language Typing',
      duration: 'Flexible',
      students: '250+ enrolled',
      description: 'Master Marathi typing for Maharashtra government jobs and local employment.',
      image: 'https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=500',
      syllabus: ['Marathi Keyboard Layout', 'Devanagari Script', 'Speed Development', 'Government Forms', 'Official Documents']
    },
    {
      title: 'PM Vishwakarma',
      subtitle: 'Skill Development Program',
      duration: 'Varies',
      students: '200+ enrolled',
      description: 'Government scheme for skill development and self-employment opportunities.',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=500',
      syllabus: ['Basic IT Skills', 'Digital Marketing', 'Financial Literacy', 'Entrepreneurship', 'Certification']
    },
    {
      title: 'KLiCK',
      subtitle: 'Knowledge, Literacy, and IT Concepts for Kids',
      duration: 'Varies',
      students: '150+ enrolled',
      description: 'Basic IT literacy program designed for young learners.',
      image: 'https://images.pexels.com/photos/4144096/pexels-photo-4144096.jpeg?auto=compress&cs=tinysrgb&w=500',
      syllabus: ['Computer Basics', 'Paint & Games', 'Typing Skills', 'Internet Safety', 'Digital Citizenship']
    },
    {
      title: 'CCC',
      subtitle: 'Course on Computer Concepts',
      duration: '2 months',
      students: '300+ enrolled',
      description: 'Alternative to MS-CIT for central government jobs, covering essential computer concepts.',
      image: 'https://images.pexels.com/photos/5052875/pexels-photo-5052875.jpeg?auto=compress&cs=tinysrgb&w=500',
      syllabus: ['Computer Fundamentals', 'Operating Systems', 'MS Office', 'Internet & Email', 'Database Basics']
    },
    {
      title: 'Advanced Excel',
      subtitle: 'Data Analysis & Spreadsheet Mastery',
      duration: '1 month',
      students: '180+ enrolled',
      description: 'Master advanced Excel features for data analysis and business intelligence.',
      image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=500',
      syllabus: ['Advanced Formulas', 'Pivot Tables', 'Data Visualization', 'Macros & VBA', 'Business Analytics']
    },
    {
      title: 'Graphics Design',
      subtitle: 'Creative Design with Photoshop',
      duration: 'Varies',
      students: '120+ enrolled',
      description: 'Learn professional graphics design using Adobe Photoshop and other creative tools.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=500',
      syllabus: ['Photoshop Basics', 'Logo Design', 'Photo Editing', 'Print Design', 'Portfolio Creation']
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <Section background="gradient" className="pt-8">
        <div className="text-center fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Government-Recognized
            <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              {' '}IT Training Courses
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Build your career with certified training programs recognized by Maharashtra and Central Government
          </p>
          <WhatsAppButton text="Start Your Journey" size="lg" />
        </div>
      </Section>

      {/* Courses Grid */}
      <Section>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <Card key={index} className="slide-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-900">{course.title}</h3>
                  <Award className="h-5 w-5 text-yellow-500" />
                </div>
                <p className="text-sm text-blue-600 font-medium mb-3">{course.subtitle}</p>
                <p className="text-gray-600 mb-4">{course.description}</p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    <span>{course.students}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">What You'll Learn:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {course.syllabus.slice(0, 3).map((item, idx) => (
                      <li key={idx} className="flex items-center">
                        <BookOpen className="h-3 w-3 mr-2 text-blue-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <WhatsAppButton text="Enroll Now" size="sm" className="w-full justify-center" />
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Why Choose Us */}
      <Section background="gray">
        <div className="text-center mb-12 fade-in">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Courses?</h2>
          <p className="text-lg text-gray-600">Experience the difference with our comprehensive training approach</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center fade-in">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Government Recognized</h3>
            <p className="text-gray-600">All our courses are officially recognized by Maharashtra and Central Government</p>
          </div>
          <div className="text-center fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Instructors</h3>
            <p className="text-gray-600">Learn from experienced professionals with years of teaching experience</p>
          </div>
          <div className="text-center fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Practical Training</h3>
            <p className="text-gray-600">Hands-on learning with real-world projects and practical applications</p>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="gradient">
        <div className="text-center fade-in">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Start Your Learning Journey?</h2>
          <p className="text-lg text-gray-600 mb-8">Join thousands of students who have transformed their careers with our training</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <WhatsAppButton text="Enroll Today" size="lg" />
            <WhatsAppButton text="Get Course Details" size="lg" variant="secondary" />
          </div>
        </div>
      </Section>
    </div>
  );
};