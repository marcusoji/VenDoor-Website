import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="rounded-3xl bg-secondary text-secondary-foreground p-10 md:p-16 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-5 leading-tight">
              Experience the App Today
            </h2>
            <p className="text-secondary-foreground/80 max-w-lg mx-auto mb-8 text-lg">
              Download Vendor and start ordering from the best restaurants around you. Fast, reliable, delicious.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-primary text-primary-foreground px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:opacity-90 transition-opacity shadow-lg">
                App Store <ArrowRight size={16} />
              </button>
              <button className="bg-card text-card-foreground px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:opacity-90 transition-opacity">
                Play Store <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
