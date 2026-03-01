import { motion } from "framer-motion";
import { Search, ShoppingBag, Truck } from "lucide-react";

const steps = [
  { icon: Search, step: "01", title: "Browse & Discover", desc: "Find restaurants and meals near you with smart filters and categories.", emoji: "🔍" },
  { icon: ShoppingBag, step: "02", title: "Place Your Order", desc: "Customise your meal, add a promo code, and checkout in seconds.", emoji: "🛒" },
  { icon: Truck, step: "03", title: "Get It Delivered", desc: "Track your rider in real-time and enjoy your food at your doorstep.", emoji: "🚀" },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 md:py-36 bg-card relative overflow-hidden">
      <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
      <div className="absolute -left-20 top-1/3 w-72 h-72 bg-accent/8 rounded-full blur-[80px]" />
      
      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-xs font-bold tracking-[0.3em] uppercase text-primary mb-3 block">How it works</span>
          <h2 className="text-4xl md:text-6xl font-extrabold mb-5">
            Three Steps to <span className="text-gradient">Delicious</span>
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto text-lg">
            From craving to doorstep in minutes.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-10 max-w-4xl mx-auto relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-14 left-[20%] right-[20%] h-[2px]">
            <motion.div
              className="h-full bg-gradient-to-r from-primary/40 via-primary to-primary/40"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.3 }}
            />
          </div>
          
          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.6, type: "spring" }}
              className="text-center relative group"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                className="w-24 h-24 rounded-3xl bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-8 relative z-10 shadow-xl shadow-primary/25 group-hover:shadow-primary/40 transition-shadow"
              >
                <s.icon size={36} />
                {/* Step number badge */}
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-card text-foreground border-2 border-primary flex items-center justify-center text-xs font-extrabold">
                  {s.step}
                </div>
              </motion.div>
              <h3 className="font-bold text-xl mt-2 mb-3">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
