import { motion } from "framer-motion";
import { Utensils, Clock, ShieldCheck, Bike } from "lucide-react";

const features = [
  {
    icon: Utensils,
    title: "Wide Variety",
    desc: "Browse hundreds of restaurants and cuisines — from local favourites to trending spots.",
  },
  {
    icon: Clock,
    title: "Lightning Fast",
    desc: "Real-time tracking and optimised routes mean your food arrives hot and fresh.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Payments",
    desc: "Pay with card, transfer, or cash on delivery. Every transaction is protected.",
  },
  {
    icon: Bike,
    title: "Earn as a Rider",
    desc: "Join our fleet of riders and earn on your own schedule. Flexible and rewarding.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 md:py-28">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Why Choose <span className="text-gradient">Vendor</span>?
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Everything you need for a seamless food ordering experience, all in one app.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((f) => (
            <motion.div
              key={f.title}
              variants={item}
              className="bg-card rounded-2xl p-6 border border-border hover:shadow-lg hover:shadow-primary/5 transition-shadow group"
            >
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors">
                <f.icon size={22} className="text-primary" />
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
