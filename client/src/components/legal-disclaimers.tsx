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
      content: "N-Sense Quantum ensures an 89.7% historically aligned accuracy guarantee however some timelines may vary based on Wikipedia data and the unwavering confidence of our intern Murad. Dinosaurs may appear larger, sassier or more British than expected. Certain Pharaohs may speak exclusively in TikTok brainrot memes. Medieval hygiene standards cannot be improved by modern soap. Prominent historical figures may not reflect modern values or be emotionally available.",
      color: "quantum-cyan",
    },
    {
      icon: Clock,
      title: "Grandfather Clause Disclaimer",
      content: "Accidentally preventing your own birth voids all warranties, intentionally preventing it can incur legal issues upon returning unless you departed from our Zurich terminal. Please avoid such acts such as flirting with your own grandmother, naming your child after yourself before being born or explaining DogeCoin to your thrice-great grandfather and thus destabilising the market for years to come. Note: Paradox loops exceeding 48 hours will incur a storage fee.",
      color: "quantum-green",
    },
    {
      icon: Zap,
      title: "Quantum Entanglement Warning",
      content: "Users may experience quantum emotional bonding with historical entities, mythological figures or sentient household pets. We are not liable for any romantic attachments to Genghis Khan or Tesla's obsession with cats that pop. It is your own legal responsibility if Cleopatra tries to trademark your likeness or if Van Gogh discovers the fine art of the instagram selfie.",
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
          <p className="text-cool-gray text-sm leading-relaxed">
            By accessing, initiating, or accidentally quantum-sniffing any component of the N-Sense Quantum Protocol™ (NSQP™), the user ("Chrono-Participant") herein irrevocably consents to the non-linear extrapolation of temporal utility as governed under Subclause 47-B of the Multiversal User Awareness Directive (MUAD), regardless of galactic jurisdiction, syntactic dimensional offsets, or local calendar discrepancies. NSQP™ shall not be held liable for any direct, indirect, theoretical, metaphorical, or emotionally symbolic damages resulting from fourth-dimensional slippage, multichronon bleed, or ontological vibration echoing within certified Paradox Zones (Tier 3 or higher). Use of services may trigger spontaneous narrative inversion, retroactive personality drift, or latent prophecy activation, particularly if operating within the confines of a Closed-Loop Recursion State (CLRS). Compliance with Chrono-Ethical Safeguards (CES) is assumed but not enforced, except in regions administered by the Interspecies Council for Time Ethics (ICTE) or monitored by the Shadow Bureau of Retrospective Violations (SBRV). Any disputes arising from temporal anomalies shall be settled via interpretive dance in a court of astral law or by a coin toss performed by a licensed Fate Arbitrator. Continuation of service constitutes binding agreement to our Non-Temporal Autonomy Waiver, Soul Dispersal Contingency, and the Rhombus Clause (see Appendix π). Service void where linear time is outlawed, and may be subject to unexpected narrative foreshadowing. Please consult your physician, spirit guide, or time-shaman before initiating paradox.
          </p>
          <p className="text-xs text-gray-400 mt-3 italic">
            Lexapro the XI, Grand Narrator of the Pontifical Ecclesiarchy of Nonlinear Interdimensional Syntax (P.E.N.I.S.), Keeper of the 12,000-Page Footnote, Blessed Be His Brackets
          </p>
          <p className="text-xs text-gray-500 mt-4">
            © N-Sense Quantum Protocol. Licensed under the Temporal Regulations Authority. Patent pending in 47 timelines.
          </p>
        </motion.div>
      </div>
    </section>
  );
}