import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Search, Plus, MessageCircle, User } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useUser } from '../contexts/UserContext';

const MobileBottomNav: React.FC = () => {
  const { language } = useLanguage();
  const { user } = useUser();
  const location = useLocation();

  const navItems = [
    { 
      path: '/', 
      icon: Home, 
      label: language === 'ar' ? 'الرئيسية' : 'Home' 
    },
    { 
      path: '/browse-cars', 
      icon: Search, 
      label: language === 'ar' ? 'بحث' : 'Search' 
    },
    { 
      path: '/list-car', 
      icon: Plus, 
      label: language === 'ar' ? 'إضافة' : 'Add',
      highlight: true 
    },
    { 
      path: '/messages', 
      icon: MessageCircle, 
      label: language === 'ar' ? 'رسائل' : 'Messages' 
    },
    { 
      path: user ? '/dashboard' : '/auth', 
      icon: User, 
      label: language === 'ar' ? 'حسابي' : 'Profile' 
    },
  ];

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 md:hidden z-50">
      <div className="flex justify-around py-2">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex flex-col items-center py-2 px-3 transition-colors ${
              isActive(item.path)
                ? 'text-teal-600'
                : 'text-gray-400 dark:text-gray-500'
            }`}
          >
            <div className={`relative ${item.highlight ? 'p-2 bg-teal-600 rounded-full' : ''}`}>
              <item.icon className={`w-6 h-6 ${item.highlight ? 'text-white' : ''}`} />
            </div>
            <span className="text-xs mt-1">{item.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MobileBottomNav;