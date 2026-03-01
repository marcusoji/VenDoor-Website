import { motion } from "framer-motion";
import { Bike, ArrowRight, DollarSign, Clock, MapPin } from "lucide-react";

const perks = [
  { icon: DollarSign, text: "Earn up to ₦150K/month" },
  { icon: Clock, text: "Flexible hours, your schedule" },
  { icon: MapPin, text: "Work in your neighbourhood" },
];

const RiderCTA = () => {
  return (
    <section id="join-riders" className="py-24 md:py-32 relative overflow-hidden">
      {/* Animated road/path background */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="absolute w-full h-full" viewBox="0 0 1200 600" preserveAspectRatio="none">
          <motion.path
            d="M-50 300 Q200 100 400 300 Q600 500 800 300 Q1000 100 1250 300"
            stroke="hsl(var(--primary))"
            strokeWidth="2"
            fill="none"
            strokeDasharray="12 8"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 0.2 }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </svg>
        {/* Animated rider dot traveling the path */}
        <svg className="absolute w-full h-full" viewBox="0 0 1200 600" preserveAspectRatio="none">
          <motion.circle
            r="8"
            fill="hsl(var(--primary))"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <animateMotion
              dur="4s"
              repeatCount="indefinite"
              path="M-50 300 Q200 100 400 300 Q600 500 800 300 Q1000 100 1250 300"
            />
          </motion.circle>
          <motion.circle
            r="20"
            fill="hsl(var(--primary))"
            opacity="0.15"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.15 }}
            viewport={{ once: true }}
          >
            <animateMotion
              dur="4s"
              repeatCount="indefinite"
              path="M-50 300 Q200 100 400 300 Q600 500 800 300 Q1000 100 1250 300"
            />
          </motion.circle>
        </svg>
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: animated rider illustration */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              {/* Pulsing rings */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-primary/20"
                animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0, 0.3] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <motion.div
                className="absolute inset-4 rounded-full border-2 border-primary/30"
                animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0, 0.4] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
              />
              <motion.div
                className="absolute inset-8 rounded-full border-2 border-primary/40"
                animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              />
              
              {/* Center bike icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-primary flex items-center justify-center shadow-2xl shadow-primary/40"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Bike size={64} className="text-primary-foreground" />
                </motion.div>
              </div>

              {/* Floating earning badges */}
              <motion.div
                className="absolute top-4 right-0 bg-card rounded-xl px-4 py-2 shadow-lg border border-border"
                animate={{ y: [0, -6, 0], rotate: [0, 2, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <span className="text-xs font-bold text-primary">₦5,200</span>
                <p className="text-[10px] text-muted-foreground">Last delivery</p>
              </motion.div>
              <motion.div
                className="absolute bottom-8 left-0 bg-card rounded-xl px-4 py-2 shadow-lg border border-border"
                animate={{ y: [0, 6, 0], rotate: [0, -2, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
              >
                <span className="text-xs font-bold text-secondary">12 trips today</span>
                <p className="text-[10px] text-muted-foreground">Keep going! 🔥</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: CTA content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block text-xs font-bold tracking-[0.3em] uppercase text-primary mb-4">
              Join the Fleet
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
              Ride with Us,
              <br />
              <span className="text-gradient">Earn Your Way</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-md leading-relaxed">
              Become a Vendor rider and turn your bike into a money machine. Flexible hours, instant payouts, and a supportive community.
            </p>

            <div className="space-y-4 mb-10">
              {perks.map((perk, i) => (
                <motion.div
                  key={perk.text}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <perk.icon size={18} className="text-primary" />
                  </div>
                  <span className="font-medium">{perk.text}</span>
                </motion.div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="bg-primary text-primary-foreground px-8 py-4 rounded-2xl font-bold flex items-center gap-3 shadow-xl shadow-primary/30 text-lg"
            >
              Register as a Rider <ArrowRight size={20} />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RiderCTA;
