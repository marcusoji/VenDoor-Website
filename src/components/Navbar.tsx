import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = ["Features", "How it Works", "App Preview", "Ride with Us"];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/70 backdrop-blur-xl border-b border-border/50">
      <div className="container flex items-center justify-between h-16">
        <a href="#" className="font-display text-2xl font-extrabold tracking-tight">
          <span className="text-secondary">Vendor</span>
          <span className="text-primary">.</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item}
              href={item === "Ride with Us" ? "#join-riders" : `#${item.toLowerCase().replace(/ /g, "-")}`}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {item}
            </a>
          ))}
          <button className="bg-primary text-primary-foreground px-6 py-2.5 rounded-xl text-sm font-bold hover:opacity-90 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-md shadow-primary/20">
            Get the App
          </button>
        </div>

        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-card/95 backdrop-blur-xl border-b border-border"
          >
            <div className="container py-4 flex flex-col gap-3">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={item === "Ride with Us" ? "#join-riders" : `#${item.toLowerCase().replace(/ /g, "-")}`}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground py-2"
                  onClick={() => setOpen(false)}
                >
                  {item}
                </a>
              ))}
              <button className="bg-primary text-primary-foreground px-5 py-2.5 rounded-xl text-sm font-bold mt-2">
                Get the App
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
