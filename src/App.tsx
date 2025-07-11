import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import Home from './pages/Home';
import { Services } from './pages/Services';
import { Courses } from './pages/Courses';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { AITools } from './pages/AITools';
import { RadhanagariShops } from './pages/RadhanagariShops';
import { Downloads } from './pages/Downloads';
import { Blog } from './pages/Blog';
import { ECommerce } from './pages/ECommerce';
import { ScrollToTop } from './components/common/ScrollToTop';
import './styles/animations.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <ScrollToTop />
        <Header />
        <main className="pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/ai-tools" element={<AITools />} />
            <Route path="/radhanagari-shops" element={<RadhanagariShops />} />
            <Route path="/downloads" element={<Downloads />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/store" element={<ECommerce />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;