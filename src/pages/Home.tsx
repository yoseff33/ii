import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Car, 
  Shield, 
  MapPin, 
  Clock, 
  Star, 
  CheckCircle, 
  ArrowRight,
  Users,
  TrendingUp,
  Award
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Home: React.FC = () => {
  const { t, language, isRTL } = useLanguage();

  const sampleCars = [
    {
      id: '1',
      name: language === 'ar' ? 'تويوتا كامري' : 'Toyota Camry',
      model: 'Camry 2023',
      year: 2023,
      image: 'https://tse3.mm.bing.net/th/id/OIP.xX_Wc-86VG--_dLa8jqbLgHaFV?rs=1&pid=ImgDetMain&o=7&rm=3',
      pricePerDay: 180,
      location: language === 'ar' ? 'الرياض - حي النخيل' : 'Riyadh - Al Nakheel',
      distance: 2.3,
      rating: 4.8,
      reviews: 42,
      instantBook: true,
    },
    {
      id: '2',
      name: language === 'ar' ? 'هوندا أكورد' : 'Honda Accord',
      model: 'Accord 2022',
      year: 2022,
      image: 'https://images.pexels.com/photos/712618/pexels-photo-712618.jpeg?auto=compress&cs=tinysrgb&w=800',
      pricePerDay: 160,
      location: language === 'ar' ? 'جدة - حي الزهراء' : 'Jeddah - Al Zahra',
      distance: 1.8,
      rating: 4.7,
      reviews: 38,
      instantBook: false,
    },
    {
      id: '3',
      name: language === 'ar' ? 'نيسان التيما' : 'Nissan Altima',
      model: 'Altima 2021',
      year: 2021,
      image: 'https://images.pexels.com/photos/1209778/pexels-photo-1209778.jpeg?auto=compress&cs=tinysrgb&w=800',
      pricePerDay: 140,
      location: language === 'ar' ? 'الدمام - الكورنيش' : 'Dammam - Corniche',
      distance: 3.1,
      rating: 4.6,
      reviews: 29,
      instantBook: true,
    }
  ];

  const features = [
    {
      icon: Shield,
      title: t('features.insurance.title'),
      description: t('features.insurance.description'),
      color: 'teal',
    },
    {
      icon: MapPin,
      title: t('features.location.title'),
      description: t('features.location.description'),
      color: 'orange',
    },
    {
      icon: Clock,
      title: t('features.flexibility.title'),
      description: t('features.flexibility.description'),
      color: 'blue',
    },
  ];

  const stats = [
    {
      icon: Users,
      value: '50,000+',
      label: language === 'ar' ? 'مستخدم نشط' : 'Active Users',
    },
    {
      icon: Car,
      value: '10,000+',
      label: language === 'ar' ? 'سيارة متاحة' : 'Available Cars',
    },
    {
      icon: TrendingUp,
      value: '95%',
      label: language === 'ar' ? 'معدل الرضا' : 'Satisfaction Rate',
    },
    {
      icon: Award,
      value: '4.9',
      label: language === 'ar' ? 'تقييم المنصة' : 'Platform Rating',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-teal-600 via-teal-700 to-teal-800 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="container-custom relative">
          <div className="py-24 md:py-32">
            <div className="text-center animate-fadeInUp">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                {t('home.hero.title')}
                <span className="block text-teal-200 mt-2">
                  {t('home.hero.subtitle')}
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-teal-100 mb-12 max-w-4xl mx-auto leading-relaxed">
                {t('home.hero.description')}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Link
                  to="/browse-cars"
                  className="group bg-white text-teal-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-2 rtl:space-x-reverse"
                >
                  <span>{t('home.hero.rentNow')}</span>
                  <ArrowRight className={`w-5 h-5 group-hover:translate-x-1 transition-transform ${isRTL ? 'rotate-180' : ''}`} />
                </Link>
                
                <Link
                  to="/list-car"
                  className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-teal-700 transition-all"
                >
                  {t('home.hero.listCar')}
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Car Animation */}
        <div className="absolute bottom-10 right-10 hidden lg:block animate-bounce-slow">
          <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
            <Car className="w-8 h-8 text-white" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-fadeInUp" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-teal-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {t('features.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {t('features.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className={`card p-8 text-center animate-fadeInUp bg-gradient-to-br from-${feature.color}-50 to-${feature.color}-100 hover:shadow-2xl`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`w-16 h-16 bg-${feature.color}-600 rounded-2xl flex items-center justify-center mx-auto mb-6 transform hover:scale-110 transition-transform`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Cars Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12 animate-fadeInUp">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {language === 'ar' ? 'السيارات الأكثر طلباً' : 'Most Popular Cars'}
            </h2>
            <p className="text-xl text-gray-600">
              {language === 'ar' ? 'اكتشف السيارات المتاحة بالقرب منك' : 'Discover available cars near you'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sampleCars.map((car, index) => (
              <div 
                key={car.id} 
                className="card overflow-hidden animate-fadeInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative">
                  <img 
                    src={car.image} 
                    alt={car.name}
                    className="w-full h-48 object-cover"
                  />
                  {car.instantBook && (
                    <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {t('common.instantBook')}
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">{car.name}</h3>
                      <p className="text-gray-600">{car.model}</p>
                    </div>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium text-gray-700 mr-1">{car.rating}</span>
                      <span className="text-xs text-gray-500">({car.reviews})</span>
                    </div>
                  </div>

                  <div className="flex items-center text-gray-600 mb-4">
                    <MapPin className="w-4 h-4 ml-2" />
                    <span className="text-sm">{car.location}</span>
                    <span className="text-sm text-gray-400 mr-2">({car.distance} {t('units.km')})</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-2xl font-bold text-teal-600">{car.pricePerDay}</span>
                      <span className="text-gray-600 text-sm"> {t('units.perDay')}</span>
                    </div>
                    <Link 
                      to={`/car/${car.id}`}
                      className="btn-primary text-sm"
                    >
                      {t('common.bookNow')}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/browse-cars"
              className="btn-primary text-lg"
            >
              {t('common.viewAll')}
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-teal-600 to-teal-700 text-white">
        <div className="container-custom">
          <div className="text-center animate-fadeInUp">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {language === 'ar' ? 'ابدأ رحلتك معنا اليوم' : 'Start Your Journey With Us Today'}
            </h2>
            <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
              {language === 'ar' 
                ? 'انضم إلى آلاف المستخدمين الذين يثقون في وُجْهَة لتأجير السيارات'
                : 'Join thousands of users who trust Wujha for car rentals'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/browse-cars"
                className="bg-white text-teal-700 px-8 py-4 rounded-xl font-bold hover:bg-gray-50 transition-all transform hover:scale-105"
              >
                {language === 'ar' ? 'استأجر سيارة' : 'Rent a Car'}
              </Link>
              <Link
                to="/list-car"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-teal-700 transition-all"
              >
                {language === 'ar' ? 'أضف سيارتك' : 'List Your Car'}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;