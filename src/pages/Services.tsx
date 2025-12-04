import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 pt-24 md:pt-32">
        <section className="py-12 md:py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-center mb-4">
              Услуги
            </h1>
            <p className="text-lg text-muted-foreground text-center mb-12">
              Строгий прайс-лист. Никаких "<span className="text-primary">успей купить</span>".
            </p>

            <div className="space-y-8">
              {/* Продукт 1 */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl">Стратегическая сессия «<span className="text-primary">Анализ жизненной стратегии</span>»</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold">Описание:</h3>
                    <p className="text-muted-foreground">
                      2 часа глубокого анализа. Мы найдем, где ваша система дает сбой. Вы получите взгляд со стороны — жесткий, честный, аналитический.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold">Для кого:</h3>
                    <p className="text-muted-foreground">
                      Для тех, кто уперся в стеклянный потолок или потерял смысл.
                    </p>
                  </div>
                   <div>
                    <h3 className="font-semibold">Цена:</h3>
                    <p className="text-2xl font-bold text-primary">
                      [Цена]
                    </p>
                  </div>
                  <Link to="/contacts">
                    <Button>Записаться на аудит</Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Продукт 2 */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl">Наставничество «<span className="text-primary">Архитектура Автономии</span>»</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold">Описание:</h3>
                    <p className="text-muted-foreground">
                      Сопровождение в перестройке вашей жизни. Внедрение принципов пермакультуры в ваш быт, бизнес и голову.
                    </p>
                  </div>
                   <Link to="/contacts">
                     <Button variant="secondary">Обсудить детали</Button>
                   </Link>
                </CardContent>
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
  );
};

export default Services;