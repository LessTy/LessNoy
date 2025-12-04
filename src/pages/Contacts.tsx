import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, MessageCircle, Send, CheckCircle } from "lucide-react";

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Send to Telegram
    const telegramMessage = `
🆕 Новая заявка с сайта!

👤 Имя: ${formData.name}
📧 Email: ${formData.email}
📱 Телефон: ${formData.phone || 'не указан'}
💬 Сообщение: ${formData.message}
    `;
    
    const botToken = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
    const chatId = import.meta.env.VITE_TELEGRAM_CHAT_ID;

    try {
      await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: chatId,
          text: telegramMessage
        })
      });
    } catch (error) {
      console.error('Telegram error:', error);
    }
    
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", phone: "", message: "" });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Контакты</h1>
            <p className="text-xl text-muted-foreground">
              Свяжитесь с нами, чтобы начать свой путь трансформации
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <div className="space-y-8">
                {/* Email */}
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Email</h4>
                      <a href="mailto:lessnoy7@gmail.com" className="text-primary hover:text-primary/80 break-all">
                        lessnoy7@gmail.com
                      </a>
                      <p className="text-sm text-muted-foreground mt-2">Ответим в течение 24 часов</p>
                    </div>
                  </div>
                </Card>


                {/* Location */}
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Локация</h4>
                      <p className="text-muted-foreground">Онлайн формат<br/>По всему миру</p>
                      <p className="text-sm text-muted-foreground mt-2">Практикумы проводятся на природе</p>
                    </div>
                  </div>
                </Card>

                {/* Telegram */}
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Telegram</h4>
                      <a href="https://t.me/JlELLIuu" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80">
                        @JlELLIuu
                      </a>
                      <p className="text-sm text-muted-foreground mt-2">Быстрая связь и обновления</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="p-8">
                <h2 className="text-2xl font-bold mb-6">Отправьте сообщение</h2>
                
                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Спасибо за сообщение!</h3>
                    <p className="text-muted-foreground">Мы свяжемся с вами в ближайшее время</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name */}
                    <div>
                      <label className="block text-sm font-medium mb-2">Имя</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Ваше имя"
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background hover:border-primary/50 focus:border-primary focus:outline-none transition"
                        required
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background hover:border-primary/50 focus:border-primary focus:outline-none transition"
                        required
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-sm font-medium mb-2">Телефон (опционально)</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+7 (999) 999-99-99"
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background hover:border-primary/50 focus:border-primary focus:outline-none transition"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-sm font-medium mb-2">Сообщение</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Расскажите о себе и о том, что вас интересует..."
                        rows={6}
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background hover:border-primary/50 focus:border-primary focus:outline-none transition resize-none"
                        required
                      />
                    </div>

                    {/* Submit */}
                    <Button size="lg" className="w-full">
                      <Send className="w-4 h-4 mr-2" />
                      Отправить сообщение
                    </Button>
                  </form>
                )}
              </Card>

              {/* Additional Info */}
              <div className="mt-8 space-y-6">
                <Card className="p-6 bg-primary/5">
                  <h3 className="font-semibold mb-2">Часто задаваемые вопросы</h3>
                  <p className="text-sm text-muted-foreground">
                    Посетите наш блог или программы для получения ответов на популярные вопросы о трансформации и наших услугах.
                  </p>
                </Card>

                <Card className="p-6 bg-primary/5">
                  <h3 className="font-semibold mb-2">Информационная встреча</h3>
                  <p className="text-sm text-muted-foreground">
                    Желаете узнать больше о программах перед началом? Закажите бесплатную 30-минутную консультацию.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
            <blockquote className="text-2xl md:text-3xl font-semibold text-foreground max-w-4xl mx-auto">
              "Хватит <span className="text-primary">обслуживать</span> свою жизнь. Начните <span className="text-primary">жить</span> ею."
            </blockquote>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contacts;
