import { motion } from "framer-motion";
import { Users, Target, Zap, Award } from "lucide-react";
import chadChronoBroImage from "@assets/image_1748626524709.png";
import elonTuskImage from "@assets/image_1748627294323.png";
import janetJannybotImage from "@assets/image_1748627604056.png";
import lilSemImage from "@assets/image_1748631800469.png";
import priyaRebootImage from "@assets/image_1748632536904.png";

export default function About() {
  const values = [
    {
      icon: Target,
      title: "Mission",
      description: "To revolutionize temporal exploration by delivering ethically ambiguous, financially ruining and sexually flexible time travel experiences across all possible timelines.",
      color: "quantum-cyan",
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "We feebly disrupt causality by fusing blunt-edge quantum mechanics with untested hypotheses, meme-based algorithms and the occasional underpaid overworked asian engineer. No one has stopped us yet?",
      color: "quantum-magenta",
    },
    {
      icon: Users,
      title: "Community",
      description: "We connect past, present and future humans - and sometimes non-humans - through shared experiences, technological marvel and extremely inappropriate dinner conversations with your ancestors (and/or descendents).",
      color: "quantum-green",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We aim for mostly flawless temporal delivery with every journey, ensuring clients leave each timeline with more clarity, fewer limbs and only mild orgasmic confusion. We're ISO-certified for timeline integrity (pending approval from the P.E.N.I.S. council).",
      color: "neon-purple",
    },
  ];

  const team = [
    {
      name: "Dr. Chad Chrono-Bro",
      role: "Founder & Chief Temporal Disruptor",
      description: "Accidentally invented time travel whilst reheating chicken and rice. Believes the multiverse can be conquered with clean macros and shredded delts.",
      color: "neon-purple",
      image: chadChronoBroImage,
    },
    {
      name: "Elon Tusk",
      role: "Cryptographic Time-Node Specialist",
      description: "Runs a side hustle breeding pre-historic pigs. Not allowed to be left alone with miniature rockets.. for reasons we won't mention here.",
      color: "quantum-cyan",
      image: elonTuskImage,
    },
    {
      name: "Janet 'Jannybot' 7000",
      role: "Quantum Policy Compliance Unit",
      description: "Technically a sentient spreadsheet. Once fined Lee Harvey Oswald for GDPR violations. Affectionatlely known in the staff room as 'that miserable b*tch'.",
      color: "quantum-magenta",
      image: janetJannybotImage,
    },
    {
      name: "Lil 'Sem",
      role: "Intern / Hype Consultant",
      description: "Quantum-native Gen Z humanoid fluent in TA jargon. Aspiring rap artist. 1400 years behind in child support payments.",
      color: "quantum-green",
      image: lilSemImage,
    },
    {
      name: "Priya Reboot",
      role: "Reality Restoration Manager",
      description: "Reinstalls corrupted timelines. Known as 'Rebootylicious' (colleague-assigned nickname, said colleague has a meeting with HR next Tuesday). Has personally redacted over 14,000 anachronistic TikToks from the Middle Ages.",
      color: "neon-amber",
      image: priyaRebootImage,
    },
    {
      name: "Quantum Kevin",
      role: "Director of Timeline Compliance",
      description: "Ensures all time travel operations meet P.E.N.I.S. council standards and maintains our 79.7% accuracy rating.",
      color: "quantum-cyan",
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
                  Born from the frustration of boring memes, linear time constraints and one-dimensional exercise, N-Sense Quantum emerged when our founder, Dr. Chad Chrono-Bro, accidentally discovered time travel whilst trying to reheat his chicken and rice in the microwave.
                </p>
                <p>
                  Unknown to Chad, his microwave had become spacially entangled with a rogue particle accelerator, two cans of Monster Energy and a bluetooth-enabled smart protein shaker. Upon pressing start, spacetime folded in on itself.
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
              The principles that guide us through every quantum leap, poorly judged timeline and customer meltdown. Forever guiding us to <span className="line-through">maximum profit</span> customer satisfaction.
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                <div className={`w-24 h-24 bg-gradient-to-r from-${member.color} to-purple-500 rounded-full mx-auto mb-6 flex items-center justify-center overflow-hidden`}>
                  {member.image ? (
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover rounded-full"
                    />
                  ) : (
                    <span className="text-2xl font-orbitron font-bold text-white">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  )}
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
