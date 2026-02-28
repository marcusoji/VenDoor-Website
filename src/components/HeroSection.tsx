import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import heroImg from "@/assets/hero-illustration.png";

const HeroSection = () => {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Background decorative blob */}
      <div className="absolute top-20 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 -left-32 w-80 h-80 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-accent/60 rounded-full px-4 py-1.5 mb-6">
              <MapPin size={14} className="text-primary" />
              <span className="text-xs font-medium text-muted-foreground">Now available in your city</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Delicious Food,{" "}
              <span className="text-gradient">Delivered Fast</span>{" "}
              to Your Door
            </h1>

            <p className="text-lg text-muted-foreground max-w-md mb-8 leading-relaxed">
              Explore restaurants near you, order your favourite meals, and get them delivered in minutes with <span className="font-semibold text-foreground">Vendor</span>.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="bg-primary text-primary-foreground px-7 py-3.5 rounded-xl text-sm font-bold flex items-center gap-2 hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
                Download the App <ArrowRight size={16} />
              </button>
              <button className="bg-secondary text-secondary-foreground px-7 py-3.5 rounded-xl text-sm font-bold hover:opacity-90 transition-opacity">
                Become a Rider
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex justify-center"
          >
            <img
              src={heroImg}
              alt="Vendor food delivery illustration"
              className="w-full max-w-lg animate-float"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
