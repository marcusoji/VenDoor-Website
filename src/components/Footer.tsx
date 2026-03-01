import { Instagram, Twitter, Facebook, Youtube, Send } from "lucide-react";

const socials = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter / X" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Send, href: "#", label: "Telegram" },
];

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          <div>
            <h3 className="font-display text-2xl font-extrabold mb-4">
              Vendor<span className="text-primary">.</span>
            </h3>
            <p className="text-sm text-secondary-foreground/70 leading-relaxed mb-5">
              Your favourite meals, delivered fast and fresh. Anytime, anywhere.
            </p>
            {/* Social media handles */}
            <div className="flex items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-full bg-secondary-foreground/10 hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <s.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {[
            { title: "Quick Links", links: ["About", "Careers", "Blog"] },
            { title: "Support", links: ["Help Centre", "Contact", "FAQs"] },
            { title: "Legal", links: ["Privacy Policy", "Terms of Use"] },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="font-bold text-sm mb-4">{col.title}</h4>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-secondary-foreground/70 hover:text-secondary-foreground transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-secondary-foreground/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-secondary-foreground/50">
            © {new Date().getFullYear()} Vendor. All rights reserved.
          </p>
          <p className="text-xs text-secondary-foreground/50">
            Made with 🧡 in Nigeria
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
