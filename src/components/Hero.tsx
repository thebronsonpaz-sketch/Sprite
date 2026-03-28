import { motion } from "motion/react";
import { ArrowRight, MapPin } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-sprite-dark z-10" />
        {/* Placeholder for dynamic video/image background */}
        <img
          src="https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=2070&auto=format&fit=crop"
          alt="Ice and condensation"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-sprite-green/10 mix-blend-overlay" />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center md:text-left flex flex-col md:flex-row items-center">
        {/* Text Content */}
        <div className="flex-1 md:pr-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h1 className="text-[15vw] md:text-[8vw] leading-[0.85] tracking-tighter text-white mb-4 italic">
              OBEY <br />
              <span className="text-sprite-green text-shadow-neon">
                YOUR
              </span>{" "}
              <br />
              THIRST
            </h1>
            <p className="text-lg md:text-xl text-white/80 font-medium max-w-md mx-auto md:mx-0 mb-8">
              Bold, crisp, and unapologetic. The ultimate lemon-lime
              refreshment.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="#buy"
                className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-sprite-dark bg-sprite-green rounded-full overflow-hidden transition-transform hover:scale-105 active:scale-95"
              >
                <span className="absolute inset-0 w-full h-full bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                <span className="relative flex items-center gap-2 text-lg uppercase tracking-wider">
                  Buy Now{" "}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>

              <a
                href="#locations"
                className="inline-flex items-center justify-center px-8 py-4 font-bold text-white border-2 border-white/20 hover:border-white rounded-full transition-colors uppercase tracking-wider gap-2"
              >
                <MapPin className="w-5 h-5" />
                Find Near You
              </a>
            </div>
          </motion.div>
        </div>

        {/* Hero Image / Can */}
        <motion.div
          className="flex-1 mt-12 md:mt-0 relative"
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
        >
          <div className="relative w-64 h-96 md:w-96 md:h-[600px] mx-auto">
            {/* Glow effect behind can */}
            <div className="absolute inset-0 bg-sprite-green/30 blur-[100px] rounded-full" />

            {/* Placeholder for 3D Can or high-res image */}
            <img
              src="https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?q=80&w=1000&auto=format&fit=crop"
              alt="Sprite Can"
              className="w-full h-full object-contain relative z-10 drop-shadow-2xl mix-blend-screen"
              style={{ filter: "brightness(1.2) contrast(1.2)" }}
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center gap-2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <span className="text-xs font-bold uppercase tracking-widest">
          Scroll
        </span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-white/50 to-transparent" />
      </motion.div>
    </section>
  );
}
