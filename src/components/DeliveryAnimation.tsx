import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Package, CheckCircle2, Utensils, Bike } from "lucide-react";

const DeliveryAnimation = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const pathProgress = useTransform(scrollYProgress, [0.1, 0.7], [0, 1]);
  const opacity1 = useTransform(scrollYProgress, [0.1, 0.2], [0, 1]);
  const scale1 = useTransform(scrollYProgress, [0.1, 0.2], [0.5, 1]);
  const opacity2 = useTransform(scrollYProgress, [0.3, 0.4], [0, 1]);
  const scale2 = useTransform(scrollYProgress, [0.3, 0.4], [0.5, 1]);
  const opacity3 = useTransform(scrollYProgress, [0.5, 0.6], [0, 1]);
  const scale3 = useTransform(scrollYProgress, [0.5, 0.6], [0.5, 1]);
  const opacity4 = useTransform(scrollYProgress, [0.65, 0.75], [0, 1]);
  const scale4 = useTransform(scrollYProgress, [0.65, 0.75], [0.5, 1]);

  // Rider position along path
  const riderLeft = useTransform(scrollYProgress, [0.1, 0.7], ["3%", "88%"]);
  const riderY = useTransform(scrollYProgress, [0.1, 0.25, 0.4, 0.55, 0.7], [0, -30, 20, -20, 0]);

  return (
    <section ref={containerRef} className="py-32 md:py-48 relative overflow-hidden">
      {/* Layered background */}
      <div className="absolute inset-0 bg-secondary" />
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-background to-transparent z-10" />
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-background to-transparent z-10" />
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[100px]" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <span className="text-xs font-bold tracking-[0.3em] uppercase text-primary mb-3 block">
            Watch it Happen
          </span>
          <h2 className="text-4xl md:text-6xl font-extrabold mb-5 text-secondary-foreground">
            From Kitchen to <span className="text-primary">Doorstep</span>
          </h2>
          <p className="text-secondary-foreground/70 max-w-md mx-auto text-lg">
            Scroll and watch the magic unfold — your food's journey in real time.
          </p>
        </motion.div>

        {/* Delivery journey visual */}
        <div className="relative max-w-4xl mx-auto h-[350px] md:h-[280px]">
          {/* Path line */}
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 900 180"
            preserveAspectRatio="xMidYMid meet"
          >
            <path
              d="M40 90 C180 20, 280 160, 400 90 C520 20, 620 160, 750 90 L860 90"
              stroke="hsl(var(--secondary-foreground) / 0.15)"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              strokeDasharray="8 6"
            />
            <motion.path
              d="M40 90 C180 20, 280 160, 400 90 C520 20, 620 160, 750 90 L860 90"
              stroke="hsl(var(--primary))"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
              style={{ pathLength: pathProgress }}
            />
          </svg>

          {/* Milestone 1: Restaurant */}
          <motion.div
            className="absolute left-[2%] top-[28%] md:top-[22%] flex flex-col items-center"
            style={{ opacity: opacity1, scale: scale1 }}
          >
            <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center shadow-xl shadow-primary/40 mb-3 rotate-3">
              <Utensils size={28} className="text-primary-foreground" />
            </div>
            <span className="text-xs font-bold text-secondary-foreground text-center">Restaurant<br/>Prepares</span>
          </motion.div>

          {/* Milestone 2: Order Picked Up */}
          <motion.div
            className="absolute left-[28%] top-[28%] md:top-[22%] flex flex-col items-center"
            style={{ opacity: opacity2, scale: scale2 }}
          >
            <div className="w-16 h-16 rounded-2xl bg-accent flex items-center justify-center shadow-xl shadow-accent/30 mb-3 -rotate-2">
              <Package size={28} className="text-accent-foreground" />
            </div>
            <span className="text-xs font-bold text-secondary-foreground text-center">Picked Up</span>
          </motion.div>

          {/* Milestone 3: Rider En Route */}
          <motion.div
            className="absolute left-[55%] top-[28%] md:top-[22%] flex flex-col items-center -translate-x-1/2"
            style={{ opacity: opacity3, scale: scale3 }}
          >
            <motion.div
              className="w-16 h-16 rounded-2xl bg-secondary-foreground flex items-center justify-center shadow-xl mb-3 rotate-1"
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Bike size={28} className="text-secondary" />
            </motion.div>
            <span className="text-xs font-bold text-secondary-foreground text-center">On the Way</span>
          </motion.div>

          {/* Milestone 4: Delivered */}
          <motion.div
            className="absolute right-[2%] top-[28%] md:top-[22%] flex flex-col items-center"
            style={{ opacity: opacity4, scale: scale4 }}
          >
            <motion.div
              className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center shadow-xl shadow-primary/40 mb-3 -rotate-3"
              animate={{ scale: [1, 1.08, 1] }}
              transition={{ duration: 1.2, repeat: Infinity }}
            >
              <CheckCircle2 size={28} className="text-primary-foreground" />
            </motion.div>
            <span className="text-xs font-bold text-secondary-foreground text-center">Delivered! 🎉</span>
          </motion.div>

          {/* Animated rider emoji traveling the path */}
          <motion.div
            className="absolute top-[55%] md:top-[48%] z-20"
            style={{ left: riderLeft, y: riderY }}
          >
            <motion.div
              className="w-12 h-12 rounded-full bg-primary shadow-lg shadow-primary/50 flex items-center justify-center text-xl"
              animate={{ rotate: [0, -5, 5, 0] }}
              transition={{ duration: 0.8, repeat: Infinity }}
            >
              🏍️
            </motion.div>
            {/* Speed lines */}
            <motion.div
              className="absolute -left-6 top-1/2 -translate-y-1/2 flex gap-1"
              animate={{ opacity: [0, 0.6, 0], x: [-4, -12] }}
              transition={{ duration: 0.5, repeat: Infinity }}
            >
              <div className="w-4 h-[2px] bg-primary/60 rounded-full" />
              <div className="w-3 h-[2px] bg-primary/40 rounded-full" />
            </motion.div>
          </motion.div>
        </div>

        {/* Live stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-8 md:gap-16 mt-20"
        >
          {[
            { value: "12 min", label: "Avg. delivery time" },
            { value: "99.2%", label: "On-time rate" },
            { value: "4.9★", label: "Rider rating" },
            { value: "₦800", label: "Avg. delivery fee" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, type: "spring", stiffness: 200 }}
            >
              <span className="text-3xl md:text-4xl font-extrabold text-primary block">
                {stat.value}
              </span>
              <span className="text-xs text-secondary-foreground/60 mt-1 block">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default DeliveryAnimation;
