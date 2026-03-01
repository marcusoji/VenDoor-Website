import { motion } from "framer-motion";
import { Utensils, Clock, ShieldCheck, Bike, MapPin, Tag } from "lucide-react";

const features = [
  {
    icon: Utensils,
    title: "Wide Variety",
    desc: "Browse hundreds of restaurants and cuisines — from local favourites to trending spots.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Clock,
    title: "Lightning Fast",
    desc: "Real-time tracking and optimised routes mean your food arrives hot and fresh.",
    color: "bg-secondary/10 text-secondary",
  },
  {
    icon: ShieldCheck,
    title: "Secure Payments",
    desc: "Pay with card, transfer, or cash on delivery. Every transaction is protected.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Bike,
    title: "Earn as a Rider",
    desc: "Join our fleet of riders and earn on your own schedule. Flexible and rewarding.",
    color: "bg-secondary/10 text-secondary",
  },
  {
    icon: MapPin,
    title: "Live Tracking",
    desc: "Watch your rider move in real-time on the map. Know exactly when your food arrives.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Tag,
    title: "Daily Deals",
    desc: "Exclusive promo codes and discounts from your favourite vendors every single day.",
    color: "bg-secondary/10 text-secondary",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 md:py-32 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/20 rounded-full blur-[150px] pointer-events-none" />

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-bold tracking-[0.3em] uppercase text-primary mb-3 block">Features</span>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-5">
            Why Choose <span className="text-gradient">Vendor</span>?
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto text-lg">
            Everything you need for a seamless food ordering experience.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto"
        >
          {features.map((f) => (
            <motion.div
              key={f.title}
              variants={item}
              className="bg-card/80 backdrop-blur-sm rounded-2xl p-7 border border-border hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 group cursor-default"
            >
              <div className={`w-12 h-12 rounded-xl ${f.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                <f.icon size={22} />
              </div>
              <h3 className="font-bold text-lg mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
