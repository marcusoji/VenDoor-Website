import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorks from "@/components/HowItWorks";
import AppShowcase from "@/components/AppShowcase";
import PopularMeals from "@/components/PopularMeals";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <HowItWorks />
        <AppShowcase />
        <PopularMeals />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
