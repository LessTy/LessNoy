import { useParams, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, User, ArrowLeft, ArrowRight, MessageCircle } from "lucide-react";

// Hardcoded blog posts content
const blogPostsContent: Record<string, any> = {
  "toroidal-model": {
    title: "Что такое тороидальная модель жизни и почему она изменит ваше представление об успехе",
    author: "Леший",
    date: "15 января 2025",
    category: "Философия",
    content: `
# Что такое тороидальная модель жизни и почему она изменит ваше представление об успехе

Мы живём в обществе, где успех измеряется линейной прогрессией. Каждый день должен быть лучше предыдущего, каждый месяц — успешнее, каждый год — продуктивнее. Но что происходит, когда мы не можем поддерживать эту гонку? Что происходит, когда мы достигаем вершины и понимаём, что нам не хватает смысла?

## Линейная модель и её пределы

Традиционная западная модель развития построена на идее бесконечного роста. Графики должны идти вверх, числа должны увеличиваться, статус должен возвышаться. Это работает... до определённого момента.

Выгорание — это не личная неудача. Это результат следования модели, которая противоречит нашей природе. Человек — не машина. Мы цикличны. У нас есть периоды активности и восстановления, роста и интеграции, экспансии и сокращения.

## Познакомьтесь с торусом

Торус (или тор) — это трёхмерная геометрическая форма, похожая на пончик. Но эта простая форма скрывает в себе глубокую символику:

- **Нет начала и конца** — поток энергии цикличен и самоподдерживаем
- **Баланс внутреннего и внешнего** — центральное отверстие представляет внутренний фокус, поверхность — внешнее выражение
- **Гармоничное движение** — энергия течёт естественно и органично

## Применение в вашей жизни

Тороидальная модель предлагает нам:

1. **Циклический рост** — вместо линейного прогресса мы движемся по спирали. Каждый цикл возвращает нас к знакомым темам, но на более высоком уровне.

2. **Интеграция всех аспектов** — работа, здоровье, отношения, творчество, духовность не конкурируют, а взаимно поддерживают друг друга.

3. **Естественные ритмы** — мы слушаем свой организм, сезоны, лунные циклы вместо того, чтобы игнорировать их.

4. **Энергетическая эффективность** — вместо выжимания максимума, мы работаем в гармонии с естественными ритмами, что даёт лучшие результаты с меньшими затратами.

## От теории к практике

Начните с самого простого: отследите свои естественные циклы в течение месяца. Когда вы наиболее продуктивны? Когда вам нужен отдых? Где начинается спираль нового цикла?

Когда вы начнёте жить в согласии со своими циклами, вы откроете источник неисчерпаемой энергии. Не потому что будете работать больше, а потому что будете работать умнее.

Это не отказ от успеха. Это иное его определение — не вопреки природе, а в гармонии с ней.
    `
  },
  "permaculture-principles": {
    title: "5 принципов пермакультуры, которые можно применить в своей жизни",
    author: "Леший",
    date: "10 января 2025",
    category: "Практика",
    content: `
# 5 принципов пермакультуры, которые можно применить в своей жизни

Пермакультура — это система проектирования, которая берёт за образец естественные экосистемы. Её принципы применяются в сельском хозяйстве уже десятилетия, но немногие осознают, что эти же принципы революционизируют личную жизнь.

## Принцип 1: Забота о земле (и о себе)

В пермакультуре земля — это основа всей системы. В личной жизни вы сами — эта основа.

**Практика:** Определите ваши фундаментальные потребности: сон, питание, движение, социальные связи. Без ухода за этими основами ничего не будет работать.

## Принцип 2: Забота о людях (и о своём окружении)

Здоровая экосистема включает множество видов, которые поддерживают друг друга. Ваша жизнь тоже является частью более крупной системы.

**Практика:** Создайте систему взаимной поддержки. Кто может помочь вам? Кому можете помочь вы? Как ваши таланты служат сообществу?

## Принцип 3: Справедливое распределение ресурсов

В природе нет излишков. Каждый ресурс используется оптимально. 

**Практика:** Проанализируйте, как вы распределяете время, энергию и деньги. Есть ли расточительство? Есть ли дефицит? Как достичь баланса?

## Принцип 4: Синергия элементов

Каждый элемент в пермакультуре выполняет множество функций, и каждая функция обеспечивается несколькими элементами.

**Практика:** Ищите в жизни «многофункциональные элементы». Например, утренняя прогулка может одновременно улучшать здоровье, давать вам время для размышлений и служить медитацией.

## Принцип 5: Наблюдение и адаптация

Пермакультура не статична. Система постоянно развивается в ответ на изменения окружающей среды.

**Практика:** Регулярно рефлексируйте. Что работает? Что нужно изменить? Будьте готовы адаптировать свою систему, когда условия меняются.

## Практическое упражнение

Нарисуйте схему вашей жизни как системы. В центре — вы. Вокруг — все элементы: работа, семья, здоровье, творчество, духовность, хобби, учёба. Нарисуйте стрелки, показывающие взаимодействия.

Где нарушена синергия? Где есть конфликты? Где элементы изолированы друг от друга?

Когда вы начнёте применять принципы пермакультуры к своей жизни, вы обнаружите, что система становится всё более устойчивой, более плодородной и более радостной.
    `
  },
  "burnout-to-flow": {
    title: "От выгорания к циклическому потоку - мой путь трансформации",
    author: "Леший",
    date: "5 января 2025",
    category: "История",
    content: `
# От выгорания к циклическому потоку: мой путь трансформации

Я помню этот момент чётко. Я сидел в офисе, смотрел на экран компьютера и понимал, что больше не чувствую ничего. Ни возбуждения, ни интереса, ни даже усталости. Просто пустота.

Это был конец линейного пути к успеху.

## Гонка на бесконечности

В течение пятнадцати лет я делал всё "правильно". Карьера развивалась вверх, доход рос, статус повышался. Каждый год ставились новые цели, каждый год нужно было превзойти предыдущий год.

Но где-то на полпути я понял, что достиг "вершины" — и вершина оказалась... пустой. Я был успешен, но несчастен. Я был занят, но без смысла. Я был "на пути", но не знал, куда иду.

Выгорание пришло постепенно, как туман. Сначала я перестал спать. Потом потерял аппетит. Затем начались физические симптомы. Врачи говорили: "Отдохните", но я не мог остановиться. Система требовала всё больше.

## Переломный момент

Болезнь заставила меня остановиться. Не желание, не мудрость, не озарение — а простая физиологическая необходимость. Я не мог больше функционировать.

Я взял отпуск. Месяц без работы, без целей, без плана. Просто жизнь без направления.

В эти дни я начал замечать вещи, которые видел, но не осознавал. Циклы природы — смену времён года, луны, дня и ночи. Свои собственные циклы — когда я был энергичен, когда уставал, когда нужна была интеграция пережитого.

## Первые шаги

Я начал с малого:

1. **Восстановление сна** — не нормального сна, а такого, какой нужен был моему телу. Иногда 4 часа, иногда 12. Я слушал свой организм.

2. **Циклическое планирование** — вместо годовых целей я начал планировать по лунным месяцам. Две недели роста, две недели интеграции.

3. **Синергия элементов** — я перестал разделять жизнь на "работу" и "личное". Я начал искать, как мой талант в коммуникации может служить не деньгам, а смыслу.

4. **Естественные ритмы** — я начал работать с моими пиками энергии, а не против них. Утренние часы на осознанную работу, после обеда — задачи, требующие меньше фокуса.

## Результаты

Через три месяца произошло чудо — нет, не чудо. Естественное следствие жизни в гармонии с собой.

Я был менее занят, но более продуктивен. Я зарабатывал меньше денег, но был богаче смыслом. Я был "ниже" по карьерной лестнице, но находился на более высоком уровне существования.

Физические симптомы исчезли. Вернулся сон, аппетит, интерес к жизни.

Но самое главное — я перестал бежать. Я начал жить.

## Приглашение для вас

Я не верю, что нужно болеть, чтобы начать трансформацию. Я верю, что каждый может сделать выбор раньше.

Если вы узнали себя в этом рассказе — если вы бегите по бесконечной ленте успеха и начинаете понимать, что это не ведёт к счастью — есть другой путь.

Путь тороидальности. Путь пермакультуры. Путь циклической жизни.

Это не отказ от амбиций. Это их переформатирование. Это амбиции в гармонии с природой, а не вопреки ей.

Я прошёл этот путь. И я готов помочь вам найти свой собственный путь трансформации.
    `
  }
};

