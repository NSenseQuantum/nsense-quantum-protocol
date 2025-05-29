import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { DashboardPreview } from "@/components/dashboard-preview";
import { Customization } from "@/components/customization";
import { Pricing } from "@/components/pricing";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Rocket, Calendar } from "lucide-react";

function CTASection() {
  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full bg-gradient-to-r from-quantum-cyan/20 via-quantum-magenta/20 to-quantum-green/20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          className="holographic-border rounded-3xl p-1"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-navy-dark rounded-3xl p-12 text-center">
            <motion.h2
              className="text-4xl md:text-6xl font-orbitron font-black mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span className="text-quantum-cyan neon-text">Ready to</span>
              <br />
              <span className="text-quantum-magenta neon-text">Transform</span>
              <br />
              <span className="text-white">Your Feedback?</span>
            </motion.h2>
            <motion.p
              className="text-xl text-cool-gray max-w-3xl mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Join thousands of content creators who have revolutionized their feedback management
              with quantum-powered automation.
            </motion.p>

            <motion.div
              className="flex flex-col md:flex-row gap-6 justify-center items-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="bg-gradient-to-r from-quantum-cyan to-quantum-magenta px-8 py-4 text-lg font-bold hover:shadow-2xl hover:shadow-quantum-cyan/50 transition-all duration-300 animate-glow">
                  <Rocket className="mr-2" size={20} />
                  Start Your Free Trial
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="outline"
                  className="border-2 border-quantum-green text-quantum-green px-8 py-4 text-lg font-semibold hover:bg-quantum-green hover:text-space-dark transition-all duration-300"
                >
                  <Calendar className="mr-2" size={20} />
                  Schedule Demo
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              className="flex justify-center items-center space-x-8 text-sm text-cool-gray"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center">
                <div className="w-2 h-2 bg-quantum-green rounded-full mr-2"></div>
                14-day free trial
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-quantum-green rounded-full mr-2"></div>
                No credit card required
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-quantum-green rounded-full mr-2"></div>
                Cancel anytime
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <DashboardPreview />
      <Customization />
      <Pricing />
      <CTASection />
    </div>
  );
}
