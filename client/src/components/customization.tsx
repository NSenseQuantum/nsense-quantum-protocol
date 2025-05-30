import { motion } from "framer-motion";
import { Coffee, AlertTriangle, Users, Clock, Zap, Search, Shield } from "lucide-react";

export function Customization() {
  const safetyProtocols = [
    {
      icon: Coffee,
      title: "Quantum Etiquette",
      description: "To avoid extinction level events, all correct timeline etiquette and procedures must be adhered to at all times.",
      features: [
        "Avoid starting cults, it's not worth the attention",
        "No, Jesus won't come on your podcast",
        "Cavemen do not make good DAO members",
      ],
      color: "quantum-cyan",
    },
    {
      icon: AlertTriangle,
      title: "Paradox Insurance",
      description: "Robust, immutable coverage for all quantum-adjacent causal anomalies and legacy-thread destabilizations.",
      features: [
        "Grandfather Loop Resolution via Predictive Lineage Forecasting",
        "Quantum-agnostic Identity Anchoring with fallback soul-states",
        "Selfhood continuity via Biometric Soul-Mirroring™",
      ],
      color: "quantum-magenta",
    },
    {
      icon: Users,
      title: "Historical Contamination Prevention",
      description: "Protecting the timeline from unsolicited memes, rogue microbes, and 21st-century fashion choices since the dawn of now.",
      features: [
        "BioEcho Suppression Layer: ensures your DNA doesn't flirt with Neanderthals again",
        "Chrono-Safe Garment Enforcement: No Crocs before 2002",
        "6ix9ine Acoustic & Visual Filter™: Automatically redacts all mentions of face tattoos, rainbow grills, and lyrical references to snitch culture to prevent the psychological collapse of pre-Enlightenment societies. (Note: filter also triggers in the presence of mumble rap within 500-year-sensitive zones.)",
      ],
      color: "quantum-green",
    },
  ];

  const equipmentSpecs = [
    {
      icon: Clock,
      name: "Temporal Anchor Pro",
      specs: "Quantum engaged return beacon with 77% accuracy, also functions as an awkward small talk terminator",
    },
    {
      icon: Zap,
      name: "NLP Headset v12.1.1",
      specs: "Real-time language processing across 47,000 dialects, 3 extinct grunts and one slightly telepathic emoji-based language.",
    },
    {
      icon: Search,
      name: "Identity Modifier",
      specs: "Now featuring Adaptive Beard Simulation™ and Hat Protocols for those times when you absolutely must be, wif hat.",
    },
  ];

  return (
    <section id="customization" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6 text-white">
            Temporal Integrity and Travel Standards
          </h2>
          <p className="text-xl text-cool-gray max-w-3xl mx-auto">
            Please read carefully. Ignorance of these rules may result in time paradoxes, spontaneous moustache growth or an uncancellable marriage to your cousin.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Safety Protocols */}
          <div className="space-y-8">
            {safetyProtocols.map((protocol, index) => (
              <motion.div
                key={protocol.title}
                className="glass-morphism rounded-xl p-6"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className={`text-xl font-orbitron font-bold text-${protocol.color} mb-4 flex items-center`}>
                  <protocol.icon className="mr-3" />
                  {protocol.title}
                </h3>
                <p className="text-cool-gray mb-4">{protocol.description}</p>
                <div className="space-y-2">
                  {protocol.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start">
                      <div className={`w-2 h-2 bg-${protocol.color} rounded-full mr-3 mt-2 flex-shrink-0`}></div>
                      <span className="text-sm text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Equipment Showcase */}
          <div className="space-y-6">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-orbitron font-bold text-white mb-2">Quantum Equipment</h3>
              <p className="text-cool-gray">Every journey comes with industry leading, relatively safe and borderline sentient gear - calibrated within the most recent century.</p>
            </motion.div>

            {/* Equipment Showcase Window */}
            <motion.div
              className="holographic-border rounded-xl p-1"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-navy-dark rounded-xl p-8">
                <div className="space-y-6">
                  {equipmentSpecs.map((equipment, index) => (
                    <motion.div
                      key={equipment.name}
                      className="bg-space-dark/50 rounded-lg p-4 border border-gray-600 hover:border-quantum-cyan transition-all duration-300"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-quantum-cyan to-quantum-magenta rounded-lg flex items-center justify-center">
                          <equipment.icon className="text-white" size={20} />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-orbitron font-bold text-white mb-1">
                            {equipment.name}
                          </h4>
                          <p className="text-cool-gray text-sm">{equipment.specs}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Safety Certification */}
                <motion.div
                  className="mt-8 p-4 bg-quantum-green/10 border border-quantum-green/30 rounded-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center space-x-3">
                    <Shield className="text-quantum-green" size={24} />
                    <div>
                      <h4 className="text-quantum-green font-orbitron font-bold">Certified Safe</h4>
                      <p className="text-sm text-cool-gray">
                        Approved by the Sanctioned Office of Linearity, the Anachronism Neutralization Authority and Gake from accounts who's been to 1347 and back (twice).
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}