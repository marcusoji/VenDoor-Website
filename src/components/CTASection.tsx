import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import PhoneMockup from "./PhoneMockup";
import appOrder from "@/assets/app-order.jpg";

const CTASection = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="rounded-[2rem] bg-secondary text-secondary-foreground p-10 md:p-16 relative overflow-hidden"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-primary/15 rounded-full blur-[80px]" />
          <div className="absolute bottom-0 left-0 w-60 h-60 bg-accent/10 rounded-full blur-[60px]" />

          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
                Ready to Order?
                <br />
                <span className="text-primary">Download Vendor</span>
              </h2>
              <p className="text-secondary-foreground/75 max-w-md mb-10 text-lg leading-relaxed">
                Join 50,000+ users already enjoying fast, affordable food delivery. Available on iOS and Android.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-primary text-primary-foreground px-8 py-4 rounded-2xl font-bold flex items-center gap-2 hover:opacity-90 transition-all shadow-lg shadow-primary/30 hover:scale-[1.02] active:scale-[0.98]">
                  App Store <ArrowRight size={16} />
                </button>
                <button className="bg-card text-card-foreground px-8 py-4 rounded-2xl font-bold flex items-center gap-2 hover:opacity-90 transition-all hover:scale-[1.02] active:scale-[0.98]">
                  Play Store <ArrowRight size={16} />
                </button>
              </div>
            </div>

            {/* Phone in CTA */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="hidden lg:flex justify-center"
            >
              <div className="w-[240px] -mb-32">
                <PhoneMockup
                  screenshot={appOrder}
                  alt="Vendor app order customization screen"
                  glowColor="primary"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
