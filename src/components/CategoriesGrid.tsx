import CategoryCard from "./CategoryCard";
import {
  Zap,
  Leaf,
  Infinity as InfinityIcon,
} from "lucide-react";

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
      icon: InfinityIcon,
      title: "Тороидальная жизнь",
      description: "Полная трансформация и интеграция",
      count: "30 дней",
      badge: { text: "35 000₽", variant: "featured" as const },
      iconColor: "text-primary",
      href: "/products",
    },
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {categories.map((category, index) => (
          <CategoryCard key={index} {...category} />
        ))}
      </div>
    </div>
  );
};

export default CategoriesGrid;