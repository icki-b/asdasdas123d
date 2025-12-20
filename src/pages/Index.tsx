import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import ProductSection from "@/components/ProductSection";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import CountdownTimer from "@/components/CountdownTimer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <CountdownTimer />
      <Header />
      <Hero />
      <section id="features">
        <Features />
      </section>
      <ProductSection />
      <section id="faq">
        <FAQ />
      </section>
      <Footer />
    </main>
  );
};

export default Index;
