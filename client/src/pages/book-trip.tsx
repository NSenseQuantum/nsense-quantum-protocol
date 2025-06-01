import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, Users, Rocket, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function BookTrip() {
  const destinations = [
    {
      era: "Ancient Egypt",
      year: "2500 BCE",
      description: "Witness the construction of the Great Pyramid of Giza",
      duration: "7 days",
      price: "Ψ15,000",
      difficulty: "Moderate",
      highlights: ["Great Pyramid construction", "Meet ancient pharaohs", "Nile River cruise"],
      color: "quantum-cyan",
    },
    {
      era: "Renaissance Italy",
      year: "1503 CE",
      description: "Experience the height of the Renaissance in Florence",
      duration: "5 days",
      price: "Ψ12,000",
      difficulty: "Easy",
      highlights: ["Leonardo da Vinci's workshop", "Michelangelo's studio", "Medici court"],
      color: "quantum-magenta",
    },
    {
      era: "Jurassic Period",
      year: "150 Million BCE",
      description: "Explore the age of dinosaurs in their natural habitat",
      duration: "3 days",
      price: "Ψ25,000",
      difficulty: "Extreme",
      highlights: ["Live dinosaur observation", "Prehistoric landscapes", "Time capsule safety"],
      color: "quantum-green",
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 particle-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            className="text-5xl md:text-7xl font-orbitron font-black mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-quantum-cyan">Book a</span>{" "}
            <span className="text-white">Trip</span>
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-cool-gray max-w-4xl mx-auto mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Experience the past, future and alternate presents with our quantum-powered time travel technology. Safe?, secure, and scientifically un-certified journeys through time.
          </motion.p>
          <motion.div
            className="flex justify-center space-x-8 text-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="flex items-center text-quantum-green">
              <div className="w-2 h-2 bg-quantum-green rounded-full mr-2"></div>
              69.7% UnSafety Rating
            </div>
            <div className="flex items-center text-quantum-cyan">
              <div className="w-2 h-2 bg-quantum-cyan rounded-full mr-2"></div>
              Quantum Certified
            </div>
            <div className="flex items-center text-quantum-magenta">
              <div className="w-2 h-2 bg-quantum-magenta rounded-full mr-2"></div>
              Mentally unstable & Drug-addled Guides
            </div>
          </motion.div>
        </div>
      </section>

      {/* Destination Selection */}
      <section className="py-20 bg-navy-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6">
              <span className="text-quantum-magenta">Choose Your Destination</span>
            </h2>
            <p className="text-xl text-cool-gray max-w-3xl mx-auto">
              Select from our curated collection of historically significant time periods
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {destinations.map((destination, index) => (
              <motion.div
                key={destination.era}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="glass-morphism border-quantum-cyan/30 hover:border-quantum-cyan transition-all duration-300">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className={`text-2xl font-orbitron text-${destination.color}`}>
                        {destination.era}
                      </CardTitle>
                      <Badge variant="outline" className={`border-${destination.color} text-${destination.color}`}>
                        {destination.difficulty}
                      </Badge>
                    </div>
                    <CardDescription className="text-cool-gray text-lg">
                      {destination.year}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-300">{destination.description}</p>
                    
                    <div className="flex justify-between items-center text-sm">
                      <div className="flex items-center text-cool-gray">
                        <Clock className="mr-2" size={16} />
                        {destination.duration}
                      </div>
                      <div className="text-2xl font-orbitron font-bold text-white">
                        {destination.price}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="text-sm font-semibold text-white">Highlights:</div>
                      {destination.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-400">
                          <div className="w-1.5 h-1.5 bg-quantum-green rounded-full mr-2"></div>
                          {highlight}
                        </div>
                      ))}
                    </div>

                    <Button className={`w-full bg-gradient-to-r from-${destination.color} to-purple-500 hover:shadow-lg transition-all duration-300`}>
                      Select Journey
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6">
              <span className="text-quantum-green">Complete Your Booking</span>
            </h2>
            <p className="text-xl text-cool-gray">
              Fill out the details below to secure your spot in history
            </p>
          </motion.div>

          <motion.div
            className="glass-morphism rounded-2xl p-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-cool-gray">Full Name</label>
                  <Input className="bg-space-dark border-quantum-cyan/30 focus:border-quantum-cyan text-white" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-cool-gray">Email Address</label>
                  <Input type="email" className="bg-space-dark border-quantum-cyan/30 focus:border-quantum-cyan text-white" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-cool-gray">Preferred Date</label>
                  <Input type="date" className="bg-space-dark border-quantum-cyan/30 focus:border-quantum-cyan text-white" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-cool-gray">Number of Travelers</label>
                  <Select>
                    <SelectTrigger className="bg-space-dark border-quantum-cyan/30 focus:border-quantum-cyan text-white">
                      <SelectValue placeholder="Select travelers" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 Traveler</SelectItem>
                      <SelectItem value="2">2 Travelers</SelectItem>
                      <SelectItem value="3">3 Travelers</SelectItem>
                      <SelectItem value="4">4 Travelers</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-cool-gray">Special Requests</label>
                <Textarea 
                  placeholder="Any special accommodations or interests..."
                  className="bg-space-dark border-quantum-cyan/30 focus:border-quantum-cyan text-white h-24"
                />
              </div>

              <div className="bg-space-dark/50 rounded-lg p-6 border border-quantum-cyan/30">
                <h3 className="text-lg font-orbitron font-bold text-white mb-4 flex items-center">
                  <CreditCard className="mr-2" />
                  Payment Summary
                </h3>
                <div className="space-y-2 text-cool-gray">
                  <div className="flex justify-between">
                    <span>Base Price:</span>
                    <span>Ψ15,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Quantum Insurance:</span>
                    <span>Ψ1,500</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Guide Services:</span>
                    <span>Ψ500</span>
                  </div>
                  <div className="border-t border-quantum-cyan/30 pt-2 mt-2">
                    <div className="flex justify-between text-white font-bold text-lg">
                      <span>Total:</span>
                      <span>Ψ17,000</span>
                    </div>
                  </div>
                </div>
              </div>

              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button className="w-full bg-gradient-to-r from-quantum-cyan to-quantum-magenta text-space-dark py-4 text-lg font-bold hover:shadow-lg transition-all duration-300">
                  <Rocket className="mr-2" size={20} />
                  Launch Time Journey
                </Button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}