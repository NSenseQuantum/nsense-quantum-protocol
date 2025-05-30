import { motion } from "framer-motion";
import { Users, Target, Zap, Award, X } from "lucide-react";
import { useState } from "react";
import chadChronoBroImage from "@assets/image_1748626524709.png";
import elonTuskImage from "@assets/image_1748627294323.png";
import janetJannybotImage from "@assets/image_1748627604056.png";
import lilSemImage from "@assets/image_1748631800469.png";
import priyaRebootImage from "@assets/image_1748632536904.png";
import tinaTockTockImage from "@assets/image_1748633386407.png";

export default function About() {
  const [selectedImage, setSelectedImage] = useState<{src: string, name: string} | null>(null);
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
      name: "Tina TockTock",
      role: "Chief Chrono-Operational Architect",
      description: "Architected the Temporal Layered Deployment Framework, a system so stable it's only crashed three entire realities. The only known person to successfully debug the social media bug of the 2020s. \"Time is just a product roadmap with fewer deliverables and more existential dread\"",
      color: "quantum-cyan",
      image: tinaTockTockImage,
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
                className="glass-morphism rounded-2xl p-8 text-center hover:border-quantum-cyan transition-all duration-500 group cursor-pointer overflow-hidden relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.08,
                  rotateY: 5,
                  rotateX: 5,
                  z: 50
                }}
                whileTap={{ scale: 0.98 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <div 
                  className={`w-24 h-24 bg-gradient-to-r from-${member.color} to-purple-500 rounded-full mx-auto mb-6 flex items-center justify-center overflow-hidden group-hover:shadow-2xl group-hover:shadow-${member.color}/30 transition-all duration-500 group-hover:scale-110 ${member.image ? 'cursor-pointer' : ''}`}
                  onClick={(e) => {
                    if (member.image) {
                      e.stopPropagation();
                      setSelectedImage({src: member.image, name: member.name});
                    }
                  }}
                >
                  {member.image ? (
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover rounded-full group-hover:brightness-110 transition-all duration-500"
                    />
                  ) : (
                    <span className="text-2xl font-orbitron font-bold text-white group-hover:scale-125 transition-transform duration-300">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-orbitron font-bold text-white mb-2 group-hover:text-quantum-cyan transition-colors duration-300">{member.name}</h3>
                <div className={`text-${member.color} font-semibold mb-4 group-hover:brightness-125 transition-all duration-300`}>{member.role}</div>
                <p className="text-cool-gray text-sm group-hover:text-white transition-colors duration-300">{member.description}</p>
                
                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-quantum-cyan/20 to-quantum-magenta/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                
                {/* Particle effect on hover */}
                <div className="absolute top-2 right-2 w-2 h-2 bg-quantum-cyan rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-300"></div>
                <div className="absolute bottom-2 left-2 w-1 h-1 bg-neon-purple rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-500"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            className="relative max-w-2xl max-h-[90vh] p-4"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-2 -right-2 z-10 bg-quantum-cyan text-black rounded-full p-2 hover:bg-white transition-colors duration-200"
            >
              <X size={20} />
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.name}
              className="w-full h-full object-contain rounded-lg shadow-2xl"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 rounded-b-lg">
              <h3 className="text-white font-orbitron font-bold text-xl">{selectedImage.name}</h3>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
