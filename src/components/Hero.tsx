import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, Shield, Users, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-creators.jpg";

const Hero = () => {
  const stats = [
    { value: "3", label: "Ступени трансформации" },
    { value: "10k+", label: "Участников" },
    { value: "100%", label: "Переход на циклическую жизнь" },
  ];

  const badges = [
    { icon: Shield, text: "Философия тороидальности" },
    { icon: Users, text: "Принципы пермакультуры" },
    { icon: Heart, text: "Личная трансформация" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Nigerian creators collaborating"
          className="w-full h-full object-cover"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-32 text-center">
        {/* Stats */}
        <div className="flex flex-wrap items-center justify-center gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="flex items-center gap-2">
              <span className="text-3xl md:text-4xl font-bold text-primary">
                {stat.value}
              </span>
              <span className="text-sm text-white/90">• {stat.label}</span>
            </div>
          ))}
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
          В избушке у Лешего
        </h1>

        {/* Subheading */}
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
          Ваша жизнь как самоподдерживающаяся экосистема — философия тороидальности, практическая пермакультура и личная трансформация
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <Link to="/products">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold px-8">
              Начать трансформацию
            </Button>
          </Link>
          <Link to="/about">
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-foreground font-semibold px-8"
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
              className="bg-white/10 backdrop-blur-sm text-white border-white/20 px-4 py-2 text-sm"
            >
              <badge.icon className="w-4 h-4 mr-2" />
              {badge.text}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
