import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Star, 
  MapPin, 
  User, 
  CheckCircle, 
  Shield, 
  Calendar,
  Clock,
  Car,
  Users,
  Settings,
  Fuel,
  ArrowLeft,
  Heart,
  Share2,
  MessageCircle,
  Phone
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const CarDetails: React.FC = () => {
  const { id } = useParams();
  const { language, t, isRTL } = useLanguage();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [rentalPeriod, setRentalPeriod] = useState<'hour' | 'day' | 'month'>('day');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [showBookingModal, setShowBookingModal] = useState(false);

  // Mock car data - in real app, this would come from API
  const car = {
    id: '1',
    name: language === 'ar' ? 'تويوتا كامري' : 'Toyota Camry',
    model: 'Camry 2023',
    year: 2023,
    images: [
      'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/712618/pexels-photo-712618.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1209778/pexels-photo-1209778.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    pricePerHour: 25,
    pricePerDay: 180,
    pricePerMonth: 4500,
    location: language === 'ar' ? 'الرياض - حي النخيل' : 'Riyadh - Al Nakheel',
    distance: 2.3,
    rating: 4.8,
    reviews: 42,
    features: [
      language === 'ar' ? 'مكيف' : 'Air Conditioning',
      'GPS',
      language === 'ar' ? 'بلوتوث' : 'Bluetooth',
      language === 'ar' ? 'كاميرا خلفية' : 'Backup Camera',
      language === 'ar' ? 'مقاعد جلد' : 'Leather Seats',
      language === 'ar' ? 'فتحة سقف' : 'Sunroof'
    ],
    available: true,
    owner: {
      name: language === 'ar' ? 'أحمد العلي' : 'Ahmed Al-Ali',
      rating: 4.9,
      verified: true,
      joinDate: '2022',
      totalTrips: 156,
      responseTime: language === 'ar' ? 'خلال ساعة' : 'Within 1 hour'
    },
    insurance: true,
    instantBook: true,
    type: 'sedan',
    transmission: language === 'ar' ? 'أوتوماتيك' : 'Automatic',
    fuel: language === 'ar' ? 'بنزين' : 'Gasoline',
    seats: 5,
    description: language === 'ar' 
      ? 'سيارة تويوتا كامري 2023 في حالة ممتازة، مناسبة للرحلات الطويلة والقصيرة. السيارة نظيفة ومعتنى بها جيداً مع صيانة دورية منتظمة.'
      : 'Toyota Camry 2023 in excellent condition, suitable for long and short trips. The car is clean and well-maintained with regular periodic maintenance.',
    rules: [
      language === 'ar' ? 'ممنوع التدخين' : 'No smoking',
      language === 'ar' ? 'العودة بخزان ممتلئ' : 'Return with full tank',
      language === 'ar' ? 'الحد الأقصى للسرعة 120 كم/س' : 'Maximum speed 120 km/h',
      language === 'ar' ? 'ممنوع السفر خارج المدينة بدون إذن' : 'No intercity travel without permission'
    ]
  };

  const reviews = [
    {
      id: 1,
      user: language === 'ar' ? 'محمد الأحمد' : 'Mohammed Al-Ahmad',
      rating: 5,
      date: '2024-01-15',
      comment: language === 'ar' 
        ? 'سيارة ممتازة ونظيفة، المالك متعاون جداً. أنصح بها بشدة!'
        : 'Excellent and clean car, very cooperative owner. Highly recommended!'
    },
    {
      id: 2,
      user: language === 'ar' ? 'سارة المطيري' : 'Sarah Al-Mutairi',
      rating: 5,
      date: '2024-01-10',
      comment: language === 'ar'
        ? 'تجربة رائعة، السيارة كما هو موضح في الصور تماماً.'
        : 'Great experience, the car is exactly as shown in the pictures.'
    },
    {
      id: 3,
      user: language === 'ar' ? 'عبدالله الزهراني' : 'Abdullah Al-Zahrani',
      rating: 4,
      date: '2024-01-05',
      comment: language === 'ar'
        ? 'سيارة جيدة ومريحة، لكن كان هناك تأخير بسيط في التسليم.'
        : 'Good and comfortable car, but there was a slight delay in delivery.'
    }
  ];

  const calculatePrice = () => {
    if (!startDate || !endDate) return 0;
    
    const start = new Date(startDate);
    const end = new Date(endDate);
    const diffTime = Math.abs(end.getTime() - start.getTime());
    
    switch (rentalPeriod) {
      case 'hour':
        const diffHours = Math.ceil(diffTime / (1000 * 60 * 60));
        return diffHours * car.pricePerHour;
      case 'day':
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return diffDays * car.pricePerDay;
      case 'month':
        const diffMonths = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 30));
        return diffMonths * car.pricePerMonth;
      default:
        return 0;
    }
  };

  const handleBooking = () => {
    if (!startDate || !endDate) {
      alert(language === 'ar' ? 'يرجى تحديد تاريخ البداية والنهاية' : 'Please select start and end dates');
      return;
    }
    setShowBookingModal(true);
  };

  const confirmBooking = () => {
    alert(language === 'ar' ? 'تم تأكيد الحجز بنجاح!' : 'Booking confirmed successfully!');
    setShowBookingModal(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container-custom">
        {/* Back Button */}
        <Link 
          to="/browse-cars"
          className="inline-flex items-center space-x-2 rtl:space-x-reverse text-gray-600 hover:text-teal-600 mb-6 transition-colors"
        >
          <ArrowLeft className={`w-5 h-5 ${isRTL ? 'rotate-180' : ''}`} />
          <span>{language === 'ar' ? 'العودة للبحث' : 'Back to Search'}</span>
        </Link>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Image Gallery */}
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
              <div className="relative">
                <img 
                  src={car.images[selectedImageIndex]} 
                  alt={car.name}
                  className="w-full h-96 object-cover"
                />
                <div className="absolute top-4 right-4 flex space-x-2 rtl:space-x-reverse">
                  <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-50 transition-colors">
                    <Heart className="w-5 h-5 text-gray-600" />
                  </button>
                  <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-50 transition-colors">
                    <Share2 className="w-5 h-5 text-gray-600" />
                  </button>
                </div>
                
                {car.instantBook && (
                  <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {t('common.instantBook')}
                  </div>
                )}
              </div>
              
              {/* Thumbnail Gallery */}
              <div className="p-4">
                <div className="flex space-x-2 rtl:space-x-reverse overflow-x-auto">
                  {car.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImageIndex(index)}
                      className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                        selectedImageIndex === index ? 'border-teal-500' : 'border-gray-200'
                      }`}
                    >
                      <img 
                        src={image} 
                        alt={`${car.name} ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Car Info */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">{car.name}</h1>
                  <p className="text-xl text-gray-600">{car.model}</p>
                </div>
                <div className="flex items-center">
                  <Star className="w-6 h-6 text-yellow-400 fill-current" />
                  <span className="text-xl font-semibold text-gray-700 mr-2">{car.rating}</span>
                  <span className="text-gray-500">({car.reviews} {t('common.reviews')})</span>
                </div>
              </div>

              <div className="flex items-center text-gray-600 mb-6">
                <MapPin className="w-5 h-5 ml-2" />
                <span>{car.location}</span>
                <span className="text-gray-400 mr-2">({car.distance} {t('units.km')})</span>
              </div>

              {/* Car Specs */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <Users className="w-6 h-6 text-gray-600 mx-auto mb-2" />
                  <div className="text-sm text-gray-600">{language === 'ar' ? 'المقاعد' : 'Seats'}</div>
                  <div className="font-semibold">{car.seats}</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <Settings className="w-6 h-6 text-gray-600 mx-auto mb-2" />
                  <div className="text-sm text-gray-600">{language === 'ar' ? 'ناقل الحركة' : 'Transmission'}</div>
                  <div className="font-semibold">{car.transmission}</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <Fuel className="w-6 h-6 text-gray-600 mx-auto mb-2" />
                  <div className="text-sm text-gray-600">{language === 'ar' ? 'نوع الوقود' : 'Fuel Type'}</div>
                  <div className="font-semibold">{car.fuel}</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <Car className="w-6 h-6 text-gray-600 mx-auto mb-2" />
                  <div className="text-sm text-gray-600">{language === 'ar' ? 'السنة' : 'Year'}</div>
                  <div className="font-semibold">{car.year}</div>
                </div>
              </div>

              {/* Features */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {language === 'ar' ? 'مميزات السيارة' : 'Car Features'}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {car.features.map((feature, index) => (
                    <span key={index} className="bg-teal-50 text-teal-700 px-3 py-1 rounded-full text-sm font-medium">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* Description */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {language === 'ar' ? 'وصف السيارة' : 'Description'}
                </h3>
                <p className="text-gray-600 leading-relaxed">{car.description}</p>
              </div>

              {/* Rules */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {language === 'ar' ? 'قواعد الاستخدام' : 'Usage Rules'}
                </h3>
                <ul className="space-y-2">
                  {car.rules.map((rule, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 ml-2 flex-shrink-0" />
                      <span>{rule}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Owner Info */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {language === 'ar' ? 'صاحب السيارة' : 'Car Owner'}
              </h3>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center">
                    <User className="w-8 h-8 text-teal-600" />
                  </div>
                  <div className="mr-4">
                    <div className="flex items-center mb-1">
                      <h4 className="font-semibold text-gray-900">{car.owner.name}</h4>
                      {car.owner.verified && (
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      )}
                    </div>
                    <div className="flex items-center mb-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600 mr-1">{car.owner.rating}</span>
                      <span className="text-sm text-gray-500">
                        ({car.owner.totalTrips} {language === 'ar' ? 'رحلة' : 'trips'})
                      </span>
                    </div>
                    <div className="text-sm text-gray-500">
                      {language === 'ar' ? 'عضو منذ' : 'Member since'} {car.owner.joinDate}
                    </div>
                    <div className="text-sm text-gray-500">
                      {language === 'ar' ? 'يرد عادة' : 'Usually responds'} {car.owner.responseTime}
                    </div>
                  </div>
                </div>
                <div className="flex space-x-2 rtl:space-x-reverse">
                  <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    <MessageCircle className="w-5 h-5 text-gray-600" />
                  </button>
                  <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    <Phone className="w-5 h-5 text-gray-600" />
                  </button>
                </div>
              </div>
            </div>

            {/* Reviews */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {language === 'ar' ? 'التقييمات' : 'Reviews'} ({reviews.length})
              </h3>
              <div className="space-y-4">
                {reviews.map((review) => (
                  <div key={review.id} className="border-b border-gray-100 pb-4 last:border-b-0">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                          <span className="text-sm font-medium text-gray-600">
                            {review.user.charAt(0)}
                          </span>
                        </div>
                        <span className="font-medium text-gray-900 mr-3">{review.user}</span>
                      </div>
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`w-4 h-4 ${
                              i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                            }`} 
                          />
                        ))}
                        <span className="text-sm text-gray-500 mr-2">{review.date}</span>
                      </div>
                    </div>
                    <p className="text-gray-600">{review.comment}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-sm p-6 sticky top-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                {language === 'ar' ? 'احجز الآن' : 'Book Now'}
              </h3>

              {/* Pricing Options */}
              <div className="mb-6">
                <div className="grid grid-cols-3 gap-2 mb-4">
                  <button 
                    onClick={() => setRentalPeriod('hour')}
                    className={`p-3 rounded-lg border-2 text-center transition-colors ${
                      rentalPeriod === 'hour' 
                        ? 'border-teal-500 bg-teal-50 text-teal-700' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="font-bold">{car.pricePerHour}</div>
                    <div className="text-xs text-gray-600">{t('units.perHour')}</div>
                  </button>
                  <button 
                    onClick={() => setRentalPeriod('day')}
                    className={`p-3 rounded-lg border-2 text-center transition-colors ${
                      rentalPeriod === 'day' 
                        ? 'border-teal-500 bg-teal-50 text-teal-700' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="font-bold">{car.pricePerDay}</div>
                    <div className="text-xs text-gray-600">{t('units.perDay')}</div>
                  </button>
                  <button 
                    onClick={() => setRentalPeriod('month')}
                    className={`p-3 rounded-lg border-2 text-center transition-colors ${
                      rentalPeriod === 'month' 
                        ? 'border-teal-500 bg-teal-50 text-teal-700' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="font-bold">{car.pricePerMonth}</div>
                    <div className="text-xs text-gray-600">{t('units.perMonth')}</div>
                  </button>
                </div>
              </div>

              {/* Date Selection */}
              <div className="mb-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {language === 'ar' ? 'من' : 'From'}
                    </label>
                    <input
                      type="datetime-local"
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                      className="input-field text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {language === 'ar' ? 'إلى' : 'To'}
                    </label>
                    <input
                      type="datetime-local"
                      value={endDate}
                      onChange={(e) => setEndDate(e.target.value)}
                      className="input-field text-sm"
                    />
                  </div>
                </div>
              </div>

              {/* Price Calculation */}
              {startDate && endDate && (
                <div className="mb-6 p-4 bg-gray-50 rounded-xl">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600">
                      {language === 'ar' ? 'المجموع' : 'Total'}
                    </span>
                    <span className="text-2xl font-bold text-teal-600">
                      {calculatePrice()} {t('units.sar')}
                    </span>
                  </div>
                  <div className="text-sm text-gray-500">
                    {language === 'ar' ? 'شامل التأمين والضرائب' : 'Including insurance and taxes'}
                  </div>
                </div>
              )}

              {/* Insurance Info */}
              <div className="mb-6 p-4 bg-blue-50 rounded-xl">
                <div className="flex items-center mb-2">
                  <Shield className="w-5 h-5 text-blue-600 ml-2" />
                  <span className="font-medium text-blue-900">
                    {language === 'ar' ? 'تأمين شامل' : 'Full Insurance'}
                  </span>
                </div>
                <p className="text-sm text-blue-700">
                  {language === 'ar' 
                    ? 'السيارة مؤمنة بالكامل ضد الحوادث والأضرار'
                    : 'Car is fully insured against accidents and damages'
                  }
                </p>
              </div>

              {/* Book Button */}
              <button 
                onClick={handleBooking}
                className="w-full btn-primary text-lg py-4 mb-4"
              >
                {car.instantBook 
                  ? (language === 'ar' ? 'حجز فوري' : 'Instant Book')
                  : (language === 'ar' ? 'طلب حجز' : 'Request Booking')
                }
              </button>

              <p className="text-xs text-gray-500 text-center">
                {language === 'ar' 
                  ? 'لن يتم خصم أي مبلغ حتى تأكيد الحجز'
                  : 'No charge until booking is confirmed'
                }
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Confirmation Modal */}
      {showBookingModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-md w-full p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              {language === 'ar' ? 'تأكيد الحجز' : 'Confirm Booking'}
            </h3>
            <div className="space-y-3 mb-6">
              <div className="flex justify-between">
                <span className="text-gray-600">{language === 'ar' ? 'السيارة' : 'Car'}</span>
                <span className="font-medium">{car.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">{language === 'ar' ? 'المدة' : 'Duration'}</span>
                <span className="font-medium">{rentalPeriod === 'hour' ? t('units.hour') : rentalPeriod === 'day' ? t('units.day') : t('units.month')}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">{language === 'ar' ? 'المجموع' : 'Total'}</span>
                <span className="font-bold text-teal-600">{calculatePrice()} {t('units.sar')}</span>
              </div>
            </div>
            <div className="flex space-x-4 rtl:space-x-reverse">
              <button 
                onClick={() => setShowBookingModal(false)}
                className="flex-1 btn-outline"
              >
                {language === 'ar' ? 'إلغاء' : 'Cancel'}
              </button>
              <button 
                onClick={confirmBooking}
                className="flex-1 btn-primary"
              >
                {language === 'ar' ? 'تأكيد' : 'Confirm'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CarDetails;