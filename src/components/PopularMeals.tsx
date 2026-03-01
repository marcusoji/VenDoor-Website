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

const PopularMeals = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-bold tracking-[0.3em] uppercase text-primary mb-3 block">Trending Now</span>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-5">
            Popular <span className="text-gradient">Meals</span>
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto text-lg">
            Discover what everyone's ordering this week.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7 max-w-4xl mx-auto">
          {meals.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5, type: "spring" }}
              whileHover={{ y: -8 }}
              className="bg-card rounded-3xl border border-border overflow-hidden group hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 cursor-pointer"
            >
              <div className="aspect-square overflow-hidden relative">
                <img
                  src={m.img}
                  alt={m.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                {/* Tag badge */}
                <div className="absolute top-3 left-3 bg-card/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-bold">
                  {m.tag}
                </div>
                {/* Order overlay on hover */}
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300 flex items-end justify-center pb-4 opacity-0 group-hover:opacity-100">
                  <span className="bg-primary text-primary-foreground px-5 py-2 rounded-xl text-xs font-bold flex items-center gap-1 shadow-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    Order Now <ArrowRight size={14} />
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg mb-1">{m.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{m.vendor}</p>
                <div className="flex items-center justify-between">
                  <span className="text-primary font-extrabold text-xl">{m.price}</span>
                  <span className="flex items-center gap-1 text-sm text-muted-foreground bg-primary/5 px-2.5 py-1 rounded-lg">
                    <Star size={14} className="fill-primary text-primary" />
                    {m.rating}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularMeals;
