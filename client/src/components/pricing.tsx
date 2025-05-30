import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Pricing() {
  const plans = [
    {
      name: "Day Tripper",
      price: "$420",
      description: "Perfect for temporal beginners",
      features: [
        { name: "Basic paradox insurance", included: true },
        { name: "2 timeline destinations", included: true },
        { name: "Quantum translator (47 languages)", included: true },
        { name: "Emergency return beacon", included: true },
        { name: "Historical contamination coverage", included: false },
        { name: "Premium timeline access", included: false },
      ],
      limit: "Up to 24 hours per trip",
      popular: false,
      borderColor: "border-quantum-cyan",
      buttonVariant: "outline" as const,
    },
    {
      name: "Historical Explorer",
      price: "$1,337",
      description: "For serious time travelers",
      features: [
        { name: "Advanced paradox insurance", included: true },
        { name: "10 timeline destinations", included: true },
        { name: "Neural translator (all dialects)", included: true },
        { name: "Identity modification suite", included: true },
        { name: "Historical contamination coverage", included: true },
        { name: "Priority temporal support", included: true },
      ],
      limit: "Up to 30 days per trip",
      popular: true,
      borderColor: "border-quantum-magenta",
      buttonVariant: "default" as const,
    },
    {
      name: "Epoch Adventurer",
      price: "$6,969",
      description: "For temporal connoisseurs",
      features: [
        { name: "Unlimited paradox insurance", included: true },
        { name: "Unrestricted timeline access", included: true },
        { name: "Custom reality modifications", included: true },
        { name: "Personal timeline consultant", included: true },
        { name: "Butterfly effect compensation", included: true },
        { name: "24/7 dedicated support", included: true },
      ],
      limit: "Unlimited temporal access",
      popular: false,
      borderColor: "border-quantum-green",
      buttonVariant: "outline" as const,
    },
  ];

  return (
    <section id="pricing" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6">
            <span className="text-neon-purple">Quantum</span> Pricing
          </h2>
          <p className="text-xl text-cool-gray max-w-3xl mx-auto">
            Choose the perfect plan to supercharge your feedback automation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className={`glass-morphism rounded-2xl p-8 transition-all duration-300 relative ${
                plan.popular
                  ? "holographic-border scale-105 hover:scale-110"
                  : `border ${plan.borderColor} hover:border-opacity-100`
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-quantum-magenta to-quantum-cyan px-4 py-1 rounded-full text-sm font-semibold text-space-dark">
                    Most Popular
                  </span>
                </div>
              )}

              <div className={plan.popular ? "bg-navy-dark rounded-2xl p-8" : ""}>
                <div className="text-center mb-8">
                  <h3 className={`text-2xl font-orbitron font-bold mb-2 ${
                    plan.name === "Starter" ? "text-quantum-cyan" :
                    plan.name === "Pro" ? "text-quantum-magenta" :
                    "text-quantum-green"
                  }`}>
                    {plan.name}
                  </h3>
                  <p className="text-cool-gray mb-4">{plan.description}</p>
                  <div className="text-4xl font-orbitron font-bold text-white mb-2">
                    {plan.price}
                    <span className="text-lg text-cool-gray">/month</span>
                  </div>
                  <p className="text-sm text-cool-gray">{plan.limit}</p>
                </div>

                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <motion.div
                      key={feature.name}
                      className="flex items-center text-gray-300"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.2 + featureIndex * 0.1 }}
                      viewport={{ once: true }}
                    >
                      {feature.included ? (
                        <Check className="text-quantum-green mr-3 flex-shrink-0" size={16} />
                      ) : (
                        <X className="text-gray-600 mr-3 flex-shrink-0" size={16} />
                      )}
                      <span className={feature.included ? "text-gray-300" : "text-gray-500"}>
                        {feature.name}
                      </span>
                    </motion.div>
                  ))}
                </div>

                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    variant={plan.buttonVariant}
                    className={`w-full py-3 font-semibold transition-all duration-300 ${
                      plan.name === "Starter"
                        ? "border-quantum-cyan text-quantum-cyan hover:bg-quantum-cyan hover:text-space-dark"
                        : plan.name === "Pro"
                        ? "bg-gradient-to-r from-quantum-magenta to-quantum-cyan text-space-dark hover:shadow-lg hover:shadow-quantum-magenta/50 animate-glow"
                        : "border-quantum-green text-quantum-green hover:bg-quantum-green hover:text-space-dark"
                    }`}
                  >
                    {plan.name === "Enterprise" ? "Contact Sales" : "Start Free Trial"}
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-cool-gray mb-4">All plans include a 14-day free trial. No credit card required.</p>
          <div className="flex justify-center space-x-8 text-sm">
            <div className="flex items-center text-gray-300">
              <div className="w-2 h-2 bg-quantum-cyan rounded-full mr-2"></div>
              Enterprise Security
            </div>
            <div className="flex items-center text-gray-300">
              <div className="w-2 h-2 bg-quantum-magenta rounded-full mr-2"></div>
              Real-time Sync
            </div>
            <div className="flex items-center text-gray-300">
              <div className="w-2 h-2 bg-quantum-green rounded-full mr-2"></div>
              24/7 Support
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
