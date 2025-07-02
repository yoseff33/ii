import React from 'react';
import { 
  Car, 
  Users, 
  Shield, 
  Award,
  Target,
  Heart,
  Globe,
  TrendingUp,
  CheckCircle
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const About: React.FC = () => {
  const { language } = useLanguage();

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
      icon: Globe,
      value: '25+',
      label: language === 'ar' ? 'مدينة' : 'Cities',
    },
    {
      icon: Award,
      value: '4.9/5',
      label: language === 'ar' ? 'تقييم المستخدمين' : 'User Rating',
    },
  ];

  const values = [
    {
      icon: Shield,
      title: language === 'ar' ? 'الأمان والثقة' : 'Safety & Trust',
      description: language === 'ar' 
        ? 'نضع الأمان في المقدمة مع التحقق من جميع المستخدمين والتأمين الشامل على كل سيارة'
        : 'We prioritize safety with user verification and comprehensive insurance on every car',
    },
    {
      icon: Heart,
      title: language === 'ar' ? 'خدمة العملاء' : 'Customer Service',
      description: language === 'ar'
        ? 'فريق دعم متاح 24/7 لمساعدتك في أي وقت وحل أي مشكلة قد تواجهها'
        : '24/7 support team available to help you anytime and solve any issues you may face',
    },
    {
      icon: TrendingUp,
      title: language === 'ar' ? 'الابتكار المستمر' : 'Continuous Innovation',
      description: language === 'ar'
        ? 'نطور منصتنا باستمرار لتقديم أفضل تجربة ممكنة للمستخدمين'
        : 'We continuously develop our platform to provide the best possible user experience',
    },
  ];

  const team = [
    {
      name: language === 'ar' ? 'أحمد المحمد' : 'Ahmed Al-Mohammed',
      role: language === 'ar' ? 'الرئيس التنفيذي' : 'CEO & Founder',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300',
    },
    {
      name: language === 'ar' ? 'فاطمة العلي' : 'Fatima Al-Ali',
      role: language === 'ar' ? 'مديرة التقنية' : 'CTO',
      image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=300',
    },
    {
      name: language === 'ar' ? 'محمد الأحمد' : 'Mohammed Al-Ahmad',
      role: language === 'ar' ? 'مدير العمليات' : 'COO',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-600 to-teal-700 text-white section-padding">
        <div className="container-custom">
          <div className="text-center animate-fadeInUp">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {language === 'ar' ? 'من نحن' : 'About Us'}
            </h1>
            <p className="text-xl text-teal-100 max-w-3xl mx-auto leading-relaxed">
              {language === 'ar'
                ? 'نحن منصة وُجْهَة، نربط بين ملاك السيارات والمستأجرين في بيئة آمنة وموثوقة، مما يخلق فرصاً اقتصادية جديدة ويوفر حلول نقل مرنة للجميع'
                : 'We are Wujha platform, connecting car owners with renters in a safe and reliable environment, creating new economic opportunities and providing flexible transportation solutions for everyone'
              }
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-white">
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

      {/* Mission & Vision */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fadeInLeft">
              <div className="mb-12">
                <div className="flex items-center mb-4">
                  <Target className="w-8 h-8 text-teal-600 ml-3" />
                  <h2 className="text-3xl font-bold text-gray-900">
                    {language === 'ar' ? 'رؤيتنا' : 'Our Vision'}
                  </h2>
                </div>
                <p className="text-xl text-gray-600 leading-relaxed">
                  {language === 'ar'
                    ? 'أن نكون المنصة الرائدة في مجال تأجير السيارات بين الأفراد في المنطقة، ونساهم في بناء اقتصاد تشاركي مستدام يعود بالنفع على الجميع'
                    : 'To be the leading peer-to-peer car rental platform in the region, contributing to building a sustainable sharing economy that benefits everyone'
                  }
                </p>
              </div>

              <div>
                <div className="flex items-center mb-4">
                  <Heart className="w-8 h-8 text-orange-600 ml-3" />
                  <h2 className="text-3xl font-bold text-gray-900">
                    {language === 'ar' ? 'مهمتنا' : 'Our Mission'}
                  </h2>
                </div>
                <p className="text-xl text-gray-600 leading-relaxed">
                  {language === 'ar'
                    ? 'تسهيل عملية تأجير السيارات بين الأفراد من خلال منصة تقنية متطورة وآمنة، مع توفير تجربة استثنائية للمستخدمين وضمان أعلى معايير الجودة والأمان'
                    : 'Facilitating peer-to-peer car rental through an advanced and secure technology platform, providing exceptional user experience while ensuring the highest standards of quality and safety'
                  }
                </p>
              </div>
            </div>
            
            <div className="animate-fadeInRight">
              <img 
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Team collaboration"
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {language === 'ar' ? 'قيمنا الأساسية' : 'Our Core Values'}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {language === 'ar'
                ? 'القيم التي نؤمن بها وتوجه عملنا اليومي'
                : 'The values we believe in and that guide our daily work'
              }
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="card p-8 text-center animate-fadeInUp"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              {language === 'ar' ? 'قصتنا' : 'Our Story'}
            </h2>
            <div className="text-lg text-gray-600 leading-relaxed space-y-6">
              <p>
                {language === 'ar'
                  ? 'بدأت فكرة وُجْهَة من تحدٍ بسيط واجهناه جميعاً: صعوبة العثور على سيارة للإيجار في الوقت المناسب وبالسعر المناسب. في عام 2022، قررنا تغيير هذا الواقع من خلال إنشاء منصة تربط بين ملاك السيارات الذين لا يستخدمونها بشكل دائم، والأشخاص الذين يحتاجون إليها.'
                  : 'The idea of Wujha started from a simple challenge we all faced: the difficulty of finding a car to rent at the right time and at the right price. In 2022, we decided to change this reality by creating a platform that connects car owners who don\'t use their cars permanently with people who need them.'
                }
              </p>
              <p>
                {language === 'ar'
                  ? 'منذ إطلاقنا، نمت منصتنا لتضم آلاف المستخدمين عبر المملكة العربية السعودية. نحن فخورون بأننا ساهمنا في توفير دخل إضافي لآلاف ملاك السيارات، وقدمنا حلول نقل مرنة وبأسعار معقولة للمستأجرين.'
                  : 'Since our launch, our platform has grown to include thousands of users across Saudi Arabia. We are proud to have contributed to providing additional income for thousands of car owners and provided flexible and affordable transportation solutions for renters.'
                }
              </p>
              <p>
                {language === 'ar'
                  ? 'اليوم، نواصل العمل على تطوير منصتنا وتوسيع خدماتنا، مع الحفاظ على التزامنا بالأمان والجودة والابتكار. هدفنا هو جعل تأجير السيارات تجربة سهلة وممتعة للجميع.'
                  : 'Today, we continue to work on developing our platform and expanding our services, while maintaining our commitment to safety, quality, and innovation. Our goal is to make car rental an easy and enjoyable experience for everyone.'
                }
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {language === 'ar' ? 'فريق القيادة' : 'Leadership Team'}
            </h2>
            <p className="text-xl text-gray-600">
              {language === 'ar'
                ? 'الأشخاص الذين يقودون رؤية وُجْهَة نحو المستقبل'
                : 'The people who lead Wujha\'s vision towards the future'
              }
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div 
                key={index} 
                className="card p-6 text-center animate-fadeInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-teal-600 font-medium">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-teal-600 to-teal-700 text-white">
        <div className="container-custom">
          <div className="text-center animate-fadeInUp">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {language === 'ar' ? 'انضم إلى مجتمع وُجْهَة' : 'Join the Wujha Community'}
            </h2>
            <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
              {language === 'ar'
                ? 'كن جزءاً من ثورة تأجير السيارات واستمتع بتجربة فريدة'
                : 'Be part of the car rental revolution and enjoy a unique experience'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-teal-700 px-8 py-4 rounded-xl font-bold hover:bg-gray-50 transition-all transform hover:scale-105">
                {language === 'ar' ? 'ابدأ الآن' : 'Get Started'}
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-teal-700 transition-all">
                {language === 'ar' ? 'تواصل معنا' : 'Contact Us'}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;