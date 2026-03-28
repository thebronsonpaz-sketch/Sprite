import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

const products = [
  {
    id: "original",
    name: "Sprite Original",
    desc: "The classic, crisp, lemon-lime taste.",
    color: "from-sprite-green/20 to-transparent",
    img: "https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?q=80&w=600&auto=format&fit=crop",
    tag: "Classic",
  },
  {
    id: "zero",
    name: "Sprite Zero Sugar",
    desc: "Zero sugar. 100% Sprite flavor.",
    color: "from-gray-500/20 to-transparent",
    img: "https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?q=80&w=600&auto=format&fit=crop&grayscale=1",
    tag: "Zero Sugar",
  },
  {
    id: "cherry",
    name: "Sprite Cherry",
    desc: "A hit of cherry flavor.",
    color: "from-red-500/20 to-transparent",
    img: "https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?q=80&w=600&auto=format&fit=crop&hue=300",
    tag: "Limited",
  },
];

export function ProductShowcase() {
  return (
    <section id="products" className="py-24 bg-sprite-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl text-white mb-4">
            CHOOSE YOUR <span className="text-sprite-green">FLAVOR</span>
          </h2>
          <p className="text-xl text-white/60 font-medium max-w-2xl mx-auto">
            Find your perfect match. Available in cans, bottles, and
            multi-packs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              className="group relative bg-sprite-gray rounded-3xl p-8 overflow-hidden flex flex-col items-center text-center border border-white/5 hover:border-sprite-green/50 transition-colors"
            >
              {/* Background Gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-t ${product.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              {/* Tag */}
              <span className="absolute top-6 right-6 bg-sprite-dark text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-white/10 z-20">
                {product.tag}
              </span>

              {/* Product Image */}
              <div className="relative w-48 h-64 mb-8 z-10 transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-4">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-full object-contain drop-shadow-2xl mix-blend-screen"
                />
              </div>

              {/* Content */}
              <div className="relative z-20 mt-auto w-full">
                <h3 className="text-3xl text-white mb-2">{product.name}</h3>
                <p className="text-white/60 font-medium mb-6">{product.desc}</p>

                <button className="w-full bg-white text-sprite-dark hover:bg-sprite-green font-bold uppercase tracking-wider py-4 rounded-xl flex items-center justify-center gap-2 transition-colors group/btn">
                  Buy Now
                  <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
