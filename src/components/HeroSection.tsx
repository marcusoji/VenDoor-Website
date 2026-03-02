import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Bike } from "lucide-react";
import PhoneMockup from "./PhoneMockup";
import appHome from "@/assets/app-home.jpg";

const HeroSection = () => {
  return (
    <section className="relative pt-24 pb-8 md:pt-32 md:pb-16 overflow-hidden min-h-[90vh] flex items-center">
      {/* Layered background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/8 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/8 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-accent/10 rounded-full blur-[150px]" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground rounded-full px-5 py-2 mb-8"
            >
              <Sparkles size={14} className="text-primary" />
              <span className="text-xs font-bold tracking-wide">Nigeria's Fastest Growing Food App</span>
            </motion.div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] mb-8 tracking-tight">
              Your Next
              <br />
              <span className="text-gradient">Favourite Meal</span>
              <br />
              is One Tap Away
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-lg mb-10 leading-relaxed">
              Discover local vendors, customize your order, and get it delivered in minutes. 
              <span className="text-foreground font-semibold"> VenDoor</span> makes it effortless.
            </p>

            <div className="flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="bg-primary text-primary-foreground px-8 py-4 rounded-2xl text-sm font-bold flex items-center gap-3 shadow-xl shadow-primary/30 hover:shadow-primary/40"
              >
                Download Now <ArrowRight size={18} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="bg-secondary text-secondary-foreground px-8 py-4 rounded-2xl text-sm font-bold"
              >
                Become a Merchant
              </motion.button>
              <motion.a
                href="#join-riders"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="border-2 border-primary text-primary px-8 py-4 rounded-2xl text-sm font-bold flex items-center gap-2 hover:bg-primary/5 transition-colors"
              >
                <Bike size={18} /> Ride with Us
              </motion.a>
            </div>

            {/* Social proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex items-center gap-6 mt-12 pt-8 border-t border-border"
            >
              <div>
                <span className="text-3xl font-extrabold text-foreground">50K+</span>
                <p className="text-xs text-muted-foreground mt-0.5">Active Users</p>
              </div>
              <div className="w-px h-10 bg-border" />
              <div>
                <span className="text-3xl font-extrabold text-foreground">1,200+</span>
                <p className="text-xs text-muted-foreground mt-0.5">Vendors</p>
              </div>
              <div className="w-px h-10 bg-border" />
              <div>
                <span className="text-3xl font-extrabold text-foreground">4.8★</span>
                <p className="text-xs text-muted-foreground mt-0.5">App Rating</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Phone mockup */}
          <motion.div
            initial={{ opacity: 0, y: 50, rotateZ: 3 }}
            animate={{ opacity: 1, y: 0, rotateZ: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
            className="flex justify-center lg:justify-end"
          >
            <div className="w-[260px] sm:w-[290px] lg:w-[300px] animate-float">
              <PhoneMockup
                screenshot={appHome}
                alt="VenDoor food delivery app home screen on Samsung Galaxy S25 Ultra"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
