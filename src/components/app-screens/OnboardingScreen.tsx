import { motion } from "framer-motion";
import { UtensilsCrossed, Cherry, CakeSlice, Coffee, Salad } from "lucide-react";

const floatingIcons = [
  { Icon: UtensilsCrossed, x: "15%", y: "12%", delay: 0 },
  { Icon: Cherry, x: "75%", y: "8%", delay: 0.3 },
  { Icon: CakeSlice, x: "85%", y: "35%", delay: 0.6 },
  { Icon: Coffee, x: "10%", y: "40%", delay: 0.2 },
  { Icon: Salad, x: "60%", y: "25%", delay: 0.5 },
  { Icon: UtensilsCrossed, x: "40%", y: "10%", delay: 0.4 },
  { Icon: Coffee, x: "30%", y: "38%", delay: 0.7 },
  { Icon: CakeSlice, x: "90%", y: "18%", delay: 0.1 },
];

const OnboardingScreen = () => {
  return (
    <div className="w-full h-full rounded-[1rem] overflow-hidden relative flex flex-col" style={{ background: "hsl(22, 100%, 55%)" }}>
      {/* Food pattern background */}
      <div className="absolute inset-0 opacity-[0.08]">
        {floatingIcons.map((item, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{ left: item.x, top: item.y }}
            animate={{ y: [0, -6, 0], rotate: [0, 8, -8, 0] }}
            transition={{ duration: 3 + i * 0.3, repeat: Infinity, ease: "easeInOut", delay: item.delay }}
          >
            <item.Icon size={24} strokeWidth={1.5} color="white" />
          </motion.div>
        ))}
      </div>

      {/* Top accent area - 65% */}
      <div className="flex-1 flex items-center justify-center relative z-10">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, type: "spring" }}
          className="text-center"
        >
          <span className="text-4xl font-extrabold text-white tracking-tight font-display">
            Ven<span style={{ color: "hsl(160,45%,10%)" }}>Door</span>
          </span>
          <span className="text-white text-4xl font-extrabold">.</span>
        </motion.div>
      </div>

      {/* Bottom curved dark section - 35% */}
      <div
        className="relative z-10"
        style={{
          height: "42%",
          background: "hsl(160, 30%, 6%)",
          borderRadius: "2rem 2rem 1rem 1rem",
        }}
      >
        <div className="flex flex-col items-center justify-center h-full px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-white text-xl font-extrabold mb-2 font-display"
          >
            Hungry? Get It Fast
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="text-white/60 text-xs mb-5"
          >
            Fresh, fast, and tailored to your taste!
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="w-full max-w-[200px] py-3 rounded-2xl text-sm font-bold text-white"
            style={{ background: "hsl(22, 100%, 55%)" }}
          >
            Order Now
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default OnboardingScreen;
