import React, { useState } from 'react';
import { MapPin, Phone, Clock, Star, Search, Filter, Plus } from 'lucide-react';
import { WhatsAppButton } from '../components/common/WhatsAppButton';
import { Card } from '../components/common/Card';
import { Section } from '../components/common/Section';

export const RadhanagariShops: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Shops', count: 24 },
    { id: 'electronics', name: 'Electronics', count: 6 },
    { id: 'grocery', name: 'Grocery', count: 8 },
    { id: 'medical', name: 'Medical', count: 4 },
    { id: 'clothing', name: 'Clothing', count: 3 },
    { id: 'restaurants', name: 'Restaurants', count: 3 }
  ];

  const shops = [
    {
      id: 1,
      name: 'Patil Electronics',
      category: 'electronics',
      description: 'Complete range of electronics and home appliances',
      address: 'Main Road, Radhanagari',
      phone: '+91 9876543210',
      hours: '9:00 AM - 8:00 PM',
      rating: 4.5,
      reviews: 45,
      image: 'https://images.pexels.com/photos/1149831/pexels-photo-1149831.jpeg?auto=compress&cs=tinysrgb&w=500',
      specialties: ['Mobile Phones', 'Laptops', 'Home Appliances', 'Accessories'],
      featured: true
    },
    {
      id: 2,
      name: 'Sharma Medical Store',
      category: 'medical',
      description: 'Licensed pharmacy with all medicines and healthcare products',
      address: 'Near Bus Stand, Radhanagari',
      phone: '+91 9876543211',
      hours: '8:00 AM - 10:00 PM',
      rating: 4.8,
      reviews: 62,
      image: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=500',
      specialties: ['Prescription Medicines', 'OTC Drugs', 'Healthcare Products', 'First Aid'],
      featured: true
    },
    {
      id: 3,
      name: 'Jadhav Grocery Store',
      category: 'grocery',
      description: 'Fresh groceries and daily essentials at affordable prices',
      address: 'Market Area, Radhanagari',
      phone: '+91 9876543212',
      hours: '7:00 AM - 9:00 PM',
      rating: 4.3,
      reviews: 38,
      image: 'https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=500',
      specialties: ['Fresh Vegetables', 'Dairy Products', 'Packaged Foods', 'Household Items'],
      featured: true
    },
    {
      id: 4,
      name: 'Modern Tailoring',
      category: 'clothing',
      description: 'Custom tailoring and alterations for all occasions',
      address: 'Church Road, Radhanagari',
      phone: '+91 9876543213',
      hours: '10:00 AM - 7:00 PM',
      rating: 4.6,
      reviews: 28,
      image: 'https://images.pexels.com/photos/1148957/pexels-photo-1148957.jpeg?auto=compress&cs=tinysrgb&w=500',
      specialties: ['Custom Tailoring', 'Alterations', 'Traditional Wear', 'Formal Wear'],
      featured: false
    },
    {
      id: 5,
      name: 'Sai Hardware',
      category: 'electronics',
      description: 'Hardware tools and electrical supplies',
      address: 'Industrial Area, Radhanagari',
      phone: '+91 9876543214',
      hours: '9:00 AM - 6:00 PM',
      rating: 4.2,
      reviews: 19,
      image: 'https://images.pexels.com/photos/1143748/pexels-photo-1143748.jpeg?auto=compress&cs=tinysrgb&w=500',
      specialties: ['Hardware Tools', 'Electrical Supplies', 'Plumbing', 'Construction Materials'],
      featured: false
    },
    {
      id: 6,
      name: 'Radhanagari Restaurant',
      category: 'restaurants',
      description: 'Authentic Maharashtrian cuisine and snacks',
      address: 'Main Road, Radhanagari',
      phone: '+91 9876543215',
      hours: '11:00 AM - 10:00 PM',
      rating: 4.4,
      reviews: 52,
      image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=500',
      specialties: ['Maharashtrian Thali', 'Snacks', 'Sweets', 'Fresh Juices'],
      featured: false
    }
  ];

  const filteredShops = shops.filter(shop => {
    const matchesSearch = shop.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         shop.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || shop.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredShops = shops.filter(shop => shop.featured);

  return (
    <div>
      {/* Hero Section */}
      <Section background="gradient" className="pt-8">
        <div className="text-center fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Radhanagari
            <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              {' '}Local Shops
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Discover and support local businesses in our community. Find everything you need right here in Radhanagari.
          </p>
          <WhatsAppButton text="Add Your Shop" size="lg" />
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
                placeholder="Search shops..."
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

      {/* Featured Shops */}
      <Section background="gray">
        <div className="text-center mb-12 fade-in">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Local Businesses</h2>
          <p className="text-lg text-gray-600">Highlighting the best shops in our community</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {featuredShops.map((shop, index) => (
            <Card key={shop.id} className="slide-in-up hover-glow" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="relative">
                <img
                  src={shop.image}
                  alt={shop.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-medium">
                  Featured
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{shop.name}</h3>
                <p className="text-gray-600 mb-3">{shop.description}</p>
                
                <div className="flex items-center mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-4 w-4 ${i < Math.floor(shop.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-600">{shop.rating} ({shop.reviews} reviews)</span>
                </div>

                <div className="space-y-2 mb-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>{shop.address}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>{shop.hours}</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 mr-2" />
                    <span>{shop.phone}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Specialties:</h4>
                  <div className="flex flex-wrap gap-2">
                    {shop.specialties.slice(0, 3).map((specialty, idx) => (
                      <span key={idx} className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                <WhatsAppButton text="Contact Shop" size="sm" className="w-full justify-center" />
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* All Shops Directory */}
      <Section>
        <div className="text-center mb-12 fade-in">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Shop Directory</h2>
          <p className="text-lg text-gray-600">
            {filteredShops.length} shops found {selectedCategory !== 'all' && `in ${categories.find(c => c.id === selectedCategory)?.name}`}
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredShops.map((shop, index) => (
            <Card key={shop.id} className="slide-in-up" style={{ animationDelay: `${index * 0.05}s` }}>
              <img
                src={shop.image}
                alt={shop.name}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{shop.name}</h3>
                <p className="text-gray-600 mb-3 text-sm">{shop.description}</p>
                
                <div className="flex items-center mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-3 w-3 ${i < Math.floor(shop.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-xs text-gray-600">{shop.rating}</span>
                </div>

                <div className="space-y-1 mb-3 text-xs text-gray-600">
                  <div className="flex items-center">
                    <MapPin className="h-3 w-3 mr-1" />
                    <span>{shop.address}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-3 w-3 mr-1" />
                    <span>{shop.hours}</span>
                  </div>
                </div>

                <WhatsAppButton text="Visit Shop" size="sm" className="w-full justify-center text-sm" />
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Add Your Shop */}
      <Section background="gradient">
        <div className="text-center fade-in">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Own a Shop in Radhanagari?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Get your business listed in our directory and reach more customers in your community
          </p>
          <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg p-8">
            <Plus className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-4">List Your Business</h3>
            <ul className="text-left text-gray-600 mb-6 space-y-2">
              <li>• Free listing with basic information</li>
              <li>• Featured placement options available</li>
              <li>• Reach local customers easily</li>
              <li>• Update information anytime</li>
            </ul>
            <WhatsAppButton text="Add My Shop" size="lg" className="w-full justify-center" />
          </div>
        </div>
      </Section>

      {/* Community Support */}
      <Section>
        <div className="text-center fade-in">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Support Local Business</h2>
          <p className="text-lg text-gray-600 mb-8">
            When you shop local, you're supporting your community and helping local families thrive
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Local Economy</h3>
              <p className="text-gray-600">Every purchase helps strengthen our local economy</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality Service</h3>
              <p className="text-gray-600">Local shops provide personalized service and care</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Community Connection</h3>
              <p className="text-gray-600">Build relationships with local business owners</p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};