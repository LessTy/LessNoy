import Header from "@/components/Header";
import ParallaxHeader from "@/components/ParallaxHeader";
import CategoriesGrid from "@/components/CategoriesGrid";
import DiasporaWelcome from "@/components/DiasporaWelcome";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, Shield, Users, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Index = () => {
  const badges = [
    { icon: Shield, text: "Философия тороидальности" },
    { icon: Users, text: "Принципы пермакультуры" },
    { icon: Heart, text: "Личная трансформация" },
  ];

  // Принудительное обновление позиции подзаголовка при монтировании
  useEffect(() => {
    // Небольшая задержка для уверенности в рендере
    const timer = setTimeout(() => {
      window.dispatchEvent(new Event('scroll'));
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <ParallaxHeader>
        <div className="hero-content">
          <h1 className="hero-title">
            У Лешего
          </h1>
        </div>
        <div className="hero-subtitle-container">
          <p className="hero-subtitle max-w-3xl mx-auto">
            Ваша жизнь как самоподдерживающаяся экосистема — философия тороидальности, практические занятия и личная трансформация
          </p>
        </div>
      </ParallaxHeader>
      
      <DiasporaWelcome />
      
      {/* БЛОК 2: ПЕЩЕРА (Dungeon) - Восстановлен */}
      <article className="main-article-dungeon">
        <div className="pt-16">
          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <Link to="/products">
              <Button size="lg" className="bg-primary/20 backdrop-blur-sm border border-primary/30 hover:bg-primary/30 text-white font-semibold px-8">
                Начать трансформацию
              </Button>
            </Link>
            <Link to="/about">
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black font-semibold px-8"
              >
                <ArrowUpRight className="w-5 h-5 mr-2" />
                Получить бесплатный гайд
              </Button>
            </Link>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            {badges.map((badge, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="bg-black/20 backdrop-blur-sm text-white border-white/10 px-4 py-2 text-sm"
              >
                <badge.icon className="w-4 h-4 mr-2" />
                {badge.text}
              </Badge>
            ))}
          </div>
          <CategoriesGrid /> 
        </div>
      </article>



      <Footer />
    </div>
  );
};

export default Index;