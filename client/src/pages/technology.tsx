import { motion } from "framer-motion";
import { Cpu, Brain, Zap, Shield, Globe, Rocket } from "lucide-react";

export default function Technology() {
  const technologies = [
    {
      icon: Cpu,
      title: "Quantum Temporal Engine",
      description: "Harness quantum superposition for parallel timeline navigation across millions of temporal coordinates simultaneously.",
      features: ["Multiverse computing", "Chronon entanglement", "10,000x faster time travel"],
      color: "quantum-cyan",
    },
    {
      icon: Brain,
      title: "Paradox Prevention AI",
      description: "Advanced neural networks trained on temporal mechanics to prevent customers from accidentally erasing themselves from existence.",
      features: ["Grandfather Clause detection", "Timeline stability monitoring", "Existential crisis support"],
      color: "quantum-magenta",
    },
    {
      icon: Zap,
      title: "Distributed Chronology",
      description: "Multidimensional time network ensures sub-nanosecond temporal accuracy regardless of which century you're visiting.",
      features: ["47 timeline nodes", "Real-time paradox processing", "99.89% temporal integrity"],
      color: "quantum-green",
    },
    {
      icon: Shield,
      title: "Temporal Encryption",
      description: "Immutable timeline storage with causality-resistant encryption for maximum historical integrity and minimal butterfly effects.",
      features: ["Paradox-proof algorithms", "End-to-end chronological encryption", "Zero-knowledge temporal architecture"],
      color: "neon-purple",
    },
  ];

  const metrics = [
    { label: "Temporal Jump Speed", value: "0.3s", color: "quantum-cyan" },
    { label: "Timeline Accuracy", value: "89.7%", color: "quantum-magenta" },
    { label: "Daily Time Travels", value: "1M+", color: "quantum-green" },
    { label: "Paradox Prevention", value: "99.2%", color: "neon-purple" },
  ];

  const architecture = [
    {
      layer: "Temporal Interface",
      description: "Quantum-based chronology dashboard with real-time timeline visualizations",
      color: "quantum-cyan",
    },
    {
      layer: "Paradox Gateway",
      description: "Quantum-secured temporal portals and chronological endpoints",
      color: "quantum-magenta",
    },
    {
      layer: "Time Processing Engine",
      description: "Quantum-classical hybrid computing for temporal displacement calculations",
      color: "quantum-green",
    },
    {
      layer: "Timeline Storage",
      description: "Quantum-encrypted distributed temporal database with causality compliance",
      color: "neon-purple",
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 particle-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            className="text-3xl md:text-5xl lg:text-6xl font-orbitron font-black mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-quantum-cyan">Real-time Entangled</span>{" "}
            <span className="text-white">Temporal Architecture</span>{" "}
            <span className="text-quantum-magenta">for Reality Distortion</span>{" "}
            <span className="text-white">and Interdimensional Operations</span>
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-cool-gray max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Engineered by visionaries, mad scientists, and Steve who once licked a particle accelerator.
          </motion.p>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-navy-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6">
              <span className="text-quantum-magenta">Core Technologies</span>
            </h2>
            <p className="text-xl text-cool-gray max-w-3xl mx-auto">
              Built by top scientists and ethically ambiguous backroom hallucinations.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.title}
                className="glass-morphism rounded-2xl p-8 hover:border-quantum-cyan transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <motion.div
                  className={`w-16 h-16 bg-gradient-to-r from-${tech.color} to-blue-500 rounded-2xl flex items-center justify-center mb-6`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <tech.icon className="text-white text-2xl" size={28} />
                </motion.div>
                <h3 className={`text-2xl font-orbitron font-bold mb-4 text-${tech.color}`}>
                  {tech.title}
                </h3>
                <p className="text-cool-gray mb-6">{tech.description}</p>
                <div className="space-y-2">
                  {tech.features.map((feature, featureIndex) => (
                    <motion.div
                      key={feature}
                      className="flex items-center text-sm text-gray-400"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.2 + featureIndex * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-2 h-2 bg-quantum-green rounded-full mr-3"></div>
                      {feature}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6">
              <span className="text-quantum-green">Performance Metrics</span>
            </h2>
            <p className="text-xl text-cool-gray max-w-3xl mx-auto">
              Quantum-powered performance that redefines what's possible in real-time temporal navigation.
            </p>
          </motion.div>

          <div className="holographic-border rounded-3xl p-1">
            <div className="bg-navy-dark rounded-3xl p-12">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {metrics.map((metric, index) => (
                  <motion.div
                    key={metric.label}
                    className="text-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <div className={`text-4xl font-orbitron font-bold text-${metric.color} mb-2`}>
                      {metric.value}
                    </div>
                    <div className="text-cool-gray">{metric.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture Diagram */}
      <section className="py-20 bg-navy-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6">
              <span className="text-neon-purple">System Architecture</span>
            </h2>
            <p className="text-xl text-cool-gray max-w-3xl mx-auto">
              A quantum-temporal hybrid architecture designed for chronological stability and paradox prevention.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {architecture.map((layer, index) => (
                <motion.div
                  key={layer.layer}
                  className="glass-morphism rounded-xl p-6 hover:border-quantum-cyan transition-all duration-300"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center space-x-6">
                    <div className={`w-4 h-4 bg-${layer.color} rounded-full flex-shrink-0`}></div>
                    <div className="flex-1">
                      <h3 className={`text-xl font-orbitron font-bold text-${layer.color} mb-2`}>
                        {layer.layer}
                      </h3>
                      <p className="text-cool-gray">{layer.description}</p>
                    </div>
                    <div className="text-2xl font-orbitron font-bold text-cool-gray">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Innovation Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-orbitron font-bold mb-6 text-quantum-cyan">
                The Future is Quantum
              </h2>
              <div className="space-y-6 text-cool-gray text-lg">
                <p>
                  Our quantum temporal approach doesn't just move you through time faster—it reveals
                  historical patterns and possibilities that classical physics simply cannot access.
                </p>
                <p>
                  By leveraging quantum superposition and chronological entanglement, we can process multiple
                  timeline scenarios simultaneously, giving you a multidimensional view of past,
                  present, and potential futures.
                </p>
                <p>
                  This isn't just an incremental improvement—it's a fundamental shift in how
                  time travel works, opening up temporal possibilities that were previously
                  impossible and occasionally illegal.
                </p>
              </div>
            </motion.div>
            <motion.div
              className="glass-morphism rounded-2xl p-8 text-center"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="w-32 h-32 bg-gradient-to-r from-quantum-cyan via-quantum-magenta to-quantum-green rounded-full mx-auto mb-6 flex items-center justify-center"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Rocket className="text-white text-4xl" />
              </motion.div>
              <h3 className="text-2xl font-orbitron font-bold text-quantum-magenta mb-4">
                Temporal Advantage
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-cool-gray">Time Jump Speed</span>
                  <span className="text-quantum-cyan font-bold">10,000x Faster</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-cool-gray">Historical Accuracy</span>
                  <span className="text-quantum-magenta font-bold">89.7% Verified</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-cool-gray">Timeline Coverage</span>
                  <span className="text-quantum-green font-bold">47 Dimensions</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
