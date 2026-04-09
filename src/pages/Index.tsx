import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Tech from "@/components/Tech";
import WhyUs from "@/components/WhyUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-dark-navy">
      <Header />
      <Hero />
      <Services />
      <Portfolio />
      <Tech />
      <WhyUs />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
