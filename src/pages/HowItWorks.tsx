import React from 'react';
import { Link } from 'react-router-dom';
import { 
  UserPlus, 
  Search, 
  CreditCard, 
  Car, 
  CheckCircle, 
  Shield,
  Clock,
  MapPin,
  ArrowRight
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const HowItWorks: React.FC = () => {
  const { language, t, isRTL } = useLanguage();

  const steps = [
    {
      icon: UserPlus,
      title: language === 'ar' ? 'إنشاء حساب' : 'Create Account',
      description: language === 'ar' 
        ? 'سجل حسابك مجاناً في دقائق معدودة مع التحقق من الهوية'
        : 'Register your account for free in minutes with identity verification',
      color: 'teal',
    },
    {
      icon: Search,
      title: language === 'ar' ? 'اختر السيارة' : 'Choose Your Car',
      description: language === 'ar'
        ? 'ابحث عن السيارة المناسبة حسب الموقع والسعر والمواصفات'
        : 'Search for the perfect car by location, price, and specifications',
      color: 'blue',
    },
    {
      icon: CreditCard,
      title: language === 'ar' ? 'ادفع بأمان' : 'Secure Payment',
      description: language === 'ar'
        ? 'ادفع بطريقة آمنة عبر بوابات الدفع المعتمدة'
        : 'Pay securely through certified payment gateways',
      color: 'green',
    },
    {
      icon: Car,
      title: language === 'ar' ? 'استلم واستمتع' : 'Pick Up & Enjoy',
      description: language === 'ar'
        ? 'استلم السيارة من الموقع المحدد أو اطلب التوصيل'
        : 'Pick up the car from the specified location or request delivery',
      color: 'orange',
    },
  ];

  const forRenters = [
    {
      icon: Search,
      title: language === 'ar' ? 'بحث متقدم' : 'Advanced Search',
      description: language === 'ar'
        ? 'ابحث عن السيارات حسب الموقع، النوع، السعر، والتاريخ'
        : 'Search cars by location, type, price, and date',
    },
    {
      icon: Shield,
      title: language === 'ar' ? 'تأمين شامل' : 'Full Insurance',
      description: language === 'ar'
        ? 'جميع السيارات مؤمنة بالكامل ضد الحوادث والأضرار'
        : 'All cars are fully insured against accidents and damages',
    },
    {
      icon: Clock,
      title: language === 'ar' ? 'مرونة في التأجير' : 'Flexible Rental',
      description: language === 'ar'
        ? 'استأجر بالساعة، اليوم، أو الشهر حسب احتياجك'
        : 'Rent by hour, day, or month according to your needs',
    },
    {
      icon: MapPin,
      title: language === 'ar' ? 'توصيل سريع' : 'Fast Delivery',
      description: language === 'ar'
        ? 'خدمة توصيل السيارة لموقعك خلال 60 دقيقة'
        : 'Car delivery service to your location within 60 minutes',
    },
  ];

  const forOwners = [
    {
      icon: CreditCard,
      title: language === 'ar' ? 'دخل إضافي' : 'Extra Income',
      description: language === 'ar'
        ? 'احصل على دخل إضافي من سيارتك الخاصة'
        : 'Earn extra income from your personal car',
    },
    {
      icon: Shield,
      title: language === 'ar' ? 'حماية كاملة' : 'Full Protection',
      description: language === 'ar'
        ? 'سيارتك محمية بالكامل مع تأمين شامل'
        : 'Your car is fully protected with comprehensive insurance',
    },
    {
      icon: CheckCircle,
      title: language === 'ar' ? 'مستأجرون موثقون' : 'Verified Renters',
      description: language === 'ar'
        ? 'جميع المستأجرين موثقون ومفحوصون'
        : 'All renters are verified and screened',
    },
    {
      icon: Clock,
      title: language === 'ar' ? 'إدارة سهلة' : 'Easy Management',
      description: language === 'ar'
        ? 'أدر حجوزات سيارتك بسهولة من التطبيق'
        : 'Manage your car bookings easily from the app',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-600 to-teal-700 text-white section-padding">
        <div className="container-custom">
          <div className="text-center animate-fadeInUp">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {language === 'ar' ? 'كيف تعمل منصة وُجْهَة؟' : 'How Does Wujha Work?'}
            </h1>
            <p className="text-xl text-teal-100 max-w-3xl mx-auto">
              {language === 'ar'
                ? 'اكتشف كيف يمكنك استئجار سيارة أو تأجير سيارتك في خطوات بسيطة'
                : 'Discover how you can rent a car or list your car in simple steps'
              }
            </p>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {language === 'ar' ? 'أربع خطوات بسيطة' : 'Four Simple Steps'}
            </h2>
            <p className="text-xl text-gray-600">
              {language === 'ar' 
                ? 'من التسجيل إلى قيادة السيارة في دقائق معدودة'
                : 'From registration to driving in just minutes'
              }
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center animate-fadeInUp" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="relative mb-8">
                  <div className={`w-20 h-20 bg-${step.color}-600 rounded-full flex items-center justify-center mx-auto mb-4 transform hover:scale-110 transition-transform`}>
                    <step.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className={`absolute -top-2 -right-2 w-8 h-8 bg-${step.color}-100 rounded-full flex items-center justify-center`}>
                    <span className={`text-${step.color}-600 font-bold text-sm`}>{index + 1}</span>
                  </div>
                  
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-full w-full">
                      <ArrowRight className={`w-6 h-6 text-gray-300 mx-auto ${isRTL ? 'rotate-180' : ''}`} />
                    </div>
                  )}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For Renters Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fadeInLeft">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {language === 'ar' ? 'للمستأجرين' : 'For Renters'}
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                {language === 'ar'
                  ? 'استمتع بتجربة تأجير سيارات مميزة مع مزايا حصرية'
                  : 'Enjoy an exceptional car rental experience with exclusive benefits'
                }
              </p>
              
              <div className="space-y-6">
                {forRenters.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4 rtl:space-x-reverse">
                    <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-teal-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <Link to="/browse-cars" className="btn-primary">
                  {language === 'ar' ? 'ابحث عن سيارة' : 'Find a Car'}
                </Link>
              </div>
            </div>
            
            <div className="animate-fadeInRight">
              <img 
                src="https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Car rental"
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* For Owners Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fadeInLeft lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {language === 'ar' ? 'لملاك السيارات' : 'For Car Owners'}
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                {language === 'ar'
                  ? 'حول سيارتك إلى مصدر دخل إضافي مع ضمان الحماية الكاملة'
                  : 'Turn your car into an additional income source with full protection guarantee'
                }
              </p>
              
              <div className="space-y-6">
                {forOwners.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4 rtl:space-x-reverse">
                    <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <Link to="/list-car" className="btn-secondary">
                  {language === 'ar' ? 'أضف سيارتك' : 'List Your Car'}
                </Link>
              </div>
            </div>
            
            <div className="animate-fadeInRight lg:order-1">
              <img 
                src="https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Car owner"
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-teal-600 to-teal-700 text-white">
        <div className="container-custom">
          <div className="text-center animate-fadeInUp">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {language === 'ar' ? 'جاهز للبدء؟' : 'Ready to Get Started?'}
            </h2>
            <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
              {language === 'ar'
                ? 'انضم إلى آلاف المستخدمين واستمتع بتجربة تأجير سيارات مميزة'
                : 'Join thousands of users and enjoy an exceptional car rental experience'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/auth"
                className="bg-white text-teal-700 px-8 py-4 rounded-xl font-bold hover:bg-gray-50 transition-all transform hover:scale-105"
              >
                {language === 'ar' ? 'إنشاء حساب مجاني' : 'Create Free Account'}
              </Link>
              <Link
                to="/browse-cars"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-teal-700 transition-all"
              >
                {language === 'ar' ? 'تصفح السيارات' : 'Browse Cars'}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;