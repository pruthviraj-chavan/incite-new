import React from 'react';
import { Link } from 'react-router-dom';
import { Monitor, Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

export const Footer: React.FC = () => {
  const whatsappUrl = 'https://wa.me/919423281767';

  return (
    <footer className="bg-gradient-to-r from-blue-900 to-green-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Monitor className="h-8 w-8 text-blue-300" />
              <div>
                <h3 className="text-lg font-bold">Incite Computers</h3>
                <p className="text-sm text-blue-300">Radhanagari</p>
              </div>
            </div>
            <p className="text-sm text-gray-300">
              Transform your future with technology and skills in Radhanagari. 
              Leading provider of IT training and computer services.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-300 hover:text-white transition-colors hover-scale">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-blue-300 hover:text-white transition-colors hover-scale">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-blue-300 hover:text-white transition-colors hover-scale">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/courses" className="text-gray-300 hover:text-white transition-colors">Courses</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/store" className="text-gray-300 hover:text-white transition-colors">Store</Link></li>
              <li><Link to="/ai-tools" className="text-gray-300 hover:text-white transition-colors">AI Tools</Link></li>
              <li><Link to="/radhanagari-shops" className="text-gray-300 hover:text-white transition-colors">Local Shops</Link></li>
            </ul>
          </div>

          {/* Courses */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Popular Courses</h4>
            <ul className="space-y-2 text-sm">
              <li><span className="text-gray-300">MS-CIT</span></li>
              <li><span className="text-gray-300">Tally</span></li>
              <li><span className="text-gray-300">Typing</span></li>
              <li><span className="text-gray-300">PM Vishwakarma</span></li>
              <li><span className="text-gray-300">Graphics Design</span></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Info</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-blue-300" />
                <span className="text-gray-300">Radhanagari, Maharashtra</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-blue-300" />
                <span className="text-gray-300">+91 9423281767</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-blue-300" />
                <span className="text-gray-300">info@incitecomputer.com</span>
              </div>
            </div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full transition-all duration-200 hover-scale text-sm"
            >
              <Phone className="h-4 w-4" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-8 pt-8 text-center text-sm text-gray-300">
          <p>&copy; 2024 Incite Computers Radhanagari. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};