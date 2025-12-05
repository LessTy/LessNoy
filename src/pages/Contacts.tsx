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
    <>
      <div className="fixed-bg" style={{ backgroundImage: "url(/img/5.png)" }}>
        <div className="bg-overlay-green"></div>
      </div>
      <div className="min-h-screen bg-transparent text-foreground flex flex-col">
        <Header />

        <main className="flex-grow container mx-auto px-4 pt-24 md:pt-32">
          {/* Hero Section */}
          <section className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Контакты</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Свяжитесь со мной, чтобы начать свой путь трансформации.
            </p>
          </section>

          {/* Main Content */}
          <section className="py-16 md:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 max-w-6xl mx-auto">
              {/* Contact Information */}
              <div className="lg:col-span-1">
                <div className="space-y-6">
                  {/* Email */}
                  <Card className="p-6 text-center lg:text-left">
                    <Mail className="w-8 h-8 text-primary mx-auto lg:mx-0 mb-3" />
                    <h4 className="font-semibold mb-1">Email</h4>
                    <a href="mailto:lessnoy7@gmail.com" className="text-primary hover:text-primary/80 break-all">
                      lessnoy7@gmail.com
                    </a>
                  </Card>

                  {/* Location */}
                  <Card className="p-6 text-center lg:text-left">
                    <MapPin className="w-8 h-8 text-primary mx-auto lg:mx-0 mb-3" />
                    <h4 className="font-semibold mb-1">Локация</h4>
                    <p className="text-muted-foreground">Онлайн / По всему миру</p>
                  </Card>

                  {/* Telegram */}
                  <Card className="p-6 text-center lg:text-left">
                    <MessageCircle className="w-8 h-8 text-primary mx-auto lg:mx-0 mb-3" />
                    <h4 className="font-semibold mb-1">Telegram</h4>
                    <a href="https://t.me/JlELLIuu" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80">
                      @JlELLIuu
                    </a>
                  </Card>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card className="p-6 md:p-8">
                  <h2 className="text-2xl font-bold mb-6 text-center">Отправьте сообщение</h2>
                  
                  {submitted ? (
                    <div className="flex flex-col items-center justify-center py-12 text-center">
                      <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
                      <h3 className="text-xl font-semibold mb-2">Спасибо за сообщение!</h3>
                      <p className="text-muted-foreground">Мы свяжемся с вами в ближайшее время.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium mb-2 sr-only">Имя</label>
                        <input
                          type="text" name="name" value={formData.name} onChange={handleChange}
                          placeholder="Ваше имя"
                          className="w-full px-4 py-3 rounded-lg border border-input bg-transparent hover:border-primary/50 focus:border-primary focus:outline-none transition"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2 sr-only">Email</label>
                        <input
                          type="email" name="email" value={formData.email} onChange={handleChange}
                          placeholder="your@email.com"
                          className="w-full px-4 py-3 rounded-lg border border-input bg-transparent hover:border-primary/50 focus:border-primary focus:outline-none transition"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2 sr-only">Телефон (опционально)</label>
                        <input
                          type="tel" name="phone" value={formData.phone} onChange={handleChange}
                          placeholder="Телефон (опционально)"
                          className="w-full px-4 py-3 rounded-lg border border-input bg-transparent hover:border-primary/50 focus:border-primary focus:outline-none transition"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2 sr-only">Сообщение</label>
                        <textarea
                          name="message" value={formData.message} onChange={handleChange}
                          placeholder="Расскажите о себе и о том, что вас интересует..."
                          rows={5}
                          className="w-full px-4 py-3 rounded-lg border border-input bg-transparent hover:border-primary/50 focus:border-primary focus:outline-none transition resize-none"
                          required
                        />
                      </div>
                      <Button size="lg" className="w-full">
                        <Send className="w-4 h-4 mr-2" />
                        Отправить
                      </Button>
                    </form>
                  )}
                </Card>
              </div>
            </div>
          </section>
        </main>

        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4 text-center">
              <blockquote className="text-2xl md:text-3xl font-semibold text-foreground max-w-4xl mx-auto">
                "Хватит <span className="text-primary">обслуживать</span> свою жизнь. Начните <span className="text-primary">жить</span> ею."
              </blockquote>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Contacts;
