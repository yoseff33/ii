import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import MobileBottomNav from './components/MobileBottomNav';
import Home from './pages/Home';
import HowItWorks from './pages/HowItWorks';
import ListCar from './pages/ListCar';
import BrowseCars from './pages/BrowseCars';
import CarDetails from './pages/CarDetails';
import Auth from './pages/Auth';
import About from './pages/About';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard';
import Messages from './pages/Messages';
import { LanguageProvider } from './contexts/LanguageContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { UserProvider } from './contexts/UserContext';
import { ToastProvider } from './components/NotificationToast';

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <UserProvider>
          <ToastProvider>
            <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
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
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/messages" element={<Messages />} />
                </Routes>
              </main>
              <Footer />
              <MobileBottomNav />
            </div>
          </ToastProvider>
        </UserProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;