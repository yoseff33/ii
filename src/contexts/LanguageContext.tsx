import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'ar' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  ar: {
    // Navigation
    'nav.home': 'الرئيسية',
    'nav.howItWorks': 'كيف تعمل',
    'nav.listCar': 'أضف سيارتك',
    'nav.browseCars': 'استأجر سيارة',
    'nav.about': 'من نحن',
    'nav.faq': 'الأسئلة الشائعة',
    'nav.contact': 'تواصل معنا',
    'nav.login': 'تسجيل الدخول',
    'nav.register': 'إنشاء حساب',
    
    // Home page
    'home.hero.title': 'استأجر سيارتك المثالية',
    'home.hero.subtitle': 'في دقائق معدودة',
    'home.hero.description': 'منصة وُجْهَة تربط بين ملاك السيارات والمستأجرين بطريقة آمنة وموثوقة. استأجر بالساعة أو اليوم أو الشهر مع تأمين شامل وخدمة توصيل سريعة.',
    'home.hero.rentNow': 'ابحث عن سيارة الآن',
    'home.hero.listCar': 'أضف سيارتك واربح',
    
    // Features
    'features.title': 'لماذا تختار وُجْهَة؟',
    'features.subtitle': 'نقدم لك تجربة تأجير سيارات متميزة بأحدث التقنيات وأعلى معايير الأمان',
    'features.insurance.title': 'تأمين شامل',
    'features.insurance.description': 'تأمين شامل على جميع السيارات مع تغطية كاملة للأضرار والحوادث لراحة البال التامة',
    'features.location.title': 'قريب منك',
    'features.location.description': 'اعثر على السيارة المناسبة بالقرب منك مع خدمة توصيل سريعة لموقعك في أقل من 30 دقيقة',
    'features.flexibility.title': 'مرونة في التأجير',
    'features.flexibility.description': 'استأجر بالساعة أو اليوم أو الشهر مع أسعار تنافسية وخيارات دفع متنوعة ومرنة',
    
    // Common
    'common.bookNow': 'احجز الآن',
    'common.viewDetails': 'عرض التفاصيل',
    'common.viewAll': 'عرض الكل',
    'common.loading': 'جاري التحميل...',
    'common.search': 'بحث',
    'common.filter': 'تصفية',
    'common.location': 'الموقع',
    'common.price': 'السعر',
    'common.rating': 'التقييم',
    'common.reviews': 'تقييم',
    'common.features': 'المميزات',
    'common.verified': 'موثق',
    'common.instantBook': 'حجز فوري',
    'common.insured': 'مؤمّن',
    
    // Units
    'units.hour': 'ساعة',
    'units.day': 'يوم',
    'units.month': 'شهر',
    'units.km': 'كم',
    'units.sar': 'ريال',
    'units.perHour': 'ريال/ساعة',
    'units.perDay': 'ريال/يوم',
    'units.perMonth': 'ريال/شهر',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.howItWorks': 'How it Works',
    'nav.listCar': 'List Your Car',
    'nav.browseCars': 'Rent a Car',
    'nav.about': 'About Us',
    'nav.faq': 'FAQ',
    'nav.contact': 'Contact',
    'nav.login': 'Login',
    'nav.register': 'Sign Up',
    
    // Home page
    'home.hero.title': 'Rent Your Perfect Car',
    'home.hero.subtitle': 'In Minutes',
    'home.hero.description': 'Wujha platform connects car owners with renters in a safe and reliable way. Rent by hour, day, or month with comprehensive insurance and fast delivery service.',
    'home.hero.rentNow': 'Find a Car Now',
    'home.hero.listCar': 'List Your Car & Earn',
    
    // Features
    'features.title': 'Why Choose Wujha?',
    'features.subtitle': 'We provide you with an exceptional car rental experience with the latest technology and highest safety standards',
    'features.insurance.title': 'Comprehensive Insurance',
    'features.insurance.description': 'Comprehensive insurance on all cars with full coverage for damages and accidents for complete peace of mind',
    'features.location.title': 'Near You',
    'features.location.description': 'Find the right car near you with fast delivery service to your location in less than 30 minutes',
    'features.flexibility.title': 'Rental Flexibility',
    'features.flexibility.description': 'Rent by hour, day, or month with competitive prices and flexible payment options',
    
    // Common
    'common.bookNow': 'Book Now',
    'common.viewDetails': 'View Details',
    'common.viewAll': 'View All',
    'common.loading': 'Loading...',
    'common.search': 'Search',
    'common.filter': 'Filter',
    'common.location': 'Location',
    'common.price': 'Price',
    'common.rating': 'Rating',
    'common.reviews': 'reviews',
    'common.features': 'Features',
    'common.verified': 'Verified',
    'common.instantBook': 'Instant Book',
    'common.insured': 'Insured',
    
    // Units
    'units.hour': 'hour',
    'units.day': 'day',
    'units.month': 'month',
    'units.km': 'km',
    'units.sar': 'SAR',
    'units.perHour': 'SAR/hour',
    'units.perDay': 'SAR/day',
    'units.perMonth': 'SAR/month',
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('ar');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['ar']] || key;
  };

  const isRTL = language === 'ar';

  // Update document direction when language changes
  React.useEffect(() => {
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language, isRTL]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};