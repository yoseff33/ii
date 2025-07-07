import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Car, Menu, X, Globe, User } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useUser } from '../contexts/UserContext';
import { useTheme } from '../contexts/ThemeContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t, isRTL } = useLanguage();
  const { user, isLoggedIn, logout } = useUser();
  const { isDark } = useTheme();

  const toggleLanguage = () => {
    setLanguage(language === 'ar' ? 'en' : 'ar');
  };

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { path: '/', label: t('nav.home') },
    { path: '/how-it-works', label: t('nav.howItWorks') },
    { path: '/browse-cars', label: t('nav.browseCars') },
    { path: '/about', label: t('nav.about') },
    { path: '/faq', label: t('nav.faq') },
    { path: '/contact', label: t('nav.contact') },
  ];

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center">
              <Car className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">وُجْهَة</h1>
              <p className="text-xs text-gray-500 hidden sm:block">
                {language === 'ar' ? 'منصة تأجير السيارات' : 'Car Rental Platform'}
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 rtl:space-x-reverse">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive(item.path)
                    ? 'text-teal-600 bg-teal-50'
                    : 'text-gray-700 hover:text-teal-600 hover:bg-teal-50'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right side buttons */}
          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="p-2 rounded-lg text-gray-600 hover:text-teal-600 hover:bg-teal-50 transition-colors"
              title={language === 'ar' ? 'English' : 'العربية'}
            >
              <Globe className="w-5 h-5" />
            </button>

            {/* List Car Button */}
            <Link
              to="/list-car"
              className="hidden md:block btn-secondary text-sm"
            >
              {t('nav.listCar')}
            </Link>

            {/* Auth Button */}
            {isLoggedIn ? (
              <div className="hidden md:flex items-center space-x-4 rtl:space-x-reverse">
                <Link
                  to="/dashboard"
                  className="flex items-center space-x-2 rtl:space-x-reverse px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-teal-600 hover:bg-teal-50 dark:hover:bg-teal-900/20 rounded-lg transition-colors"
                >
                  <User className="w-4 h-4" />
                  <span className="text-sm">{user?.name}</span>
                </Link>
                <button
                  onClick={logout}
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-red-600 transition-colors"
                >
                  {language === 'ar' ? 'تسجيل خروج' : 'Logout'}
                </button>
              </div>
            ) : (
              <Link
                to="/auth"
                className="hidden md:flex items-center space-x-2 rtl:space-x-reverse px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-teal-600 hover:bg-teal-50 dark:hover:bg-teal-900/20 rounded-lg transition-colors"
              >
                <User className="w-4 h-4" />
                <span className="text-sm">{t('nav.login')}</span>
              </Link>
            )}

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-lg">
          <div className="px-4 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-2 text-base font-medium rounded-md transition-colors ${
                  isActive(item.path)
                    ? 'text-teal-600 bg-teal-50 dark:bg-teal-900/20'
                    : 'text-gray-700 dark:text-gray-300 hover:text-teal-600 hover:bg-teal-50 dark:hover:bg-teal-900/20'
                }`}
              >
                {item.label}
              </Link>
            ))}
            
            <div className="pt-4 border-t border-gray-200 dark:border-gray-700 space-y-2">
              {!isLoggedIn && (
                <Link
                  to="/list-car"
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full text-center btn-secondary"
                >
                  {t('nav.listCar')}
                </Link>
              )}
              {isLoggedIn ? (
                <>
                  <Link
                    to="/dashboard"
                    onClick={() => setIsMenuOpen(false)}
                    className="block w-full text-center btn-primary"
                  >
                    {language === 'ar' ? 'لوحة التحكم' : 'Dashboard'}
                  </Link>
                  <button
                    onClick={() => {
                      logout();
                      setIsMenuOpen(false);
                    }}
                    className="block w-full text-center btn-outline"
                  >
                    {language === 'ar' ? 'تسجيل خروج' : 'Logout'}
                  </button>
                </>
              ) : (
                <Link
                  to="/auth"
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full text-center btn-outline"
                >
                  {t('nav.login')}
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;