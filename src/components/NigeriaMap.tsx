import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { drawPath, stateCode } from "@react-map/nigeria/src/constants";
import { useState } from "react";

const NigeriaMap = () => {
  const [hoveredState, setHoveredState] = useState<string | null>(null);

  const getStateFill = (state: string) => {
    if (state === "Delta") return "hsl(162, 85%, 22%)";
    if (hoveredState === state) return "hsl(162, 60%, 40%)";
    return "hsl(35, 30%, 90%)";
  };

  return (
    <section id="coverage" className="py-24 md:py-36 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-secondary/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-[400px] h-[400px] bg-primary/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-bold tracking-[0.3em] uppercase text-primary mb-3 block">Coverage</span>
          <h2 className="text-4xl md:text-6xl font-extrabold mb-5">
            We're Growing Across <span className="text-gradient">Nigeria</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto text-lg">
            Starting from Delta State, we're expanding to bring fast, reliable food delivery to every corner of Nigeria.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 max-w-6xl mx-auto">
          {/* SVG Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring" }}
            className="relative flex-1 w-full max-w-[550px]"
          >
            <svg
              viewBox="50 0 750 620"
              className="w-full h-auto"
              xmlns="http://www.w3.org/2000/svg"
            >
              {stateCode.map((code) => (
                <path
                  key={code}
                  d={drawPath[code as keyof typeof drawPath]}
                  fill={getStateFill(code)}
                  stroke="hsl(160, 20%, 70%)"
                  strokeWidth={0.8}
                  onMouseEnter={() => setHoveredState(code)}
                  onMouseLeave={() => setHoveredState(null)}
                  className="transition-colors duration-200 cursor-pointer"
                />
              ))}

              {/* Abraka marker - approximate position within Delta State */}
              <g>
                {/* Pulse rings */}
                <circle cx="230" cy="490" r="6" fill="hsl(22, 100%, 55%)" opacity="0.3">
                  <animate attributeName="r" values="6;20;6" dur="2s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.5;0;0.5" dur="2s" repeatCount="indefinite" />
                </circle>
                <circle cx="230" cy="490" r="4" fill="hsl(22, 100%, 55%)" opacity="0.5">
                  <animate attributeName="r" values="4;14;4" dur="2s" repeatCount="indefinite" begin="0.3s" />
                  <animate attributeName="opacity" values="0.6;0;0.6" dur="2s" repeatCount="indefinite" begin="0.3s" />
                </circle>
                {/* Center dot */}
                <circle cx="230" cy="490" r="4" fill="hsl(22, 100%, 55%)" stroke="white" strokeWidth="1.5" />
              </g>
            </svg>

            {/* Abraka label overlay */}
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="absolute z-10 bg-card/95 backdrop-blur-sm border border-border rounded-xl px-4 py-2 shadow-xl"
              style={{ bottom: "20%", left: "38%" }}
            >
              <div className="flex items-center gap-2">
                <MapPin size={14} className="text-primary" />
                <div>
                  <p className="text-xs font-bold text-foreground">Abraka</p>
                  <p className="text-[10px] text-primary font-semibold">We're Here 🟢</p>
                </div>
              </div>
            </motion.div>

            {/* Hovered state tooltip */}
            {hoveredState && (
              <div className="absolute top-4 left-4 bg-card/95 backdrop-blur-sm border border-border rounded-lg px-3 py-1.5 shadow-lg text-sm font-semibold text-foreground">
                {hoveredState}
              </div>
            )}
          </motion.div>

          {/* Info cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex-1 max-w-md space-y-6"
          >
            <div className="bg-card/80 backdrop-blur-sm border border-primary/30 rounded-3xl p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-full blur-[40px]" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-3 h-3 rounded-full bg-secondary animate-pulse" />
                  <span className="text-xs font-bold tracking-wider uppercase text-primary">Live Now</span>
                </div>
                <h3 className="text-2xl font-extrabold mb-1">Abraka, Delta State</h3>
                <p className="text-muted-foreground text-sm">
                  Our first location — delivering hot meals to students and residents across Abraka.
                </p>
              </div>
            </div>

            <div className="bg-card/60 backdrop-blur-sm border border-border rounded-3xl p-6">
              <h3 className="font-bold text-lg mb-3 text-foreground/80">Coming Soon</h3>
              <div className="space-y-3">
                {[
                  { city: "Warri", state: "Delta State" },
                  { city: "Asaba", state: "Delta State" },
                  { city: "Benin City", state: "Edo State" },
                  { city: "Lagos", state: "Lagos State" },
                ].map((loc) => (
                  <div key={loc.city} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent/60" />
                    <span className="text-sm text-foreground/70">
                      {loc.city}, <span className="text-muted-foreground">{loc.state}</span>
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-card/60 backdrop-blur-sm border border-border rounded-2xl p-4 text-center">
                <p className="text-3xl font-extrabold text-gradient">36</p>
                <p className="text-xs text-muted-foreground mt-1">States Target</p>
              </div>
              <div className="bg-card/60 backdrop-blur-sm border border-border rounded-2xl p-4 text-center">
                <p className="text-3xl font-extrabold text-gradient-cool">1</p>
                <p className="text-xs text-muted-foreground mt-1">Active Location</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default NigeriaMap;
