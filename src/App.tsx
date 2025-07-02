import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import HowItWorks from './pages/HowItWorks';
import ListCar from './pages/ListCar';
import BrowseCars from './pages/BrowseCars';
import CarDetails from './pages/CarDetails';
import Auth from './pages/Auth';
import About from './pages/About';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import { LanguageProvider } from './contexts/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/list-car" element={<ListCar />} />
            <Route path="/browse-cars" element={<BrowseCars />} />
            <Route path="/car/:id" element={<CarDetails />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/about" element={<About />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;