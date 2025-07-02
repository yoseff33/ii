import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  User, 
  Mail, 
  Lock, 
  Phone, 
  Eye, 
  EyeOff,
  Car,
  CheckCircle,
  Shield
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Auth: React.FC = () => {
  const { language } = useLanguage();
  const [isLogin, setIsLogin] = useState(true);
  const [userType, setUserType] = useState<'renter' | 'owner'>('renter');
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isLogin) {
      alert(language === 'ar' ? 'تم تسجيل الدخول بنجاح!' : 'Login successful!');
    } else {
      if (formData.password !== formData.confirmPassword) {
        alert(language === 'ar' ? 'كلمات المرور غير متطابقة' : 'Passwords do not match');
        return;
      }
      if (!formData.agreeToTerms) {
        alert(language === 'ar' ? 'يجب الموافقة على الشروط والأحكام' : 'You must agree to terms and conditions');
        return;
      }
      alert(language === 'ar' ? 'تم إنشاء الحساب بنجاح!' : 'Account created successfully!');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left Side - Info */}
            <div className="hidden lg:block">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Car className="w-10 h-10 text-white" />
                </div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  {language === 'ar' ? 'مرحباً بك في وُجْهَة' : 'Welcome to Wujha'}
                </h1>
                <p className="text-gray-600">
                  {language === 'ar' 
                    ? 'منصة تأجير السيارات الذكية والآمنة'
                    : 'Smart and secure car rental platform'
                  }
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4 rtl:space-x-reverse">
                  <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {language === 'ar' ? 'أمان وموثوقية' : 'Safety & Reliability'}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {language === 'ar' 
                        ? 'جميع المستخدمين موثقون والسيارات مؤمنة بالكامل'
                        : 'All users are verified and cars are fully insured'
                      }
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 rtl:space-x-reverse">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Car className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {language === 'ar' ? 'تنوع في الخيارات' : 'Variety of Options'}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {language === 'ar' 
                        ? 'آلاف السيارات المتاحة بأسعار تنافسية'
                        : 'Thousands of available cars at competitive prices'
                      }
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 rtl:space-x-reverse">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {language === 'ar' ? 'سهولة الاستخدام' : 'Easy to Use'}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {language === 'ar' 
                        ? 'احجز سيارتك في دقائق معدودة'
                        : 'Book your car in just a few minutes'
                      }
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              {/* Toggle Login/Register */}
              <div className="flex bg-gray-100 rounded-xl p-1 mb-8">
                <button
                  onClick={() => setIsLogin(true)}
                  className={`flex-1 py-2 px-4 rounded-lg font-medium transition-colors ${
                    isLogin ? 'bg-white text-teal-600 shadow-sm' : 'text-gray-600'
                  }`}
                >
                  {language === 'ar' ? 'تسجيل الدخول' : 'Login'}
                </button>
                <button
                  onClick={() => setIsLogin(false)}
                  className={`flex-1 py-2 px-4 rounded-lg font-medium transition-colors ${
                    !isLogin ? 'bg-white text-teal-600 shadow-sm' : 'text-gray-600'
                  }`}
                >
                  {language === 'ar' ? 'إنشاء حساب' : 'Sign Up'}
                </button>
              </div>

              {/* User Type Selection (for registration) */}
              {!isLogin && (
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    {language === 'ar' ? 'نوع الحساب' : 'Account Type'}
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      type="button"
                      onClick={() => setUserType('renter')}
                      className={`p-4 border-2 rounded-xl text-center transition-colors ${
                        userType === 'renter' 
                          ? 'border-teal-500 bg-teal-50 text-teal-700' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <User className="w-6 h-6 mx-auto mb-2" />
                      <div className="font-medium">
                        {language === 'ar' ? 'مستأجر' : 'Renter'}
                      </div>
                      <div className="text-xs text-gray-500">
                        {language === 'ar' ? 'أريد استئجار سيارة' : 'I want to rent a car'}
                      </div>
                    </button>
                    <button
                      type="button"
                      onClick={() => setUserType('owner')}
                      className={`p-4 border-2 rounded-xl text-center transition-colors ${
                        userType === 'owner' 
                          ? 'border-teal-500 bg-teal-50 text-teal-700' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <Car className="w-6 h-6 mx-auto mb-2" />
                      <div className="font-medium">
                        {language === 'ar' ? 'مالك سيارة' : 'Car Owner'}
                      </div>
                      <div className="text-xs text-gray-500">
                        {language === 'ar' ? 'أريد تأجير سيارتي' : 'I want to rent my car'}
                      </div>
                    </button>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name (for registration) */}
                {!isLogin && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {language === 'ar' ? 'الاسم الكامل' : 'Full Name'}
                    </label>
                    <div className="relative">
                      <User className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        className="input-field pr-10"
                        placeholder={language === 'ar' ? 'أدخل اسمك الكامل' : 'Enter your full name'}
                      />
                    </div>
                  </div>
                )}

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {language === 'ar' ? 'البريد الإلكتروني' : 'Email Address'}
                  </label>
                  <div className="relative">
                    <Mail className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="input-field pr-10"
                      placeholder={language === 'ar' ? 'أدخل بريدك الإلكتروني' : 'Enter your email'}
                    />
                  </div>
                </div>

                {/* Phone (for registration) */}
                {!isLogin && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {language === 'ar' ? 'رقم الجوال' : 'Phone Number'}
                    </label>
                    <div className="relative">
                      <Phone className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="input-field pr-10"
                        placeholder={language === 'ar' ? '+966 5X XXX XXXX' : '+966 5X XXX XXXX'}
                      />
                    </div>
                  </div>
                )}

                {/* Password */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {language === 'ar' ? 'كلمة المرور' : 'Password'}
                  </label>
                  <div className="relative">
                    <Lock className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      required
                      value={formData.password}
                      onChange={(e) => handleInputChange('password', e.target.value)}
                      className="input-field pr-10 pl-10"
                      placeholder={language === 'ar' ? 'أدخل كلمة المرور' : 'Enter your password'}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                {/* Confirm Password (for registration) */}
                {!isLogin && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {language === 'ar' ? 'تأكيد كلمة المرور' : 'Confirm Password'}
                    </label>
                    <div className="relative">
                      <Lock className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="password"
                        required
                        value={formData.confirmPassword}
                        onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                        className="input-field pr-10"
                        placeholder={language === 'ar' ? 'أعد إدخال كلمة المرور' : 'Re-enter your password'}
                      />
                    </div>
                  </div>
                )}

                {/* Terms Agreement (for registration) */}
                {!isLogin && (
                  <div className="flex items-start space-x-3 rtl:space-x-reverse">
                    <input
                      type="checkbox"
                      id="terms"
                      checked={formData.agreeToTerms}
                      onChange={(e) => handleInputChange('agreeToTerms', e.target.checked)}
                      className="w-4 h-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500 mt-1"
                    />
                    <label htmlFor="terms" className="text-sm text-gray-600">
                      {language === 'ar' ? (
                        <>
                          أوافق على{' '}
                          <Link to="/terms" className="text-teal-600 hover:underline">
                            الشروط والأحكام
                          </Link>
                          {' '}و{' '}
                          <Link to="/privacy" className="text-teal-600 hover:underline">
                            سياسة الخصوصية
                          </Link>
                        </>
                      ) : (
                        <>
                          I agree to the{' '}
                          <Link to="/terms" className="text-teal-600 hover:underline">
                            Terms of Service
                          </Link>
                          {' '}and{' '}
                          <Link to="/privacy" className="text-teal-600 hover:underline">
                            Privacy Policy
                          </Link>
                        </>
                      )}
                    </label>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full btn-primary text-lg py-4"
                >
                  {isLogin 
                    ? (language === 'ar' ? 'تسجيل الدخول' : 'Login')
                    : (language === 'ar' ? 'إنشاء حساب' : 'Create Account')
                  }
                </button>

                {/* Forgot Password (for login) */}
                {isLogin && (
                  <div className="text-center">
                    <Link 
                      to="/forgot-password" 
                      className="text-sm text-teal-600 hover:underline"
                    >
                      {language === 'ar' ? 'نسيت كلمة المرور؟' : 'Forgot your password?'}
                    </Link>
                  </div>
                )}

                {/* Social Login */}
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">
                      {language === 'ar' ? 'أو' : 'Or'}
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  className="w-full flex items-center justify-center px-4 py-3 border border-gray-300 rounded-xl text-gray-700 bg-white hover:bg-gray-50 transition-colors"
                >
                  <svg className="w-5 h-5 ml-2" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  <span>
                    {language === 'ar' 
                      ? 'المتابعة باستخدام Google' 
                      : 'Continue with Google'
                    }
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;