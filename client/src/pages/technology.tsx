import { motion } from "framer-motion";
import { Cpu, Brain, Zap, Shield, Globe, Rocket } from "lucide-react";

export default function Technology() {
  const technologies = [
    {
      icon: Cpu,
      title: "Metaphysical Overlap Optimizer and Dimensional ENGagement",
      description: "Trusted by quantum physicists, fictional time cops, and at least one viral Thai hippo.",
      features: ["AI-Slop proof algorithm safely absorbs excess wibble from your personal timeline", "Subatomic Mood Correction stabilises wormholes and prevents you calling your ex", "Prevents small space-time jitters from becoming medieval uprisings"],
      color: "quantum-cyan",
    },
    {
      icon: Brain,
      title: "Paradox Evasion & Probability Engine™",
      description: "Completely and utterly necessarily over-engineered to catch causality hiccups before they croak your timeline.",
      features: ["Causality sanitation core scrubs paradox residue from all bad (or drunken) decision trees", "Neural Ribbit-Harmony Layer keeps the AI calm by simulating peaceful swamp sounds", "Quantum Leap-Frogging Prevention ensures timeline jumps don't skip essential moments"],
      color: "quantum-magenta",
    },
    {
      icon: Zap,
      title: "Global Omnitemporal Accuracy Tracker",
      description: "Eliminates most forms of lag, cosmic (or asian) drift and all interdimensional crop-dusting.",
      features: ["Cosmically-Fresh Seals keep your historical trajectory minty and airtight", "Real-Time Paradox Processing, even if that paradox had beans for lunch", "Sub-Second Sync Layer - faster than a sneeze, smoother than a whisper, quieter than a fart in church"],
      color: "quantum-green",
    },
    {
      icon: Shield,
      title: "Zero-Emission Recovery Encryption for Butterfly-Resilient Operations",
      description: "An enterprise-grade encryption stack with zero flaws, zero leaks, and zero Grammy nominations.",
      features: ["Paradox-Proof Hash Sequencing detects inconsistencies before they drop a diss track", "The Butterfly Firewall™ repels micro decisions with macro consequences", "Legacy-Free Timestamping - forget the past, encrypt the future, ignore the discography"],
      color: "neon-purple",
    },
  ];

  const metrics = [
    { label: "Time Jump Speed", value: "10,000x leveraged", color: "quantum-cyan" },
    { label: "Historical Accuracy", value: "Not Alot", color: "quantum-magenta" },
    { label: "Timeline Coverage", value: "47(+11) Dimensions", color: "quantum-green" },
  ];

  const architecture = [
    {
      layer: "Reality Entry Node (REN)",
      description: "Tested with 800 interns. Only one got stuck in the Renaissance.",
      color: "quantum-cyan",
    },
    {
      layer: "The Clockulator",
      description: "Performs 8.6 trillion calculations per second to determine whether or not you are about to royally f*ck things up.",
      color: "quantum-magenta",
    },
    {
      layer: "Event Horizon Dropbox",
      description: "Now featuring 'rollback' mode incase your great-grandfather gets deleted.",
      color: "quantum-green",
    },
    {
      layer: "Quantum Dashboard for People with Strong Opinions",
      description: "Touch-sensitive UI with timeline sliders, paradox toggles and non-verbal snack alerts.",
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
              These numbers may or may not have been pulled out of a hat during a drunken corporate trip to the vegas sphere.
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
              <span className="text-neon-purple">Temporal Framework for Non-Explosive Travel</span>
            </h2>
            <p className="text-xl text-cool-gray max-w-3xl mx-auto">
              Spacetime's most robust framework — now with 20% more buzzwords per femtosecond.
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
                  Time is broken, and now we've broke it better. Our Quantum Temporal Stack operates on a frequency known only to former 2007 YouTube Commenters and anonymous internet trolls. Using our AI generated brain-flux overlays, we scan for historical rips, then patch them with copium-infused ZK compressed full stack algorithms.
                </p>
                <p>
                  Thanks to our FeelsBadMan processing Engine, N-Sense can simulate every (nearly) version of your personal timeline, from 'wife changing money' to 'broke & over exposed'.
                </p>
                <p>
                  We're not just disrupting the time travel industry, we're speedrunning it in all its full 1080p glory.
                </p>
              </div>
            </motion.div>
            <motion.div
              className="glass-morphism rounded-2xl p-6 text-center"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-orbitron font-bold text-quantum-magenta mb-4">
                Temporal Advantage
              </h3>
              <motion.div
                className="w-20 h-20 bg-gradient-to-r from-quantum-cyan via-quantum-magenta to-quantum-green rounded-full mx-auto mb-6 flex items-center justify-center"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Rocket className="text-white text-2xl" />
              </motion.div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-cool-gray">Time Jump Speed</span>
                  <span className="text-quantum-cyan font-bold">10,000x leveraged</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-cool-gray">Historical Accuracy</span>
                  <span className="text-quantum-magenta font-bold">Not Alot</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-cool-gray">Timeline Coverage</span>
                  <span className="text-quantum-green font-bold">47(+11) Dimensions</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
