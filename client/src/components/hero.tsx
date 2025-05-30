import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Play, Rocket, ChevronDown } from "lucide-react";

export function Hero() {
  const stats = [
    { value: "100B+", label: "Years Travelled" },
    { value: "69%", label: "Survival Rate" },
    { value: "73+", label: "Journeys Available" },
    { value: "4.20+", label: "Stars on TripAdvisor" },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative particle-bg pt-20">
      {/* Floating elements */}
      <motion.div
        className="absolute top-20 left-10 w-4 h-4 bg-quantum-cyan rounded-full opacity-60"
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-40 right-20 w-6 h-6 bg-quantum-magenta rounded-full opacity-40"
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
      <motion.div
        className="absolute bottom-40 left-20 w-3 h-3 bg-quantum-green rounded-full opacity-50"
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <motion.h1
            className="text-5xl md:text-7xl font-orbitron font-black mb-6 leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-quantum-cyan">Quantum-Powered</span>
            <br />
            <span className="text-white">Temporal</span>
            <br />
            <span className="text-quantum-magenta">Deconfluctuation</span>
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-cool-gray max-w-3xl mx-auto mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Ever wanted to go to Ancient Rome? See the dinosaurs? Visit a futuristic colony on Mars? 
            Our vast teams of MCPs are here to assist you on your temporal vacation, maybe you'll end up in a (quantum) entanglement ;)
          </motion.p>
        </motion.div>

        <motion.div
          className="flex justify-center items-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="outline"
              className="border-2 border-quantum-magenta text-quantum-magenta px-8 py-4 text-lg font-bold hover:bg-quantum-magenta hover:text-space-dark transition-all duration-300"
            >
              <Play className="mr-2" size={20} />
              Introductory Video
            </Button>
          </motion.div>
        </motion.div>

        {/* Hero Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              whileHover={{ scale: 1.1 }}
            >
              <div className="text-3xl font-orbitron font-bold text-quantum-cyan mb-2">
                {stat.value}
              </div>
              <div className="text-cool-gray text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <ChevronDown className="text-quantum-cyan text-2xl" />
      </motion.div>
    </section>
  );
}