const allPosts = [
  {
    id: "toroidal-model",
    title: "Что такое тороидальная модель жизни и почему она изменит ваше представление об успехе",
    slug: "toroidal-model",
  },
  {
    id: "permaculture-principles",
    title: "5 принципов пермакультуры, которые можно применить в своей жизни",
    slug: "permaculture-principles",
  },
  {
    id: "burnout-to-flow",
    title: "От выгорания к циклическому потоку - мой путь трансформации",
    slug: "burnout-to-flow",
  }
];

// Comments interface
interface Comment {
  id: string;
  author: string;
  text: string;
  date: string;
  replies?: Comment[];
}

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const post = slug ? blogPostsContent[slug] : null;

  // Comments state
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [showCommentForm, setShowCommentForm] = useState(false);

  // Load comments from localStorage on component mount
  useState(() => {
    const savedComments = localStorage.getItem(`comments-${slug}`);
    if (savedComments) {
      setComments(JSON.parse(savedComments));
    }
  }, []);

  const handleAddComment = () => {
    if (!newComment.trim() || !authorName.trim()) return;

    const comment: Comment = {
      id: Date.now().toString(),
      author: authorName,
      text: newComment,
      date: new Date().toLocaleDateString('ru-RU'),
    };

    const updatedComments = [...comments, comment];
    setComments(updatedComments);
    localStorage.setItem(`comments-${slug}`, JSON.stringify(updatedComments));

    setNewComment("");
    setAuthorName("");
    setShowCommentForm(false);
  };

  if (!post) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Статья не найдена</h1>
            <Button onClick={() => navigate("/blog")}>Вернуться к блогу</Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const currentIndex = allPosts.findIndex(p => p.slug === slug);
  const prevPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      {/* Article Header */}
      <section className="py-12 border-b">
        <div className="container mx-auto px-4 max-w-3xl">
          <Link to="/blog" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-6">
            <ArrowLeft className="w-4 h-4" />
            Вернуться к блогу
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>
          
          <div className="flex items-center gap-6 text-muted-foreground flex-wrap">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {post.date}
            </div>
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              {post.author}
            </div>
            <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
              {post.category}
            </span>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 flex-1">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="prose prose-invert max-w-none">
            <article>
              {post.content.split('\n\n').map((paragraph, idx) => {
                if (paragraph.startsWith('# ')) {
                  return <h1 key={idx} className="text-3xl font-bold mt-8 mb-4">{paragraph.slice(2)}</h1>;
                }
                if (paragraph.startsWith('## ')) {
                  return <h2 key={idx} className="text-2xl font-bold mt-6 mb-3">{paragraph.slice(3)}</h2>;
                }
                if (paragraph.startsWith('- ')) {
                  return (
                    <ul key={idx} className="list-disc list-inside space-y-2 my-4">
                      {paragraph.split('\n').map((item, i) => (
                        <li key={i} className="text-muted-foreground">{item.slice(2)}</li>
                      ))}
                    </ul>
                  );
                }
                if (paragraph.startsWith('1. ') || paragraph.match(/^\d+\. /)) {
                  return (
                    <ol key={idx} className="list-decimal list-inside space-y-2 my-4">
                      {paragraph.split('\n').map((item, i) => (
                        <li key={i} className="text-muted-foreground">{item.replace(/^\d+\. /, '')}</li>
                      ))}
                    </ol>
                  );
                }
                if (paragraph.startsWith('**')) {
                  return <p key={idx} className="text-muted-foreground italic my-4">{paragraph}</p>;
                }
                return <p key={idx} className="text-muted-foreground leading-relaxed my-4">{paragraph}</p>;
              })}
            </article>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="border-t py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {prevPost ? (
              <Link to={`/blog/${prevPost.slug}`} className="group">
                <div className="flex items-start gap-3 p-4 border rounded-lg hover:border-primary transition">
                  <ArrowLeft className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Предыдущая статья</p>
                    <p className="font-semibold group-hover:text-primary transition">{prevPost.title}</p>
                  </div>
                </div>
              </Link>
            ) : (
              <div />
            )}
            
            {nextPost ? (
              <Link to={`/blog/${nextPost.slug}`} className="group">
                <div className="flex items-start gap-3 p-4 border rounded-lg hover:border-primary transition justify-end text-right">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Следующая статья</p>
                    <p className="font-semibold group-hover:text-primary transition">{nextPost.title}</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                </div>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </section>

      {/* Comments Section */}
      <section className="border-t py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <MessageCircle className="w-6 h-6" />
              Комментарии ({comments.length})
            </h2>
            <Button
              onClick={() => setShowCommentForm(!showCommentForm)}
              variant="outline"
            >
              {showCommentForm ? "Отменить" : "Добавить комментарий"}
            </Button>
          </div>

          {/* Comment Form */}
          {showCommentForm && (
            <div className="border rounded-lg p-6 mb-8 bg-card">
              <div className="space-y-4">
                <Input
                  placeholder="Ваше имя"
                  value={authorName}
                  onChange={(e) => setAuthorName(e.target.value)}
                />
                <Textarea
                  placeholder="Ваш комментарий..."
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  rows={4}
                />
                <div className="flex gap-2">
                  <Button onClick={handleAddComment}>Опубликовать</Button>
                  <Button
                    variant="outline"
                    onClick={() => setShowCommentForm(false)}
                  >
                    Отменить
                  </Button>
                </div>
              </div>
            </div>
          )}

          {/* Comments List */}
          <div className="space-y-6">
            {comments.length === 0 ? (
              <div className="text-center py-12 text-muted-foreground">
                <MessageCircle className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <p>Комментариев пока нет. Будьте первым!</p>
              </div>
            ) : (
              comments.map((comment) => (
                <div key={comment.id} className="border rounded-lg p-6 bg-card">
                  <div className="flex items-start justify-between mb-3">
                    <div className="font-semibold">{comment.author}</div>
                    <div className="text-sm text-muted-foreground">{comment.date}</div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{comment.text}</p>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPost;
