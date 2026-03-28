import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { ShoppingBag } from "lucide-react";
import { useState } from "react";

export function StickyCTA() {
  const { scrollY } = useScroll();
  const [isVisible, setIsVisible] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    // Show after scrolling past the hero section (approx 500px)
    if (latest > 500) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  });

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{
        y: isVisible ? 0 : 100,
        opacity: isVisible ? 1 : 0,
      }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className="fixed bottom-6 left-0 right-0 z-50 px-4 md:hidden pointer-events-none"
    >
      <a
        href="#buy"
        className="pointer-events-auto w-full bg-sprite-green text-sprite-dark font-bold uppercase tracking-wider py-4 rounded-full flex items-center justify-center gap-2 shadow-[0_10px_30px_rgba(0,255,127,0.3)] active:scale-95 transition-transform"
      >
        <ShoppingBag className="w-5 h-5" />
        Buy Now
      </a>
    </motion.div>
  );
}
