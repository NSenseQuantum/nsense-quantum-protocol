import { Link, useLocation } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Navigation() {
  const [location] = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/technology", label: "Technology" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full z-50 glass-morphism"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/">
              <motion.div 
                className="flex items-center space-x-2 cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="w-10 h-10 bg-gradient-to-r from-quantum-cyan to-quantum-magenta rounded-lg flex items-center justify-center">
                  <div className="w-6 h-6 bg-white rounded-full opacity-90"></div>
                </div>
                <span className="text-2xl font-orbitron font-bold text-quantum-cyan">
                  N-Sense Quantum
                </span>
              </motion.div>
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href}>
                  <motion.a
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
                      location === item.href
                        ? "text-quantum-cyan"
                        : "text-light-cyan hover:text-quantum-cyan"
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.label}
                  </motion.a>
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden md:block">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="outline" className="border-quantum-cyan text-quantum-cyan hover:bg-quantum-cyan hover:text-space-dark font-semibold transition-all duration-300">
                Book a Trip
              </Button>
            </motion.div>
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-light-cyan hover:text-quantum-cyan"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 glass-morphism rounded-lg mt-2">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href}>
                  <a
                    className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${
                      location === item.href
                        ? "text-quantum-cyan bg-quantum-cyan/10"
                        : "text-light-cyan hover:text-quantum-cyan hover:bg-quantum-cyan/5"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                </Link>
              ))}
              <Button variant="outline" className="w-full mt-4 border-quantum-cyan text-quantum-cyan hover:bg-quantum-cyan hover:text-space-dark font-semibold">
                Book a Trip
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
