import React, { useState } from 'react';
import { Calendar, User, Tag, Search, BookOpen, TrendingUp, Clock, ArrowRight, Sparkles } from 'lucide-react';
import { WhatsAppButton } from '../components/common/WhatsAppButton';
import { Card } from '../components/common/Card';
import { Section } from '../components/common/Section';

export const Blog: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Posts', count: 18, color: 'from-blue-500 to-purple-600' },
    { id: 'tech-tips', name: 'Tech Tips', count: 8, color: 'from-green-500 to-teal-600' },
    { id: 'course-insights', name: 'Course Insights', count: 6, color: 'from-orange-500 to-red-600' },
    { id: 'ai-tools', name: 'AI Tools', count: 4, color: 'from-purple-500 to-pink-600' }
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'Gamifying User Onboarding for Boosting Engagement from Day One with AI',
      excerpt: 'Boost your productivity with these essential keyboard shortcuts for Word, Excel, and PowerPoint.',
      content: 'Master these time-saving shortcuts to work more efficiently...',
      category: 'tech-tips',
      author: 'Rahul Sharma',
      role: 'PRODUCT DESIGNER @INCITE',
      date: '2024-01-15',
      readTime: '5 min read',
      views: 1250,
      image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=500',
      tags: ['MS Office', 'Productivity', 'Shortcuts'],
      featured: true,
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      id: 2,
      title: 'Digital Adoption Platforms Explained: A Comprehensive Guide 2025',
      excerpt: 'A comprehensive guide to preparing for the Maharashtra State Certificate in IT examination.',
      content: 'The MS-CIT exam is your gateway to better job opportunities...',
      category: 'course-insights',
      author: 'Priya Patil',
      role: 'CPO @INCITE',
      date: '2024-01-12',
      readTime: '8 min read',
      views: 2100,
      image: 'https://images.pexels.com/photos/5474294/pexels-photo-5474294.jpeg?auto=compress&cs=tinysrgb&w=500',
      tags: ['MS-CIT', 'Exam Prep', 'Study Guide'],
      featured: true,
      gradient: 'from-green-500 to-teal-600'
    },
    {
      id: 3,
      title: 'The Guide to Creating Personalized User Onboarding Flows That Drive Product Adoption in 2025',
      excerpt: 'Discover how students can leverage ChatGPT for research, writing, and learning.',
      content: 'AI tools like ChatGPT can revolutionize how you study...',
      category: 'ai-tools',
      author: 'Suresh Jadhav',
      role: 'CO-FOUNDER @INCITE',
      date: '2024-01-10',
      readTime: '6 min read',
      views: 1800,
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=500',
      tags: ['ChatGPT', 'AI', 'Learning'],
      featured: true,
      gradient: 'from-purple-500 to-pink-600'
    },
    {
      id: 4,
      title: 'Common Computer Problems and Quick Fixes',
      excerpt: 'Learn to troubleshoot common computer issues before calling for professional help.',
      content: 'Most computer problems have simple solutions...',
      category: 'tech-tips',
      author: 'Rahul Sharma',
      role: 'TECHNICAL LEAD @INCITE',
      date: '2024-01-08',
      readTime: '7 min read',
      views: 950,
      image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=500',
      tags: ['Troubleshooting', 'Computer Repair', 'DIY'],
      featured: false,
      gradient: 'from-orange-500 to-red-600'
    },
    {
      id: 5,
      title: 'Tally Prime vs Tally ERP 9: What\'s New?',
      excerpt: 'Compare the features and improvements in Tally Prime over the previous version.',
      content: 'Tally Prime brings several improvements over ERP 9...',
      category: 'course-insights',
      author: 'Priya Patil',
      role: 'COURSE INSTRUCTOR @INCITE',
      date: '2024-01-05',
      readTime: '5 min read',
      views: 1400,
      image: 'https://images.pexels.com/photos/6863183/pexels-photo-6863183.jpeg?auto=compress&cs=tinysrgb&w=500',
      tags: ['Tally', 'Accounting', 'Software'],
      featured: false,
      gradient: 'from-indigo-500 to-blue-600'
    },
    {
      id: 6,
      title: 'Government Job Opportunities for IT Graduates',
      excerpt: 'Explore various government job opportunities available for IT course graduates.',
      content: 'Government jobs offer stability and growth opportunities...',
      category: 'course-insights',
      author: 'Suresh Jadhav',
      role: 'CAREER COUNSELOR @INCITE',
      date: '2024-01-03',
      readTime: '9 min read',
      views: 2500,
      image: 'https://images.pexels.com/photos/5324869/pexels-photo-5324869.jpeg?auto=compress&cs=tinysrgb&w=500',
      tags: ['Government Jobs', 'Career', 'IT'],
      featured: false,
      gradient: 'from-emerald-500 to-green-600'
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in-up">
              All Blogs
            </h1>
            <p className="text-xl text-gray-600 mb-8 animate-fade-in-up animation-delay-200">
              Explore by categories
            </p>
            
            {/* Category Pills */}
            <div className="flex flex-wrap justify-center gap-3 mb-8 animate-fade-in-up animation-delay-300">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? `bg-gradient-to-r ${category.color} text-white shadow-lg transform scale-105`
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            {/* Search Bar */}
            <div className="max-w-md mx-auto animate-fade-in-up animation-delay-400">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white shadow-sm"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {featuredPosts.map((post, index) => (
              <div key={post.id} className="group animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="relative overflow-hidden rounded-3xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                  {/* Image with Gradient Overlay */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${post.gradient} opacity-20`}></div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${post.gradient}`}>
                        {categories.find(c => c.id === post.category)?.name}
                      </span>
                    </div>

                    {/* Date */}
                    <div className="absolute top-4 right-4 text-white text-sm font-medium">
                      {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
                      {post.title}
                    </h3>

                    {/* Author Info */}
                    <div className="flex items-center mb-6">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-3">
                        <span className="text-white font-semibold text-sm">
                          {post.author.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 text-sm">{post.author}</div>
                        <div className="text-xs text-gray-500">{post.role}</div>
                      </div>
                    </div>

                    {/* Read More Button */}
                    <a
                      href="https://wa.me/919423281767"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center text-transparent bg-clip-text bg-gradient-to-r ${post.gradient} font-semibold hover:underline group`}
                    >
                      Read More
                      <ArrowRight className="h-4 w-4 ml-2 text-gray-400 group-hover:translate-x-1 transition-transform duration-300" />
                    </a>
                  </div>

                  {/* Bottom Border */}
                  <div className={`h-1 bg-gradient-to-r ${post.gradient}`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Posts Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {filteredPosts.length} articles found
              {selectedCategory !== 'all' && ` in ${categories.find(c => c.id === selectedCategory)?.name}`}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <div key={post.id} className="group animate-fade-in-up" style={{ animationDelay: `${index * 50}ms` }}>
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3">
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${post.gradient}`}>
                        {categories.find(c => c.id === post.category)?.name}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 text-sm line-clamp-2">{post.excerpt}</p>

                    {/* Meta Info */}
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                      <div className="flex items-center">
                        <User className="h-3 w-3 mr-1" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 2).map((tag, idx) => (
                        <span key={idx} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Read More */}
                    <a
                      href="https://wa.me/919423281767"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center text-transparent bg-clip-text bg-gradient-to-r ${post.gradient} font-semibold text-sm hover:underline group`}
                    >
                      Read Article
                      <ArrowRight className="h-3 w-3 ml-1 text-gray-400 group-hover:translate-x-1 transition-transform duration-300" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-3xl shadow-xl p-12 animate-fade-in-up">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mb-6">
              <BookOpen className="h-8 w-8 text-white" />
            </div>
            
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Stay Updated</h2>
            <p className="text-lg text-gray-600 mb-8">
              Get the latest tech insights and course updates delivered to your inbox
            </p>
            
            <div className="max-w-md mx-auto">
              <div className="flex gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <a
                  href="https://wa.me/919423281767"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  Subscribe
                </a>
              </div>
              <p className="text-xs text-gray-500 mt-4">
                We respect your privacy. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};