import { MapPin, ChevronDown, Bell, Star, Clock, Search } from "lucide-react";
import { motion } from "framer-motion";
import food1 from "@/assets/food-1.jpg";
import food2 from "@/assets/food-2.jpg";
import food3 from "@/assets/food-3.jpg";
import { Home, ShoppingBag, Heart, User, Grid3X3 } from "lucide-react";

const categories = [
  { label: "All", active: true },
  { label: "Rice", active: false },
  { label: "Soups", active: false },
  { label: "Drinks", active: false },
  { label: "Snacks", active: false },
];

const foods = [
  { img: food1, name: "Jollof Rice & Chicken", price: "₦3,500", rating: 4.8, time: "25 min", desc: "Smoky party-style jollof with grilled chicken" },
  { img: food2, name: "Pepper Soup", price: "₦2,800", rating: 4.5, time: "20 min", desc: "Spicy catfish pepper soup, served hot" },
  { img: food3, name: "Fried Rice Special", price: "₦4,000", rating: 4.9, time: "30 min", desc: "Special fried rice with prawns and veggies" },
];

const navItems = [
  { Icon: Home, label: "Home", active: true },
  { Icon: Search, label: "Search", active: false },
  { Icon: ShoppingBag, label: "Orders", active: false },
  { Icon: Heart, label: "Saved", active: false },
  { Icon: User, label: "Profile", active: false },
];

const HomeScreen = () => {
  return (
    <div className="w-full h-full rounded-[1rem] overflow-hidden relative flex flex-col text-white" style={{ background: "hsl(160, 30%, 6%)" }}>
      {/* Status / top bar */}
      <div className="px-4 pt-3 pb-2 flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <MapPin size={13} style={{ color: "hsl(22, 100%, 55%)" }} />
          <span className="text-[10px] font-semibold text-white/90">Lekki, Lagos</span>
          <ChevronDown size={11} className="text-white/50" />
        </div>
        <div className="w-7 h-7 rounded-xl flex items-center justify-center" style={{ background: "hsla(0,0%,100%,0.08)" }}>
          <Bell size={13} className="text-white/80" />
        </div>
      </div>

      {/* Promo banner */}
      <div className="mx-4 mt-1 rounded-2xl p-4 relative overflow-hidden" style={{ background: "linear-gradient(135deg, hsl(22, 100%, 55%), hsl(38, 100%, 60%))" }}>
        <div className="relative z-10">
          <span className="text-[8px] uppercase font-bold tracking-wider text-white/70">Limited Offer</span>
          <h3 className="text-lg font-extrabold text-white leading-tight mt-0.5">50% Off</h3>
          <p className="text-[9px] text-white/80 mt-0.5">On your first order</p>
          <button className="mt-2 px-4 py-1.5 rounded-xl text-[9px] font-bold" style={{ background: "hsl(160, 30%, 6%)", color: "white" }}>
            Claim Now
          </button>
        </div>
        <div className="absolute right-2 bottom-1 opacity-20">
          <Grid3X3 size={60} strokeWidth={0.8} />
        </div>
      </div>

      {/* Category pills */}
      <div className="flex gap-2 px-4 mt-4 overflow-x-auto no-scrollbar">
        {categories.map((c) => (
          <span
            key={c.label}
            className="whitespace-nowrap px-3 py-1.5 rounded-xl text-[9px] font-semibold border transition-colors"
            style={
              c.active
                ? { background: "hsl(22, 100%, 55%)", color: "white", borderColor: "transparent" }
                : { background: "transparent", color: "hsla(0,0%,100%,0.5)", borderColor: "hsla(0,0%,100%,0.1)" }
            }
          >
            {c.label}
          </span>
        ))}
      </div>

      {/* Food cards */}
      <div className="flex-1 overflow-y-auto px-4 mt-3 pb-16 space-y-3 no-scrollbar">
        {foods.map((f, i) => (
          <motion.div
            key={f.name}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="rounded-2xl overflow-hidden"
            style={{ background: "hsla(0,0%,100%,0.04)", border: "1px solid hsla(0,0%,100%,0.06)" }}
          >
            <div className="relative h-24 overflow-hidden">
              <img src={f.img} alt={f.name} className="w-full h-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
            <div className="p-3">
              <div className="flex items-start justify-between">
                <h4 className="text-xs font-bold text-white">{f.name}</h4>
                <span className="text-xs font-extrabold" style={{ color: "hsl(22, 100%, 55%)" }}>{f.price}</span>
              </div>
              <p className="text-[9px] text-white/40 mt-0.5 line-clamp-1">{f.desc}</p>
              <div className="flex items-center gap-3 mt-2">
                <span className="flex items-center gap-0.5 text-[9px] text-white/60">
                  <Star size={9} className="fill-amber-400 text-amber-400" /> {f.rating}
                </span>
                <span className="flex items-center gap-0.5 text-[9px] text-white/60">
                  <Clock size={9} /> {f.time}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom nav */}
      <div className="absolute bottom-0 left-0 right-0 px-2 pb-2 pt-2" style={{ background: "linear-gradient(to top, hsl(160,30%,6%) 80%, transparent)" }}>
        <div className="flex items-center justify-around rounded-2xl py-2" style={{ background: "hsla(0,0%,100%,0.05)", border: "1px solid hsla(0,0%,100%,0.06)" }}>
          {navItems.map((n) => (
            <div key={n.label} className="flex flex-col items-center gap-0.5">
              <n.Icon
                size={16}
                style={n.active ? { color: "hsl(22, 100%, 55%)" } : { color: "hsla(0,0%,100%,0.35)" }}
              />
              <span
                className="text-[7px] font-medium"
                style={n.active ? { color: "hsl(22, 100%, 55%)" } : { color: "hsla(0,0%,100%,0.35)" }}
              >
                {n.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
