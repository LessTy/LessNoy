import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, Zap, Leaf, Infinity } from "lucide-react";
import { Link } from "react-router-dom";

const Products = () => {
  const products = [
    {
      id: 1,
      icon: Zap,
      title: "Личный энергоаудит",
      price: "10 000₽",
      duration: "7 дней",
      color: "from-amber-500/20 to-orange-500/20",
      description: "Глубокая диагностика вашего энергетического состояния",
      includes: [
        "Подробный анализ текущего состояния",
        "Выявление энергетических утечек",
        "Рекомендации по оптимизации",
        "Обратная связь от проводника"
      ],
      features: [
        "Онлайн формат",
        "Личный консультант",
        "Финальный отчет"
      ]
    },
    {
      id: 2,
      icon: Leaf,
      title: "Проектирование пермасистемы",
      price: "20 000₽",
      duration: "14 дней",
      color: "from-green-500/20 to-emerald-500/20",
      description: "Разработка персональной экосистемы жизни на основе принципов тороидальности и пермакультуры",
      includes: [
        "Диагностика всех сфер жизни",
        "Проектирование личной пермасистемы",
        "Выявление связей и синергии",
        "План внедрения по этапам",
        "Работа с сопротивлением к переменам",
        "Четыре видеокруга с наставником"
      ],
      features: [
        "Интерактивные сессии",
        "Рабочая тетрадь",
        "План на 12 месяцев"
      ]
    },
    {
      id: 3,
      icon: Infinity,
      title: "Тороидальная жизнь",
      price: "35 000₽",
      duration: "30 дней",
      color: "from-purple-500/20 to-pink-500/20",
      description: "Полная трансформация и глубокая интеграция философии тороидальности в жизнь",
      includes: [
        "Все из двух предыдущих программ",
        "Индивидуальная работа по философии тороидальности",
        "Ежедневные сессий коучинга",
        "Группа поддержки участников",
        "Доступ к закрытому контенту"
      ],
      features: [
        "Полный погруженный опыт",
        "Персональный коуч",
        "Пожизненный доступ к материалам"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <div className="scrollable-dungeon"></div>
      <div style={{ minHeight: '100vh', overflowY: 'auto', position: 'relative', zIndex: 1, paddingTop: '4rem' }}>
        <div className="container mx-auto px-4 py-8 md:py-12">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 md:mb-8 text-primary">
              Программы и услуги
            </h1>
            <p className="text-base md:text-lg text-center text-white/90 mb-8 md:mb-12">
              Выберите программу трансформации, которая соответствует вашему уровню готовности
            </p>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-12">
              {products.map((product) => {
                const Icon = product.icon;
                return (
                  <div key={product.id} className="h-full flex flex-col">
                    <Card className="h-full flex flex-col overflow-hidden border border-white/10 hover:border-primary/30 transition bg-black/20 backdrop-blur-sm">
                      {/* Header */}
                      <div className="p-5 sm:p-6 border-b border-white/10">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                            <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                          </div>
                          <div>
                            <h3 className="text-lg sm:text-xl font-bold">{product.title}</h3>
                            <div className="flex items-baseline gap-2">
                              <span className="text-lg sm:text-xl font-bold text-primary">{product.price}</span>
                              <span className="text-xs sm:text-sm text-white/60">{product.duration}</span>
                            </div>
                          </div>
                        </div>
                        <p className="text-xs sm:text-sm text-white/80">{product.description}</p>
                      </div>

                      {/* Content */}
                      <div className="flex-1 p-5 sm:p-6">
                        <div className="mb-5">
                          <h4 className="font-semibold mb-3 text-sm">Включает:</h4>
                          <ul className="space-y-2">
                            {product.includes.map((item, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm">
                                <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                                <span className="text-white/80">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-3 text-sm">Формат:</h4>
                          <div className="flex flex-wrap gap-1 sm:gap-2">
                            {product.features.map((feature, idx) => (
                              <span key={idx} className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium">
                                {feature}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* CTA */}
                      <div className="p-5 sm:p-6 pt-0">
                        <Link to="/contacts" className="block">
                          <Button className="w-full" size="sm">
                            Подать заявку
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                        </Link>
                      </div>
                    </Card>
                  </div>
                );
              })}
            </div>

            {/* Practicum */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Специальное предложение</h2>
              <Card className="p-6 md:p-8 bg-black/20 backdrop-blur-sm border border-white/10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">"Погружение, преобразование"</h3>
                    <p className="text-white/80 mb-6">
                      Трёхдневный очный практикум в природной среде. Интенсивная работа с философией тороидальности, 
                      практическими упражнениями и групповой синергией.
                    </p>
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-primary" />
                        <span className="text-white/80">Проживание и питание включены</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-primary" />
                        <span className="text-white/80">Максимум 4 человека в группе</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-primary" />
                        <span className="text-white/80">Даты: 15-17 июня, 20-22 сентября</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-primary" />
                        <span className="text-white/80">Цена: 50 000₽</span>
                      </div>
                    </div>
                    <Button size="lg" className="w-full md:w-auto bg-primary hover:bg-primary/90">
                      <Link to="/contacts" className="flex items-center justify-center">
                        Зарегистрироваться на практикум
                      </Link>
                    </Button>
                  </div>
                  <div className="bg-black/30 rounded-lg aspect-square flex items-center justify-center border border-white/10">
                    <div className="text-center">
                      <p className="text-white/60">Фото практикума</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* FAQ */}
            <div class="mt-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Частые вопросы</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <Card className="p-6 bg-black/20 backdrop-blur-sm border border-white/10">
                  <h4 className="font-semibold mb-3 text-lg">Можно ли комбинировать программы?</h4>
                  <p className="text-white/80 text-sm">
                    Да, каждая программа строится на основе предыдущей. Рекомендуется начать с диагностики.
                  </p>
                </Card>
                <Card className="p-6 bg-black/20 backdrop-blur-sm border border-white/10">
                  <h4 className="font-semibold mb-3 text-lg">Есть ли гарантии результата?</h4>
                  <p className="text-white/80 text-sm">
                    Результаты зависят от вашей готовности к изменениям. Мы предоставляем профессиональное сопровождение на каждом этапе.
                  </p>
                </Card>
                <Card className="p-6 bg-black/20 backdrop-blur-sm border border-white/10">
                  <h4 className="font-semibold mb-3 text-lg">Какой формат обучения?</h4>
                  <p className="text-white/80 text-sm">
                    Онлайн сессии, видеоматериалы, рабочие тетради и групповая поддержка. Очный практикум проводится несколько раз в год.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Products;