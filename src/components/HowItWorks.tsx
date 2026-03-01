import { motion } from "framer-motion";
import { Search, ShoppingBag, Truck } from "lucide-react";

const steps = [
  { icon: Search, step: "01", title: "Browse & Discover", desc: "Find restaurants and meals near you with smart filters and categories." },
  { icon: ShoppingBag, step: "02", title: "Place Your Order", desc: "Customise your meal, add a promo code, and checkout in seconds." },
  { icon: Truck, step: "03", title: "Get It Delivered", desc: "Track your rider in real-time and enjoy your food at your doorstep." },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 md:py-32 bg-card relative overflow-hidden">
      <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
      
      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-bold tracking-[0.3em] uppercase text-primary mb-3 block">How it works</span>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-5">
            Three Steps to <span className="text-gradient">Delicious</span>
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto text-lg">
            From craving to doorstep in minutes.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-10 left-[16.67%] right-[16.67%] h-[2px] bg-gradient-to-r from-primary/30 via-primary to-primary/30" />
          
          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="text-center relative"
            >
              <div className="w-20 h-20 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-6 relative z-10 shadow-lg shadow-primary/25">
                <s.icon size={30} />
              </div>
              <span className="text-xs font-bold text-primary tracking-widest uppercase">Step {s.step}</span>
              <h3 className="font-bold text-xl mt-2 mb-3">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
