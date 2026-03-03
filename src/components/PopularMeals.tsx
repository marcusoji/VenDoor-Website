import { motion } from "framer-motion";
import { Star, ArrowRight } from "lucide-react";
import food1 from "@/assets/food-1.jpg";
import food2 from "@/assets/food-2.jpg";
import food3 from "@/assets/food-3.jpg";

const meals = [
  { img: food1, name: "Jollof Rice & Chicken", vendor: "Mama's Kitchen", price: "₦3,500", rating: 4.5, tag: "🔥 Trending" },
  { img: food2, name: "Pepper Soup", vendor: "Labrix Eateries", price: "₦2,800", rating: 3.8, tag: "🆕 New" },
  { img: food3, name: "Fried Rice Special", vendor: "Chef Bolaji's", price: "₦4,000", rating: 4.7, tag: "⭐ Top Rated" },
];

const floatVariants = [
  { rotate: -6, y: 20, x: -30 },
  { rotate: 2, y: -15, x: 0 },
  { rotate: 5, y: 10, x: 25 },
];

const PopularMeals = () => {
  return (
    <section className="py-24 md:py-36 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[200px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-xs font-bold tracking-[0.3em] uppercase text-primary mb-3 block">Trending Now</span>
          <h2 className="text-4xl md:text-6xl font-extrabold mb-5">
            Popular <span className="text-gradient">Meals</span>
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto text-lg">
            Discover what everyone's ordering this week.
          </p>
        </motion.div>

        {/* Floating dish layout */}
        <div className="relative max-w-5xl mx-auto min-h-[500px] md:min-h-[600px] flex items-center justify-center">
          {meals.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, scale: 0.8, ...floatVariants[i] }}
              whileInView={{ opacity: 1, scale: 1, ...floatVariants[i] }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.7, type: "spring", stiffness: 80 }}
              whileHover={{ scale: 1.08, rotate: 0, y: -20, zIndex: 30 }}
              className="absolute cursor-pointer group"
              style={{
                left: i === 0 ? '0%' : i === 1 ? '30%' : '60%',
                top: i === 0 ? '15%' : i === 1 ? '5%' : '20%',
                zIndex: i === 1 ? 20 : 10,
              }}
            >
              {/* Floating dish card */}
              <div className="relative w-[260px] sm:w-[300px]">
                {/* Dish image with HDR-style treatment */}
                <div className="relative w-52 h-52 sm:w-60 sm:h-60 mx-auto rounded-full overflow-hidden shadow-2xl shadow-foreground/20 ring-4 ring-card group-hover:shadow-primary/30 group-hover:ring-primary/20 transition-all duration-500">
                  <img
                    src={m.img}
                    alt={m.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 saturate-[1.3] contrast-[1.1] brightness-[1.05]"
                    loading="lazy"
                  />
                  {/* HDR glow overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 via-transparent to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 mix-blend-overlay" />
                </div>

                {/* Tag floating above */}
                <motion.div
                  className="absolute -top-2 left-1/2 -translate-x-1/2 bg-card/95 backdrop-blur-sm rounded-full px-4 py-1.5 text-xs font-bold border border-border shadow-lg whitespace-nowrap"
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  {m.tag}
                </motion.div>

                {/* Info card below dish */}
                <motion.div
                  className="mt-4 bg-card/95 backdrop-blur-sm rounded-2xl p-4 border border-border shadow-xl mx-auto max-w-[240px] group-hover:shadow-2xl group-hover:border-primary/20 transition-all duration-300"
                >
                  <h3 className="font-bold text-base mb-0.5">{m.name}</h3>
                  <p className="text-xs text-muted-foreground mb-3">{m.vendor}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-primary font-extrabold text-lg">{m.price}</span>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground bg-primary/5 px-2 py-1 rounded-lg">
                      <Star size={12} className="fill-primary text-primary" />
                      {m.rating}
                    </span>
                  </div>
                  {/* Order button on hover */}
                  <div className="overflow-hidden max-h-0 group-hover:max-h-12 transition-all duration-300">
                    <button className="w-full mt-3 bg-primary text-primary-foreground py-2 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5">
                      Order Now <ArrowRight size={14} />
                    </button>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularMeals;
