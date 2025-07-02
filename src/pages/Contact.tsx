import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Send,
  MessageCircle,
  Headphones,
  Globe
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Contact: React.FC = () => {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    type: 'general'
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(language === 'ar' ? 'تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.' : 'Your message has been sent successfully! We will contact you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      type: 'general'
    });
  };

  const contactMethods = [
    {
      icon: Phone,
      title: language === 'ar' ? 'اتصل بنا' : 'Call Us',
      description: language === 'ar' ? 'متاح 24/7 للدعم الفوري' : 'Available 24/7 for immediate support',
      contact: '+966 11 123 4567',
      color: 'teal'
    },
    {
      icon: Mail,
      title: language === 'ar' ? 'راسلنا' : 'Email Us',
      description: language === 'ar' ? 'نرد خلال 24 ساعة' : 'We respond within 24 hours',
      contact: 'support@wujha.sa',
      color: 'blue'
    },
    {
      icon: MessageCircle,
      title: language === 'ar' ? 'دردشة مباشرة' : 'Live Chat',
      description: language === 'ar' ? 'دردشة فورية مع فريق الدعم' : 'Instant chat with support team',
      contact: language === 'ar' ? 'ابدأ المحادثة' : 'Start Chat',
      color: 'green'
    },
    {
      icon: Headphones,
      title: language === 'ar' ? 'الدعم الفني' : 'Technical Support',
      description: language === 'ar' ? 'مساعدة تقنية متخصصة' : 'Specialized technical assistance',
      contact: 'tech@wujha.sa',
      color: 'orange'
    }
  ];

  const offices = [
    {
      city: language === 'ar' ? 'الرياض' : 'Riyadh',
      address: language === 'ar' ? 'طريق الملك فهد، حي العليا' : 'King Fahd Road, Al Olaya District',
      phone: '+966 11 123 4567',
      hours: language === 'ar' ? 'الأحد - الخميس: 9:00 - 18:00' : 'Sun - Thu: 9:00 AM - 6:00 PM'
    },
    {
      city: language === 'ar' ? 'جدة' : 'Jeddah',
      address: language === 'ar' ? 'طريق الأمير محمد بن عبدالعزيز' : 'Prince Mohammed bin Abdulaziz Road',
      phone: '+966 12 234 5678',
      hours: language === 'ar' ? 'الأحد - الخميس: 9:00 - 18:00' : 'Sun - Thu: 9:00 AM - 6:00 PM'
    },
    {
      city: language === 'ar' ? 'الدمام' : 'Dammam',
      address: language === 'ar' ? 'طريق الملك عبدالعزيز' : 'King Abdulaziz Road',
      phone: '+966 13 345 6789',
      hours: language === 'ar' ? 'الأحد - الخميس: 9:00 - 18:00' : 'Sun - Thu: 9:00 AM - 6:00 PM'
    }
  ];

  const inquiryTypes = [
    { value: 'general', label: language === 'ar' ? 'استفسار عام' : 'General Inquiry' },
    { value: 'booking', label: language === 'ar' ? 'مشكلة في الحجز' : 'Booking Issue' },
    { value: 'payment', label: language === 'ar' ? 'مشكلة في الدفع' : 'Payment Issue' },
    { value: 'technical', label: language === 'ar' ? 'مشكلة تقنية' : 'Technical Issue' },
    { value: 'partnership', label: language === 'ar' ? 'شراكة تجارية' : 'Business Partnership' },
    { value: 'feedback', label: language === 'ar' ? 'اقتراح أو ملاحظة' : 'Feedback or Suggestion' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {language === 'ar' ? 'تواصل معنا' : 'Contact Us'}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {language === 'ar'
              ? 'نحن هنا لمساعدتك. تواصل معنا في أي وقت وسنكون سعداء للإجابة على استفساراتك'
              : 'We\'re here to help. Contact us anytime and we\'ll be happy to answer your questions'
            }
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {language === 'ar' ? 'أرسل لنا رسالة' : 'Send us a Message'}
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Inquiry Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {language === 'ar' ? 'نوع الاستفسار' : 'Inquiry Type'}
                  </label>
                  <select
                    value={formData.type}
                    onChange={(e) => handleInputChange('type', e.target.value)}
                    className="input-field"
                  >
                    {inquiryTypes.map((type) => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Name and Email */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {language === 'ar' ? 'الاسم الكامل' : 'Full Name'}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="input-field"
                      placeholder={language === 'ar' ? 'أدخل اسمك الكامل' : 'Enter your full name'}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {language === 'ar' ? 'البريد الإلكتروني' : 'Email Address'}
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="input-field"
                      placeholder={language === 'ar' ? 'أدخل بريدك الإلكتروني' : 'Enter your email'}
                    />
                  </div>
                </div>

                {/* Phone and Subject */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {language === 'ar' ? 'رقم الجوال' : 'Phone Number'}
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="input-field"
                      placeholder={language === 'ar' ? '+966 5X XXX XXXX' : '+966 5X XXX XXXX'}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {language === 'ar' ? 'الموضوع' : 'Subject'}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => handleInputChange('subject', e.target.value)}
                      className="input-field"
                      placeholder={language === 'ar' ? 'موضوع الرسالة' : 'Message subject'}
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {language === 'ar' ? 'الرسالة' : 'Message'}
                  </label>
                  <textarea
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    className="input-field resize-none"
                    placeholder={language === 'ar' ? 'اكتب رسالتك هنا...' : 'Write your message here...'}
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full btn-primary flex items-center justify-center space-x-2 rtl:space-x-reverse"
                >
                  <Send className="w-5 h-5" />
                  <span>{language === 'ar' ? 'إرسال الرسالة' : 'Send Message'}</span>
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                {language === 'ar' ? 'طرق التواصل' : 'Contact Methods'}
              </h3>
              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <div key={index} className="flex items-start space-x-4 rtl:space-x-reverse p-4 rounded-xl hover:bg-gray-50 transition-colors">
                    <div className={`w-12 h-12 bg-${method.color}-100 rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <method.icon className={`w-6 h-6 text-${method.color}-600`} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{method.title}</h4>
                      <p className="text-sm text-gray-600 mb-2">{method.description}</p>
                      <p className="text-sm font-medium text-teal-600">{method.contact}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Office Hours */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                {language === 'ar' ? 'ساعات العمل' : 'Business Hours'}
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                  <Clock className="w-5 h-5 text-teal-600" />
                  <div>
                    <p className="font-medium text-gray-900">
                      {language === 'ar' ? 'الأحد - الخميس' : 'Sunday - Thursday'}
                    </p>
                    <p className="text-sm text-gray-600">9:00 AM - 6:00 PM</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                  <Clock className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="font-medium text-gray-900">
                      {language === 'ar' ? 'الجمعة - السبت' : 'Friday - Saturday'}
                    </p>
                    <p className="text-sm text-gray-600">
                      {language === 'ar' ? 'مغلق' : 'Closed'}
                    </p>
                  </div>
                </div>
                <div className="pt-4 border-t border-gray-100">
                  <div className="flex items-center space-x-3 rtl:space-x-reverse">
                    <Headphones className="w-5 h-5 text-green-600" />
                    <div>
                      <p className="font-medium text-gray-900">
                        {language === 'ar' ? 'الدعم الطارئ' : 'Emergency Support'}
                      </p>
                      <p className="text-sm text-gray-600">24/7</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                {language === 'ar' ? 'روابط سريعة' : 'Quick Links'}
              </h3>
              <div className="space-y-3">
                <a href="/faq" className="block text-teal-600 hover:text-teal-700 transition-colors">
                  {language === 'ar' ? 'الأسئلة الشائعة' : 'Frequently Asked Questions'}
                </a>
                <a href="/how-it-works" className="block text-teal-600 hover:text-teal-700 transition-colors">
                  {language === 'ar' ? 'كيف تعمل المنصة' : 'How It Works'}
                </a>
                <a href="/terms" className="block text-teal-600 hover:text-teal-700 transition-colors">
                  {language === 'ar' ? 'الشروط والأحكام' : 'Terms of Service'}
                </a>
                <a href="/privacy" className="block text-teal-600 hover:text-teal-700 transition-colors">
                  {language === 'ar' ? 'سياسة الخصوصية' : 'Privacy Policy'}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Office Locations */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {language === 'ar' ? 'مواقع مكاتبنا' : 'Our Office Locations'}
            </h2>
            <p className="text-xl text-gray-600">
              {language === 'ar' ? 'زرنا في أي من مكاتبنا' : 'Visit us at any of our offices'}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-sm p-6 text-center">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{office.city}</h3>
                <p className="text-gray-600 mb-3">{office.address}</p>
                <p className="text-teal-600 font-medium mb-2">{office.phone}</p>
                <p className="text-sm text-gray-500">{office.hours}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16 bg-white rounded-2xl shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            {language === 'ar' ? 'موقعنا على الخريطة' : 'Find Us on Map'}
          </h2>
          <div className="bg-gray-200 rounded-xl h-96 flex items-center justify-center">
            <div className="text-center">
              <Globe className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600">
                {language === 'ar' ? 'خريطة تفاعلية - قريباً' : 'Interactive Map - Coming Soon'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;