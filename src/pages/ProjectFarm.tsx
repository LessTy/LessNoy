import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ProjectFarm = () => {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 pt-24 md:pt-32">
        <section className="py-12 md:py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-center mb-8">
              Лаборатория «<span className="text-primary">Избушка Лешего</span>»
            </h1>
            <Card className="shadow-lg mb-12">
              <CardContent className="p-8 md:p-10 text-lg leading-relaxed">
                <p className="mb-6">
                  Это не дауншифтинг. Это повышение уровня сложности. Я строю автономную экосистему на 6 гектарах тайги. С абсолютного нуля. Без бюджета. Используя только законы физики, природы и системный подход.
                </p>
                <p>
                  Здесь я тестирую принципы Тороидальности в материи:
                </p>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-3 gap-8 text-center mb-12">
                <Card>
                    <CardHeader><CardTitle>Глиночурка</CardTitle></CardHeader>
                    <CardContent><p>Как идеальный и доступный материал для строительства.</p></CardContent>
                </Card>
                <Card>
                    <CardHeader><CardTitle>Пермакультура</CardTitle></CardHeader>
                    <CardContent><p>Как способ получать еду без насилия над землей.</p></CardContent>
                </Card>
                <Card>
                    <CardHeader><CardTitle>Энергонезависимость</CardTitle></CardHeader>
                    <CardContent><p>Как основа реальной свободы и автономии.</p></CardContent>
                </Card>
            </div>

            <Card className="bg-muted/40">
                <CardHeader>
                    <CardTitle className="text-center">Контент</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                    <p className="text-muted-foreground">
                        Здесь будет галерея фото (стройка, природа), чертежи и планы проекта.
                    </p>
                    <div className="mt-4">
                        <Badge variant="secondary">В разработке</Badge>
                    </div>
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
  );
};

export default ProjectFarm;
