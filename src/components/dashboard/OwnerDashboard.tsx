import React, { useState } from 'react';
import { 
  Car, 
  Calendar, 
  DollarSign, 
  Star, 
  TrendingUp,
  MessageCircle,
  Bell,
  User,
  Settings,
  Award,
  Plus,
  Eye,
  Edit,
  Moon,
  Sun,
  BarChart3,
  Clock
} from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { useTheme } from '../../contexts/ThemeContext';
import { useUser } from '../../contexts/UserContext';

const OwnerDashboard: React.FC = () => {
  const { language } = useLanguage();
  const { isDark, toggleTheme } = useTheme();
  const { user } = useUser();
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: language === 'ar' ? 'نظرة عامة' : 'Overview', icon: BarChart3 },
    { id: 'cars', label: language === 'ar' ? 'سياراتي' : 'My Cars', icon: Car },
    { id: 'bookings', label: language === 'ar' ? 'الحجوزات' : 'Bookings', icon: Calendar },
    { id: 'earnings', label: language === 'ar' ? 'الأرباح' : 'Earnings', icon: DollarSign },
    { id: 'messages', label: language === 'ar' ? 'الرسائل' : 'Messages', icon: MessageCircle },
    { id: 'profile', label: language === 'ar' ? 'الملف الشخصي' : 'Profile', icon: User },
  ];

  const myCars = [
    {
      id: '1',
      name: language === 'ar' ? 'تويوتا كامري' : 'Toyota Camry',
      model: '2023',
      status: 'available',
      bookings: 12,
      rating: 4.8,
      earnings: 2400,
      image: 'https://tse2.mm.bing.net/th/id/OIP.EaNOG-N273XnQ3J3edyf1QHaEK?rs=1&pid=ImgDetMain&o=7&rm=3'
    },
    {
      id: '2',
      name: language === 'ar' ? 'هوندا أكورد' : 'Honda Accord',
      model: '2022',
      status: 'rented',
      bookings: 8,
      rating: 4.7,
      earnings: 1800,
      image: 'https://images.pexels.com/photos/712618/pexels-photo-712618.jpeg?auto=compress&cs=tinysrgb&w=300'
    }
  ];

  const upcomingBookings = [
    {
      id: '1',
      renter: language === 'ar' ? 'محمد الأحمد' : 'Mohammed Al-Ahmad',
      car: language === 'ar' ? 'تويوتا كامري' : 'Toyota Camry',
      date: '2024-01-25',
      time: '10:00 AM',
      duration: '3 days',
      amount: 540
    },
    {
      id: '2',
      renter: language === 'ar' ? 'سارة المطيري' : 'Sarah Al-Mutairi',
      car: language === 'ar' ? 'هوندا أكورد' : 'Honda Accord',
      date: '2024-01-28',
      time: '2:00 PM',
      duration: '1 day',
      amount: 160
    }
  ];

  const stats = [
    {
      title: language === 'ar' ? 'إجمالي الأرباح' : 'Total Earnings',
      value: '12,450',
      unit: language === 'ar' ? 'ريال' : 'SAR',
      change: '+15%',
      icon: DollarSign,
      color: 'green'
    },
    {
      title: language === 'ar' ? 'الحجوزات الشهر' : 'Monthly Bookings',
      value: '24',
      unit: language === 'ar' ? 'حجز' : 'bookings',
      change: '+8%',
      icon: Calendar,
      color: 'blue'
    },
    {
      title: language === 'ar' ? 'متوسط التقييم' : 'Average Rating',
      value: '4.8',
      unit: '/5',
      change: '+0.2',
      icon: Star,
      color: 'yellow'
    },
    {
      title: language === 'ar' ? 'معدل الإشغال' : 'Occupancy Rate',
      value: '85',
      unit: '%',
      change: '+12%',
      icon: TrendingUp,
      color: 'teal'
    }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-6">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 bg-${stat.color}-100 dark:bg-${stat.color}-900/20 rounded-xl flex items-center justify-center`}>
                      <stat.icon className={`w-6 h-6 text-${stat.color}-600`} />
                    </div>
                    <span className={`text-sm font-medium text-${stat.color}-600`}>{stat.change}</span>
                  </div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                    {stat.value}<span className="text-sm text-gray-500 dark:text-gray-400 font-normal"> {stat.unit}</span>
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{stat.title}</div>
                </div>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                {language === 'ar' ? 'إجراءات سريعة' : 'Quick Actions'}
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                <button className="flex items-center space-x-3 rtl:space-x-reverse p-4 bg-teal-50 dark:bg-teal-900/20 rounded-xl hover:bg-teal-100 dark:hover:bg-teal-900/30 transition-colors">
                  <Plus className="w-6 h-6 text-teal-600" />
                  <span className="font-medium text-teal-700 dark:text-teal-300">
                    {language === 'ar' ? 'إضافة سيارة جديدة' : 'Add New Car'}
                  </span>
                </button>
                <button className="flex items-center space-x-3 rtl:space-x-reverse p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors">
                  <Calendar className="w-6 h-6 text-blue-600" />
                  <span className="font-medium text-blue-700 dark:text-blue-300">
                    {language === 'ar' ? 'إدارة التقويم' : 'Manage Calendar'}
                  </span>
                </button>
                <button className="flex items-center space-x-3 rtl:space-x-reverse p-4 bg-orange-50 dark:bg-orange-900/20 rounded-xl hover:bg-orange-100 dark:hover:bg-orange-900/30 transition-colors">
                  <BarChart3 className="w-6 h-6 text-orange-600" />
                  <span className="font-medium text-orange-700 dark:text-orange-300">
                    {language === 'ar' ? 'تقرير الأرباح' : 'Earnings Report'}
                  </span>
                </button>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                {language === 'ar' ? 'النشاط الأخير' : 'Recent Activity'}
              </h3>
              <div className="space-y-4">
                {[
                  { type: 'booking', message: language === 'ar' ? 'حجز جديد لسيارة تويوتا كامري' : 'New booking for Toyota Camry', time: '2 hours ago' },
                  { type: 'review', message: language === 'ar' ? 'تقييم جديد 5 نجوم من محمد الأحمد' : 'New 5-star review from Mohammed Al-Ahmad', time: '5 hours ago' },
                  { type: 'payment', message: language === 'ar' ? 'تم استلام دفعة بقيمة 540 ريال' : 'Payment received: 540 SAR', time: '1 day ago' }
                ].map((activity, index) => (
                  <div key={index} className="flex items-center space-x-3 rtl:space-x-reverse p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                    <div className="flex-1">
                      <p className="text-gray-900 dark:text-white">{activity.message}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'cars':
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                {language === 'ar' ? 'سياراتي' : 'My Cars'}
              </h3>
              <button className="bg-teal-600 text-white px-4 py-2 rounded-xl font-medium hover:bg-teal-700 transition-colors flex items-center space-x-2 rtl:space-x-reverse">
                <Plus className="w-5 h-5" />
                <span>{language === 'ar' ? 'إضافة سيارة' : 'Add Car'}</span>
              </button>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {myCars.map((car) => (
                <div key={car.id} className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm overflow-hidden">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{car.name}</h4>
                        <p className="text-gray-600 dark:text-gray-400">{car.model}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        car.status === 'available' 
                          ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                          : 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200'
                      }`}>
                        {car.status === 'available' 
                          ? (language === 'ar' ? 'متاحة' : 'Available')
                          : (language === 'ar' ? 'مؤجرة' : 'Rented')
                        }
                      </span>
                    </div>

                    <div className="grid grid-cols-3 gap-4 mb-4">
                      <div className="text-center">
                        <div className="text-lg font-bold text-gray-900 dark:text-white">{car.bookings}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">{language === 'ar' ? 'حجز' : 'Bookings'}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-gray-900 dark:text-white">{car.rating}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">{language === 'ar' ? 'تقييم' : 'Rating'}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-teal-600">{car.earnings}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">{language === 'ar' ? 'ريال' : 'SAR'}</div>
                      </div>
                    </div>

                    <div className="flex space-x-2 rtl:space-x-reverse">
                      <button className="flex-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-lg font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors flex items-center justify-center space-x-2 rtl:space-x-reverse">
                        <Eye className="w-4 h-4" />
                        <span>{language === 'ar' ? 'عرض' : 'View'}</span>
                      </button>
                      <button className="flex-1 bg-teal-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-teal-700 transition-colors flex items-center justify-center space-x-2 rtl:space-x-reverse">
                        <Edit className="w-4 h-4" />
                        <span>{language === 'ar' ? 'تعديل' : 'Edit'}</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'bookings':
        return (
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                {language === 'ar' ? 'الحجوزات القادمة' : 'Upcoming Bookings'}
              </h3>
              <div className="space-y-4">
                {upcomingBookings.map((booking) => (
                  <div key={booking.id} className="border border-gray-200 dark:border-gray-600 rounded-xl p-4">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">{booking.renter}</h4>
                        <p className="text-gray-600 dark:text-gray-400">{booking.car}</p>
                      </div>
                      <span className="text-lg font-bold text-teal-600">{booking.amount} {language === 'ar' ? 'ريال' : 'SAR'}</span>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                      <div className="flex items-center space-x-2 rtl:space-x-reverse">
                        <Calendar className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-600 dark:text-gray-400">{booking.date}</span>
                      </div>
                      <div className="flex items-center space-x-2 rtl:space-x-reverse">
                        <Clock className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-600 dark:text-gray-400">{booking.time}</span>
                      </div>
                      <div className="flex items-center space-x-2 rtl:space-x-reverse">
                        <span className="text-gray-600 dark:text-gray-400">{booking.duration}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Calendar View */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                {language === 'ar' ? 'تقويم الحجوزات' : 'Booking Calendar'}
              </h3>
              <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-8 text-center">
                <Calendar className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 dark:text-gray-400">
                  {language === 'ar' ? 'تقويم تفاعلي - قريباً' : 'Interactive Calendar - Coming Soon'}
                </p>
              </div>
            </div>
          </div>
        );

      case 'earnings':
        return (
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                {language === 'ar' ? 'ملخص الأرباح' : 'Earnings Summary'}
              </h3>
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-xl">
                  <div className="text-2xl font-bold text-green-600 mb-1">12,450</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{language === 'ar' ? 'إجمالي الأرباح' : 'Total Earnings'}</div>
                </div>
                <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
                  <div className="text-2xl font-bold text-blue-600 mb-1">2,850</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{language === 'ar' ? 'هذا الشهر' : 'This Month'}</div>
                </div>
                <div className="text-center p-4 bg-orange-50 dark:bg-orange-900/20 rounded-xl">
                  <div className="text-2xl font-bold text-orange-600 mb-1">3,200</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{language === 'ar' ? 'المتوقع القادم' : 'Next Month Est.'}</div>
                </div>
              </div>

              <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-8 text-center">
                <BarChart3 className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 dark:text-gray-400">
                  {language === 'ar' ? 'رسم بياني للأرباح - قريباً' : 'Earnings Chart - Coming Soon'}
                </p>
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
                  { name: language === 'ar' ? 'محمد الأحمد' : 'Mohammed Al-Ahmad', message: language === 'ar' ? 'متى يمكنني استلام السيارة؟' : 'When can I pick up the car?', time: '10:30 AM', unread: true },
                  { name: language === 'ar' ? 'سارة المطيري' : 'Sarah Al-Mutairi', message: language === 'ar' ? 'شكراً لك، السيارة رائعة!' : 'Thank you, the car is amazing!', time: 'Yesterday', unread: false },
                  { name: language === 'ar' ? 'أحمد العلي' : 'Ahmed Al-Ali', message: language === 'ar' ? 'هل يمكن تمديد فترة الإيجار؟' : 'Can I extend the rental period?', time: '2 days ago', unread: false }
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
                    <Award className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600 dark:text-gray-400 mr-1">{language === 'ar' ? 'مؤجر موثوق' : 'Trusted Owner'}</span>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white">{language === 'ar' ? 'الإحصائيات' : 'Statistics'}</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">{language === 'ar' ? 'إجمالي الحجوزات' : 'Total Bookings'}</span>
                      <span className="font-medium text-gray-900 dark:text-white">156</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">{language === 'ar' ? 'التقييم' : 'Rating'}</span>
                      <span className="font-medium text-yellow-600">4.9/5</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">{language === 'ar' ? 'النقاط' : 'Points'}</span>
                      <span className="font-medium text-teal-600">2,450</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">{language === 'ar' ? 'المستوى' : 'Level'}</span>
                      <span className="font-medium text-gray-900 dark:text-white">{language === 'ar' ? 'ذهبي' : 'Gold'}</span>
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
                      <Settings className="w-5 h-5" />
                      <span>{language === 'ar' ? 'إعدادات الحساب' : 'Account Settings'}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Rewards Section */}
            <div className="bg-gradient-to-r from-teal-600 to-teal-700 rounded-2xl shadow-sm p-6 text-white">
              <h4 className="text-lg font-semibold mb-4">{language === 'ar' ? 'نظام المكافآت' : 'Rewards System'}</h4>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center">
                  <Award className="w-8 h-8 mx-auto mb-2 text-yellow-300" />
                  <div className="text-xl font-bold">2,450</div>
                  <div className="text-sm text-teal-100">{language === 'ar' ? 'نقطة' : 'Points'}</div>
                </div>
                <div className="text-center">
                  <Star className="w-8 h-8 mx-auto mb-2 text-yellow-300" />
                  <div className="text-xl font-bold">{language === 'ar' ? 'ذهبي' : 'Gold'}</div>
                  <div className="text-sm text-teal-100">{language === 'ar' ? 'المستوى' : 'Level'}</div>
                </div>
                <div className="text-center">
                  <TrendingUp className="w-8 h-8 mx-auto mb-2 text-yellow-300" />
                  <div className="text-xl font-bold">#12</div>
                  <div className="text-sm text-teal-100">{language === 'ar' ? 'الترتيب' : 'Ranking'}</div>
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
            {language === 'ar' ? 'لوحة تحكم المؤجر' : 'Owner Dashboard'}
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

export default OwnerDashboard;