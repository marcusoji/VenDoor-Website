import { ArrowLeft, Heart, Star, Clock, Flame, Minus, Plus, ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";
import food1 from "@/assets/food-1.jpg";

const ProductScreen = () => {
  return (
    <div className="w-full h-full rounded-[1rem] overflow-hidden relative flex flex-col" style={{ background: "hsl(160, 30%, 6%)" }}>
      {/* Hero image - top 45% */}
      <div className="relative" style={{ height: "45%" }}>
        <img src={food1} alt="Jollof Rice & Chicken" className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(160,30%,6%)] via-transparent to-transparent" />

        {/* Top bar over image */}
        <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-4 pt-3">
          <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{ background: "hsla(0,0%,0%,0.4)", backdropFilter: "blur(8px)" }}>
            <ArrowLeft size={14} color="white" />
          </div>
          <span className="text-[10px] font-bold text-white/90">Detail</span>
          <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{ background: "hsla(0,0%,0%,0.4)", backdropFilter: "blur(8px)" }}>
            <Heart size={14} color="white" />
          </div>
        </div>
      </div>

      {/* Content area */}
      <div className="flex-1 px-4 pt-3 pb-20 overflow-y-auto no-scrollbar">
        <h2 className="text-lg font-extrabold text-white font-display">Jollof Rice & Chicken</h2>
        <p className="text-[10px] text-white/40 mt-0.5">Mama's Kitchen • Lekki, Lagos</p>

        {/* Stats row */}
        <div className="flex items-center gap-4 mt-3">
          <span className="flex items-center gap-1 text-[10px] text-white/70">
            <Star size={11} className="fill-amber-400 text-amber-400" /> 4.8
          </span>
          <span className="flex items-center gap-1 text-[10px] text-white/70">
            <Clock size={11} style={{ color: "hsl(22,100%,55%)" }} /> 25 min
          </span>
          <span className="flex items-center gap-1 text-[10px] text-white/70">
            <Flame size={11} style={{ color: "hsl(0,80%,55%)" }} /> 450 kcal
          </span>
        </div>

        {/* Description */}
        <div className="mt-4">
          <p className="text-[10px] text-white/50 leading-relaxed">
            Authentic Nigerian party jollof rice, slow-cooked with premium long-grain rice, blended tomatoes, scotch bonnet peppers, and aromatic spices. Served with tender grilled chicken.
          </p>
          <button className="text-[9px] font-semibold mt-1" style={{ color: "hsl(22,100%,55%)" }}>
            Show more
          </button>
        </div>

        {/* Quantity selector */}
        <div className="flex items-center justify-between mt-5">
          <span className="text-xs font-bold text-white/80">Quantity</span>
          <div className="flex items-center gap-3">
            <button className="w-7 h-7 rounded-xl flex items-center justify-center" style={{ background: "hsla(0,0%,100%,0.08)" }}>
              <Minus size={12} color="white" />
            </button>
            <span className="text-sm font-extrabold text-white w-5 text-center">1</span>
            <button className="w-7 h-7 rounded-xl flex items-center justify-center" style={{ background: "hsl(22,100%,55%)" }}>
              <Plus size={12} color="white" />
            </button>
          </div>
        </div>
      </div>

      {/* Fixed bottom CTA */}
      <div className="absolute bottom-0 left-0 right-0 px-4 pb-3 pt-3" style={{ background: "linear-gradient(to top, hsl(160,30%,6%) 80%, transparent)" }}>
        <div className="flex items-center justify-between rounded-2xl px-4 py-3" style={{ background: "hsl(22,100%,55%)" }}>
          <div>
            <span className="text-[8px] text-white/70">Total</span>
            <p className="text-sm font-extrabold text-white">₦3,500</p>
          </div>
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 bg-white/20 rounded-xl px-4 py-2"
          >
            <ShoppingCart size={13} color="white" />
            <span className="text-[10px] font-bold text-white">Add to Cart</span>
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default ProductScreen;
