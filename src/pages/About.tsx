import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <>
      <div className="fixed-bg" style={{ backgroundImage: "url(/img/3.jpg)" }}>
        <div className="bg-overlay-green"></div>
      </div>
      <div className="min-h-screen bg-transparent text-foreground flex flex-col">
        <Header />
        <main className="flex-grow container mx-auto px-4 pt-24 md:pt-32">
          <section className="py-12 md:py-16">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-center mb-8">
                Tabula Rasa <span className="text-primary">(Чистый лист)</span>
              </h1>
            <Card className="shadow-lg">
              <CardContent className="p-8 md:p-10 text-lg leading-relaxed space-y-6">
                <p>
                  Мне 43 года. У меня за плечами опыт, которого хватило бы на три жизни. Я строил бизнесы в разных городах. Я терял всё.
                </p>
                <p>
                  Я пережил предательство самых близких.
                </p>
                <p>
                  Я провел 2 года прикованным к постели после комы, собирая себя по кускам.
                </p>
                <blockquote className="text-xl md:text-2xl text-foreground leading-relaxed border-l-4 border-primary pl-6 my-6">
                  <span className="text-primary">"Именно тогда, лежа в тишине, я понял: всё, за чем я гнался — фантомы."</span>
                </blockquote>
                <p>
                  Я вышел из игры. Сейчас у меня нет миллионов на счетах, но у меня есть то, чего нет у большинства — Свобода и понимание, как работает Жизнь.
                </p>
                <p className="font-semibold text-primary">
                  Я — Проводник. Я иду впереди, проверяю дорогу и показываю путь вам.
                </p>
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

export default About;