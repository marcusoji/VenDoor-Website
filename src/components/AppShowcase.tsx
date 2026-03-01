import { motion } from "framer-motion";
import PhoneMockup from "./PhoneMockup";
import appHome from "@/assets/app-home.jpg";
import appOrder from "@/assets/app-order.jpg";

const AppShowcase = () => {
  return (
    <section id="app-preview" className="py-24 md:py-36 relative overflow-hidden">
      {/* Dramatic background */}
      <div className="absolute inset-0 bg-secondary" />
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-background to-transparent z-10" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent z-10" />
      
      {/* Floating orbs */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary/20 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-accent/15 rounded-full blur-[120px]" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block text-xs font-bold tracking-[0.3em] uppercase text-primary mb-4">
            Inside the App
          </span>
          <h2 className="text-4xl md:text-6xl font-extrabold text-secondary-foreground leading-tight mb-6">
            A Taste of What's
            <br />
            <span className="text-primary">Waiting for You</span>
          </h2>
          <p className="text-secondary-foreground/70 max-w-lg mx-auto text-lg">
            Browse vendors, explore meals, customize orders — all from the palm of your hand.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          {/* Left phone - Home */}
          <motion.div
            initial={{ opacity: 0, x: -60, rotateY: 15 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-[260px] md:w-[280px]"
          >
            <PhoneMockup
              screenshot={appHome}
              alt="Vendor app home screen showing top vendors and meals"
              glowColor="primary"
            />
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="text-center mt-8"
            >
              <h3 className="text-secondary-foreground font-bold text-lg">Discover Vendors</h3>
              <p className="text-secondary-foreground/60 text-sm mt-1">Browse top-rated restaurants nearby</p>
            </motion.div>
          </motion.div>

          {/* Right phone - Order */}
          <motion.div
            initial={{ opacity: 0, x: 60, rotateY: -15 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="w-[260px] md:w-[280px]"
          >
            <PhoneMockup
              screenshot={appOrder}
              alt="Vendor app order screen with meal customization"
              glowColor="secondary"
            />
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="text-center mt-8"
            >
              <h3 className="text-secondary-foreground font-bold text-lg">Customize & Order</h3>
              <p className="text-secondary-foreground/60 text-sm mt-1">Add promo codes, special instructions & more</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AppShowcase;
