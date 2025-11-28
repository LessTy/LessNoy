import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Products = () => {
  const products = [
    {
      id: 1,
      title: "Личный энергоаудит",
      price: "10 000₽",
      duration: "7 дней",
      color: "from-amber-500/20 to-orange-500/20",
      description: "Глубокая диагностика вашего энергетического потока и состояния",
      includes: [
        "Подробный анализ текущего состояния",
        "Выявление энергетических утечек",
        "Рекомендации по оптимизации",
        "Обратная связь от специалиста",
        "Доступ к материалам на 30 дней"
      ],
      features: [
        "Онлайн формат",
        "Личный консультант",
        "Финальный отчет"
      ]
    },
    {
      id: 2,
      title: "Проектирование пермасистемы",
      price: "20 000₽",
      duration: "14 дней",
      color: "from-green-500/20 to-emerald-500/20",
      description: "Разработка персональной экосистемы жизни на основе принципов пермакультуры",
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
      title: "Тороидальная жизнь",
      price: "35 000₽",
      duration: "30 дней",
      color: "from-purple-500/20 to-pink-500/20",
      description: "Полная трансформация и глубокая интеграция философии тороидальности в жизнь",
      includes: [
        "Все из двух предыдущих программ",
        "Индивидуальная работа по философии тороидальности",
        "Восемь еженедельных сессий коучинга",
        "Группа поддержки участников",
        "Доступ к закрытому контенту",
        "Сертификат об окончании программы",
        "Годовая поддержка сообществом"
      ],
      features: [
        "Полный погруженный опыт",
        "Персональный коуч",
        "Пожизненный доступ к материалам"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Программы и услуги</h1>
            <p className="text-xl text-muted-foreground">
              Выберите программу трансформации, которая соответствует вашему уровню готовности
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
            {products.map((product) => (
              <div key={product.id} className="h-full flex flex-col">
                <Card className={`h-full flex flex-col overflow-hidden border-2 hover:border-primary transition bg-gradient-to-br ${product.color}`}>
                  {/* Header */}
                  <div className="p-8 pb-6 border-b">
                    <h3 className="text-2xl font-bold mb-2">{product.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{product.description}</p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-bold text-primary">{product.price}</span>
                      <span className="text-sm text-muted-foreground">{product.duration}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-8">
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3 text-sm">Включает:</h4>
                      <ul className="space-y-2">
                        {product.includes.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-sm">
                            <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-muted-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3 text-sm">Формат:</h4>
                      <div className="flex flex-wrap gap-2">
                        {product.features.map((feature, idx) => (
                          <span key={idx} className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="p-8 pt-6 border-t">
                    <Link to="/contacts" className="block">
                      <Button className="w-full" size="lg">
                        Подать заявку
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </Card>
              </div>
            ))}
          </div>

          {/* Practicum */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-12">Специальное предложение</h2>
            <Card className="p-8 md:p-12 bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-3xl font-bold mb-4">"Погружение, преобразование"</h3>
                  <p className="text-lg text-muted-foreground mb-6">
                    Трёхдневный очный практикум в природной среде. Интенсивная работа с философией тороидальности, 
                    практическими упражнениями и групповой синергией.
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-primary" />
                      <span>Проживание и питание включены</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-primary" />
                      <span>Максимум 15 человек в группе</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-primary" />
                      <span>Даты: 15-17 июня, 20-22 сентября</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-primary" />
                      <span>Цена: 45 000₽</span>
                    </div>
                  </div>
                  <Button size="lg" className="w-full md:w-auto">
                    <Link to="/contacts" className="flex items-center justify-center">
                      Зарегистрироваться на практикум
                    </Link>
                  </Button>
                </div>
                <div className="bg-muted rounded-lg aspect-square flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-muted-foreground">Фото практикума</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* FAQ */}
          <div>
            <h2 className="text-3xl font-bold mb-12">Частые вопросы</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6">
                <h4 className="font-semibold mb-3">Можно ли комбинировать программы?</h4>
                <p className="text-muted-foreground text-sm">
                  Да, каждая программа строится на основе предыдущей. Рекомендуется начать с диагностики.
                </p>
              </Card>
              <Card className="p-6">
                <h4 className="font-semibold mb-3">Есть ли гарантии результата?</h4>
                <p className="text-muted-foreground text-sm">
                  Результаты зависят от вашей готовности к изменениям. Мы предоставляем профессиональное сопровождение на каждом этапе.
                </p>
              </Card>
              <Card className="p-6">
                <h4 className="font-semibold mb-3">Какой формат обучения?</h4>
                <p className="text-muted-foreground text-sm">
                  Онлайн сессии, видеоматериалы, рабочие тетради и групповая поддержка. Очный практикум проводится несколько раз в год.
                </p>
              </Card>
              <Card className="p-6">
                <h4 className="font-semibold mb-3">Как оплатить?</h4>
                <p className="text-muted-foreground text-sm">
                  Принимаем карты, переводы, Яндекс.Кассу. Возможны рассрочки при подписании договора.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
