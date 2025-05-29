import { motion } from "framer-motion";
import { Download, Settings, MessageSquare, Heart, Clock, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export function DashboardPreview() {
  const metrics = [
    {
      icon: MessageSquare,
      label: "Total Feedback",
      value: "1,247",
      change: "+12%",
      color: "quantum-cyan",
    },
    {
      icon: Heart,
      label: "Positive Ratio",
      value: "87.3%",
      change: "+8%",
      color: "quantum-magenta",
    },
    {
      icon: Clock,
      label: "Avg Response",
      value: "2.3h",
      change: "-5m",
      color: "quantum-green",
      negative: true,
    },
    {
      icon: Star,
      label: "Avg Rating",
      value: "4.7",
      change: "+0.2",
      color: "neon-amber",
    },
  ];

  const recentFeedback = [
    {
      user: { name: "John Doe", initials: "JD" },
      platform: "YouTube",
      sentiment: "Positive",
      timestamp: "2m ago",
      message: "Amazing content! Your latest video really helped me understand quantum computing concepts. Keep up the great work!",
      color: "quantum-green",
    },
    {
      user: { name: "Sarah Analytics", initials: "SA" },
      platform: "Instagram",
      sentiment: "Neutral",
      timestamp: "5m ago",
      message: "Could you make a tutorial about the practical applications? The theory is great but examples would help.",
      color: "quantum-cyan",
    },
    {
      user: { name: "Mike Knowledge", initials: "MK" },
      platform: "Twitter",
      sentiment: "Positive",
      timestamp: "8m ago",
      message: "This automation tool is a game changer! Saved me hours of manual work. 🚀",
      color: "quantum-green",
    },
  ];

  return (
    <section id="dashboard" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6">
            <span className="text-quantum-magenta">Holographic</span> Dashboard
          </h2>
          <p className="text-xl text-cool-gray max-w-3xl mx-auto">
            Experience the future of feedback management with our quantum-powered interface
          </p>
        </motion.div>

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
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
              <div>
                <h3 className="text-2xl font-orbitron font-bold text-quantum-cyan mb-2">
                  Creator Dashboard
                </h3>
                <p className="text-cool-gray">Last updated: 2 minutes ago</p>
              </div>
              <div className="flex space-x-4 mt-4 md:mt-0">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="outline"
                    className="border-quantum-cyan text-quantum-cyan hover:bg-quantum-cyan hover:text-space-dark"
                  >
                    <Download className="mr-2" size={16} />
                    Export
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="outline"
                    className="border-quantum-magenta text-quantum-magenta hover:bg-quantum-magenta hover:text-space-dark"
                  >
                    <Settings className="mr-2" size={16} />
                    Settings
                  </Button>
                </motion.div>
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

            {/* Charts Section */}
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Sentiment Analysis Chart */}
              <motion.div
                className="glass-morphism rounded-xl p-6"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h4 className="text-lg font-orbitron font-bold text-quantum-cyan mb-4 flex items-center">
                  <div className="w-2 h-2 bg-quantum-cyan rounded-full mr-3"></div>
                  Sentiment Distribution
                </h4>
                <div className="flex items-center justify-center h-48 relative">
                  <div className="relative w-32 h-32">
                    <motion.div
                      className="absolute inset-0 rounded-full border-8 border-quantum-green"
                      style={{
                        borderColor: "hsl(var(--quantum-green)) transparent transparent transparent",
                        transform: "rotate(0deg)",
                      }}
                      initial={{ rotate: 0 }}
                      whileInView={{ rotate: 360 }}
                      transition={{ duration: 2, ease: "easeInOut" }}
                      viewport={{ once: true }}
                    />
                    <div className="absolute inset-4 rounded-full bg-space-dark flex items-center justify-center">
                      <span className="text-sm font-jetbrains text-quantum-cyan">87.3%</span>
                    </div>
                  </div>
                  <div className="ml-8 space-y-2">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-quantum-green rounded-full mr-2"></div>
                      <span className="text-sm text-gray-300">Positive (87.3%)</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-quantum-cyan rounded-full mr-2"></div>
                      <span className="text-sm text-gray-300">Neutral (8.1%)</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                      <span className="text-sm text-gray-300">Negative (4.6%)</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Timeline Chart */}
              <motion.div
                className="glass-morphism rounded-xl p-6"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h4 className="text-lg font-orbitron font-bold text-quantum-magenta mb-4 flex items-center">
                  <div className="w-2 h-2 bg-quantum-magenta rounded-full mr-3"></div>
                  Feedback Timeline
                </h4>
                <div className="h-48 flex items-end justify-between space-x-2">
                  {[60, 80, 45, 90, 70, 55, 35].map((height, index) => (
                    <motion.div
                      key={index}
                      className="flex flex-col items-center"
                      initial={{ height: 0 }}
                      whileInView={{ height: "auto" }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <motion.div
                        className="w-4 bg-gradient-to-t from-quantum-cyan to-quantum-magenta rounded-t"
                        style={{ height: `${height}px` }}
                        whileHover={{ scale: 1.1 }}
                      />
                      <span className="text-xs text-cool-gray mt-2">
                        {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][index]}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
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
