import React, { useState } from 'react';
import { Download, FileText, File, Search, Filter, BookOpen, Calculator, Keyboard } from 'lucide-react';
import { WhatsAppButton } from '../components/common/WhatsAppButton';
import { Card } from '../components/common/Card';
import { Section } from '../components/common/Section';

export const Downloads: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Resources', count: 24 },
    { id: 'course-materials', name: 'Course Materials', count: 12 },
    { id: 'software-guides', name: 'Software Guides', count: 8 },
    { id: 'practice-sheets', name: 'Practice Sheets', count: 4 }
  ];

  const resources = [
    {
      id: 1,
      title: 'MS-CIT Complete Syllabus',
      description: 'Comprehensive syllabus for Maharashtra State CIT course',
      category: 'course-materials',
      type: 'PDF',
      size: '2.5 MB',
      downloads: 1250,
      icon: <FileText className="h-8 w-8 text-blue-600" />,
      course: 'MS-CIT'
    },
    {
      id: 2,
      title: 'Tally Prime User Guide',
      description: 'Step-by-step guide for Tally Prime accounting software',
      category: 'software-guides',
      type: 'PDF',
      size: '4.2 MB',
      downloads: 890,
      icon: <Calculator className="h-8 w-8 text-green-600" />,
      course: 'Tally'
    },
    {
      id: 3,
      title: 'English Typing Practice Sheets',
      description: 'Practice exercises to improve typing speed and accuracy',
      category: 'practice-sheets',
      type: 'PDF',
      size: '1.8 MB',
      downloads: 2150,
      icon: <Keyboard className="h-8 w-8 text-purple-600" />,
      course: 'Typing'
    },
    {
      id: 4,
      title: 'MS Office 2019 Shortcuts',
      description: 'Essential keyboard shortcuts for Word, Excel, and PowerPoint',
      category: 'software-guides',
      type: 'PDF',
      size: '1.2 MB',
      downloads: 1680,
      icon: <BookOpen className="h-8 w-8 text-orange-600" />,
      course: 'MS Office'
    },
    {
      id: 5,
      title: 'Computer Fundamentals Notes',
      description: 'Basic computer concepts and terminology',
      category: 'course-materials',
      type: 'PDF',
      size: '3.1 MB',
      downloads: 945,
      icon: <FileText className="h-8 w-8 text-indigo-600" />,
      course: 'Computer Basics'
    },
    {
      id: 6,
      title: 'Excel Formulas Cheat Sheet',
      description: 'Most commonly used Excel formulas and functions',
      category: 'software-guides',
      type: 'PDF',
      size: '2.7 MB',
      downloads: 1420,
      icon: <Calculator className="h-8 w-8 text-green-600" />,
      course: 'Excel'
    },
    {
      id: 7,
      title: 'Marathi Typing Practice',
      description: 'Practice sheets for Marathi typing using Devanagari script',
      category: 'practice-sheets',
      type: 'PDF',
      size: '2.3 MB',
      downloads: 680,
      icon: <Keyboard className="h-8 w-8 text-purple-600" />,
      course: 'Marathi Typing'
    },
    {
      id: 8,
      title: 'Internet Safety Guide',
      description: 'Essential tips for safe internet browsing and online security',
      category: 'course-materials',
      type: 'PDF',
      size: '1.9 MB',
      downloads: 520,
      icon: <FileText className="h-8 w-8 text-red-600" />,
      course: 'Internet Safety'
    },
    {
      id: 9,
      title: 'Photoshop Basics Tutorial',
      description: 'Beginner-friendly guide to Adobe Photoshop',
      category: 'software-guides',
      type: 'PDF',
      size: '5.8 MB',
      downloads: 780,
      icon: <BookOpen className="h-8 w-8 text-pink-600" />,
      course: 'Graphics Design'
    },
    {
      id: 10,
      title: 'Government Job Exam Prep',
      description: 'Computer knowledge questions for government job exams',
      category: 'course-materials',
      type: 'PDF',
      size: '3.4 MB',
      downloads: 1890,
      icon: <FileText className="h-8 w-8 text-blue-600" />,
      course: 'Exam Prep'
    },
    {
      id: 11,
      title: 'Windows 10 Tips & Tricks',
      description: 'Hidden features and productivity tips for Windows 10',
      category: 'software-guides',
      type: 'PDF',
      size: '2.1 MB',
      downloads: 1120,
      icon: <BookOpen className="h-8 w-8 text-blue-600" />,
      course: 'Windows'
    },
    {
      id: 12,
      title: 'Basic Programming Concepts',
      description: 'Introduction to programming logic and concepts',
      category: 'course-materials',
      type: 'PDF',
      size: '4.5 MB',
      downloads: 650,
      icon: <FileText className="h-8 w-8 text-purple-600" />,
      course: 'Programming'
    }
  ];

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.course.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const popularResources = resources.filter(resource => resource.downloads > 1000);

  return (
    <div>
      {/* Hero Section */}
      <Section background="gradient" className="pt-8">
        <div className="text-center fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Free
            <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              {' '}Learning Resources
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Download free study materials, practice sheets, and software guides to enhance your learning experience
          </p>
          <WhatsAppButton text="Request Resource" size="lg" />
        </div>
      </Section>

      {/* Search and Filter */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search resources..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name} ({category.count})
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </Section>

      {/* Popular Downloads */}
      <Section background="gray">
        <div className="text-center mb-12 fade-in">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Popular Downloads</h2>
          <p className="text-lg text-gray-600">Most downloaded resources by our students</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {popularResources.slice(0, 6).map((resource, index) => (
            <Card key={resource.id} className="slide-in-up hover-glow" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="icon-bounce">
                    {resource.icon}
                  </div>
                  <div className="text-right">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                      {resource.type}
                    </span>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{resource.title}</h3>
                <p className="text-gray-600 mb-3">{resource.description}</p>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span>{resource.size}</span>
                  <span>{resource.downloads} downloads</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-blue-600">{resource.course}</span>
                  <WhatsAppButton text="Download" size="sm" />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* All Resources */}
      <Section>
        <div className="text-center mb-12 fade-in">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">All Resources</h2>
          <p className="text-lg text-gray-600">
            {filteredResources.length} resources found {selectedCategory !== 'all' && `in ${categories.find(c => c.id === selectedCategory)?.name}`}
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredResources.map((resource, index) => (
            <Card key={resource.id} className="slide-in-up" style={{ animationDelay: `${index * 0.05}s` }}>
              <div className="p-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className="icon-bounce">
                      {resource.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-sm">{resource.title}</h3>
                      <p className="text-xs text-gray-600">{resource.description}</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                  <div className="flex items-center space-x-4">
                    <span>{resource.type}</span>
                    <span>{resource.size}</span>
                  </div>
                  <span>{resource.downloads} downloads</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-blue-600">{resource.course}</span>
                  <WhatsAppButton text="Download" size="sm" className="text-xs px-3 py-1" />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Usage Guidelines */}
      <Section background="gray">
        <div className="text-center mb-12 fade-in">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">How to Use Resources</h2>
          <p className="text-lg text-gray-600">Make the most of our free learning materials</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="text-center fade-in">
            <div className="p-6">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Browse & Search</h3>
              <p className="text-gray-600 text-sm">Find the resources you need using search and filters</p>
            </div>
          </Card>
          <Card className="text-center fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="p-6">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 font-bold">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Download Free</h3>
              <p className="text-gray-600 text-sm">All resources are completely free to download</p>
            </div>
          </Card>
          <Card className="text-center fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="p-6">
              <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-600 font-bold">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Study & Practice</h3>
              <p className="text-gray-600 text-sm">Use materials for self-study and practice</p>
            </div>
          </Card>
          <Card className="text-center fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="p-6">
              <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-orange-600 font-bold">4</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Get Support</h3>
              <p className="text-gray-600 text-sm">Contact us if you need help with any resource</p>
            </div>
          </Card>
        </div>
      </Section>

      {/* Request Resources */}
      <Section background="gradient">
        <div className="text-center fade-in">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Need Something Specific?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Can't find what you're looking for? Request custom resources tailored to your needs
          </p>
          <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg p-8">
            <Download className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-4">Request Resource</h3>
            <ul className="text-left text-gray-600 mb-6 space-y-2">
              <li>• Custom study materials</li>
              <li>• Specific software guides</li>
              <li>• Practice sheets for any topic</li>
              <li>• Course-specific content</li>
            </ul>
            <WhatsAppButton text="Request Resource" size="lg" className="w-full justify-center" />
          </div>
        </div>
      </Section>

      {/* Terms of Use */}
      <Section>
        <div className="max-w-4xl mx-auto text-center fade-in">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Terms of Use</h2>
          <div className="bg-gray-50 rounded-xl p-6 text-left">
            <ul className="space-y-3 text-gray-700">
              <li>• All resources are provided free of charge for educational purposes only</li>
              <li>• Materials are for personal use and cannot be redistributed commercially</li>
              <li>• We strive to keep all content accurate and up-to-date</li>
              <li>• Resources are provided "as is" without warranty</li>
              <li>• Contact us if you find any errors or have suggestions for improvement</li>
            </ul>
          </div>
          <div className="mt-6">
            <WhatsAppButton text="Report Issue" size="lg" variant="secondary" />
          </div>
        </div>
      </Section>
    </div>
  );
};