import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container flex items-center justify-between h-16">
        <a href="#" className="font-display text-2xl font-extrabold tracking-tight">
          <span className="text-secondary">Vendor</span>
          <span className="text-primary">.</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {["Features", "How it Works", "Merchants", "Riders"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/ /g, "-")}`}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {item}
            </a>
          ))}
          <button className="bg-primary text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity">
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
            className="md:hidden overflow-hidden bg-card border-b border-border"
          >
            <div className="container py-4 flex flex-col gap-3">
              {["Features", "How it Works", "Merchants", "Riders"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(/ /g, "-")}`}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground py-2"
                  onClick={() => setOpen(false)}
                >
                  {item}
                </a>
              ))}
              <button className="bg-primary text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-semibold mt-2">
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
