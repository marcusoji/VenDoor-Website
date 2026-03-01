import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { MapPin, Package, CheckCircle2 } from "lucide-react";

const DeliveryAnimation = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const pathProgress = useTransform(scrollYProgress, [0.1, 0.8], [0, 1]);
  const bikeX = useTransform(scrollYProgress, [0.1, 0.8], [0, 100]);
  const opacity1 = useTransform(scrollYProgress, [0.15, 0.25], [0, 1]);
  const opacity2 = useTransform(scrollYProgress, [0.4, 0.5], [0, 1]);
  const opacity3 = useTransform(scrollYProgress, [0.65, 0.75], [0, 1]);

  return (
    <section ref={containerRef} className="py-32 md:py-44 relative overflow-hidden bg-card">
      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-xs font-bold tracking-[0.3em] uppercase text-primary mb-3 block">
            Watch it Happen
          </span>
          <h2 className="text-4xl md:text-6xl font-extrabold mb-5">
            From Kitchen to <span className="text-gradient">Doorstep</span>
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto text-lg">
            Scroll down and watch your order journey unfold in real-time.
          </p>
        </motion.div>

        {/* Delivery journey visual */}
        <div className="relative max-w-3xl mx-auto h-[400px] md:h-[300px]">
          {/* Path line */}
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 800 200"
            preserveAspectRatio="xMidYMid meet"
          >
            {/* Background path */}
            <path
              d="M50 100 C200 30, 300 170, 400 100 C500 30, 600 170, 750 100"
              stroke="hsl(var(--border))"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
            />
            {/* Animated path */}
            <motion.path
              d="M50 100 C200 30, 300 170, 400 100 C500 30, 600 170, 750 100"
              stroke="hsl(var(--primary))"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              style={{ pathLength: pathProgress }}
            />
          </svg>

          {/* Milestone markers */}
          <motion.div
            className="absolute left-[5%] top-[35%] md:top-[30%] flex flex-col items-center"
            style={{ opacity: opacity1 }}
          >
            <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/30 mb-2">
              <Package size={24} className="text-primary-foreground" />
            </div>
            <span className="text-xs font-bold text-center">Order Placed</span>
          </motion.div>

          <motion.div
            className="absolute left-[45%] top-[35%] md:top-[30%] flex flex-col items-center -translate-x-1/2"
            style={{ opacity: opacity2 }}
          >
            <motion.div
              className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center shadow-lg shadow-secondary/30 mb-2"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <span className="text-2xl">🏍️</span>
            </motion.div>
            <span className="text-xs font-bold text-center">Rider En Route</span>
          </motion.div>

          <motion.div
            className="absolute right-[5%] top-[35%] md:top-[30%] flex flex-col items-center"
            style={{ opacity: opacity3 }}
          >
            <motion.div
              className="w-14 h-14 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/30 mb-2"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <CheckCircle2 size={24} className="text-primary-foreground" />
            </motion.div>
            <span className="text-xs font-bold text-center">Delivered! 🎉</span>
          </motion.div>

          {/* Moving bike indicator */}
          <motion.div
            className="absolute top-[55%] md:top-[50%]"
            style={{ left: bikeX.get ? undefined : "5%", x: bikeX }}
          >
          </motion.div>
        </div>

        {/* Live stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-6 md:gap-12 mt-16"
        >
          {[
            { value: "12 min", label: "Avg. delivery time" },
            { value: "99.2%", label: "On-time rate" },
            { value: "4.9★", label: "Rider rating" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <motion.span
                className="text-3xl md:text-4xl font-extrabold text-primary block"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                {stat.value}
              </motion.span>
              <span className="text-xs text-muted-foreground mt-1 block">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default DeliveryAnimation;
