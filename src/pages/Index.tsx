import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { ArrowRight, Send } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const scrollToManifesto = () => {
    document.getElementById('manifesto')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <div className="fixed-bg" style={{ backgroundImage: "url(/img/2.png)" }}></div>
      <div className="min-h-screen bg-transparent text-foreground flex flex-col">
        <Header />
      
        <main className="flex-grow container mx-auto px-4 pt-24 md:pt-32">
          {/* === HERO === */}
          <section className="text-center py-16 md:py-24">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
              ПРОЕКТ: <span className="text-primary">АВТОНОМИЯ</span>
            </h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground mb-8">
            Системный подход к жизни для тех, кто устал её обслуживать.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button size="lg" onClick={scrollToManifesto}>
              Читать Манифест
            </Button>
            <a href="https://t.me/JlELLIuu" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline">
                <Send className="w-4 h-4 mr-2" />
                Telegram-канал
              </Button>
            </a>
          </div>
        </section>

        {/* === СУТЬ (МАНИФЕСТ) === */}
        <section id="manifesto" className="py-16 md:py-24 max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Суть Проекта</h2>
            <blockquote className="text-xl md:text-2xl text-foreground leading-relaxed border-l-4 border-primary pl-6">
              "Мы живем в линейном мире: Заработал → Потратил → Умер. Это системная ошибка. Я предлагаю архитектуру замкнутого цикла (<span className="text-primary">Тор</span>). Жизнь, которая питает сама себя."
            </blockquote>
        </section>

        {/* === ДВА ПУТИ === */}
        <section className="py-16 md:py-24">
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {/* Карта 1: Философия */}
                <Card className="hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                        <CardTitle className="text-2xl">1. Философия</CardTitle>
                        <CardDescription>Как перестроить мышление и выйти из дня сурка.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="mb-4">
                          Поиск и устранение "багов" в вашей жизненной системе, через которые утекает энергия.
                        </p>
                        <Link to="/services">
                            <Button variant="link" className="p-0 h-auto">
                                Узнать об услугах <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                        </Link>
                    </CardContent>
                </Card>

                {/* Карта 2: Практика */}
                <Card className="hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                        <CardTitle className="text-2xl">2. Практика</CardTitle>
                        <CardDescription>Как я строю автономную экосистему на 6 гектарах с нуля.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="mb-4">
                          Дневник стройки, чертежи, технологии. Реалити-проект как доказательство работы системы.
                        </p>
                         <Link to="/project-farm">
                            <Button variant="link" className="p-0 h-auto">
                               Смотреть проект <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                        </Link>
                    </CardContent>
                </Card>
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

export default Index;