import { motion } from "framer-motion";
import { Brain, Heart, Palette, ServerCog, BarChart3, Plug } from "lucide-react";

export function Features() {
  const features = [
    {
      icon: Brain,
      title: "AI Sentiment Analysis",
      description: "Advanced machine learning algorithms analyze feedback sentiment with 99.7% accuracy, categorizing emotions and intent automatically.",
      color: "quantum-cyan",
      gradient: "from-quantum-cyan to-blue-500",
      items: [
        "Multi-platform integration",
        "Real-time data sync",
        "Smart duplicate detection",
      ],
    },
    {
      icon: Heart,
      title: "Real-time Dashboard",
      description: "Monitor feedback streams in real-time with interactive visualizations and customizable metrics that update instantly.",
      color: "quantum-magenta",
      gradient: "from-quantum-magenta to-purple-500",
      items: [
        "Emotion detection",
        "Context awareness",
        "Multilingual support",
      ],
    },
    {
      icon: Palette,
      title: "Brand Customization",
      description: "Customize feedback collection templates with your brand colors, logos, and messaging to maintain consistent brand experience.",
      color: "quantum-green",
      gradient: "from-quantum-green to-emerald-500",
      items: [
        "Custom templates",
        "Brand color schemes",
        "White-label options",
      ],
    },
    {
      icon: ServerCog,
      title: "Smart Automation",
      description: "Set up intelligent workflows that automatically categorize, respond, and escalate feedback based on your custom rules.",
      color: "neon-purple",
      gradient: "from-neon-purple to-violet-500",
      items: [
        "Auto-categorization",
        "Smart responses",
        "Priority escalation",
      ],
    },
    {
      icon: BarChart3,
      title: "Quantum Analytics",
      description: "Real-time insights and predictive analytics help you understand trends and make data-driven content decisions.",
      color: "neon-amber",
      gradient: "from-neon-amber to-orange-500",
      items: [
        "Real-time metrics",
        "Predictive insights",
        "Custom reports",
      ],
    },
    {
      icon: Plug,
      title: "Integration Hub",
      description: "Connect with 100+ platforms including YouTube, Instagram, TikTok, Twitter, Discord, and all major content platforms.",
      color: "blue-400",
      gradient: "from-blue-400 to-indigo-500",
      items: [
        "100+ integrations",
        "API access",
        "Webhook support",
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
            <span className="text-quantum-cyan neon-text">Quantum Features</span>
          </h2>
          <p className="text-xl text-cool-gray max-w-3xl mx-auto">
            Experience the next generation of feedback analysis with AI-powered sentiment detection and quantum-speed processing.
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
