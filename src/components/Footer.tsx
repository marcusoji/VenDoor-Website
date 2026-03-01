import { Instagram, Twitter, Facebook, Youtube, Send } from "lucide-react";
import { motion } from "framer-motion";

const socials = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter / X" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Send, href: "#", label: "Telegram" },
];

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground pt-16 pb-8 relative overflow-hidden">
      {/* Decorative accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute top-0 right-0 w-72 h-72 bg-primary/5 rounded-full blur-[100px]" />

      <div className="container relative">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          <div>
            <h3 className="font-display text-2xl font-extrabold mb-4">
              Vendor<span className="text-primary">.</span>
            </h3>
            <p className="text-sm text-secondary-foreground/65 leading-relaxed mb-6">
              Your favourite meals, delivered fast and fresh. Anytime, anywhere.
            </p>
            {/* Social media handles */}
            <div className="flex items-center gap-2">
              {socials.map((s, i) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ scale: 1.15, y: -2 }}
                  className="w-10 h-10 rounded-xl bg-secondary-foreground/10 hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-colors duration-300"
                >
                  <s.icon size={17} />
                </motion.a>
              ))}
            </div>
          </div>

          {[
            { title: "Quick Links", links: ["About", "Careers", "Blog", "Press Kit"] },
            { title: "Support", links: ["Help Centre", "Contact Us", "FAQs", "Rider Support"] },
            { title: "Legal", links: ["Privacy Policy", "Terms of Use", "Cookie Policy"] },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="font-bold text-sm mb-5 uppercase tracking-wider text-secondary-foreground/90">{col.title}</h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-secondary-foreground/60 hover:text-primary transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter strip */}
        <div className="bg-secondary-foreground/5 rounded-2xl p-6 md:p-8 mb-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="font-bold text-lg mb-1">Stay in the loop</h4>
            <p className="text-sm text-secondary-foreground/60">Get deals, updates, and tasty news straight to your inbox.</p>
          </div>
          <div className="flex gap-2 w-full md:w-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="px-4 py-3 rounded-xl bg-secondary-foreground/10 border border-secondary-foreground/10 text-sm text-secondary-foreground placeholder:text-secondary-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/30 flex-1 md:w-64"
            />
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="bg-primary text-primary-foreground px-6 py-3 rounded-xl font-bold text-sm shrink-0"
            >
              Subscribe
            </motion.button>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-secondary-foreground/40">
            © {new Date().getFullYear()} Vendor. All rights reserved.
          </p>
          <p className="text-xs text-secondary-foreground/40">
            Made with 🧡 in Nigeria
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
