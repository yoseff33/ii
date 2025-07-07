import React, { useState } from 'react';
import { 
  Search, 
  Calendar, 
  MapPin, 
  Star, 
  Heart,
  MessageCircle,
  Bell,
  User,
  Car,
  Clock,
  CreditCard,
  Settings,
  Moon,
  Sun
} from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { useTheme } from '../../contexts/ThemeContext';
import { useUser } from '../../contexts/UserContext';

const RenterDashboard: React.FC = () => {
  const { language } = useLanguage();
  const { isDark, toggleTheme } = useTheme();
  const { user } = useUser();
  const [activeTab, setActiveTab] = useState('search');

  const tabs = [
    { id: 'search', label: language === 'ar' ? 'البحث' : 'Search', icon: Search },
    { id: 'bookings', label: language === 'ar' ? 'حجوزاتي' : 'My Bookings', icon: Calendar },
    { id: 'favorites', label: language === 'ar' ? 'المفضلة' : 'Favorites', icon: Heart },
    { id: 'messages', label: language === 'ar' ? 'الرسائل' : 'Messages', icon: MessageCircle },
    { id: 'profile', label: language === 'ar' ? 'الملف الشخصي' : 'Profile', icon: User },
  ];

  const recentBookings = [
    {
      id: '1',
      carName: language === 'ar' ? 'تويوتا كامري' : 'Toyota Camry',
      owner: language === 'ar' ? 'أحمد العلي' : 'Ahmed Al-Ali',
      date: '2024-01-20',
      status: 'completed',
      rating: 5,
      image: 'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      id: '2',
      carName: language === 'ar' ? 'هوندا أكورد' : 'Honda Accord',
      owner: language === 'ar' ? 'فاطمة الأحمد' : 'Fatima Al-Ahmad',
      date: '2024-01-25',
      status: 'upcoming',
      image: 'https://images.pexels.com/photos/712618/pexels-photo-712618.jpeg?auto=compress&cs=tinysrgb&w=300'
    }
  ];

  const favoriteCards = [
    {
      id: '1',
      name: language === 'ar' ? 'تويوتا راف 4' : 'Toyota RAV4',
      price: 250,
      rating: 4.9,
      location: language === 'ar' ? 'الرياض' : 'Riyadh',
      image: 'https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      id: '2',
      name: language === 'ar' ? 'نيسان التيما' : 'Nissan Altima',
      price: 140,
      rating: 4.6,
      location: language === 'ar' ? 'جدة' : 'Jeddah',
      image: 'https://images.pexels.com/photos/1209778/pexels-photo-1209778.jpeg?auto=compress&cs=tinysrgb&w=300'
    }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'search':
        return (
          <div className="space-y-6">
            {/* Quick Search */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                {language === 'ar' ? 'بحث سريع' : 'Quick Search'}
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="relative">
                  <MapPin className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder={language === 'ar' ? 'الموقع' : 'Location'}
                    className="w-full pr-10 pl-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                </div>
                <div className="relative">
                  <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="date"
                    className="w-full pr-10 pl-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                </div>
                <button className="bg-teal-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-teal-700 transition-colors">
                  {language === 'ar' ? 'بحث' : 'Search'}
                </button>
              </div>
            </div>

            {/* Recent Searches */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                {language === 'ar' ? 'عمليات البحث الأخيرة' : 'Recent Searches'}
              </h3>
              <div className="space-y-3">
                {['الرياض - غداً', 'جدة - نهاية الأسبوع', 'الدمام - الأسبوع القادم'].map((search, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 cursor-pointer transition-colors">
                    <span className="text-gray-700 dark:text-gray-300">{search}</span>
                    <Clock className="w-4 h-4 text-gray-400" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'bookings':
        return (
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                {language === 'ar' ? 'حجوزاتي' : 'My Bookings'}
              </h3>
              <div className="space-y-4">
                {recentBookings.map((booking) => (
                  <div key={booking.id} className="flex items-center space-x-4 rtl:space-x-reverse p-4 border border-gray-200 dark:border-gray-600 rounded-xl">
                    <img
                      src={booking.image}
                      alt={booking.carName}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 dark:text-white">{booking.carName}</h4>
                      <p className="text-gray-600 dark:text-gray-400">{booking.owner}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-500">{booking.date}</p>
                    </div>
                    <div className="text-right">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        booking.status === 'completed' 
                          ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                          : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                      }`}>
                        {booking.status === 'completed' 
                          ? (language === 'ar' ? 'مكتملة' : 'Completed')
                          : (language === 'ar' ? 'قادمة' : 'Upcoming')
                        }
                      </span>
                      {booking.rating && (
                        <div className="flex items-center mt-2">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className={`w-4 h-4 ${i < booking.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'favorites':
        return (
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                {language === 'ar' ? 'السيارات المفضلة' : 'Favorite Cars'}
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {favoriteCards.map((car) => (
                  <div key={car.id} className="border border-gray-200 dark:border-gray-600 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                    <img
                      src={car.image}
                      alt={car.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold text-gray-900 dark:text-white">{car.name}</h4>
                        <Heart className="w-5 h-5 text-red-500 fill-current" />
                      </div>
                      <div className="flex items-center mb-2">
                        <MapPin className="w-4 h-4 text-gray-400 ml-1" />
                        <span className="text-sm text-gray-600 dark:text-gray-400">{car.location}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-sm text-gray-600 dark:text-gray-400 mr-1">{car.rating}</span>
                        </div>
                        <span className="text-lg font-bold text-teal-600">{car.price} {language === 'ar' ? 'ريال/يوم' : 'SAR/day'}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'messages':
        return (
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                {language === 'ar' ? 'الرسائل' : 'Messages'}
              </h3>
              <div className="space-y-4">
                {[
                  { name: language === 'ar' ? 'أحمد العلي' : 'Ahmed Al-Ali', message: language === 'ar' ? 'مرحباً، السيارة جاهزة للاستلام' : 'Hello, the car is ready for pickup', time: '10:30 AM', unread: true },
                  { name: language === 'ar' ? 'فاطمة الأحمد' : 'Fatima Al-Ahmad', message: language === 'ar' ? 'شكراً لك على التقييم الممتاز' : 'Thank you for the excellent rating', time: 'Yesterday', unread: false }
                ].map((msg, index) => (
                  <div key={index} className={`p-4 rounded-xl cursor-pointer transition-colors ${
                    msg.unread 
                      ? 'bg-teal-50 dark:bg-teal-900/20 border-l-4 border-teal-500' 
                      : 'bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600'
                  }`}>
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-gray-900 dark:text-white">{msg.name}</h4>
                      <span className="text-sm text-gray-500 dark:text-gray-400">{msg.time}</span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">{msg.message}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'profile':
        return (
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-6">
              <div className="flex items-center space-x-4 rtl:space-x-reverse mb-6">
                <div className="w-20 h-20 bg-teal-100 dark:bg-teal-900 rounded-full flex items-center justify-center">
                  <User className="w-10 h-10 text-teal-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{user?.name}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{user?.email}</p>
                  <div className="flex items-center mt-2">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600 dark:text-gray-400 mr-1">{user?.rating}</span>
                    <span className="text-sm text-gray-500 dark:text-gray-500">({user?.totalTrips} {language === 'ar' ? 'رحلة' : 'trips'})</span>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white">{language === 'ar' ? 'الإحصائيات' : 'Statistics'}</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">{language === 'ar' ? 'إجمالي الرحلات' : 'Total Trips'}</span>
                      <span className="font-medium text-gray-900 dark:text-white">{user?.totalTrips}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">{language === 'ar' ? 'النقاط' : 'Points'}</span>
                      <span className="font-medium text-teal-600">{user?.points}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">{language === 'ar' ? 'المستوى' : 'Level'}</span>
                      <span className="font-medium text-gray-900 dark:text-white">{user?.level}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white">{language === 'ar' ? 'الإعدادات' : 'Settings'}</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 dark:text-gray-400">{language === 'ar' ? 'الوضع الليلي' : 'Dark Mode'}</span>
                      <button
                        onClick={toggleTheme}
                        className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                      >
                        {isDark ? <Sun className="w-5 h-5 text-yellow-500" /> : <Moon className="w-5 h-5 text-gray-600" />}
                      </button>
                    </div>
                    <button className="flex items-center space-x-2 rtl:space-x-reverse text-gray-600 dark:text-gray-400 hover:text-teal-600 transition-colors">
                      <Bell className="w-5 h-5" />
                      <span>{language === 'ar' ? 'إعدادات الإشعارات' : 'Notification Settings'}</span>
                    </button>
                    <button className="flex items-center space-x-2 rtl:space-x-reverse text-gray-600 dark:text-gray-400 hover:text-teal-600 transition-colors">
                      <CreditCard className="w-5 h-5" />
                      <span>{language === 'ar' ? 'طرق الدفع' : 'Payment Methods'}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="container-custom py-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            {language === 'ar' ? 'مرحباً' : 'Welcome'}, {user?.name}
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            {language === 'ar' ? 'لوحة تحكم المستأجر' : 'Renter Dashboard'}
          </p>
        </div>
        <button
          onClick={toggleTheme}
          className="p-3 rounded-xl bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow"
        >
          {isDark ? <Sun className="w-6 h-6 text-yellow-500" /> : <Moon className="w-6 h-6 text-gray-600" />}
        </button>
      </div>

      {/* Desktop Tabs */}
      <div className="hidden md:block mb-8">
        <div className="flex space-x-1 rtl:space-x-reverse bg-gray-100 dark:bg-gray-800 rounded-xl p-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 rtl:space-x-reverse px-4 py-3 rounded-lg font-medium transition-colors ${
                activeTab === tab.id
                  ? 'bg-white dark:bg-gray-700 text-teal-600 shadow-sm'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              <tab.icon className="w-5 h-5" />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="mb-20 md:mb-8">
        {renderContent()}
      </div>

      {/* Mobile Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 md:hidden">
        <div className="flex justify-around py-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex flex-col items-center py-2 px-3 ${
                activeTab === tab.id
                  ? 'text-teal-600'
                  : 'text-gray-400 dark:text-gray-500'
              }`}
            >
              <tab.icon className="w-6 h-6" />
              <span className="text-xs mt-1">{tab.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RenterDashboard;