import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export function EmailCapture() {
  return (
    <section className="py-24 bg-sprite-green relative overflow-hidden">
      {/* Decorative background text */}
      <div className="absolute -top-20 -left-10 text-[20vw] font-display text-sprite-dark/5 leading-none whitespace-nowrap pointer-events-none select-none">
        OBEY YOUR THIRST
      </div>
      <div className="absolute -bottom-20 -right-10 text-[20vw] font-display text-sprite-dark/5 leading-none whitespace-nowrap pointer-events-none select-none">
        STAY FRESH
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-7xl text-sprite-dark mb-6">
            JOIN THE <span className="text-white">LIST</span>
          </h2>
          <p className="text-xl text-sprite-dark/80 font-bold mb-10 max-w-2xl mx-auto">
            Sign up for exclusive drops, early access to new flavors, and VIP
            rewards.
          </p>

          <form
            className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="ENTER YOUR EMAIL"
              required
              className="flex-1 bg-sprite-dark text-white px-6 py-5 rounded-full font-bold uppercase tracking-wider placeholder:text-white/40 focus:outline-none focus:ring-4 focus:ring-white/30 border border-transparent"
            />
            <button
              type="submit"
              className="bg-white text-sprite-dark hover:bg-sprite-dark hover:text-sprite-green px-8 py-5 rounded-full font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
            >
              Sign Up <ArrowRight className="w-5 h-5" />
            </button>
          </form>

          <p className="text-xs text-sprite-dark/60 font-medium mt-6 uppercase tracking-widest">
            By signing up, you agree to our Terms and Privacy Policy.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
