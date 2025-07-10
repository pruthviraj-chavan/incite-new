import React from 'react';
import { Bot, Sparkles, Zap, Brain, Code, PenTool, MessageSquare, BookOpen } from 'lucide-react';
import { WhatsAppButton } from '../components/common/WhatsAppButton';
import { Card } from '../components/common/Card';
import { Section } from '../components/common/Section';

export const AITools: React.FC = () => {
  const aiTools = [
    {
      name: 'ChatGPT',
      category: 'Conversational AI',
      description: 'Advanced AI chatbot for answering questions, writing, and problem-solving',
      icon: <MessageSquare className="h-8 w-8 text-green-600" />,
      features: ['Natural language processing', 'Code generation', 'Writing assistance', 'Research help'],
      useCase: 'Perfect for students and professionals needing writing help and research assistance',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=500'
    },
    {
      name: 'Google Bard',
      category: 'AI Assistant',
      description: 'Google\'s AI chatbot for creative tasks and information retrieval',
      icon: <Sparkles className="h-8 w-8 text-blue-600" />,
      features: ['Real-time information', 'Creative writing', 'Code assistance', 'Image analysis'],
      useCase: 'Great for current information and creative projects',
      image: 'https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=500'
    },
    {
      name: 'GitHub Copilot',
      category: 'Code Assistant',
      description: 'AI-powered code completion and programming assistant',
      icon: <Code className="h-8 w-8 text-purple-600" />,
      features: ['Code completion', 'Function generation', 'Bug fixing', 'Documentation'],
      useCase: 'Essential for programmers and developers',
      image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=500'
    },
    {
      name: 'Canva AI',
      category: 'Design Tool',
      description: 'AI-powered design assistant for creating graphics and presentations',
      icon: <PenTool className="h-8 w-8 text-pink-600" />,
      features: ['Design generation', 'Logo creation', 'Presentation tools', 'Social media graphics'],
      useCase: 'Perfect for creating professional designs without design experience',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=500'
    },
    {
      name: 'Grammarly',
      category: 'Writing Assistant',
      description: 'AI-powered grammar and writing enhancement tool',
      icon: <BookOpen className="h-8 w-8 text-orange-600" />,
      features: ['Grammar checking', 'Style suggestions', 'Plagiarism detection', 'Tone adjustment'],
      useCase: 'Essential for students and professionals writing reports and documents',
      image: 'https://images.pexels.com/photos/261662/pexels-photo-261662.jpeg?auto=compress&cs=tinysrgb&w=500'
    },
    {
      name: 'Notion AI',
      category: 'Productivity',
      description: 'AI features integrated into the popular productivity platform',
      icon: <Brain className="h-8 w-8 text-indigo-600" />,
      features: ['Content generation', 'Summarization', 'Task automation', 'Database queries'],
      useCase: 'Great for organizing work and automating routine tasks',
      image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=500'
    }
  ];

  const aiForStudents = [
    {
      title: 'Research & Study',
      description: 'Use AI to research topics, summarize content, and create study materials',
      tools: ['ChatGPT', 'Google Bard', 'Notion AI'],
      icon: <BookOpen className="h-6 w-6 text-blue-600" />
    },
    {
      title: 'Writing & Essays',
      description: 'Improve writing quality, check grammar, and get writing suggestions',
      tools: ['Grammarly', 'ChatGPT', 'Notion AI'],
      icon: <PenTool className="h-6 w-6 text-green-600" />
    },
    {
      title: 'Coding & Programming',
      description: 'Get code suggestions, debug errors, and learn programming concepts',
      tools: ['GitHub Copilot', 'ChatGPT', 'Google Bard'],
      icon: <Code className="h-6 w-6 text-purple-600" />
    },
    {
      title: 'Creative Projects',
      description: 'Create presentations, designs, and multimedia content',
      tools: ['Canva AI', 'ChatGPT', 'Notion AI'],
      icon: <Sparkles className="h-6 w-6 text-pink-600" />
    }
  ];

  const tutorials = [
    {
      title: 'Getting Started with ChatGPT',
      description: 'Learn how to use ChatGPT effectively for various tasks',
      duration: '30 minutes',
      level: 'Beginner'
    },
    {
      title: 'AI Tools for Students',
      description: 'Complete guide to AI tools that can help with studies',
      duration: '45 minutes',
      level: 'Beginner'
    },
    {
      title: 'Business Applications of AI',
      description: 'How small businesses can leverage AI tools',
      duration: '60 minutes',
      level: 'Intermediate'
    },
    {
      title: 'Advanced AI Prompting Techniques',
      description: 'Master the art of getting better results from AI tools',
      duration: '90 minutes',
      level: 'Advanced'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <Section background="gradient" className="pt-8">
        <div className="text-center fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            AI Tools for
            <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              {' '}Everyone
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Discover powerful AI tools that can transform your productivity, creativity, and learning experience
          </p>
          <WhatsAppButton text="Learn AI Tools" size="lg" />
        </div>
      </Section>

      {/* AI Tools Grid */}
      <Section>
        <div className="text-center mb-12 fade-in">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Popular AI Tools</h2>
          <p className="text-lg text-gray-600">Explore the most useful AI tools for students and professionals</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {aiTools.map((tool, index) => (
            <Card key={index} className="slide-in-up hover-glow" style={{ animationDelay: `${index * 0.1}s` }}>
              <img
                src={tool.image}
                alt={tool.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{tool.name}</h3>
                  <div className="icon-bounce">
                    {tool.icon}
                  </div>
                </div>
                <p className="text-sm text-blue-600 font-medium mb-2">{tool.category}</p>
                <p className="text-gray-600 mb-4">{tool.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {tool.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <Zap className="h-3 w-3 mr-2 text-yellow-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-gray-50 p-3 rounded-lg mb-4">
                  <p className="text-sm text-gray-700">
                    <strong>Best for:</strong> {tool.useCase}
                  </p>
                </div>

                <WhatsAppButton text="Learn More" size="sm" className="w-full justify-center" />
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* AI for Students */}
      <Section background="gray">
        <div className="text-center mb-12 fade-in">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">AI Tools for Students</h2>
          <p className="text-lg text-gray-600">How students can leverage AI for better learning outcomes</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {aiForStudents.map((category, index) => (
            <Card key={index} className="text-center slide-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="p-6">
                <div className="flex justify-center mb-4 icon-bounce">
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{category.title}</h3>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <div className="text-sm text-gray-500">
                  <p className="font-medium mb-1">Recommended Tools:</p>
                  <p>{category.tools.join(', ')}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Tutorials Section */}
      <Section>
        <div className="text-center mb-12 fade-in">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Free AI Tutorials</h2>
          <p className="text-lg text-gray-600">Learn how to use AI tools effectively with our comprehensive guides</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {tutorials.map((tutorial, index) => (
            <Card key={index} className="slide-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{tutorial.title}</h3>
                <p className="text-gray-600 mb-4">{tutorial.description}</p>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span className="flex items-center">
                    <Bot className="h-4 w-4 mr-1" />
                    {tutorial.duration}
                  </span>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    tutorial.level === 'Beginner' ? 'bg-green-100 text-green-800' :
                    tutorial.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {tutorial.level}
                  </span>
                </div>
                <WhatsAppButton text="Get Tutorial" size="sm" className="w-full justify-center" />
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Benefits Section */}
      <Section background="gradient">
        <div className="text-center mb-12 fade-in">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Learn AI Tools?</h2>
          <p className="text-lg text-gray-600">Discover the benefits of integrating AI into your workflow</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center fade-in">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Increased Productivity</h3>
            <p className="text-gray-600">Complete tasks faster with AI assistance and automation</p>
          </div>
          <div className="text-center fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Brain className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Enhanced Learning</h3>
            <p className="text-gray-600">Learn new concepts and skills more effectively with AI tutoring</p>
          </div>
          <div className="text-center fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Sparkles className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Creative Inspiration</h3>
            <p className="text-gray-600">Generate new ideas and creative solutions with AI assistance</p>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section>
        <div className="text-center fade-in">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Explore AI?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Join our AI tools workshop and discover how to leverage artificial intelligence for your success
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <WhatsAppButton text="Join AI Workshop" size="lg" />
            <WhatsAppButton text="Get Personal Guidance" size="lg" variant="secondary" />
          </div>
        </div>
      </Section>
    </div>
  );
};