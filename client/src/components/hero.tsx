import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Play, Rocket, ChevronDown, X } from "lucide-react";
import { QuantumVisualization } from "@/components/quantum-visualization";
import { useState } from "react";
import introVideo from "../../../attached_assets/NSnse Trailer.mp4";

export function Hero() {
  const [showVideo, setShowVideo] = useState(false);
  
  const stats = [
    { value: "100B+", label: "Years Travelled" },
    { value: "69%", label: "Survival Rate" },
    { value: "73+", label: "Journeys Available" },
    { value: "4.20+", label: "Stars on TripAdvisor" },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative particle-bg pt-20">
      {/* Quantum Visualizations */}
      <motion.div
        className="absolute top-20 left-10 opacity-60 pointer-events-none"
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <QuantumVisualization variant="orbit" size="small" />
      </motion.div>
      
      <motion.div
        className="absolute top-40 right-20 opacity-50 pointer-events-none"
        animate={{
          y: [0, -15, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      >
        <QuantumVisualization variant="cube" size="small" />
      </motion.div>
      
      <motion.div
        className="absolute bottom-40 left-20 opacity-40 pointer-events-none"
        animate={{
          y: [0, -25, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      >
        <QuantumVisualization variant="sphere" size="small" />
      </motion.div>

      {/* Central large quantum visualization */}
      <motion.div
        className="absolute top-1/2 right-10 transform -translate-y-1/2 opacity-30 pointer-events-none"
        animate={{
          y: [0, -30, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <QuantumVisualization variant="helix" size="large" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
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
            <span className="text-quantum-magenta">Decapitulation</span>
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
          <Button
            variant="outline"
            className="border-2 border-quantum-magenta text-quantum-magenta px-8 py-4 text-lg font-bold hover:bg-quantum-magenta hover:text-space-dark transition-all duration-300"
            onClick={() => setShowVideo(true)}
          >
            <Play className="mr-2" size={20} />
            Introductory Video
          </Button>
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

      {/* Video Modal */}
      {showVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
          <motion.div
            className="relative w-full max-w-4xl mx-auto"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            {/* Close button */}
            <button
              onClick={() => setShowVideo(false)}
              className="absolute -top-12 right-0 text-white hover:text-quantum-cyan transition-colors z-10"
            >
              <X size={32} />
            </button>
            
            {/* Video container */}
            <div className="relative bg-space-dark rounded-lg overflow-hidden border border-quantum-cyan/30">
              <video
                src={introVideo}
                controls
                autoPlay
                className="w-full h-auto max-h-[80vh]"
                onEnded={() => setShowVideo(false)}
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}
