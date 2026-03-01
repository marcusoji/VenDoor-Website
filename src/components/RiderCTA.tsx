import { motion } from "framer-motion";
import { Bike, ArrowRight, DollarSign, Clock, MapPin, Shield, User, Phone, Mail } from "lucide-react";
import { useState } from "react";

const perks = [
  { icon: DollarSign, text: "Earn up to ₦150K/month" },
  { icon: Clock, text: "Flexible hours, your schedule" },
  { icon: MapPin, text: "Work in your neighbourhood" },
  { icon: Shield, text: "Insurance & rider support" },
];

const RiderCTA = () => {
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", city: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="join-riders" className="py-24 md:py-36 relative overflow-hidden">
      {/* Animated road/path background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg className="absolute w-full h-full" viewBox="0 0 1200 600" preserveAspectRatio="none">
          <motion.path
            d="M-50 300 Q200 100 400 300 Q600 500 800 300 Q1000 100 1250 300"
            stroke="hsl(var(--primary))"
            strokeWidth="2"
            fill="none"
            strokeDasharray="12 8"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 0.15 }}
            viewport={{ once: true }}
            transition={{ duration: 2.5, ease: "easeInOut" }}
          />
          <motion.path
            d="M-50 450 Q300 250 500 450 Q700 650 900 400 Q1100 200 1250 450"
            stroke="hsl(var(--accent))"
            strokeWidth="1.5"
            fill="none"
            strokeDasharray="6 10"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 0.1 }}
            viewport={{ once: true }}
            transition={{ duration: 3, ease: "easeInOut", delay: 0.5 }}
          />
        </svg>
        {/* Multiple animated dots */}
        <svg className="absolute w-full h-full" viewBox="0 0 1200 600" preserveAspectRatio="none">
          <circle r="6" fill="hsl(var(--primary))" opacity="0.8">
            <animateMotion dur="5s" repeatCount="indefinite" path="M-50 300 Q200 100 400 300 Q600 500 800 300 Q1000 100 1250 300" />
          </circle>
          <circle r="14" fill="hsl(var(--primary))" opacity="0.1">
            <animateMotion dur="5s" repeatCount="indefinite" path="M-50 300 Q200 100 400 300 Q600 500 800 300 Q1000 100 1250 300" />
          </circle>
          <circle r="4" fill="hsl(var(--accent))" opacity="0.6">
            <animateMotion dur="7s" repeatCount="indefinite" path="M-50 450 Q300 250 500 450 Q700 650 900 400 Q1100 200 1250 450" />
          </circle>
        </svg>
      </div>

      {/* Decorative blurs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/8 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[120px]" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-bold tracking-[0.3em] uppercase text-primary mb-4">
            Join the Fleet
          </span>
          <h2 className="text-4xl md:text-6xl font-extrabold leading-tight mb-5">
            Ride with Us,
            <br />
            <span className="text-gradient">Earn Your Way</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-lg mx-auto">
            Turn your bike into a money machine. Sign up in 60 seconds.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start max-w-5xl mx-auto">
          {/* Left: animated visuals + perks */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative flex justify-center mb-12">
              <div className="relative w-56 h-56 md:w-72 md:h-72">
                {/* Pulsing rings */}
                {[0, 4, 8].map((inset, i) => (
                  <motion.div
                    key={i}
                    className="absolute rounded-full border-2 border-primary/20"
                    style={{ inset: `${inset * 4}px` }}
                    animate={{ scale: [1, 1.2 + i * 0.05, 1], opacity: [0.3 + i * 0.1, 0, 0.3 + i * 0.1] }}
                    transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.4 }}
                  />
                ))}
                
                {/* Center bike */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    className="w-28 h-28 md:w-36 md:h-36 rounded-3xl bg-primary flex items-center justify-center shadow-2xl shadow-primary/40"
                    animate={{ y: [0, -10, 0], rotate: [0, 2, -2, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Bike size={56} className="text-primary-foreground" />
                  </motion.div>
                </div>

                {/* Floating badges */}
                <motion.div
                  className="absolute -top-2 -right-4 bg-card rounded-2xl px-4 py-3 shadow-xl border border-border"
                  animate={{ y: [0, -8, 0], rotate: [0, 3, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <span className="text-sm font-extrabold text-primary">₦5,200</span>
                  <p className="text-[10px] text-muted-foreground">Last delivery</p>
                </motion.div>
                <motion.div
                  className="absolute -bottom-2 -left-4 bg-card rounded-2xl px-4 py-3 shadow-xl border border-border"
                  animate={{ y: [0, 8, 0], rotate: [0, -3, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                >
                  <span className="text-sm font-extrabold text-secondary">12 trips</span>
                  <p className="text-[10px] text-muted-foreground">Today 🔥</p>
                </motion.div>
                <motion.div
                  className="absolute top-1/2 -right-12 bg-primary text-primary-foreground rounded-full px-3 py-1.5 shadow-lg text-xs font-bold"
                  animate={{ x: [0, 4, 0], opacity: [0.8, 1, 0.8] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  ₦150K/mo
                </motion.div>
              </div>
            </div>

            <div className="space-y-4">
              {perks.map((perk, i) => (
                <motion.div
                  key={perk.text}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <perk.icon size={20} className="text-primary" />
                  </div>
                  <span className="font-semibold text-sm">{perk.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Registration form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {!submitted ? (
              <div className="bg-card rounded-3xl p-8 md:p-10 border border-border shadow-2xl shadow-primary/5 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full blur-[60px]" />
                
                <h3 className="text-2xl font-extrabold mb-2 relative z-10">
                  Register as a <span className="text-primary">Rider</span>
                </h3>
                <p className="text-sm text-muted-foreground mb-8 relative z-10">
                  Fill in your details and start earning today.
                </p>

                <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
                  <div>
                    <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider block mb-2">Full Name</label>
                    <div className="relative">
                      <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                      <input
                        type="text"
                        required
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-background border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider block mb-2">Phone Number</label>
                    <div className="relative">
                      <Phone size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                      <input
                        type="tel"
                        required
                        placeholder="+234 800 000 0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-background border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider block mb-2">Email</label>
                    <div className="relative">
                      <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                      <input
                        type="email"
                        required
                        placeholder="you@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-background border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider block mb-2">City</label>
                    <select
                      required
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-background border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all appearance-none"
                    >
                      <option value="">Select your city</option>
                      <option value="lagos">Lagos</option>
                      <option value="abuja">Abuja</option>
                      <option value="port-harcourt">Port Harcourt</option>
                      <option value="ibadan">Ibadan</option>
                      <option value="kano">Kano</option>
                    </select>
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-primary text-primary-foreground py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3 shadow-xl shadow-primary/25 mt-2"
                  >
                    Join the Fleet <ArrowRight size={20} />
                  </motion.button>
                </form>

                <p className="text-[11px] text-muted-foreground text-center mt-5">
                  By registering, you agree to our Terms & Conditions.
                </p>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-card rounded-3xl p-12 border border-border shadow-2xl text-center"
              >
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 0.6 }}
                  className="text-6xl mb-6"
                >
                  🎉
                </motion.div>
                <h3 className="text-2xl font-extrabold mb-3">You're In!</h3>
                <p className="text-muted-foreground mb-6">
                  Welcome to the Vendor fleet, {formData.name.split(" ")[0]}! We'll reach out shortly with next steps.
                </p>
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-5 py-2 text-sm font-bold">
                  <Bike size={16} /> Rider Application Submitted
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RiderCTA;
