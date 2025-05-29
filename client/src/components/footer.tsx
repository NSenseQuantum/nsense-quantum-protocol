import { Link } from "wouter";
import { motion } from "framer-motion";
import { Twitter, Linkedin, Github } from "lucide-react";

export function Footer() {
  const footerSections = [
    {
      title: "Product",
      links: [
        { label: "Features", href: "/#features" },
        { label: "Technology", href: "/technology" },
        { label: "Pricing", href: "/#pricing" },
        { label: "API", href: "/api" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About", href: "/about" },
        { label: "Blog", href: "/blog" },
        { label: "Careers", href: "/careers" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Documentation", href: "/docs" },
        { label: "Help Center", href: "/help" },
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Terms of Service", href: "/terms" },
      ],
    },
  ];

  return (
    <footer className="bg-space-dark border-t border-quantum-cyan/20 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <motion.div
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-8 h-8 bg-gradient-to-r from-quantum-cyan to-quantum-magenta rounded-lg flex items-center justify-center">
                <div className="w-5 h-5 bg-white rounded-full opacity-90"></div>
              </div>
              <span className="text-xl font-orbitron font-bold text-quantum-cyan neon-text">
                N-Sense Quantum
              </span>
            </motion.div>
            <p className="text-cool-gray text-sm">
              Revolutionizing feedback analysis with quantum-powered AI for content creators worldwide.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="#"
                className="text-cool-gray hover:text-quantum-cyan transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Twitter size={20} />
              </motion.a>
              <motion.a
                href="#"
                className="text-cool-gray hover:text-quantum-magenta transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin size={20} />
              </motion.a>
              <motion.a
                href="#"
                className="text-cool-gray hover:text-quantum-green transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github size={20} />
              </motion.a>
            </div>
          </div>

          {footerSections.map((section, index) => (
            <div key={section.title}>
              <h3 className="text-white font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
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
          ))}
        </div>

        <div className="border-t border-quantum-cyan/20 mt-8 pt-8 text-center">
          <p className="text-cool-gray text-sm">
            © 2024 N-Sense Quantum Protocol. All rights reserved. Powered by quantum computing and artificial intelligence.
          </p>
        </div>
      </div>
    </footer>
  );
}
