import { motion } from "framer-motion";
import { AlertTriangle, Scale, Clock, Zap } from "lucide-react";

export function LegalDisclaimers() {
  const disclaimers = [
    {
      icon: AlertTriangle,
      title: "Temporal Liability Waiver",
      content: "By initiating a chrono-departure with N-Sense Quantum, the user (\"You\") agrees to absolve all branches, subsidiaries, and shadow clones of N-Sense of any responsibility for: Causality disruptions, recursive anomalies, accidental necromancy and existential echo syndrome. Side effects may include involuntary Latin fluency, sudden transformation into your own evil twin, mild Spongebob based hallucinations and the occasional permanent bout of schizophrenic autism.",
      color: "quantum-magenta",
    },
    {
      icon: Scale,
      title: "Historical Accuracy Notice",
      content: "While we strive for 99.7% historical accuracy, some timelines may vary. Dinosaurs may appear larger than expected. Medieval hygiene standards cannot be improved by modern soap.",
      color: "quantum-cyan",
    },
    {
      icon: Clock,
      title: "Grandfather Clause Disclaimer",
      content: "Accidentally preventing your own birth voids all warranties. Please refrain from making significant changes to your family tree. We are not responsible for paradox loops lasting longer than 72 hours.",
      color: "quantum-green",
    },
    {
      icon: Zap,
      title: "Quantum Entanglement Warning",
      content: "Prolonged exposure to temporal fields may result in quantum entanglement with historical figures. We are not liable for romantic attachments to Julius Caesar or Tesla's obsession with pigeons.",
      color: "neon-amber",
    },
  ];

  return (
    <section className="py-20 bg-space-dark/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6">
            <span className="text-red-400">Legal</span> Disclaimers
          </h2>
          <p className="text-xl text-cool-gray max-w-3xl mx-auto">
            Important notices for the temporally bi-curious and/or legally vulnerable.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {disclaimers.map((disclaimer, index) => (
            <motion.div
              key={disclaimer.title}
              className="glass-morphism rounded-xl p-6 border border-red-500/20 hover:border-red-500/40 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-start space-x-4">
                <div className={`w-12 h-12 bg-${disclaimer.color}/20 border border-${disclaimer.color}/30 rounded-lg flex items-center justify-center`}>
                  <disclaimer.icon className={`text-${disclaimer.color}`} size={20} />
                </div>
                <div className="flex-1">
                  <h3 className={`text-lg font-orbitron font-bold text-${disclaimer.color} mb-3`}>
                    {disclaimer.title}
                  </h3>
                  <p className="text-cool-gray text-sm leading-relaxed">
                    {disclaimer.content}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Final Warning */}
        <motion.div
          className="mt-12 p-6 bg-red-500/10 border border-red-500/30 rounded-xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <AlertTriangle className="text-red-400 mx-auto mb-4" size={32} />
          <h3 className="text-xl font-orbitron font-bold text-red-400 mb-2">
            Final Warning
          </h3>
          <p className="text-cool-gray">
            By using N-Sense Quantum Protocol services, you acknowledge that time travel is inherently dangerous and that causality is more of a guideline than a rule. Terms and conditions subject to change across all timelines.
          </p>
          <p className="text-xs text-gray-500 mt-4">
            © N-Sense Quantum Protocol. Licensed under the Temporal Regulations Authority. Patent pending in 47 timelines.
          </p>
        </motion.div>
      </div>
    </section>
  );
}