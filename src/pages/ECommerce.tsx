import React, { useState } from 'react';
import { ShoppingCart, Star, Heart, Search, Filter, Monitor, Laptop, HardDrive } from 'lucide-react';
import { WhatsAppButton } from '../components/common/WhatsAppButton';
import { Card } from '../components/common/Card';
import { Section } from '../components/common/Section';

export const ECommerce: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Products', count: 48 },
    { id: 'laptops', name: 'Laptops', count: 15 },
    { id: 'desktops', name: 'Desktops', count: 12 },
    { id: 'accessories', name: 'Accessories', count: 18 },
    { id: 'software', name: 'Software', count: 3 }
  ];

  const products = [
    {
      id: 1,
      name: 'Dell Inspiron 15 3000',
      category: 'laptops',
      price: 42000,
      originalPrice: 48000,
      description: 'Intel Core i5, 8GB RAM, 256GB SSD, Windows 11',
      image: 'https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=500',
      rating: 4.5,
      reviews: 28,
      inStock: true,
      featured: true,
      specs: ['Intel Core i5-1135G7', '8GB DDR4 RAM', '256GB SSD', '15.6" HD Display'],
      warranty: '1 Year'
    },
    {
      id: 2,
      name: 'HP Pavilion Gaming Desktop',
      category: 'desktops',
      price: 55000,
      originalPrice: 62000,
      description: 'AMD Ryzen 5, 16GB RAM, 1TB HDD + 256GB SSD, GTX 1650',
      image: 'https://images.pexels.com/photos/2399840/pexels-photo-2399840.jpeg?auto=compress&cs=tinysrgb&w=500',
      rating: 4.7,
      reviews: 35,
      inStock: true,
      featured: true,
      specs: ['AMD Ryzen 5 5600G', '16GB DDR4 RAM', '1TB HDD + 256GB SSD', 'NVIDIA GTX 1650'],
      warranty: '1 Year'
    },
    {
      id: 3,
      name: 'Logitech MX Master 3',
      category: 'accessories',
      price: 8500,
      originalPrice: 10000,
      description: 'Advanced wireless mouse with precision scrolling',
      image: 'https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&w=500',
      rating: 4.8,
      reviews: 124,
      inStock: true,
      featured: true,
      specs: ['Wireless connectivity', 'Precision scrolling', 'Ergonomic design', '70-day battery'],
      warranty: '2 Years'
    },
    {
      id: 4,
      name: 'ASUS VivoBook 15',
      category: 'laptops',
      price: 38000,
      originalPrice: 42000,
      description: 'Intel Core i3, 8GB RAM, 512GB SSD, Windows 11',
      image: 'https://images.pexels.com/photos/18105/pexels-photo-18105.jpeg?auto=compress&cs=tinysrgb&w=500',
      rating: 4.3,
      reviews: 19,
      inStock: true,
      featured: false,
      specs: ['Intel Core i3-1115G4', '8GB DDR4 RAM', '512GB SSD', '15.6" FHD Display'],
      warranty: '1 Year'
    },
    {
      id: 5,
      name: 'Lenovo ThinkCentre Desktop',
      category: 'desktops',
      price: 32000,
      originalPrice: 35000,
      description: 'Intel Core i5, 8GB RAM, 1TB HDD, Windows 11 Pro',
      image: 'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=500',
      rating: 4.4,
      reviews: 22,
      inStock: true,
      featured: false,
      specs: ['Intel Core i5-10400', '8GB DDR4 RAM', '1TB HDD', 'Windows 11 Pro'],
      warranty: '1 Year'
    },
    {
      id: 6,
      name: 'Samsung 24" Monitor',
      category: 'accessories',
      price: 12500,
      originalPrice: 14000,
      description: 'Full HD IPS display with slim bezel design',
      image: 'https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&w=500',
      rating: 4.6,
      reviews: 67,
      inStock: true,
      featured: false,
      specs: ['24" Full HD', 'IPS Panel', 'Slim bezel', 'HDMI & VGA'],
      warranty: '1 Year'
    },
    {
      id: 7,
      name: 'Microsoft Office 2021',
      category: 'software',
      price: 15000,
      originalPrice: 18000,
      description: 'Complete Office suite with Word, Excel, PowerPoint, Outlook',
      image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=500',
      rating: 4.9,
      reviews: 89,
      inStock: true,
      featured: false,
      specs: ['Word', 'Excel', 'PowerPoint', 'Outlook', 'OneNote'],
      warranty: 'Lifetime'
    },
    {
      id: 8,
      name: 'Gaming Keyboard & Mouse Combo',
      category: 'accessories',
      price: 3500,
      originalPrice: 4500,
      description: 'RGB backlit mechanical keyboard with gaming mouse',
      image: 'https://images.pexels.com/photos/1194713/pexels-photo-1194713.jpeg?auto=compress&cs=tinysrgb&w=500',
      rating: 4.2,
      reviews: 45,
      inStock: true,
      featured: false,
      specs: ['Mechanical switches', 'RGB backlighting', 'Gaming mouse', 'Wired connectivity'],
      warranty: '1 Year'
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredProducts = products.filter(product => product.featured);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0
    }).format(price);
  };

  return (
    <div>
      {/* Hero Section */}
      <Section background="gradient" className="pt-8">
        <div className="text-center fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Computer
            <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              {' '}Store
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Quality computers, laptops, and accessories at competitive prices with expert support
          </p>
          <WhatsAppButton text="Shop Now" size="lg" variant="green" />
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
                placeholder="Search products..."
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

      {/* Featured Products */}
      <Section background="gray">
        <div className="text-center mb-12 fade-in">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Products</h2>
          <p className="text-lg text-gray-600">Best deals on top-quality computers and accessories</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {featuredProducts.map((product, index) => (
            <Card key={product.id} className="slide-in-up hover-glow" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                  {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                </div>
                <button className="absolute top-4 left-4 bg-white p-2 rounded-full shadow-md hover:bg-gray-50 transition-colors">
                  <Heart className="h-4 w-4 text-gray-600" />
                </button>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-3">{product.description}</p>
                
                <div className="flex items-center mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-600">{product.rating} ({product.reviews} reviews)</span>
                </div>

                <div className="mb-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-2xl font-bold text-blue-600">{formatPrice(product.price)}</span>
                    <span className="text-sm text-gray-500 line-through">{formatPrice(product.originalPrice)}</span>
                  </div>
                  <p className="text-sm text-green-600 font-medium">
                    You save {formatPrice(product.originalPrice - product.price)}
                  </p>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Key Specs:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {product.specs.slice(0, 3).map((spec, idx) => (
                      <li key={idx}>• {spec}</li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2">
                  <WhatsAppButton text="Buy Now" size="sm" variant="green" className="w-full justify-center" />
                  <WhatsAppButton text="Add to Cart" size="sm" variant="secondary" className="w-full justify-center" />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* All Products */}
      <Section>
        <div className="text-center mb-12 fade-in">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">All Products</h2>
          <p className="text-lg text-gray-600">
            {filteredProducts.length} products found {selectedCategory !== 'all' && `in ${categories.find(c => c.id === selectedCategory)?.name}`}
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
            <Card key={product.id} className="slide-in-up" style={{ animationDelay: `${index * 0.05}s` }}>
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-40 object-cover"
                />
                {product.originalPrice > product.price && (
                  <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                    {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                  </div>
                )}
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-3 text-sm">{product.description}</p>
                
                <div className="flex items-center mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-3 w-3 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-xs text-gray-600">{product.rating}</span>
                </div>

                <div className="mb-3">
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="text-lg font-bold text-blue-600">{formatPrice(product.price)}</span>
                    {product.originalPrice > product.price && (
                      <span className="text-xs text-gray-500 line-through">{formatPrice(product.originalPrice)}</span>
                    )}
                  </div>
                  <p className="text-xs text-gray-600">{product.warranty} warranty</p>
                </div>

                <div className="space-y-2">
                  <WhatsAppButton text="Buy Now" size="sm" variant="green" className="w-full justify-center text-sm" />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Why Choose Us */}
      <Section background="gradient">
        <div className="text-center mb-12 fade-in">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Shop With Us?</h2>
          <p className="text-lg text-gray-600">Experience the difference with our premium service</p>
        </div>
        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-center fade-in">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Monitor className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Quality Products</h3>
            <p className="text-gray-600">Only genuine products from authorized dealers</p>
          </div>
          <div className="text-center fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <ShoppingCart className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Best Prices</h3>
            <p className="text-gray-600">Competitive prices with regular discounts</p>
          </div>
          <div className="text-center fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <HardDrive className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert Support</h3>
            <p className="text-gray-600">Free installation and technical support</p>
          </div>
          <div className="text-center fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="h-8 w-8 text-orange-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Warranty</h3>
            <p className="text-gray-600">Comprehensive warranty on all products</p>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section>
        <div className="text-center fade-in">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Need Help Choosing?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Our experts are here to help you find the perfect computer for your needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <WhatsAppButton text="Get Expert Advice" size="lg" />
            <WhatsAppButton text="Custom PC Build" size="lg" variant="secondary" />
          </div>
        </div>
      </Section>
    </div>
  );
};