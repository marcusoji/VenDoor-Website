import { motion } from "framer-motion";
import { Utensils, Clock, ShieldCheck, Bike, MapPin, Tag } from "lucide-react";

const features = [
  {
    icon: Utensils,
    title: "Wide Variety",
    desc: "Browse hundreds of restaurants and cuisines — from local favourites to trending spots.",
    gradient: "from-primary/20 to-accent/20",
    iconColor: "text-primary",
  },
  {
    icon: Clock,
    title: "Lightning Fast",
    desc: "Real-time tracking and optimised routes mean your food arrives hot and fresh.",
    gradient: "from-secondary/20 to-primary/10",
    iconColor: "text-secondary",
  },
  {
    icon: ShieldCheck,
    title: "Secure Payments",
    desc: "Pay with card, transfer, or cash on delivery. Every transaction is protected.",
    gradient: "from-accent/20 to-primary/20",
    iconColor: "text-primary",
  },
  {
    icon: Bike,
    title: "Earn as a Rider",
    desc: "Join our fleet of riders and earn on your own schedule. Flexible and rewarding.",
    gradient: "from-primary/20 to-secondary/20",
    iconColor: "text-secondary",
  },
  {
    icon: MapPin,
    title: "Live Tracking",
    desc: "Watch your rider move in real-time on the map. Know exactly when your food arrives.",
    gradient: "from-secondary/20 to-accent/20",
    iconColor: "text-primary",
  },
  {
    icon: Tag,
    title: "Daily Deals",
    desc: "Exclusive promo codes and discounts from your favourite vendors every single day.",
    gradient: "from-accent/20 to-secondary/20",
    iconColor: "text-secondary",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, type: "spring", stiffness: 150 } },
};

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 md:py-36 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/15 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-xs font-bold tracking-[0.3em] uppercase text-primary mb-3 block">Features</span>
          <h2 className="text-4xl md:text-6xl font-extrabold mb-5">
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
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
        >
          {features.map((f) => (
            <motion.div
              key={f.title}
              variants={item}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-card/80 backdrop-blur-sm rounded-3xl p-8 border border-border hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 group cursor-default relative overflow-hidden"
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${f.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <motion.div
                  className={`w-14 h-14 rounded-2xl bg-card border border-border flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300`}
                >
                  <f.icon size={24} className={f.iconColor} />
                </motion.div>
                <h3 className="font-bold text-xl mb-3">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
