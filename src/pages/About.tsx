import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CategoriesGrid from "@/components/CategoriesGrid";

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="scrollable-dungeon"></div>
      <div style={{ minHeight: '100vh', overflowY: 'auto', position: 'relative', zIndex: 1, paddingTop: '4rem' }}>
        <div className="container mx-auto px-4 py-8 md:py-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 md:mb-8 text-primary">
              Наша Философия
            </h1>
            <p className="text-base md:text-lg text-center text-white/90 mb-8 md:mb-12">
              «В избушке у Лешего» — это не просто проект. Это живая экосистема и путь к осмысленной жизни, вдохновленный мудростью природы.
            </p>

            <div className="space-y-8 md:space-y-10">
              <div>
                <h2 className="text-2xl md:text-3xl font-semibold mb-4">От выгорания — к потоку</h2>
                <p className="text-white/80 leading-relaxed">
                  Современный мир с его линейным ритмом «работа-дом-работа» часто приводит к истощению, выгоранию и потере смысла. Мы разрываем этот порочный круг, обращаясь к природному принципу — тороидальности. Все в природе, от атома до галактики, существует в форме самоподдерживающихся систем (торов). Наша задача — помочь вам восстановить этот естественный, замкнутый контур циркуляции энергии в вашей жизни.
                </p>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-semibold mb-4">Ваш проводник</h2>
                <p className="text-white/80 leading-relaxed">
                  Я не гуру и не учитель. Я — проводник, который на своем примере показывает путь из мира стресса в мир гармонии. Я прошел этот путь сам и создал пространство, где каждый может найти свою тропу. Моя жизнь теперь — это физическое воплощение философии, а цифровые продукты — инструкция по ее применению в повседневной жизни.
                </p>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-semibold mb-4">Три столпа нашей экосистемы</h2>
                <CategoriesGrid />
              </div>
              
               <div className="text-center pt-8 md:pt-10">
                  <p className="text-lg md:text-xl text-primary">
                    Присоединяйтесь к нам, чтобы заново открыть себя и построить жизнь, полную смысла, энергии и гармонии.
                  </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;