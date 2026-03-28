import { motion } from "motion/react";

const platforms = [
  { name: "Uber Eats", color: "bg-[#06C167]", text: "text-white" },
  { name: "DoorDash", color: "bg-[#FF3008]", text: "text-white" },
  { name: "Instacart", color: "bg-[#0AAD0A]", text: "text-white" },
  { name: "Gopuff", color: "bg-[#0000FF]", text: "text-white" },
];

export function InstantPurchase() {
  return (
    <section id="buy" className="py-16 bg-sprite-gray border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl text-white mb-4">
            Get It <span className="text-sprite-green">Instantly</span>
          </h2>
          <p className="text-white/60 font-medium">
            Delivered ice cold to your door in minutes.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {platforms.map((platform, i) => (
            <motion.a
              key={platform.name}
              href="#"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`${platform.color} ${platform.text} p-6 rounded-2xl flex flex-col items-center justify-center text-center font-bold text-lg md:text-xl uppercase tracking-wider shadow-lg hover:shadow-xl transition-all`}
            >
              Order on
              <span className="block mt-1 font-display text-2xl">
                {platform.name}
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
