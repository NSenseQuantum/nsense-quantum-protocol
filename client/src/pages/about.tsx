import { motion } from "framer-motion";
import { Users, Target, Zap, Award } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: Target,
      title: "Mission",
      description: "To revolutionize temporal exploration by providing safe, reliable, and ethically questionable time travel experiences across all known timelines.",
      color: "quantum-cyan",
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "We push the boundaries of causality itself, combining quantum mechanics with reckless ambition to deliver unprecedented chronological adventures.",
      color: "quantum-magenta",
    },
    {
      icon: Users,
      title: "Community",
      description: "We believe in connecting travelers across space-time, fostering relationships between past, present, and future versions of humanity.",
      color: "quantum-green",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for temporal perfection in every paradox, every timeline splice, and every customer's existential crisis.",
      color: "neon-purple",
    },
  ];

  const team = [
    {
      name: "Dr. Alexandra Quantum",
      role: "CEO & Chief Temporal Architect",
      description: "Former quantum researcher at CERN who accidentally discovered time travel while heating leftover pizza. Now manages paradoxes across 47 timelines.",
      color: "quantum-cyan",
    },
    {
      name: "Marcus Chronos",
      role: "CTO & Timeline Safety Officer",
      description: "Ex-NASA physicist specializing in temporal mechanics and preventing customers from becoming their own grandfather.",
      color: "quantum-magenta",
    },
    {
      name: "Sarah Paradox",
      role: "Head of Customer Experience",
      description: "Former time traveler with 10M+ temporal journeys who understands the existential dread of meeting yourself intimately.",
      color: "quantum-green",
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 particle-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            className="text-5xl md:text-7xl font-orbitron font-black mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-quantum-cyan">About</span>{" "}
            <span className="text-white">N-Sense</span>
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-cool-gray max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Pioneering the future of temporal displacement, where Quantum Computing meets Multiple Chinese Persons meets Chronological Engineering meets Artificial Guerilla Intelligence. Transforming how travellers experience history across all dimensions.
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-navy-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-orbitron font-bold mb-6 text-quantum-magenta">
                Our Story
              </h2>
              <div className="space-y-6 text-cool-gray text-lg">
                <p>
                  Born from the frustration of boring memes, linear time constraints and one-dimensional exercise, N-Sense Quantum emerged when our founder, Dr. Chad Chrono-Bro, accidentally discovered time travel whilst trying to reheat his chicken and rice in the microwave. Unknown to Chad, his microwave had become spacially entangled with a rogue particle accelerator, two cans of Monster Energy and a bluetooth-enabled smart protein shaker. Upon pressing start, spacetime folded in on itself.
                </p>
                <p>
                  2 minutes later, Chad's meal was steaming hot. And he was inexplicably standing in the middle of Ancient Greece, shirtless and holding a fork made from an undeservedly sacrificed squirrel.
                </p>
                <p>
                  Today, N-Sense Quantum operates across 47 certified timelines (and 11 uncertified ones), offering bespoke, luxury paradox packages, AI-enhanced flashbacks and the industry's only time-travel-safe pre-workout formula.
                </p>
              </div>
            </motion.div>
            <motion.div
              className="glass-morphism rounded-2xl p-8"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-r from-quantum-cyan/20 to-quantum-magenta/20 rounded-xl p-8 text-center">
                <div className="text-4xl font-orbitron font-bold text-quantum-cyan mb-2">2011</div>
                <div className="text-cool-gray mb-4">Accidentally Founded</div>
                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div>
                    <div className="text-2xl font-orbitron font-bold text-quantum-magenta">147M+</div>
                    <div className="text-sm text-cool-gray">Time Jumps Completed</div>
                  </div>
                  <div>
                    <div className="text-2xl font-orbitron font-bold text-quantum-green">20M+</div>
                    <div className="text-sm text-cool-gray">Active Time Travelers</div>
                  </div>
                  <div>
                    <div className="text-2xl font-orbitron font-bold text-neon-purple">79.7%</div>
                    <div className="text-sm text-cool-gray">Temporal Accuracy</div>
                  </div>
                  <div>
                    <div className="text-2xl font-orbitron font-bold text-neon-amber">47 (+11)</div>
                    <div className="text-sm text-cool-gray">Timeline Coverage</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
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
              <span className="text-quantum-green">Our Values</span>
            </h2>
            <p className="text-xl text-cool-gray max-w-3xl mx-auto">
              The principles that guide everything we do, from product development to customer success.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="glass-morphism rounded-2xl p-8 text-center hover:border-quantum-cyan transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <motion.div
                  className={`w-16 h-16 bg-gradient-to-r from-${value.color} to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <value.icon className="text-white text-2xl" size={28} />
                </motion.div>
                <h3 className={`text-xl font-orbitron font-bold mb-4 text-${value.color}`}>
                  {value.title}
                </h3>
                <p className="text-cool-gray text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
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
              <span className="text-quantum-magenta">Meet Our Team</span>
            </h2>
            <p className="text-xl text-cool-gray max-w-3xl mx-auto">
              The brilliant minds behind the quantum revolution in feedback analysis.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                className="glass-morphism rounded-2xl p-8 text-center hover:border-quantum-cyan transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className={`w-24 h-24 bg-gradient-to-r from-${member.color} to-purple-500 rounded-full mx-auto mb-6 flex items-center justify-center`}>
                  <span className="text-2xl font-orbitron font-bold text-white">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-xl font-orbitron font-bold text-white mb-2">{member.name}</h3>
                <div className={`text-${member.color} font-semibold mb-4`}>{member.role}</div>
                <p className="text-cool-gray text-sm">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
