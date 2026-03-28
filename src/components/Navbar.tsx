import { motion } from "motion/react";
import { Menu, X, ShoppingBag } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-sprite-dark/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a
              href="#"
              className="text-3xl font-display text-sprite-green tracking-tighter italic"
            >
              SPRITE
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a
                href="#products"
                className="text-white hover:text-sprite-green transition-colors px-3 py-2 text-sm font-bold uppercase tracking-wider"
              >
                Products
              </a>
              <a
                href="#campaigns"
                className="text-white hover:text-sprite-green transition-colors px-3 py-2 text-sm font-bold uppercase tracking-wider"
              >
                Drops
              </a>
              <a
                href="#culture"
                className="text-white hover:text-sprite-green transition-colors px-3 py-2 text-sm font-bold uppercase tracking-wider"
              >
                Culture
              </a>
              <a
                href="#buy"
                className="bg-sprite-green text-sprite-dark hover:bg-white transition-colors px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider flex items-center gap-2"
              >
                <ShoppingBag className="w-4 h-4" />
                Buy Now
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-sprite-green p-2"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-sprite-dark border-b border-white/10"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#products"
              className="text-white block px-3 py-4 text-xl font-display uppercase border-b border-white/5"
            >
              Products
            </a>
            <a
              href="#campaigns"
              className="text-white block px-3 py-4 text-xl font-display uppercase border-b border-white/5"
            >
              Drops
            </a>
            <a
              href="#culture"
              className="text-white block px-3 py-4 text-xl font-display uppercase border-b border-white/5"
            >
              Culture
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
