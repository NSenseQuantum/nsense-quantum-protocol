import { Link } from "wouter";
import { motion } from "framer-motion";
import { Github } from "lucide-react";
import { SiX } from "react-icons/si";

export function Footer() {
  const footerSections = [
    {
      title: "Temporal Services",
      links: [
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "Technology", href: "/technology" },
        { label: "Book a Trip", href: "/book-trip" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Documentation", href: "https://www.youtube.com/watch?v=SD3qXvuTX1M" },
        { label: "Help Center", href: "https://www.youtube.com/watch?v=8zEcza7azd0" },
        { label: "Privacy Policy", href: "https://www.youtube.com/watch?v=U60BEcI4AgI" },
        { label: "Terms of Service", href: "https://www.youtube.com/watch?v=ukeJG_oGv10" },
      ],
    },
  ];

  return (
    <footer className="bg-space-dark border-t border-quantum-cyan/20 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Temporal Services - Left */}
          <div className="text-center lg:text-left">
            <h3 className="text-white font-semibold mb-4">{footerSections[0].title}</h3>
            <ul className="space-y-2">
              {footerSections[0].links.map((link) => (
                <li key={link.label}>
                  <Link href={link.href}>
                    <motion.a
                      className="text-cool-gray hover:text-quantum-cyan transition-colors text-sm"
                      whileHover={{ x: 5 }}
                    >
                      {link.label}
                    </motion.a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Logo/Description - Center */}
          <div className="space-y-4 text-center">
            <motion.div
              className="flex items-center justify-center space-x-2"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-8 h-8 bg-gradient-to-r from-quantum-cyan to-quantum-magenta rounded-lg flex items-center justify-center">
                <div className="w-5 h-5 bg-white rounded-full opacity-90"></div>
              </div>
              <span className="text-xl font-orbitron font-bold text-quantum-cyan neon-text">
                N-Sense Quantum
              </span>
            </motion.div>
            <p className="text-cool-gray text-sm max-w-xs mx-auto">
              Revolutionizing temporal displacement with quantum-powered chronology for time travelers across all dimensions.
            </p>
            <div className="flex justify-center space-x-4">
              <motion.a
                href="https://x.com/NSNSEQuantum"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cool-gray hover:text-quantum-cyan transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <SiX size={20} />
              </motion.a>
              <motion.a
                href="https://www.youtube.com/watch?v=IYkpHNTF0dU"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cool-gray hover:text-quantum-green transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github size={20} />
              </motion.a>
            </div>
          </div>

          {/* Resources - Right */}
          <div className="text-center lg:text-right">
            <h3 className="text-white font-semibold mb-4">{footerSections[1].title}</h3>
            <ul className="space-y-2">
              {footerSections[1].links.map((link) => (
                <li key={link.label}>
                  <motion.a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cool-gray hover:text-quantum-cyan transition-colors text-sm"
                    whileHover={{ x: -5 }}
                  >
                    {link.label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-quantum-cyan/20 mt-8 pt-8 text-center">
          <p className="text-cool-gray text-sm">
            © 2024 N-Sense Quantum Protocol. All rights reserved across 47 timelines. Powered by quantum chronology and temporal intelligence.
          </p>
        </div>
      </div>
    </footer>
  );
}
