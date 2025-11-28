import Header from "@/components/Header";
import Hero from "@/components/Hero";
import DiasporaWelcome from "@/components/DiasporaWelcome";
import CategoriesGrid from "@/components/CategoriesGrid";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <div className="flex-1">
        <Hero />
        <DiasporaWelcome />
        <CategoriesGrid />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
