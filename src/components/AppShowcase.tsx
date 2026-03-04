import { motion } from "framer-motion";
import { useState } from "react";
import OnboardingScreen from "./app-screens/OnboardingScreen";
import HomeScreen from "./app-screens/HomeScreen";
import ProductScreen from "./app-screens/ProductScreen";

const screens = [
  { id: "onboarding", label: "Splash", Component: OnboardingScreen },
  { id: "home", label: "Home", Component: HomeScreen },
  { id: "product", label: "Product", Component: ProductScreen },
];

const AppShowcase = () => {
  const [active, setActive] = useState(1);

  return (
    <section id="app-preview" className="py-24 md:py-36 relative overflow-hidden">
      {/* Dramatic background */}
      <div className="absolute inset-0 bg-secondary" />
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-background to-transparent z-10" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent z-10" />

      {/* Floating orbs */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary/20 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-accent/15 rounded-full blur-[120px]" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-bold tracking-[0.3em] uppercase text-primary mb-4">
            Inside the App
          </span>
          <h2 className="text-4xl md:text-6xl font-extrabold text-secondary-foreground leading-tight mb-6">
            A Taste of What's
            <br />
            <span className="text-primary">Waiting for You</span>
          </h2>
          <p className="text-secondary-foreground/70 max-w-lg mx-auto text-lg">
            Browse vendors, explore meals, customize orders — all from the palm of your hand.
          </p>
        </motion.div>

        {/* Screen selector pills */}
        <div className="flex justify-center gap-2 mb-12">
          {screens.map((s, i) => (
            <button
              key={s.id}
              onClick={() => setActive(i)}
              className="px-5 py-2 rounded-xl text-xs font-bold transition-all duration-300"
              style={
                active === i
                  ? { background: "hsl(22,100%,55%)", color: "white" }
                  : { background: "hsla(0,0%,100%,0.08)", color: "hsla(0,0%,100%,0.5)" }
              }
            >
              {s.label}
            </button>
          ))}
        </div>

        {/* Phones */}
        <div className="flex items-center justify-center gap-6 md:gap-10">
          {screens.map((s, i) => {
            const isActive = i === active;
            const offset = i - active;
            return (
              <motion.div
                key={s.id}
                animate={{
                  scale: isActive ? 1 : 0.82,
                  opacity: isActive ? 1 : 0.4,
                  x: offset * 10,
                  rotateY: offset * -8,
                }}
                transition={{ duration: 0.5, type: "spring", stiffness: 120 }}
                onClick={() => setActive(i)}
                className="cursor-pointer hidden md:block"
                style={{ perspective: "1200px", zIndex: isActive ? 20 : 10 }}
              >
                <div className="relative group">
                  {isActive && (
                    <div className="absolute -inset-4 rounded-[2.5rem] blur-2xl opacity-40 bg-primary transition-opacity duration-700" />
                  )}
                  {/* Phone frame */}
                  <div className="relative bg-foreground rounded-[2.2rem] p-[3px] shadow-2xl">
                    <div className="bg-foreground/90 rounded-[2rem] p-[5px] relative">
                      {/* Notch */}
                      <div className="absolute top-[8px] left-1/2 -translate-x-1/2 z-20 w-[60px] h-[18px] bg-foreground rounded-full flex items-center justify-center gap-1.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground/30" />
                        <div className="w-1 h-1 rounded-full bg-muted-foreground/20" />
                      </div>
                      {/* Screen */}
                      <div className="rounded-[1.6rem] overflow-hidden w-[240px] h-[500px]">
                        <s.Component />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}

          {/* Mobile: show only active */}
          <div className="md:hidden">
            <div className="relative group">
              <div className="absolute -inset-4 rounded-[2.5rem] blur-2xl opacity-40 bg-primary" />
              <div className="relative bg-foreground rounded-[2.2rem] p-[3px] shadow-2xl">
                <div className="bg-foreground/90 rounded-[2rem] p-[5px] relative">
                  <div className="absolute top-[8px] left-1/2 -translate-x-1/2 z-20 w-[60px] h-[18px] bg-foreground rounded-full flex items-center justify-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground/30" />
                    <div className="w-1 h-1 rounded-full bg-muted-foreground/20" />
                  </div>
                  <div className="rounded-[1.6rem] overflow-hidden w-[260px] h-[520px]">
                    {(() => {
                      const ActiveComponent = screens[active].Component;
                      return <ActiveComponent />;
                    })()}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Screen label */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mt-10"
        >
          <h3 className="text-secondary-foreground font-bold text-lg">
            {active === 0 ? "Welcome to VenDoor" : active === 1 ? "Discover & Browse" : "Order with Ease"}
          </h3>
          <p className="text-secondary-foreground/60 text-sm mt-1">
            {active === 0
              ? "Beautiful onboarding experience"
              : active === 1
              ? "Browse top-rated restaurants and trending meals"
              : "Customize your order and add to cart instantly"}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AppShowcase;
