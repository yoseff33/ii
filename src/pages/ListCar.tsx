import React, { useState } from 'react';
import { 
  Upload, 
  MapPin, 
  Calendar, 
  DollarSign, 
  Car, 
  Shield,
  CheckCircle,
  AlertCircle,
  Camera,
  Plus,
  X
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const ListCar: React.FC = () => {
  const { language, t } = useLanguage();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Car Details
    make: '',
    model: '',
    year: '',
    color: '',
    plateNumber: '',
    
    // Location & Availability
    city: '',
    district: '',
    address: '',
    availableFrom: '',
    availableTo: '',
    
    // Pricing
    hourlyRate: '',
    dailyRate: '',
    monthlyRate: '',
    
    // Features
    features: [] as string[],
    
    // Images
    images: [] as File[],
    
    // Additional Info
    description: '',
    rules: '',
  });

  const [uploadedImages, setUploadedImages] = useState<string[]>([]);

  const carFeatures = [
    { id: 'ac', label: language === 'ar' ? 'مكيف' : 'Air Conditioning' },
    { id: 'gps', label: language === 'ar' ? 'نظام ملاحة GPS' : 'GPS Navigation' },
    { id: 'bluetooth', label: language === 'ar' ? 'بلوتوث' : 'Bluetooth' },
    { id: 'camera', label: language === 'ar' ? 'كاميرا خلفية' : 'Backup Camera' },
    { id: 'leather', label: language === 'ar' ? 'مقاعد جلد' : 'Leather Seats' },
    { id: 'sunroof', label: language === 'ar' ? 'فتحة سقف' : 'Sunroof' },
    { id: 'usb', label: language === 'ar' ? 'منافذ USB' : 'USB Ports' },
    { id: 'wifi', label: language === 'ar' ? 'واي فاي' : 'WiFi Hotspot' },
  ];

  const steps = [
    { 
      number: 1, 
      title: language === 'ar' ? 'معلومات السيارة' : 'Car Information',
      icon: Car 
    },
    { 
      number: 2, 
      title: language === 'ar' ? 'الموقع والتوفر' : 'Location & Availability',
      icon: MapPin 
    },
    { 
      number: 3, 
      title: language === 'ar' ? 'التسعير والمميزات' : 'Pricing & Features',
      icon: DollarSign 
    },
    { 
      number: 4, 
      title: language === 'ar' ? 'الصور والوصف' : 'Photos & Description',
      icon: Camera 
    },
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFeatureToggle = (featureId: string) => {
    setFormData(prev => ({
      ...prev,
      features: prev.features.includes(featureId)
        ? prev.features.filter(f => f !== featureId)
        : [...prev.features, featureId]
    }));
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    if (files.length > 0) {
      files.forEach(file => {
        const reader = new FileReader();
        reader.onload = (e) => {
          setUploadedImages(prev => [...prev, e.target?.result as string]);
        };
        reader.readAsDataURL(file);
      });
      setFormData(prev => ({ ...prev, images: [...prev.images, ...files] }));
    }
  };

  const removeImage = (index: number) => {
    setUploadedImages(prev => prev.filter((_, i) => i !== index));
    setFormData(prev => ({ 
      ...prev, 
      images: prev.images.filter((_, i) => i !== index) 
    }));
  };

  const nextStep = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleSubmit = () => {
    // Here you would typically submit the form data to your backend
    alert(language === 'ar' ? 'تم إرسال طلب إضافة السيارة بنجاح!' : 'Car listing request submitted successfully!');
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              {language === 'ar' ? 'معلومات السيارة الأساسية' : 'Basic Car Information'}
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {language === 'ar' ? 'الماركة' : 'Make'}
                </label>
                <select 
                  className="input-field"
                  value={formData.make}
                  onChange={(e) => handleInputChange('make', e.target.value)}
                >
                  <option value="">{language === 'ar' ? 'اختر الماركة' : 'Select Make'}</option>
                  <option value="toyota">{language === 'ar' ? 'تويوتا' : 'Toyota'}</option>
                  <option value="honda">{language === 'ar' ? 'هوندا' : 'Honda'}</option>
                  <option value="nissan">{language === 'ar' ? 'نيسان' : 'Nissan'}</option>
                  <option value="hyundai">{language === 'ar' ? 'هيونداي' : 'Hyundai'}</option>
                  <option value="kia">{language === 'ar' ? 'كيا' : 'Kia'}</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {language === 'ar' ? 'الموديل' : 'Model'}
                </label>
                <input
                  type="text"
                  className="input-field"
                  placeholder={language === 'ar' ? 'مثال: كامري' : 'e.g., Camry'}
                  value={formData.model}
                  onChange={(e) => handleInputChange('model', e.target.value)}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {language === 'ar' ? 'سنة الصنع' : 'Year'}
                </label>
                <select 
                  className="input-field"
                  value={formData.year}
                  onChange={(e) => handleInputChange('year', e.target.value)}
                >
                  <option value="">{language === 'ar' ? 'اختر السنة' : 'Select Year'}</option>
                  {Array.from({ length: 15 }, (_, i) => 2024 - i).map(year => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {language === 'ar' ? 'اللون' : 'Color'}
                </label>
                <input
                  type="text"
                  className="input-field"
                  placeholder={language === 'ar' ? 'مثال: أبيض' : 'e.g., White'}
                  value={formData.color}
                  onChange={(e) => handleInputChange('color', e.target.value)}
                />
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {language === 'ar' ? 'رقم اللوحة' : 'License Plate'}
                </label>
                <input
                  type="text"
                  className="input-field"
                  placeholder={language === 'ar' ? 'مثال: أ ب ج 1234' : 'e.g., ABC 1234'}
                  value={formData.plateNumber}
                  onChange={(e) => handleInputChange('plateNumber', e.target.value)}
                />
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              {language === 'ar' ? 'الموقع وأوقات التوفر' : 'Location & Availability'}
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {language === 'ar' ? 'المدينة' : 'City'}
                </label>
                <select 
                  className="input-field"
                  value={formData.city}
                  onChange={(e) => handleInputChange('city', e.target.value)}
                >
                  <option value="">{language === 'ar' ? 'اختر المدينة' : 'Select City'}</option>
                  <option value="riyadh">{language === 'ar' ? 'الرياض' : 'Riyadh'}</option>
                  <option value="jeddah">{language === 'ar' ? 'جدة' : 'Jeddah'}</option>
                  <option value="dammam">{language === 'ar' ? 'الدمام' : 'Dammam'}</option>
                  <option value="mecca">{language === 'ar' ? 'مكة' : 'Mecca'}</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {language === 'ar' ? 'الحي' : 'District'}
                </label>
                <input
                  type="text"
                  className="input-field"
                  placeholder={language === 'ar' ? 'مثال: النخيل' : 'e.g., Al Nakheel'}
                  value={formData.district}
                  onChange={(e) => handleInputChange('district', e.target.value)}
                />
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {language === 'ar' ? 'العنوان التفصيلي' : 'Detailed Address'}
                </label>
                <textarea
                  className="input-field h-24 resize-none"
                  placeholder={language === 'ar' ? 'اكتب العنوان التفصيلي...' : 'Enter detailed address...'}
                  value={formData.address}
                  onChange={(e) => handleInputChange('address', e.target.value)}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {language === 'ar' ? 'متاح من' : 'Available From'}
                </label>
                <input
                  type="date"
                  className="input-field"
                  value={formData.availableFrom}
                  onChange={(e) => handleInputChange('availableFrom', e.target.value)}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {language === 'ar' ? 'متاح حتى' : 'Available Until'}
                </label>
                <input
                  type="date"
                  className="input-field"
                  value={formData.availableTo}
                  onChange={(e) => handleInputChange('availableTo', e.target.value)}
                />
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              {language === 'ar' ? 'التسعير والمميزات' : 'Pricing & Features'}
            </h3>
            
            {/* Pricing */}
            <div className="bg-gray-50 p-6 rounded-xl">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                {language === 'ar' ? 'الأسعار' : 'Pricing'}
              </h4>
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {language === 'ar' ? 'السعر بالساعة (ريال)' : 'Hourly Rate (SAR)'}
                  </label>
                  <input
                    type="number"
                    className="input-field"
                    placeholder="25"
                    value={formData.hourlyRate}
                    onChange={(e) => handleInputChange('hourlyRate', e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {language === 'ar' ? 'السعر اليومي (ريال)' : 'Daily Rate (SAR)'}
                  </label>
                  <input
                    type="number"
                    className="input-field"
                    placeholder="180"
                    value={formData.dailyRate}
                    onChange={(e) => handleInputChange('dailyRate', e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {language === 'ar' ? 'السعر الشهري (ريال)' : 'Monthly Rate (SAR)'}
                  </label>
                  <input
                    type="number"
                    className="input-field"
                    placeholder="4500"
                    value={formData.monthlyRate}
                    onChange={(e) => handleInputChange('monthlyRate', e.target.value)}
                  />
                </div>
              </div>
            </div>
            
            {/* Features */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                {language === 'ar' ? 'مميزات السيارة' : 'Car Features'}
              </h4>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
                {carFeatures.map((feature) => (
                  <label key={feature.id} className="flex items-center space-x-3 rtl:space-x-reverse cursor-pointer">
                    <input
                      type="checkbox"
                      className="w-4 h-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500"
                      checked={formData.features.includes(feature.id)}
                      onChange={() => handleFeatureToggle(feature.id)}
                    />
                    <span className="text-sm text-gray-700">{feature.label}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              {language === 'ar' ? 'الصور والوصف' : 'Photos & Description'}
            </h3>
            
            {/* Image Upload */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                {language === 'ar' ? 'صور السيارة' : 'Car Photos'}
              </h4>
              <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-teal-500 transition-colors">
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                  id="image-upload"
                />
                <label htmlFor="image-upload" className="cursor-pointer">
                  <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 mb-2">
                    {language === 'ar' ? 'اضغط لرفع الصور أو اسحبها هنا' : 'Click to upload photos or drag them here'}
                  </p>
                  <p className="text-sm text-gray-500">
                    {language === 'ar' ? 'يُنصح برفع 5-10 صور عالية الجودة' : 'Recommended: 5-10 high-quality photos'}
                  </p>
                </label>
              </div>
              
              {/* Uploaded Images Preview */}
              {uploadedImages.length > 0 && (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                  {uploadedImages.map((image, index) => (
                    <div key={index} className="relative">
                      <img
                        src={image}
                        alt={`Car ${index + 1}`}
                        className="w-full h-24 object-cover rounded-lg"
                      />
                      <button
                        onClick={() => removeImage(index)}
                        className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {language === 'ar' ? 'وصف السيارة' : 'Car Description'}
              </label>
              <textarea
                className="input-field h-32 resize-none"
                placeholder={language === 'ar' 
                  ? 'اكتب وصفاً مفصلاً عن السيارة وحالتها...'
                  : 'Write a detailed description of the car and its condition...'
                }
                value={formData.description}
                onChange={(e) => handleInputChange('description', e.target.value)}
              />
            </div>
            
            {/* Rules */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {language === 'ar' ? 'قواعد الاستخدام' : 'Usage Rules'}
              </label>
              <textarea
                className="input-field h-24 resize-none"
                placeholder={language === 'ar' 
                  ? 'مثال: ممنوع التدخين، العودة بخزان ممتلئ...'
                  : 'e.g., No smoking, return with full tank...'
                }
                value={formData.rules}
                onChange={(e) => handleInputChange('rules', e.target.value)}
              />
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {language === 'ar' ? 'أضف سيارتك للمنصة' : 'List Your Car'}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {language === 'ar'
              ? 'احصل على دخل إضافي من سيارتك مع ضمان الحماية الكاملة'
              : 'Earn extra income from your car with full protection guarantee'
            }
          </p>
        </div>

        {/* Progress Steps */}
        <div className="mb-12">
          <div className="flex justify-center">
            <div className="flex items-center space-x-4 rtl:space-x-reverse">
              {steps.map((step, index) => (
                <React.Fragment key={step.number}>
                  <div className="flex flex-col items-center">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      currentStep >= step.number 
                        ? 'bg-teal-600 text-white' 
                        : 'bg-gray-200 text-gray-500'
                    }`}>
                      <step.icon className="w-6 h-6" />
                    </div>
                    <span className={`text-sm mt-2 ${
                      currentStep >= step.number ? 'text-teal-600 font-medium' : 'text-gray-500'
                    }`}>
                      {step.title}
                    </span>
                  </div>
                  {index < steps.length - 1 && (
                    <div className={`w-16 h-1 ${
                      currentStep > step.number ? 'bg-teal-600' : 'bg-gray-200'
                    }`} />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            {renderStep()}
            
            {/* Navigation Buttons */}
            <div className="flex justify-between mt-12 pt-8 border-t border-gray-200">
              <button
                onClick={prevStep}
                disabled={currentStep === 1}
                className={`px-6 py-3 rounded-xl font-medium transition-colors ${
                  currentStep === 1
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {language === 'ar' ? 'السابق' : 'Previous'}
              </button>
              
              {currentStep < 4 ? (
                <button
                  onClick={nextStep}
                  className="btn-primary"
                >
                  {language === 'ar' ? 'التالي' : 'Next'}
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  className="btn-primary"
                >
                  {language === 'ar' ? 'إرسال الطلب' : 'Submit Request'}
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            {language === 'ar' ? 'لماذا تختار وُجْهَة؟' : 'Why Choose Wujha?'}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {language === 'ar' ? 'دخل إضافي' : 'Extra Income'}
              </h3>
              <p className="text-gray-600">
                {language === 'ar' 
                  ? 'احصل على دخل شهري يصل إلى 3000 ريال'
                  : 'Earn up to 3000 SAR monthly income'
                }
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {language === 'ar' ? 'تأمين شامل' : 'Full Insurance'}
              </h3>
              <p className="text-gray-600">
                {language === 'ar' 
                  ? 'سيارتك محمية بالكامل ضد جميع المخاطر'
                  : 'Your car is fully protected against all risks'
                }
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {language === 'ar' ? 'مستأجرون موثقون' : 'Verified Renters'}
              </h3>
              <p className="text-gray-600">
                {language === 'ar' 
                  ? 'جميع المستأجرين موثقون ومفحوصون'
                  : 'All renters are verified and screened'
                }
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListCar;