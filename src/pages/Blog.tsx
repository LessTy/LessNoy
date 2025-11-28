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
    category: "Философия",
    excerpt: "Откройте для себя древнюю мудрость, которая переформатирует ваше понимание успеха и развития."
  },
  {
    id: "permaculture-principles",
    title: "5 принципов пермакультуры, которые можно применить в своей жизни",
    slug: "permaculture-principles",
    author: "Леший",
    date: "10 января 2025",
    category: "Практика",
    excerpt: "Как спроектировать личную жизнь как саморегулирующуюся экосистему."
  },
  {
    id: "burnout-to-flow",
    title: "От выгорания к циклическому потоку - мой путь трансформации",
    slug: "burnout-to-flow",
    author: "Леший",
    date: "5 января 2025",
    category: "История",
    excerpt: "Как я прошёл от полного выгорания к осмысленной жизни, следуя принципам тороидальности."
  }
];

const Blog = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      console.log("Subscribed:", email);
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Блог</h1>
            <p className="text-xl text-muted-foreground">
              Статьи о философии, практике и личной трансформации
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              {blogPosts.map((post) => (
                <Card key={post.id} className="p-6 md:p-8 hover:border-primary transition">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-4 mb-3 flex-wrap">
                        <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                          {post.category}
                        </span>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          {post.date}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <User className="w-4 h-4" />
                          {post.author}
                        </div>
                      </div>
                      <h2 className="text-2xl font-bold mb-3 hover:text-primary transition">
                        <Link to={`/blog/${post.slug}`}>
                          {post.title}
                        </Link>
                      </h2>
                      <p className="text-muted-foreground mb-4">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>
                  
                  <Link to={`/blog/${post.slug}`}>
                    <Button variant="ghost" className="text-primary">
                      Читать полностью
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </Card>
              ))}
            </div>

            {/* Newsletter Signup */}
            <Card className="mt-20 p-8 bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
              <h3 className="text-2xl font-bold mb-4">Подпишитесь на обновления</h3>
              <p className="text-muted-foreground mb-6">
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
                    className="flex-1 px-4 py-3 rounded-lg border border-input bg-background hover:border-primary/50 focus:border-primary focus:outline-none transition"
                    required
                  />
                  <Button size="lg" type="submit">Подписаться</Button>
                </form>
              )}
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
