import CategoryCard from "./CategoryCard";
import { Zap, Leaf, Infinity } from "lucide-react";

const CategoriesGrid = () => {
  const categories = [
    {
      icon: Zap,
      title: "Личный энергоаудит",
      description: "Диагностика вашего энергетического потока",
      count: "7 дней",
      badge: { text: "10 000₽", variant: "featured" as const },
      iconColor: "text-primary",
      href: "/products",
    },
    {
      icon: Leaf,
      title: "Проектирование пермасистемы",
      description: "Разработка личной экосистемы жизни",
      count: "14 дней",
      badge: { text: "20 000₽", variant: "featured" as const },
      iconColor: "text-primary",
      href: "/products",
    },
    {
      icon: Infinity,
      title: "Тороидальная жизнь",
      description: "Полная трансформация и интеграция",
      count: "30 дней",
      badge: { text: "35 000₽", variant: "featured" as const },
      iconColor: "text-primary",
      href: "/products",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <CategoryCard key={index} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesGrid;
