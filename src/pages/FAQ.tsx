import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, Search } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const FAQ: React.FC = () => {
  const { language } = useLanguage();
  const [openItems, setOpenItems] = useState<number[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  const faqs = [
    {
      category: language === 'ar' ? 'عام' : 'General',
      questions: [
        {
          question: language === 'ar' ? 'ما هي منصة وُجْهَة؟' : 'What is Wujha platform?',
          answer: language === 'ar' 
            ? 'وُجْهَة هي منصة تأجير السيارات بين الأفراد تربط بين ملاك السيارات والمستأجرين بطريقة آمنة وموثوقة. يمكن لملاك السيارات تأجير سياراتهم والحصول على دخل إضافي، بينما يمكن للمستأجرين العثور على سيارات بأسعار تنافسية.'
            : 'Wujha is a peer-to-peer car rental platform that connects car owners with renters in a safe and reliable way. Car owners can rent out their cars and earn extra income, while renters can find cars at competitive prices.'
        },
        {
          question: language === 'ar' ? 'كيف أبدأ في استخدام المنصة؟' : 'How do I get started with the platform?',
          answer: language === 'ar'
            ? 'للبدء، قم بإنشاء حساب مجاني على المنصة واختر نوع الحساب (مستأجر أو مالك سيارة). بعد التحقق من هويتك، يمكنك البدء في تصفح السيارات المتاحة أو إضافة سيارتك للتأجير.'
            : 'To get started, create a free account on the platform and choose your account type (renter or car owner). After verifying your identity, you can start browsing available cars or list your car for rent.'
        },
        {
          question: language === 'ar' ? 'هل المنصة آمنة؟' : 'Is the platform safe?',
          answer: language === 'ar'
            ? 'نعم، الأمان أولويتنا القصوى. جميع المستخدمين يخضعون للتحقق من الهوية، وجميع السيارات مؤمنة بالكامل. كما نوفر دعماً فنياً على مدار الساعة لضمان تجربة آمنة.'
            : 'Yes, safety is our top priority. All users undergo identity verification, and all cars are fully insured. We also provide 24/7 technical support to ensure a safe experience.'
        }
      ]
    },
    {
      category: language === 'ar' ? 'للمستأجرين' : 'For Renters',
      questions: [
        {
          question: language === 'ar' ? 'كيف أحجز سيارة؟' : 'How do I book a car?',
          answer: language === 'ar'
            ? 'ابحث عن السيارة المناسبة باستخدام الفلاتر، اختر التواريخ والأوقات، راجع التفاصيل والأسعار، ثم اضغط على "احجز الآن". ستحتاج لتأكيد الحجز والدفع لإتمام العملية.'
            : 'Search for the right car using filters, choose dates and times, review details and prices, then click "Book Now". You\'ll need to confirm the booking and make payment to complete the process.'
        },
        {
          question: language === 'ar' ? 'ما هي طرق الدفع المتاحة؟' : 'What payment methods are available?',
          answer: language === 'ar'
            ? 'نقبل جميع البطاقات الائتمانية الرئيسية (فيزا، ماستركارد، أمريكان إكسبريس)، بطاقات مدى، والمحافظ الرقمية مثل أبل باي وجوجل باي.'
            : 'We accept all major credit cards (Visa, Mastercard, American Express), Mada cards, and digital wallets like Apple Pay and Google Pay.'
        },
        {
          question: language === 'ar' ? 'هل يمكنني إلغاء الحجز؟' : 'Can I cancel my booking?',
          answer: language === 'ar'
            ? 'نعم، يمكنك إلغاء الحجز حسب سياسة الإلغاء المحددة لكل سيارة. الإلغاء قبل 24 ساعة عادة ما يكون مجانياً، بينما الإلغاء المتأخر قد يتضمن رسوماً.'
            : 'Yes, you can cancel your booking according to the cancellation policy specified for each car. Cancellation before 24 hours is usually free, while late cancellation may include fees.'
        },
        {
          question: language === 'ar' ? 'ماذا لو تعطلت السيارة أثناء الرحلة؟' : 'What if the car breaks down during the trip?',
          answer: language === 'ar'
            ? 'في حالة تعطل السيارة، اتصل بخدمة الطوارئ المتاحة 24/7. سنوفر لك المساعدة الفورية وسيارة بديلة إذا لزم الأمر. جميع التكاليف مغطاة بالتأمين.'
            : 'In case of car breakdown, contact our 24/7 emergency service. We\'ll provide immediate assistance and a replacement car if needed. All costs are covered by insurance.'
        }
      ]
    },
    {
      category: language === 'ar' ? 'لملاك السيارات' : 'For Car Owners',
      questions: [
        {
          question: language === 'ar' ? 'كيف أضع سيارتي للتأجير؟' : 'How do I list my car for rent?',
          answer: language === 'ar'
            ? 'اذهب إلى قسم "أضف سيارتك"، املأ معلومات السيارة، ارفع الصور، حدد الأسعار والتوفر، ثم أرسل الطلب للمراجعة. سيتم تفعيل إعلانك خلال 24 ساعة بعد الموافقة.'
            : 'Go to "List Your Car" section, fill in car information, upload photos, set prices and availability, then submit for review. Your listing will be activated within 24 hours after approval.'
        },
        {
          question: language === 'ar' ? 'كم يمكنني أن أربح؟' : 'How much can I earn?',
          answer: language === 'ar'
            ? 'الأرباح تعتمد على نوع السيارة، الموقع، ومعدل التأجير. في المتوسط، يمكن لملاك السيارات كسب 1500-3000 ريال شهرياً. نأخذ عمولة 15% من كل حجز.'
            : 'Earnings depend on car type, location, and rental frequency. On average, car owners can earn 1500-3000 SAR monthly. We take a 15% commission from each booking.'
        },
        {
          question: language === 'ar' ? 'هل سيارتي مؤمنة؟' : 'Is my car insured?',
          answer: language === 'ar'
            ? 'نعم، جميع السيارات مغطاة بتأمين شامل يشمل الحوادث، السرقة، والأضرار. التأمين ساري المفعول من لحظة تسليم السيارة حتى إعادتها.'
            : 'Yes, all cars are covered by comprehensive insurance including accidents, theft, and damages. Insurance is effective from the moment of car handover until return.'
        },
        {
          question: language === 'ar' ? 'كيف أتأكد من جودة المستأجرين؟' : 'How do I ensure renter quality?',
          answer: language === 'ar'
            ? 'جميع المستأجرين يخضعون للتحقق من الهوية ورخصة القيادة. يمكنك مراجعة تقييمات المستأجر وتاريخ الرحلات السابقة قبل الموافقة على الحجز.'
            : 'All renters undergo identity and driving license verification. You can review the renter\'s ratings and previous trip history before approving the booking.'
        }
      ]
    },
    {
      category: language === 'ar' ? 'التأمين والأمان' : 'Insurance & Safety',
      questions: [
        {
          question: language === 'ar' ? 'ما هو التأمين المتوفر؟' : 'What insurance is available?',
          answer: language === 'ar'
            ? 'نوفر تأميناً شاملاً يغطي الحوادث، الأضرار، السرقة، والمسؤولية المدنية. التأمين يشمل أيضاً المساعدة على الطريق والسيارة البديلة عند الحاجة.'
            : 'We provide comprehensive insurance covering accidents, damages, theft, and civil liability. Insurance also includes roadside assistance and replacement car when needed.'
        },
        {
          question: language === 'ar' ? 'ماذا يحدث في حالة وقوع حادث؟' : 'What happens in case of an accident?',
          answer: language === 'ar'
            ? 'في حالة وقوع حادث، اتصل فوراً بالشرطة وبخدمة الطوارئ لدينا. سنتولى جميع الإجراءات مع شركة التأمين ونوفر الدعم اللازم لجميع الأطراف.'
            : 'In case of an accident, immediately contact the police and our emergency service. We\'ll handle all procedures with the insurance company and provide necessary support to all parties.'
        },
        {
          question: language === 'ar' ? 'هل هناك حد أدنى للعمر؟' : 'Is there a minimum age requirement?',
          answer: language === 'ar'
            ? 'نعم، الحد الأدنى للعمر هو 21 سنة للمستأجرين مع خبرة قيادة لا تقل عن سنتين. بعض السيارات الفاخرة قد تتطلب عمراً أكبر.'
            : 'Yes, the minimum age is 21 years for renters with at least 2 years of driving experience. Some luxury cars may require a higher age.'
        }
      ]
    },
    {
      category: language === 'ar' ? 'الدفع والفواتير' : 'Payment & Billing',
      questions: [
        {
          question: language === 'ar' ? 'متى يتم خصم المبلغ؟' : 'When is payment charged?',
          answer: language === 'ar'
            ? 'يتم خصم المبلغ عند تأكيد الحجز للحجز الفوري، أو عند موافقة المالك للحجوزات العادية. يمكنك إلغاء الحجز مجاناً خلال فترة الإلغاء المجاني.'
            : 'Payment is charged upon booking confirmation for instant bookings, or when the owner approves for regular bookings. You can cancel for free during the free cancellation period.'
        },
        {
          question: language === 'ar' ? 'هل هناك رسوم إضافية؟' : 'Are there additional fees?',
          answer: language === 'ar'
            ? 'السعر المعروض شامل التأمين والضرائب. قد تطبق رسوم إضافية للخدمات الاختيارية مثل التوصيل، الوقود الإضافي، أو التنظيف في حالة إعادة السيارة متسخة.'
            : 'The displayed price includes insurance and taxes. Additional fees may apply for optional services like delivery, extra fuel, or cleaning if the car is returned dirty.'
        },
        {
          question: language === 'ar' ? 'كيف أحصل على فاتورة؟' : 'How do I get an invoice?',
          answer: language === 'ar'
            ? 'يتم إرسال الفاتورة تلقائياً إلى بريدك الإلكتروني بعد إتمام الرحلة. يمكنك أيضاً تحميل الفاتورة من حسابك في أي وقت.'
            : 'The invoice is automatically sent to your email after trip completion. You can also download the invoice from your account at any time.'
        }
      ]
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const filteredFAQs = faqs.map(category => ({
    ...category,
    questions: category.questions.filter(
      faq => 
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <HelpCircle className="w-8 h-8 text-teal-600" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {language === 'ar' ? 'الأسئلة الشائعة' : 'Frequently Asked Questions'}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {language === 'ar'
              ? 'إجابات على أكثر الأسئلة شيوعاً حول منصة وُجْهَة'
              : 'Answers to the most common questions about Wujha platform'
            }
          </p>
        </div>

        {/* Search */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder={language === 'ar' ? 'ابحث في الأسئلة الشائعة...' : 'Search FAQs...'}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pr-12 pl-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent text-lg"
            />
          </div>
        </div>

        {/* FAQ Categories */}
        <div className="max-w-4xl mx-auto">
          {filteredFAQs.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-teal-600">
                {category.category}
              </h2>
              
              <div className="space-y-4">
                {category.questions.map((faq, questionIndex) => {
                  const globalIndex = categoryIndex * 100 + questionIndex;
                  const isOpen = openItems.includes(globalIndex);
                  
                  return (
                    <div key={questionIndex} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                      <button
                        onClick={() => toggleItem(globalIndex)}
                        className="w-full px-6 py-4 text-right flex justify-between items-center hover:bg-gray-50 transition-colors"
                      >
                        <span className="text-lg font-medium text-gray-900 flex-1">
                          {faq.question}
                        </span>
                        {isOpen ? (
                          <ChevronUp className="w-5 h-5 text-teal-600 flex-shrink-0 mr-4" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0 mr-4" />
                        )}
                      </button>
                      
                      {isOpen && (
                        <div className="px-6 pb-4">
                          <div className="pt-2 border-t border-gray-100">
                            <p className="text-gray-600 leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredFAQs.length === 0 && searchQuery && (
          <div className="text-center py-16">
            <HelpCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {language === 'ar' ? 'لم يتم العثور على نتائج' : 'No Results Found'}
            </h3>
            <p className="text-gray-600 mb-6">
              {language === 'ar' 
                ? 'جرب البحث بكلمات مختلفة أو تصفح الأقسام أدناه'
                : 'Try searching with different keywords or browse the sections below'
              }
            </p>
            <button 
              onClick={() => setSearchQuery('')}
              className="btn-primary"
            >
              {language === 'ar' ? 'مسح البحث' : 'Clear Search'}
            </button>
          </div>
        )}

        {/* Contact Support */}
        <div className="max-w-2xl mx-auto mt-16 bg-gradient-to-r from-teal-600 to-teal-700 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">
            {language === 'ar' ? 'لم تجد إجابة لسؤالك؟' : 'Didn\'t find an answer to your question?'}
          </h3>
          <p className="text-teal-100 mb-6">
            {language === 'ar'
              ? 'فريق الدعم متاح 24/7 لمساعدتك'
              : 'Our support team is available 24/7 to help you'
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-teal-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-colors">
              {language === 'ar' ? 'تواصل معنا' : 'Contact Us'}
            </button>
            <button className="border-2 border-white text-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-teal-700 transition-colors">
              {language === 'ar' ? 'دردشة مباشرة' : 'Live Chat'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;