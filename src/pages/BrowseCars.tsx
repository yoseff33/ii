import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Filter, 
  MapPin, 
  Star, 
  Car,
  Calendar,
  DollarSign,
  Users,
  Fuel,
  Settings,
  CheckCircle
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const BrowseCars: React.FC = () => {
  const { language, t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [carType, setCarType] = useState('');
  const [sortBy, setSortBy] = useState('distance');
  const [showFilters, setShowFilters] = useState(false);

  const sampleCars = [
    {
      id: '1',
      name: language === 'ar' ? 'تويوتا كامري' : 'Toyota Camry',
      model: 'Camry 2023',
      year: 2023,
      image: 'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=800',
      pricePerHour: 25,
      pricePerDay: 180,
      pricePerMonth: 4500,
      location: language === 'ar' ? 'الرياض - حي النخيل' : 'Riyadh - Al Nakheel',
      distance: 2.3,
      rating: 4.8,
      reviews: 42,
      features: [
        language === 'ar' ? 'مكيف' : 'AC',
        'GPS',
        language === 'ar' ? 'بلوتوث' : 'Bluetooth',
        language === 'ar' ? 'كاميرا خلفية' : 'Backup Camera'
      ],
      available: true,
      owner: {
        name: language === 'ar' ? 'أحمد العلي' : 'Ahmed Al-Ali',
        rating: 4.9,
        verified: true
      },
      insurance: true,
      instantBook: true,
      type: 'sedan',
      transmission: language === 'ar' ? 'أوتوماتيك' : 'Automatic',
      fuel: language === 'ar' ? 'بنزين' : 'Gasoline',
      seats: 5
    },
    {
      id: '2',
      name: language === 'ar' ? 'هوندا أكورد' : 'Honda Accord',
      model: 'Accord 2022',
      year: 2022,
      image: 'https://arabgt.com/wp-content/uploads/2021/12/%D9%87%D9%88%D9%86%D8%AF%D8%A7-%D8%A7%D9%83%D9%88%D8%B1%D8%AF-2022-17.jpg',
      pricePerHour: 22,
      pricePerDay: 160,
      pricePerMonth: 4200,
      location: language === 'ar' ? 'جدة - حي الزهراء' : 'Jeddah - Al Zahra',
      distance: 1.8,
      rating: 4.7,
      reviews: 38,
      features: [
        language === 'ar' ? 'مكيف' : 'AC',
        language === 'ar' ? 'شاشة تعمل باللمس' : 'Touchscreen',
        language === 'ar' ? 'مقاعد جلد' : 'Leather Seats'
      ],
      available: true,
      owner: {
        name: language === 'ar' ? 'فاطمة الأحمد' : 'Fatima Al-Ahmad',
        rating: 4.8,
        verified: true
      },
      insurance: true,
      instantBook: false,
      type: 'sedan',
      transmission: language === 'ar' ? 'أوتوماتيك' : 'Automatic',
      fuel: language === 'ar' ? 'بنزين' : 'Gasoline',
      seats: 5
    },
    {
      id: '3',
      name: language === 'ar' ? 'نيسان التيما' : 'Nissan Altima',
      model: 'Altima 2021',
      year: 2021,
      image: 'https://images.pexels.com/photos/1209778/pexels-photo-1209778.jpeg?auto=compress&cs=tinysrgb&w=800',
      pricePerHour: 20,
      pricePerDay: 140,
      pricePerMonth: 3800,
      location: language === 'ar' ? 'الدمام - الكورنيش' : 'Dammam - Corniche',
      distance: 3.1,
      rating: 4.6,
      reviews: 29,
      features: [
        language === 'ar' ? 'مكيف' : 'AC',
        language === 'ar' ? 'راديو' : 'Radio',
        language === 'ar' ? 'مدخل USB' : 'USB Port'
      ],
      available: true,
      owner: {
        name: language === 'ar' ? 'محمد السالم' : 'Mohammed Al-Salem',
        rating: 4.7,
        verified: true
      },
      insurance: true,
      instantBook: true,
      type: 'sedan',
      transmission: language === 'ar' ? 'أوتوماتيك' : 'Automatic',
      fuel: language === 'ar' ? 'بنزين' : 'Gasoline',
      seats: 5
    },
    {
      id: '4',
      name: language === 'ar' ? 'تويوتا راف 4' : 'Toyota RAV4',
      model: 'RAV4 2023',
      year: 2023,
      image: 'https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=800',
      pricePerHour: 35,
      pricePerDay: 250,
      pricePerMonth: 6000,
      location: language === 'ar' ? 'الرياض - العليا' : 'Riyadh - Al Olaya',
      distance: 4.2,
      rating: 4.9,
      reviews: 56,
      features: [
        language === 'ar' ? 'مكيف' : 'AC',
        'GPS',
        language === 'ar' ? 'دفع رباعي' : '4WD',
        language === 'ar' ? 'فتحة سقف' : 'Sunroof'
      ],
      available: true,
      owner: {
        name: language === 'ar' ? 'سارة المطيري' : 'Sarah Al-Mutairi',
        rating: 4.9,
        verified: true
      },
      insurance: true,
      instantBook: true,
      type: 'suv',
      transmission: language === 'ar' ? 'أوتوماتيك' : 'Automatic',
      fuel: language === 'ar' ? 'بنزين' : 'Gasoline',
      seats: 7
    }
  ];

  const filteredCars = sampleCars.filter(car => {
    const matchesSearch = car.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         car.model.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesLocation = car.location.includes(locationFilter);
    const matchesPrice = car.pricePerDay >= priceRange[0] && car.pricePerDay <= priceRange[1];
    const matchesType = !carType || car.type === carType;
    
    return matchesSearch && matchesLocation && matchesPrice && matchesType;
  });

  const sortedCars = [...filteredCars].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.pricePerDay - b.pricePerDay;
      case 'price-high':
        return b.pricePerDay - a.pricePerDay;
      case 'rating':
        return b.rating - a.rating;
      case 'distance':
      default:
        return a.distance - b.distance;
    }
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {language === 'ar' ? 'استأجر السيارة المناسبة' : 'Find Your Perfect Car'}
          </h1>
          <p className="text-xl text-gray-600">
            {language === 'ar' 
              ? 'اكتشف مئات السيارات المتاحة بالقرب منك'
              : 'Discover hundreds of available cars near you'
            }
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-8">
          {/* Main Search Bar */}
          <div className="grid md:grid-cols-4 gap-4 mb-6">
            <div className="relative">
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder={language === 'ar' ? 'نوع السيارة أو الموديل' : 'Car type or model'}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="input-field pr-10"
              />
            </div>
            
            <div className="relative">
              <MapPin className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder={language === 'ar' ? 'المدينة أو الموقع' : 'City or location'}
                value={locationFilter}
                onChange={(e) => setLocationFilter(e.target.value)}
                className="input-field pr-10"
              />
            </div>
            
            <select 
              className="input-field"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="distance">{language === 'ar' ? 'الأقرب' : 'Nearest'}</option>
              <option value="price-low">{language === 'ar' ? 'السعر: من الأقل' : 'Price: Low to High'}</option>
              <option value="price-high">{language === 'ar' ? 'السعر: من الأعلى' : 'Price: High to Low'}</option>
              <option value="rating">{language === 'ar' ? 'الأعلى تقييماً' : 'Highest Rated'}</option>
            </select>
            
            <button 
              onClick={() => setShowFilters(!showFilters)}
              className="btn-outline flex items-center justify-center space-x-2 rtl:space-x-reverse"
            >
              <Filter className="w-5 h-5" />
              <span>{language === 'ar' ? 'فلاتر متقدمة' : 'Advanced Filters'}</span>
            </button>
          </div>

          {/* Advanced Filters */}
          {showFilters && (
            <div className="border-t pt-6 grid md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {language === 'ar' ? 'نوع السيارة' : 'Car Type'}
                </label>
                <select 
                  className="input-field"
                  value={carType}
                  onChange={(e) => setCarType(e.target.value)}
                >
                  <option value="">{language === 'ar' ? 'جميع الأنواع' : 'All Types'}</option>
                  <option value="sedan">{language === 'ar' ? 'سيدان' : 'Sedan'}</option>
                  <option value="suv">{language === 'ar' ? 'دفع رباعي' : 'SUV'}</option>
                  <option value="hatchback">{language === 'ar' ? 'هاتشباك' : 'Hatchback'}</option>
                  <option value="coupe">{language === 'ar' ? 'كوبيه' : 'Coupe'}</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {language === 'ar' ? 'نطاق السعر اليومي' : 'Daily Price Range'}
                </label>
                <div className="flex items-center space-x-4 rtl:space-x-reverse">
                  <input
                    type="number"
                    placeholder="0"
                    value={priceRange[0]}
                    onChange={(e) => setPriceRange([parseInt(e.target.value) || 0, priceRange[1]])}
                    className="input-field flex-1"
                  />
                  <span className="text-gray-500">-</span>
                  <input
                    type="number"
                    placeholder="1000"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value) || 1000])}
                    className="input-field flex-1"
                  />
                </div>
              </div>
              
              <div className="flex items-end">
                <button 
                  onClick={() => {
                    setSearchQuery('');
                    setLocationFilter('');
                    setPriceRange([0, 1000]);
                    setCarType('');
                    setSortBy('distance');
                  }}
                  className="btn-outline w-full"
                >
                  {language === 'ar' ? 'مسح الفلاتر' : 'Clear Filters'}
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Results Count */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-gray-600">
            {language === 'ar' 
              ? `تم العثور على ${sortedCars.length} سيارة`
              : `Found ${sortedCars.length} cars`
            }
          </p>
          <div className="flex items-center space-x-2 rtl:space-x-reverse text-sm text-gray-500">
            <MapPin className="w-4 h-4" />
            <span>{language === 'ar' ? 'مرتبة حسب المسافة' : 'Sorted by distance'}</span>
          </div>
        </div>

        {/* Cars Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedCars.map((car) => (
            <div key={car.id} className="card overflow-hidden">
              <div className="relative">
                <img 
                  src={car.image} 
                  alt={car.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 flex flex-col gap-2">
                  {car.instantBook && (
                    <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {t('common.instantBook')}
                    </div>
                  )}
                  {car.insurance && (
                    <div className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {t('common.insured')}
                    </div>
                  )}
                </div>
                <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-sm">
                  {car.distance} {t('units.km')}
                </div>
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
                </div>

                {/* Car Details */}
                <div className="grid grid-cols-3 gap-2 mb-4 text-xs text-gray-600">
                  <div className="flex items-center">
                    <Users className="w-3 h-3 ml-1" />
                    <span>{car.seats}</span>
                  </div>
                  <div className="flex items-center">
                    <Settings className="w-3 h-3 ml-1" />
                    <span>{car.transmission}</span>
                  </div>
                  <div className="flex items-center">
                    <Fuel className="w-3 h-3 ml-1" />
                    <span>{car.fuel}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {car.features.slice(0, 3).map((feature, index) => (
                    <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs">
                      {feature}
                    </span>
                  ))}
                  {car.features.length > 3 && (
                    <span className="text-gray-500 text-xs">
                      +{car.features.length - 3} {language === 'ar' ? 'المزيد' : 'more'}
                    </span>
                  )}
                </div>

                {/* Owner Info */}
                <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-100">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center">
                      <span className="text-teal-600 font-medium text-sm">
                        {car.owner.name.charAt(0)}
                      </span>
                    </div>
                    <div className="mr-2">
                      <p className="text-sm font-medium text-gray-900">{car.owner.name}</p>
                      <div className="flex items-center">
                        <Star className="w-3 h-3 text-yellow-400 fill-current" />
                        <span className="text-xs text-gray-600 mr-1">{car.owner.rating}</span>
                        {car.owner.verified && (
                          <CheckCircle className="w-3 h-3 text-green-500" />
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Pricing */}
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">{t('units.perHour')}</span>
                    <span className="font-medium">{car.pricePerHour} {t('units.sar')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">{t('units.perDay')}</span>
                    <span className="text-lg font-bold text-teal-600">{car.pricePerDay} {t('units.sar')}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">{t('units.perMonth')}</span>
                    <span className="font-medium">{car.pricePerMonth} {t('units.sar')}</span>
                  </div>
                </div>

                {/* Action Button */}
                <Link 
                  to={`/car/${car.id}`}
                  className="block w-full text-center btn-primary"
                >
                  {t('common.viewDetails')}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {sortedCars.length > 0 && (
          <div className="text-center mt-12">
            <button className="btn-outline">
              {language === 'ar' ? 'تحميل المزيد' : 'Load More'}
            </button>
          </div>
        )}

        {/* No Results */}
        {sortedCars.length === 0 && (
          <div className="text-center py-16">
            <Car className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {language === 'ar' ? 'لم يتم العثور على سيارات' : 'No Cars Found'}
            </h3>
            <p className="text-gray-600 mb-6">
              {language === 'ar' 
                ? 'جرب تعديل معايير البحث أو الفلاتر'
                : 'Try adjusting your search criteria or filters'
              }
            </p>
            <button 
              onClick={() => {
                setSearchQuery('');
                setLocationFilter('');
                setPriceRange([0, 1000]);
                setCarType('');
              }}
              className="btn-primary"
            >
              {language === 'ar' ? 'مسح الفلاتر' : 'Clear Filters'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BrowseCars;