import React, { useState } from 'react';
import { 
  MessageCircle, 
  Send, 
  Search, 
  Phone, 
  Video,
  MoreVertical,
  Paperclip,
  Smile
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useUser } from '../contexts/UserContext';

const Messages: React.FC = () => {
  const { language } = useLanguage();
  const { user } = useUser();
  const [selectedChat, setSelectedChat] = useState<string | null>('1');
  const [newMessage, setNewMessage] = useState('');

  const conversations = [
    {
      id: '1',
      name: language === 'ar' ? 'أحمد العلي' : 'Ahmed Al-Ali',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100',
      lastMessage: language === 'ar' ? 'السيارة جاهزة للاستلام' : 'Car is ready for pickup',
      time: '10:30 AM',
      unread: 2,
      online: true,
      carName: language === 'ar' ? 'تويوتا كامري' : 'Toyota Camry'
    },
    {
      id: '2',
      name: language === 'ar' ? 'فاطمة الأحمد' : 'Fatima Al-Ahmad',
      avatar: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=100',
      lastMessage: language === 'ar' ? 'شكراً لك على التقييم' : 'Thank you for the rating',
      time: 'Yesterday',
      unread: 0,
      online: false,
      carName: language === 'ar' ? 'هوندا أكورد' : 'Honda Accord'
    },
    {
      id: '3',
      name: language === 'ar' ? 'محمد السالم' : 'Mohammed Al-Salem',
      avatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=100',
      lastMessage: language === 'ar' ? 'هل يمكن تمديد الحجز؟' : 'Can I extend the booking?',
      time: '2 days ago',
      unread: 0,
      online: true,
      carName: language === 'ar' ? 'نيسان التيما' : 'Nissan Altima'
    }
  ];

  const messages = [
    {
      id: '1',
      senderId: '1',
      text: language === 'ar' ? 'مرحباً، متى يمكنني استلام السيارة؟' : 'Hello, when can I pick up the car?',
      time: '10:00 AM',
      isOwn: false
    },
    {
      id: '2',
      senderId: user?.id || 'me',
      text: language === 'ar' ? 'مرحباً! يمكنك استلامها في أي وقت بعد الساعة 2 ظهراً' : 'Hello! You can pick it up anytime after 2 PM',
      time: '10:15 AM',
      isOwn: true
    },
    {
      id: '3',
      senderId: '1',
      text: language === 'ar' ? 'ممتاز، سأكون هناك في الساعة 3' : 'Perfect, I\'ll be there at 3',
      time: '10:20 AM',
      isOwn: false
    },
    {
      id: '4',
      senderId: user?.id || 'me',
      text: language === 'ar' ? 'السيارة جاهزة للاستلام. الموقع كما هو محدد في التطبيق' : 'Car is ready for pickup. Location as specified in the app',
      time: '10:30 AM',
      isOwn: true
    }
  ];

  const selectedConversation = conversations.find(conv => conv.id === selectedChat);

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      // Here you would typically send the message to your backend
      console.log('Sending message:', newMessage);
      setNewMessage('');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container-custom py-8">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm overflow-hidden h-[600px] flex">
          {/* Conversations List */}
          <div className="w-1/3 border-r border-gray-200 dark:border-gray-700 flex flex-col">
            {/* Header */}
            <div className="p-4 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                {language === 'ar' ? 'الرسائل' : 'Messages'}
              </h2>
              <div className="relative">
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder={language === 'ar' ? 'بحث في المحادثات...' : 'Search conversations...'}
                  className="w-full pr-10 pl-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              </div>
            </div>

            {/* Conversations */}
            <div className="flex-1 overflow-y-auto">
              {conversations.map((conversation) => (
                <div
                  key={conversation.id}
                  onClick={() => setSelectedChat(conversation.id)}
                  className={`p-4 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors ${
                    selectedChat === conversation.id ? 'bg-teal-50 dark:bg-teal-900/20 border-r-2 border-teal-500' : ''
                  }`}
                >
                  <div className="flex items-center space-x-3 rtl:space-x-reverse">
                    <div className="relative">
                      <img
                        src={conversation.avatar}
                        alt={conversation.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      {conversation.online && (
                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white dark:border-gray-800"></div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start mb-1">
                        <h3 className="font-semibold text-gray-900 dark:text-white truncate">{conversation.name}</h3>
                        <span className="text-xs text-gray-500 dark:text-gray-400">{conversation.time}</span>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 truncate">{conversation.lastMessage}</p>
                      <p className="text-xs text-teal-600 mt-1">{conversation.carName}</p>
                    </div>
                    {conversation.unread > 0 && (
                      <div className="w-5 h-5 bg-teal-500 rounded-full flex items-center justify-center">
                        <span className="text-xs text-white font-medium">{conversation.unread}</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Chat Area */}
          <div className="flex-1 flex flex-col">
            {selectedConversation ? (
              <>
                {/* Chat Header */}
                <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
                  <div className="flex items-center space-x-3 rtl:space-x-reverse">
                    <div className="relative">
                      <img
                        src={selectedConversation.avatar}
                        alt={selectedConversation.name}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      {selectedConversation.online && (
                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white dark:border-gray-800"></div>
                      )}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">{selectedConversation.name}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {selectedConversation.online 
                          ? (language === 'ar' ? 'متصل الآن' : 'Online now')
                          : (language === 'ar' ? 'آخر ظهور منذ ساعة' : 'Last seen 1 hour ago')
                        }
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 rtl:space-x-reverse">
                    <button className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                      <Phone className="w-5 h-5" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                      <Video className="w-5 h-5" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                      <MoreVertical className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.isOwn ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${
                          message.isOwn
                            ? 'bg-teal-600 text-white'
                            : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white'
                        }`}
                      >
                        <p className="text-sm">{message.text}</p>
                        <p className={`text-xs mt-1 ${
                          message.isOwn ? 'text-teal-100' : 'text-gray-500 dark:text-gray-400'
                        }`}>
                          {message.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Message Input */}
                <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex items-center space-x-2 rtl:space-x-reverse">
                    <button className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                      <Paperclip className="w-5 h-5" />
                    </button>
                    <div className="flex-1 relative">
                      <input
                        type="text"
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                        placeholder={language === 'ar' ? 'اكتب رسالة...' : 'Type a message...'}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-full focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      />
                      <button className="absolute left-2 top-1/2 transform -translate-y-1/2 p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                        <Smile className="w-5 h-5" />
                      </button>
                    </div>
                    <button
                      onClick={handleSendMessage}
                      className="p-2 bg-teal-600 text-white rounded-full hover:bg-teal-700 transition-colors"
                    >
                      <Send className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <div className="flex-1 flex items-center justify-center">
                <div className="text-center">
                  <MessageCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {language === 'ar' ? 'اختر محادثة' : 'Select a conversation'}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {language === 'ar' ? 'اختر محادثة من القائمة لبدء المراسلة' : 'Choose a conversation from the list to start messaging'}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;