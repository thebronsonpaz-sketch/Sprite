import { motion } from "motion/react";
import { Play, Heart, MessageCircle } from "lucide-react";

const videos = [
  {
    id: 1,
    user: "@skater_boy",
    likes: "124K",
    image:
      "https://images.unsplash.com/photo-1564982752979-3f7bc974d29a?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 2,
    user: "@gamer_girl",
    likes: "89K",
    image:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    user: "@street_style",
    likes: "210K",
    image:
      "https://images.unsplash.com/photo-1523398002811-999aa8e9ddaa?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 4,
    user: "@hoops_daily",
    likes: "156K",
    image:
      "https://images.unsplash.com/photo-1519861531473-9200262188bf?q=80&w=800&auto=format&fit=crop",
  },
];

export function SocialProof() {
  return (
    <section className="py-24 bg-sprite-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-5xl md:text-7xl text-white leading-none">
              THE <span className="text-sprite-green">CULTURE</span>
            </h2>
            <p className="text-xl text-white/60 mt-4 font-medium uppercase tracking-widest">
              #ObeyYourThirst
            </p>
          </div>
          <a
            href="#"
            className="inline-block text-sprite-green font-bold uppercase tracking-wider hover:text-white transition-colors"
          >
            View All &rarr;
          </a>
        </div>
      </div>

      {/* Horizontal scrolling container for mobile, grid for desktop */}
      <div className="flex overflow-x-auto hide-scrollbar snap-x snap-mandatory px-4 sm:px-6 lg:px-8 gap-4 pb-8 md:grid md:grid-cols-4 md:overflow-visible">
        {videos.map((video, i) => (
          <motion.div
            key={video.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="snap-center shrink-0 w-[280px] md:w-auto aspect-[9/16] relative rounded-2xl overflow-hidden group cursor-pointer bg-sprite-gray"
          >
            <img
              src={video.image}
              alt={`Content by ${video.user}`}
              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
            />

            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

            {/* Play button */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-16 h-16 bg-sprite-green/90 rounded-full flex items-center justify-center backdrop-blur-sm">
                <Play
                  className="w-8 h-8 text-sprite-dark ml-1"
                  fill="currentColor"
                />
              </div>
            </div>

            {/* Content info */}
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <p className="font-bold text-white mb-2">{video.user}</p>
              <div className="flex items-center gap-4 text-white/80 text-sm font-medium">
                <span className="flex items-center gap-1">
                  <Heart className="w-4 h-4" /> {video.likes}
                </span>
                <span className="flex items-center gap-1">
                  <MessageCircle className="w-4 h-4" />
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
