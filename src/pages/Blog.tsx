import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, User, ArrowRight, CheckCircle } from "lucide-react";
import { useState } from "react";

// Hardcoded blog posts (since we can't import fs in client)
const blogPosts = [
  {
    id: "toroidal-model",
    title: "Что такое тороидальная модель жизни и почему она изменит ваше представление об успехе",
    slug: "toroidal-model",
    author: "Леший",
    date: "15 января 2025",
    category: "Анатомия смыслов",
    excerpt: "Откройте для себя древнюю мудрость, которая переформатирует ваше понимание успеха и развития."
  },
  {
    id: "permaculture-principles",
    title: "5 принципов пермакультуры, которые можно применить в своей жизни",
    slug: "permaculture-principles",
    author: "Леший",
    date: "10 января 2025",
    category: "Хроники стройки",
    excerpt: "Как спроектировать жизнь как саморегулирующуюся экосистему."
  },
  {
    id: "burnout-to-flow",
    title: "От выгорания к зацикленному потоку - мой путь трансформации",
    slug: "burnout-to-flow",
    author: "Леший",
    date: "5 января 2025",
    category: "Разбор полетов",
    excerpt: "Как я прошёл от полного выгорания к осмысленной жизни, следуя принципам тороидальности."
  }
];

const categories = ["Все категории", ...Array.from(new Set(blogPosts.map(post => post.category)))];

const Blog = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Все категории");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      console.log("Subscribed:", email);
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const filteredPosts = blogPosts.filter(post => 
    selectedCategory === "Все категории" || post.category === selectedCategory
  );

  return (
    <div className="min-h-screen">
      <Header />
      <div style={{ minHeight: '100vh', overflowY: 'auto', position: 'relative', zIndex: 1, paddingTop: '4rem' }}>
        <div className="container mx-auto px-4 py-8 md:py-12">
          <div className="max-w-6xl mx-auto">

            {/* Category Filters */}
            <div className="flex justify-center flex-wrap gap-2 mb-8">
              {categories.map(category => (
                <Button 
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 md:mb-8 text-primary">
              Блог
            </h1>
            <p className="text-base md:text-lg text-center text-white/90 mb-8 md:mb-12">
              Статьи о философии, практике и личной трансформации
            </p>

            {/* Blog Posts */}
            <div className="space-y-8">
              {filteredPosts.map((post) => (
                <Card key={post.id} className="p-5 sm:p-6 hover:border-primary/30 transition bg-black/20 backdrop-blur-sm border border-white/10">
                  <div className="flex items-center gap-4 mb-3 flex-wrap">
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-2 text-xs text-white/60">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-2 text-xs text-white/60">
                      <User className="w-4 h-4" />
                      {post.author}
                    </div>
                  </div>
                  <h2 className="text-lg sm:text-xl font-bold mb-3 hover:text-primary transition">
                    <Link to={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-xs sm:text-sm text-white/80 mb-4">
                    {post.excerpt}
                  </p>
                  <Link to={`/blog/${post.slug}`}>
                    <Button variant="ghost" size="sm" className="text-primary hover:bg-primary/10">
                      Читать полностью
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </Card>
              ))}
            </div>

            {/* Newsletter Signup */}
            <Card className="mt-12 p-6 md:p-8 bg-black/20 backdrop-blur-sm border border-white/10">
              <h3 className="text-xl md:text-2xl font-bold mb-4">Подпишитесь на обновления</h3>
              <p className="text-sm md:text-base text-white/80 mb-6">
                Получайте новые статьи и инсайты прямо в ваш почтовый ящик
              </p>
              {subscribed ? (
                <div className="flex items-center gap-3 p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-green-700">Спасибо за подписку! Проверьте вашу почту.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="ваша почта@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 px-4 py-3 rounded-lg border border-white/10 bg-black/20 hover:border-primary/30 focus:border-primary focus:outline-none transition"
                    required
                  />
                  <Button size="lg" type="submit" className="bg-primary hover:bg-primary/90">Подписаться</Button>
                </form>
              )}
            </Card>
          </div>
        </div>
      </div>

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

export default Blog;
