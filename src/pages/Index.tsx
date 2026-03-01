import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorks from "@/components/HowItWorks";
import DeliveryAnimation from "@/components/DeliveryAnimation";
import AppShowcase from "@/components/AppShowcase";
import RiderCTA from "@/components/RiderCTA";
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
        <DeliveryAnimation />
        <AppShowcase />
        <RiderCTA />
        <PopularMeals />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
