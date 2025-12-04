import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const Method = () => {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 pt-24 md:pt-32">
        <section className="py-12 md:py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-center mb-8">
              Выход из линейной зависимости
            </h1>
            <Card className="shadow-lg">
              <CardContent className="p-8 md:p-10 text-lg leading-relaxed">
                <p className="mb-6">
                  Большинство людей 35+ чувствуют одно и то же: они бегут, чтобы оставаться на месте. Вы покупаете вещи, чтобы компенсировать стресс от работы, на которой зарабатываете на эти вещи.
                </p>
                <p className="mb-6">
                  Мой метод основан на системном анализе и двух вопросах:
                </p>
                <ul className="list-none space-y-4 mb-6 pl-4 border-l-4 border-primary">
                  <li>
                    <strong className="font-semibold text-xl">1. Почему?</strong>
                    <p className="text-muted-foreground text-base">
                      (Поиск корневой причины, а не симптома).
                    </p>
                  </li>
                  <li>
                    <strong className="font-semibold text-xl">2. Чтобы что?</strong>
                    <p className="text-muted-foreground text-base">
                      (Проверка на истинность цели).
                    </p>
                  </li>
                </ul>
                <p>
                  Я не учу вас «быть счастливыми». Я помогаю найти баги в вашей жизненной системе, через которые утекает энергия, и устранить их.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      
      <section className="py-16 md:py-20 bg-muted/20">
        <div className="container mx-auto px-4 text-center">
            <blockquote className="text-2xl md:text-3xl font-semibold text-foreground max-w-4xl mx-auto">
              "Хватит обслуживать свою жизнь. Начните жить ею."
            </blockquote>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Method;
