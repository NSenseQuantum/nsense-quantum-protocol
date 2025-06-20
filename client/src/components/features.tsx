import { motion } from "framer-motion";
import { Brain, Book, Type, ServerCog, Building, Plug } from "lucide-react";

export function Features() {
  const features = [
    {
      icon: Brain,
      title: "Vast MCP Servers",
      description: "Using our expansive teams of Multiple Chinese Persons, back-end integrated with Federated Learning, we can pinpoint your arrival time within +/- 18s of the requested date.",
      color: "quantum-cyan",
      gradient: "from-quantum-cyan to-blue-500",
      items: [
        "Highly educated asians",
        "Quantum braincell synergy",
        "Optimised via Heisenberg grade Methamphetamine",
      ],
    },
    {
      icon: Book,
      title: "Decentralized Time Ledger",
      description: "Immutably records all micro-events across all times, ensuring that no version of history can be tampered with.",
      color: "quantum-magenta",
      gradient: "from-quantum-magenta to-purple-500",
      items: [
        "Proof-of-Past™",
        "Nonce-based Nostalgia Validation",
        "Non-Fungible Timeline compatible",
      ],
    },
    {
      icon: Type,
      title: "Qubit-Powered NLP",
      description: "Harness the illegitimate state of qubits to understand, generate and emotionally disassociate with all languages across all realitittys.",
      color: "quantum-green",
      gradient: "from-quantum-green to-emerald-500",
      items: [
        "Predictive Poetry",
        "Paradox-Safe Auto Translation",
        "Sometimes makes you larp in binary",
      ],
    },
    {
      icon: ServerCog,
      title: "Warp-Speed LLM",
      description: "Our patented Loose Latency Memories™ allows for full immersion into the timeline due to spatially replicated individual personalities using a complex mixture of interpretability overlays and adamantite.",
      color: "neon-purple",
      gradient: "from-neon-purple to-violet-500",
      items: [
        "Constant RLHF adaptation constantly improves the journey",
        "Some Cavewomen may act like Trump",
        "Side effects may include Schizophrenia and plausible deniability",
      ],
    },
    {
      icon: Building,
      title: "Robust Architecture",
      description: "Built-to-last framework capable of load-bearing across all timelines and eliptical occurences. Inspired by ancient and future monolithic organic adaptogens.",
      color: "neon-amber",
      gradient: "from-neon-amber to-orange-500",
      items: [
        "Load-bearing Metaphors™",
        "Built in stone, Rust decays",
        "Quantum Bunkers fully kitted with algorithmic optimised decapitation systems",
      ],
    },
    {
      icon: Plug,
      title: "Round the Clock API",
      description: "Our Atmospheric Polluton Inversion centres ensure that your vacation is guilt free. Using state of the art digital organics we protect the universe from any contamination you may cause.",
      color: "blue-400",
      gradient: "from-blue-400 to-indigo-500",
      items: [
        "All payments processed by ethically sourced bacteria",
        "Carbon footprint roll-backs",
        "Fully compliant with ISO-42069",
      ],
    },
  ];

  return (
    <section id="features" className="py-20 bg-navy-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6">
            <span className="text-quantum-cyan">Time Travel as a Service (TTaaS)</span>
          </h2>
          <p className="text-xl text-cool-gray max-w-3xl mx-auto">
            Experience the wonders of Time Travel with our cutting edge technology and bespoke luxury packages
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="glass-morphism rounded-2xl p-8 scan-line hover:border-quantum-cyan transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <motion.div
                className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center mb-6`}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <feature.icon className="text-2xl text-white" size={28} />
              </motion.div>
              <h3 className={`text-2xl font-orbitron font-bold mb-4 text-${feature.color}`}>
                {feature.title}
              </h3>
              <p className="text-cool-gray mb-6">{feature.description}</p>
              <div className="space-y-2">
                {feature.items.map((item, itemIndex) => (
                  <motion.div
                    key={item}
                    className="flex items-center text-sm text-gray-400"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 + itemIndex * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-2 h-2 bg-quantum-green rounded-full mr-3"></div>
                    {item}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
