import { motion } from "framer-motion";
import { Search, ShoppingBag, Truck } from "lucide-react";

const steps = [
  { icon: Search, step: "01", title: "Browse & Discover", desc: "Find restaurants and meals near you with smart filters and categories." },
  { icon: ShoppingBag, step: "02", title: "Place Your Order", desc: "Customise your meal, add a promo code, and checkout in seconds." },
  { icon: Truck, step: "03", title: "Get It Delivered", desc: "Track your rider in real-time and enjoy your food at your doorstep." },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-card">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            How <span className="text-gradient">Vendor</span> Works
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Three simple steps to your next favourite meal.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="text-center relative"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                <s.icon size={28} className="text-primary" />
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
