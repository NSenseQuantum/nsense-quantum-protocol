import { motion } from "framer-motion";
import { Palette, MessageSquare, Bot, Dock, Tablet, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";

export function Customization() {
  const [selectedDevice, setSelectedDevice] = useState("desktop");
  const [selectedColor, setSelectedColor] = useState("quantum-cyan");
  const [formData, setFormData] = useState({
    title: "Share Your Thoughts",
    welcomeMessage: "Your feedback helps us create better content for you!",
    company: "YourBrand",
    autoThankYou: true,
    autoResponse: true,
    responseTone: "friendly",
  });

  const colors = [
    { name: "quantum-cyan", class: "bg-quantum-cyan" },
    { name: "quantum-magenta", class: "bg-quantum-magenta" },
    { name: "quantum-green", class: "bg-quantum-green" },
  ];

  const deviceIcons = {
    desktop: Dock,
    tablet: Tablet,
    mobile: Smartphone,
  };

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
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6">
            <span className="text-quantum-green neon-text">Brand</span> Customization
          </h2>
          <p className="text-xl text-cool-gray max-w-3xl mx-auto">
            Make it yours with powerful customization tools that adapt to your unique brand identity
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Customization Options */}
          <div className="space-y-8">
            {/* Visual Customization */}
            <motion.div
              className="glass-morphism rounded-xl p-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-orbitron font-bold text-quantum-cyan mb-4 flex items-center">
                <Palette className="mr-3" />
                Visual Customization
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-space-dark/30 rounded-lg">
                  <span className="text-cool-gray">Brand Colors</span>
                  <div className="flex space-x-2">
                    {colors.map((color) => (
                      <motion.div
                        key={color.name}
                        className={`w-6 h-6 ${color.class} rounded-full cursor-pointer border-2 ${
                          selectedColor === color.name ? "border-white" : "border-transparent"
                        }`}
                        onClick={() => setSelectedColor(color.name)}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      />
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 bg-space-dark/30 rounded-lg">
                  <span className="text-cool-gray">Typography</span>
                  <Select defaultValue="orbitron">
                    <SelectTrigger className="w-32">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="orbitron">Orbitron</SelectItem>
                      <SelectItem value="inter">Inter</SelectItem>
                      <SelectItem value="roboto">Roboto</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-center justify-between p-3 bg-space-dark/30 rounded-lg">
                  <span className="text-cool-gray">Logo Position</span>
                  <div className="flex space-x-2">
                    {["Left", "Center", "Right"].map((position, index) => (
                      <Button
                        key={position}
                        variant={index === 0 ? "default" : "outline"}
                        size="sm"
                        className={index === 0 ? "bg-quantum-cyan/20 border-quantum-cyan text-quantum-cyan" : ""}
                      >
                        {position}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Template Designer */}
            <motion.div
              className="glass-morphism rounded-xl p-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-orbitron font-bold text-quantum-magenta mb-4 flex items-center">
                <MessageSquare className="mr-3" />
                Template Designer
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-cool-gray mb-2">Feedback Form Title</label>
                  <Input
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="bg-space-dark border-quantum-magenta/30 focus:border-quantum-magenta"
                  />
                </div>
                <div>
                  <label className="block text-sm text-cool-gray mb-2">Welcome Message</label>
                  <Textarea
                    value={formData.welcomeMessage}
                    onChange={(e) => setFormData({ ...formData, welcomeMessage: e.target.value })}
                    className="bg-space-dark border-quantum-magenta/30 focus:border-quantum-magenta h-20"
                  />
                </div>
                <div className="flex items-center justify-between p-3 bg-space-dark/30 rounded-lg">
                  <span className="text-cool-gray">Auto-Thank You</span>
                  <Switch
                    checked={formData.autoThankYou}
                    onCheckedChange={(checked) => setFormData({ ...formData, autoThankYou: checked })}
                  />
                </div>
              </div>
            </motion.div>

            {/* AI Response Settings */}
            <motion.div
              className="glass-morphism rounded-xl p-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-orbitron font-bold text-quantum-green mb-4 flex items-center">
                <Bot className="mr-3" />
                AI Response Settings
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-cool-gray mb-2">Response Tone</label>
                  <Select value={formData.responseTone} onValueChange={(value) => setFormData({ ...formData, responseTone: value })}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="friendly">Friendly & Casual</SelectItem>
                      <SelectItem value="professional">Professional</SelectItem>
                      <SelectItem value="enthusiastic">Enthusiastic</SelectItem>
                      <SelectItem value="minimalist">Minimalist</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-center justify-between p-3 bg-space-dark/30 rounded-lg">
                  <span className="text-cool-gray">Auto-Response</span>
                  <Switch
                    checked={formData.autoResponse}
                    onCheckedChange={(checked) => setFormData({ ...formData, autoResponse: checked })}
                  />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Live Preview */}
          <div className="space-y-6">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-orbitron font-bold text-white mb-2">Live Preview</h3>
              <p className="text-cool-gray">See your changes in real-time</p>
            </motion.div>

            {/* Preview Window */}
            <motion.div
              className="holographic-border rounded-xl p-1"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-navy-dark rounded-xl p-8">
                {/* Preview Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-quantum-cyan to-quantum-magenta rounded-lg flex items-center justify-center">
                      <div className="w-6 h-6 bg-white rounded-full opacity-90"></div>
                    </div>
                    <span className="text-lg font-orbitron font-bold text-quantum-cyan">
                      {formData.company}
                    </span>
                  </div>
                  <Button variant="ghost" size="icon" className="text-cool-gray hover:text-white">
                    ×
                  </Button>
                </div>

                {/* Preview Content */}
                <div className="text-center mb-6">
                  <h4 className="text-xl font-orbitron font-bold text-white mb-3">
                    {formData.title}
                  </h4>
                  <p className="text-cool-gray">{formData.welcomeMessage}</p>
                </div>

                {/* Preview Form */}
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm text-cool-gray mb-2">How was your experience?</label>
                    <div className="flex justify-center space-x-2">
                      <motion.button
                        className="w-12 h-12 rounded-full border-2 border-quantum-green text-quantum-green hover:bg-quantum-green hover:text-space-dark transition-all duration-300"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        😊
                      </motion.button>
                      <motion.button
                        className="w-12 h-12 rounded-full border-2 border-gray-600 text-gray-400 hover:border-quantum-cyan hover:text-quantum-cyan transition-all duration-300"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        😐
                      </motion.button>
                      <motion.button
                        className="w-12 h-12 rounded-full border-2 border-gray-600 text-gray-400 hover:border-red-500 hover:text-red-500 transition-all duration-300"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        😞
                      </motion.button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm text-cool-gray mb-2">Tell us more (optional)</label>
                    <Textarea
                      placeholder="Your thoughts..."
                      className="bg-space-dark/30 border-gray-600 focus:border-quantum-cyan h-20"
                    />
                  </div>

                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button className="w-full bg-gradient-to-r from-quantum-cyan to-quantum-magenta text-space-dark font-semibold py-3">
                      Submit Feedback
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Preview Options */}
            <div className="flex justify-center space-x-4">
              {Object.entries(deviceIcons).map(([device, Icon]) => (
                <motion.div key={device} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant={selectedDevice === device ? "default" : "outline"}
                    className={
                      selectedDevice === device
                        ? "bg-quantum-cyan/20 border-quantum-cyan text-quantum-cyan"
                        : "border-gray-600 text-cool-gray hover:border-quantum-cyan hover:text-quantum-cyan"
                    }
                    onClick={() => setSelectedDevice(device)}
                  >
                    <Icon className="mr-2" size={16} />
                    {device.charAt(0).toUpperCase() + device.slice(1)}
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
