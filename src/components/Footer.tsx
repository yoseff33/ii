import React from 'react';
import { Link } from 'react-router-dom';
import { Car, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t, language } = useLanguage();

  const footerLinks = {
    platform: [
      { label: t('nav.home'), path: '/' },
      { label: t('nav.howItWorks'), path: '/how-it-works' },
      { label: t('nav.browseCars'), path: '/browse-cars' },
      { label: t('nav.listCar'), path: '/list-car' },
    ],
    support: [
      { label: t('nav.about'), path: '/about' },
      { label: t('nav.faq'), path: '/faq' },
      { label: t('nav.contact'), path: '/contact' },
      { label: language === 'ar' ? 'سياسة الخصوصية' : 'Privacy Policy', path: '/privacy' },
      { label: language === 'ar' ? 'الشروط والأحكام' : 'Terms of Service', path: '/terms' },
    ],
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 rtl:space-x-reverse mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center">
                  <Car className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">وُجْهَة</h2>
                  <p className="text-gray-400 text-sm">
                    {language === 'ar' ? 'منصة تأجير السيارات الذكية' : 'Smart Car Rental Platform'}
                  </p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
                {language === 'ar' 
                  ? 'منصة وُجْهَة تربط بين ملاك السيارات والمستأجرين بطريقة آمنة وموثوقة. نقدم خدمة تأجير مرنة بأسعار تنافسية مع تأمين شامل.'
                  : 'Wujha platform connects car owners with renters in a safe and reliable way. We provide flexible rental service at competitive prices with comprehensive insurance.'
                }
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 rtl:space-x-reverse text-gray-300">
                  <Phone className="w-5 h-5 text-teal-400" />
                  <span>+966 11 123 4567</span>
                </div>
                <div className="flex items-center space-x-3 rtl:space-x-reverse text-gray-300">
                  <Mail className="w-5 h-5 text-teal-400" />
                  <span>info@wujha.sa</span>
                </div>
                <div className="flex items-center space-x-3 rtl:space-x-reverse text-gray-300">
                  <MapPin className="w-5 h-5 text-teal-400" />
                  <span>{language === 'ar' ? 'الرياض، المملكة العربية السعودية' : 'Riyadh, Saudi Arabia'}</span>
                </div>
              </div>
            </div>

            {/* Platform Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6">
                {language === 'ar' ? 'المنصة' : 'Platform'}
              </h3>
              <ul className="space-y-3">
                {footerLinks.platform.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.path}
                      className="text-gray-300 hover:text-teal-400 transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6">
                {language === 'ar' ? 'الدعم' : 'Support'}
              </h3>
              <ul className="space-y-3">
                {footerLinks.support.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.path}
                      className="text-gray-300 hover:text-teal-400 transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              © 2024 {language === 'ar' ? 'وُجْهَة. جميع الحقوق محفوظة.' : 'Wujha. All rights reserved.'}
            </div>

            {/* Social Media Links */}
            <div className="flex items-center space-x-4 rtl:space-x-reverse">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-teal-600 transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-teal-600 transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-teal-600 transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-teal-600 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;