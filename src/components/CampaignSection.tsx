import { motion } from "motion/react";
import { useState, useEffect } from "react";

export function CampaignSection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 14,
    minutes: 30,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0)
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0)
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        if (prev.days > 0)
          return {
            ...prev,
            days: prev.days - 1,
            hours: 23,
            minutes: 59,
            seconds: 59,
          };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="campaigns"
      className="py-24 bg-sprite-dark relative overflow-hidden border-y border-sprite-green/20"
    >
      {/* Glitch Background */}
      <div className="absolute inset-0 opacity-20 mix-blend-screen pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center filter grayscale contrast-150" />
        <div className="absolute inset-0 bg-sprite-green mix-blend-multiply" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 md:order-1"
          >
            <span className="inline-block bg-sprite-green text-sprite-dark font-bold uppercase tracking-widest px-4 py-1 rounded-full text-sm mb-6">
              Limited Drop
            </span>
            <h2 className="text-5xl md:text-7xl text-white mb-6 glitch-hover">
              SPRITE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sprite-green to-white">
                X CREATORS
              </span>
            </h2>
            <p className="text-xl text-white/80 font-medium mb-8 max-w-md">
              Exclusive merch collaboration. Available only for a limited time.
              Don't miss out.
            </p>

            {/* Countdown */}
            <div className="flex gap-4 mb-10">
              {Object.entries(timeLeft).map(([unit, value]) => (
                <div key={unit} className="flex flex-col items-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-sprite-gray border border-sprite-green/30 rounded-xl flex items-center justify-center text-3xl md:text-4xl font-display text-sprite-green box-shadow-neon">
                    {value.toString().padStart(2, "0")}
                  </div>
                  <span className="text-xs uppercase tracking-widest text-white/60 mt-2 font-bold">
                    {unit}
                  </span>
                </div>
              ))}
            </div>

            <button className="w-full md:w-auto bg-white text-sprite-dark hover:bg-sprite-green font-bold uppercase tracking-wider px-10 py-5 rounded-full text-lg transition-colors shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(0,255,127,0.6)]">
              Get It Before It's Gone
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="order-1 md:order-2 relative"
          >
            <div className="aspect-square rounded-full bg-sprite-green/10 absolute inset-0 blur-3xl" />
            <img
              src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1000&auto=format&fit=crop"
              alt="Limited Drop Merch"
              className="relative z-10 w-full h-auto rounded-2xl border border-white/10 shadow-2xl"
              style={{ filter: "contrast(1.1) saturate(1.2)" }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
