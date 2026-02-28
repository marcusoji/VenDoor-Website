import { motion } from "framer-motion";
import { Star } from "lucide-react";
import food1 from "@/assets/food-1.jpg";
import food2 from "@/assets/food-2.jpg";
import food3 from "@/assets/food-3.jpg";

const meals = [
  { img: food1, name: "Jollof Rice & Chicken", vendor: "Mama's Kitchen", price: "₦3,500", rating: 4.5 },
  { img: food2, name: "Pepper Soup", vendor: "Labrix Eateries", price: "₦2,800", rating: 3.8 },
  { img: food3, name: "Fried Rice Special", vendor: "Chef Bolaji's", price: "₦4,000", rating: 4.7 },
];

const PopularMeals = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Popular <span className="text-gradient">Meals</span>
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Discover what everyone's ordering this week.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {meals.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-card rounded-2xl border border-border overflow-hidden group hover:shadow-lg hover:shadow-primary/5 transition-shadow"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={m.img}
                  alt={m.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <h3 className="font-bold text-lg mb-1">{m.name}</h3>
                <p className="text-sm text-muted-foreground mb-3">{m.vendor}</p>
                <div className="flex items-center justify-between">
                  <span className="text-primary font-extrabold text-lg">{m.price}</span>
                  <span className="flex items-center gap-1 text-sm text-muted-foreground">
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
