import { motion } from "framer-motion";
import { Download, Settings, MessageSquare, Heart, Clock, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export function DashboardPreview() {
  const metrics = [
    {
      icon: MessageSquare,
      label: "Total Feedback",
      value: "11,982",
      change: "+12%",
      color: "quantum-cyan",
    },
    {
      icon: Heart,
      label: "Positive Ratio",
      value: "117%",
      change: "+8%",
      color: "quantum-magenta",
    },
    {
      icon: Clock,
      label: "Avg Response",
      value: "47 Years",
      change: "+ 2 days",
      color: "quantum-green",
      negative: false,
    },
    {
      icon: Star,
      label: "Avg Rating",
      value: "4.20",
      change: "+0.2",
      color: "neon-amber",
    },
  ];

  const recentFeedback = [
    {
      user: { name: "Al Koholic", initials: "AK" },
      platform: "Dionysus Wine Festival",
      sentiment: "Drunken",
      timestamp: "Not Sure",
      message: "Woke up a decade later in a toga. Don't know where my pants went but thanks to the NLP I did manage to talk my way out of a fight with a minotaur. 10/10 experience even if I did lose a sandal.",
      color: "quantum-green",
    },
    {
      user: { name: "Graham Hancock", initials: "GH" },
      platform: "Ancient Egypt",
      sentiment: "Pissed Off",
      timestamp: "1y 14d ago",
      message: "Turns out they did build the blasted things after all.",
      color: "red-500",
    },
    {
      user: { name: "Cherry Poppins", initials: "CP" },
      platform: "Roman Bath House Experience",
      sentiment: "Satisfied",
      timestamp: "14m ago",
      message: "Beautiful mosaics, very generous men. Unfortunate lack of penicillin.",
      color: "quantum-green",
    },
    {
      user: { name: "Major Wood", initials: "MW" },
      platform: "JFK Grassy Knoll Picnic",
      sentiment: "[redacted]",
      timestamp: "[redacted]",
      message: "Fantastic location, wonderful views. Sadly couldn't stay as long as we wanted. Unrelated note: don't let the kids play with your rifle in public.",
      color: "quantum-magenta",
    },
    {
      user: { name: "Anatoly Yakovenko", initials: "AY" },
      platform: "Meet the Stoics",
      sentiment: "Disagreeable",
      timestamp: "10blocks ago",
      message: "Seneca is an eth maxi. Aurelius couldn't understand that revenue was the core of his empire, not Roman morals. Next time i'll just have a coffee with Mert.",
      color: "neon-amber",
    },
    {
      user: { name: "", initials: "" },
      platform: "",
      sentiment: "",
      timestamp: "",
      message: "",
      color: "quantum-cyan",
    },
  ];

  return (
    <section id="dashboard" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">


        {/* Dashboard Mockup */}
        <motion.div
          className="holographic-border rounded-3xl p-1"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-navy-dark rounded-3xl p-8">
            {/* Dashboard Header */}
            <div className="flex justify-center items-center mb-8">
              <div className="text-center">
                <h3 className="text-2xl font-orbitron font-bold text-quantum-cyan mb-2">
                  Client Feedback
                </h3>
                <p className="text-cool-gray">Last updated: 22470AD</p>
              </div>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              {metrics.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  className={`bg-space-dark/50 rounded-xl p-6 border border-${metric.color}/30 hover:border-${metric.color} transition-all duration-300`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <metric.icon className={`text-${metric.color} text-xl`} />
                    <span className={`text-xs font-jetbrains ${metric.negative ? 'text-red-400' : 'text-quantum-green'}`}>
                      {metric.change}
                    </span>
                  </div>
                  <div className="text-2xl font-orbitron font-bold text-white mb-1">
                    {metric.value}
                  </div>
                  <div className="text-sm text-cool-gray">{metric.label}</div>
                </motion.div>
              ))}
            </div>



            {/* Recent Feedback */}
            <motion.div
              className="glass-morphism rounded-xl p-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-orbitron font-bold text-quantum-green mb-4 flex items-center">
                <MessageSquare className="mr-3" size={20} />
                Recent Feedback
              </h4>
              <div className="space-y-4">
                {recentFeedback.map((feedback, index) => (
                  <motion.div
                    key={index}
                    className="bg-space-dark/50 rounded-lg p-4 border border-gray-600 hover:border-quantum-cyan transition-all duration-300"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-quantum-cyan to-quantum-magenta rounded-full flex items-center justify-center">
                          <span className="text-xs font-bold text-white">
                            {feedback.user.initials}
                          </span>
                        </div>
                        <div>
                          <span className="font-semibold text-white">{feedback.user.name}</span>
                          <span className="text-xs text-cool-gray ml-2">{feedback.platform}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className={`px-2 py-1 bg-${feedback.color}/20 text-${feedback.color} text-xs rounded-full border border-${feedback.color}/30`}>
                          {feedback.sentiment}
                        </span>
                        <span className="text-xs text-cool-gray">{feedback.timestamp}</span>
                      </div>
                    </div>
                    <p className="text-cool-gray text-sm">{feedback.message}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
