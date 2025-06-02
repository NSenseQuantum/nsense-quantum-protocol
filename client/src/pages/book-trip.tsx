import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, Users, Rocket, CreditCard, Play, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import egyptVideo from "@assets/Egypt Trailer.mp4";
import jfkVideo from "@assets/JFK Trailer.mp4";
import newYorkVideo from "@assets/New York trailer.mp4";
import harambeVideo from "@assets/Harambe Trailer.mp4";
import moodengVideo from "@assets/Moodeng Trailer.mp4";
import pedobearVideo from "@assets/Pedobear Trailer.mp4";
import genghisVideo from "@assets/Genghis Trailer.mp4";
import cleopatraVideo from "@assets/Cleopatra Trailer.mp4";

export default function BookTrip() {
  const [showEgyptVideo, setShowEgyptVideo] = useState(false);
  const [showJfkVideo, setShowJfkVideo] = useState(false);
  const [showNewYorkVideo, setShowNewYorkVideo] = useState(false);
  const [showHarambeVideo, setShowHarambeVideo] = useState(false);
  const [showMoodengVideo, setShowMoodengVideo] = useState(false);
  const [showPedobearVideo, setShowPedobearVideo] = useState(false);
  const [showGenghisVideo, setShowGenghisVideo] = useState(false);
  const [showCleopatraVideo, setShowCleopatraVideo] = useState(false);

  const destinations = [
    {
      era: "Ancient Egypt",
      year: "17,420 BCE",
      description: "Who built the pyramids? Egyptians? Aliens? Mexicans? How did they do it?",
      duration: "7 days",
      price: "Ψ42,000",
      difficulty: "Easy",
      highlights: ["Construction of the pyramids", "Heiroglyph Grafitti course", "Open mic night at the Sphinx"],
      color: "quantum-cyan",
      hasVideo: true,
    },
    {
      era: "Sniper's Perch & Pizza Party",
      year: "1963",
      description: "Comes with a complimentary sixth-floor window seat and a suspiciously pre-heated pizza.",
      duration: "3 days",
      price: "Ψ12,000",
      difficulty: "Mind-blowing",
      highlights: ["Stop off at the Sniper Selfie Station for some memorabilia", "CIA 'No Comment' Tour - A workshop in plausible deniability", "Trajectory Theater, where the bullet is the protagonist"],
      color: "quantum-magenta",
      hasVideo: true,
    },
    {
      era: "New York",
      year: "2001",
      description: "Explore the event that launched a thousand forums. Nanosteel™ Hard-Hat included.",
      duration: "1 day",
      price: "Ψ25,000",
      difficulty: "Extreme",
      highlights: ["Steel beam density testing station", "Flight 93 VR re-enactment", "Dick Cheney themed escape room"],
      color: "quantum-green",
      hasVideo: true,
    },
  ];

  const dankDestinations = [
    {
      era: "Harambe Memorial",
      year: "2016",
      description: "Part historical reenactment, part ritualized collective trauma dump. See the zoo security guard nervously clutching his clipboard while Reddit explodes into a grieving frenzy.",
      duration: "7 days",
      price: "Ψ42,000",
      difficulty: "Medium",
      highlights: ["Candlelight grief circle", "Dicks out flash mob", "See the alternate timeline where the kid and Harambe become best friends and solve crimes in 1980s Los Angeles"],
      color: "quantum-cyan",
      hasVideo: true,
    },
    {
      era: "The Birth of Moodeng",
      year: "2024",
      description: "Witness the birth that caused three ancient calendars to reset and an entire population to go 'awwww'.",
      duration: "2.5 hours",
      price: "Ψ2,000",
      difficulty: "Pushing",
      highlights: ["Wade in the scared mud puddle", "Listen to the translation of the birth grunts", "Enjoy a hippo themed buffet including hay wraps and nachos"],
      color: "quantum-magenta",
      hasVideo: true,
    },
    {
      era: "Pedobear Tribunal",
      year: "2006-2010",
      description: "This trip dives into the judicial showdown that forever reshaped early meme culture. Experience the chaos, the courtroom and the questionable actions of one very creepy bear.",
      duration: "4 years",
      price: "Ψ100110",
      difficulty: "Extreme",
      highlights: ["Take part in an engaging debate on the nature of internet crimes", "Build-A-Bear workshop (bears must be built with protection)", "Emotional support Capri Sun booth if the testimonies get too much to bear"],
      color: "quantum-green",
      hasVideo: true,
    },
  ];

  const redactedDestinations = [
    {
      era: "Hung like a Horse",
      year: "1206 - 1227",
      description: "Half horseback orgy, half historical fever dream. Genghis Khan spread his seed across half the world, now... it's your turn.",
      duration: "21 years",
      price: "Ψ500,000",
      difficulty: "Exhausting",
      highlights: ["Learn the tricks of polygamy from Genghis Khan himself", "Participate in numerous games of 'Yurt or Dare'", "Steppe-Daddy Training"],
      color: "quantum-cyan",
      hasVideo: true,
    },
    {
      era: "Cleopatra's Private Zoo",
      year: "42BC",
      description: "Where the beasts are exotic, the servants are oiled, and on one is entirely sure who's in control.",
      duration: "2 months",
      price: "Ψ224,999",
      difficulty: "Medium",
      highlights: ["Private snake charming.. (without the snake)", "Anubis after Dark the musical", "Some animals may be women. Some women may be animals. Some animals may be animals. It's complicated."],
      color: "quantum-magenta",
      hasVideo: true,
    },
    {
      era: "The Kamasutra Caravan",
      year: "373",
      description: "Step aboard the silken spice trail and journey into the heart of ancient India. Whether you're a curious contortionist or a spiritual spooner, this is your ticket to inner peace, outer pleasure and most likely lower back issues.",
      duration: "1 week",
      price: "Ψ99,999",
      difficulty: "Extreme",
      highlights: ["Luxury camel caravan with non-consensual cuddling zones", "Silk Rope Twister™", "Access to the Sensual Scrolls library - now with VR booths and annotated diagrams"],
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
              <span className="text-quantum-magenta">Conspiracy Collective</span>
            </h2>
            <p className="text-xl text-cool-gray max-w-3xl mx-auto">
              Answer the questions you've always wanted to answer, in the flesh.
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

                    <Button 
                      className={`w-full bg-gradient-to-r from-${destination.color} to-purple-500 hover:shadow-lg transition-all duration-300`}
                      onClick={() => {
                        if (destination.hasVideo && destination.era === "Ancient Egypt") {
                          setShowEgyptVideo(true);
                        } else if (destination.hasVideo && destination.era === "Sniper's Perch & Pizza Party") {
                          setShowJfkVideo(true);
                        } else if (destination.hasVideo && destination.era === "New York") {
                          setShowNewYorkVideo(true);
                        }
                      }}
                    >
                      <Play className="mr-2" size={16} />
                      Trip Preview
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Destination Selection - Second Instance */}
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
              <span className="text-quantum-magenta">Dank History Tours</span>
            </h2>
            <p className="text-xl text-cool-gray max-w-3xl mx-auto">
              History may be written by the victors, but memes are written by the bored, the chaotic and the chronically online.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {dankDestinations.map((destination, index) => (
              <motion.div
                key={destination.era + '-2'}
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

                    <Button 
                      className={`w-full bg-gradient-to-r from-${destination.color} to-purple-500 hover:shadow-lg transition-all duration-300`}
                      onClick={() => {
                        if (destination.hasVideo && destination.era === "Harambe Memorial") {
                          setShowHarambeVideo(true);
                        } else if (destination.hasVideo && destination.era === "The Birth of Moodeng") {
                          setShowMoodengVideo(true);
                        } else if (destination.hasVideo && destination.era === "Pedobear Tribunal") {
                          setShowPedobearVideo(true);
                        }
                      }}
                    >
                      {destination.hasVideo ? <Play className="mr-2" size={16} /> : null}
                      Trip Preview
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Destination Selection - Third Instance */}
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
              <span className="text-quantum-magenta">The Redacted Chapters</span>
            </h2>
            <p className="text-xl text-cool-gray max-w-3xl mx-auto">
              Declassified. Debauched. Dangerous without protection
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {redactedDestinations.map((destination, index) => (
              <motion.div
                key={destination.era + '-3'}
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

                    <Button 
                      className={`w-full bg-gradient-to-r from-${destination.color} to-purple-500 hover:shadow-lg transition-all duration-300`}
                      onClick={() => {
                        if (destination.hasVideo && destination.era === "Hung like a Horse") {
                          setShowGenghisVideo(true);
                        } else if (destination.hasVideo && destination.era === "Cleopatra's Private Zoo") {
                          setShowCleopatraVideo(true);
                        }
                      }}
                    >
                      {destination.hasVideo ? <Play className="mr-2" size={16} /> : null}
                      Trip Preview
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Egypt Video Modal */}
      {showEgyptVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
          <motion.div
            className="relative w-full max-w-4xl mx-auto"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            {/* Close button */}
            <button
              onClick={() => setShowEgyptVideo(false)}
              className="absolute -top-12 right-0 text-white hover:text-quantum-cyan transition-colors z-10"
            >
              <X size={32} />
            </button>
            
            {/* Video container */}
            <div className="relative bg-space-dark rounded-lg overflow-hidden border border-quantum-cyan/30">
              <video
                src={egyptVideo}
                controls
                autoPlay
                className="w-full h-auto max-h-[80vh]"
                onEnded={() => setShowEgyptVideo(false)}
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </motion.div>
        </div>
      )}

      {/* JFK Video Modal */}
      {showJfkVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
          <motion.div
            className="relative w-full max-w-4xl mx-auto"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            {/* Close button */}
            <button
              onClick={() => setShowJfkVideo(false)}
              className="absolute -top-12 right-0 text-white hover:text-quantum-cyan transition-colors z-10"
            >
              <X size={32} />
            </button>
            
            {/* Video container */}
            <div className="relative bg-space-dark rounded-lg overflow-hidden border border-quantum-cyan/30">
              <video
                src={jfkVideo}
                controls
                autoPlay
                className="w-full h-auto max-h-[80vh]"
                onEnded={() => setShowJfkVideo(false)}
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </motion.div>
        </div>
      )}

      {/* New York Video Modal */}
      {showNewYorkVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
          <motion.div
            className="relative w-full max-w-4xl mx-auto"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            {/* Close button */}
            <button
              onClick={() => setShowNewYorkVideo(false)}
              className="absolute -top-12 right-0 text-white hover:text-quantum-cyan transition-colors z-10"
            >
              <X size={32} />
            </button>
            
            {/* Video container */}
            <div className="relative bg-space-dark rounded-lg overflow-hidden border border-quantum-cyan/30">
              <video
                src={newYorkVideo}
                controls
                autoPlay
                className="w-full h-auto max-h-[80vh]"
                onEnded={() => setShowNewYorkVideo(false)}
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </motion.div>
        </div>
      )}

      {/* Harambe Video Modal */}
      {showHarambeVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
          <motion.div
            className="relative w-full max-w-4xl mx-auto"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            {/* Close button */}
            <button
              onClick={() => setShowHarambeVideo(false)}
              className="absolute -top-12 right-0 text-white hover:text-quantum-cyan transition-colors z-10"
            >
              <X size={32} />
            </button>
            
            {/* Video container */}
            <div className="relative bg-space-dark rounded-lg overflow-hidden border border-quantum-cyan/30">
              <video
                src={harambeVideo}
                controls
                autoPlay
                className="w-full h-auto max-h-[80vh]"
                onEnded={() => setShowHarambeVideo(false)}
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </motion.div>
        </div>
      )}

      {/* Moodeng Video Modal */}
      {showMoodengVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
          <motion.div
            className="relative w-full max-w-4xl mx-auto"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            {/* Close button */}
            <button
              onClick={() => setShowMoodengVideo(false)}
              className="absolute -top-12 right-0 text-white hover:text-quantum-cyan transition-colors z-10"
            >
              <X size={32} />
            </button>
            
            {/* Video container */}
            <div className="relative bg-space-dark rounded-lg overflow-hidden border border-quantum-cyan/30">
              <video
                src={moodengVideo}
                controls
                autoPlay
                className="w-full h-auto max-h-[80vh]"
                onEnded={() => setShowMoodengVideo(false)}
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </motion.div>
        </div>
      )}

      {/* Pedobear Video Modal */}
      {showPedobearVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
          <motion.div
            className="relative w-full max-w-4xl mx-auto"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            {/* Close button */}
            <button
              onClick={() => setShowPedobearVideo(false)}
              className="absolute -top-12 right-0 text-white hover:text-quantum-cyan transition-colors z-10"
            >
              <X size={32} />
            </button>
            
            {/* Video container */}
            <div className="relative bg-space-dark rounded-lg overflow-hidden border border-quantum-cyan/30">
              <video
                src={pedobearVideo}
                controls
                autoPlay
                className="w-full h-auto max-h-[80vh]"
                onEnded={() => setShowPedobearVideo(false)}
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </motion.div>
        </div>
      )}

      {/* Genghis Video Modal */}
      {showGenghisVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
          <motion.div
            className="relative w-full max-w-4xl mx-auto"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            {/* Close button */}
            <button
              onClick={() => setShowGenghisVideo(false)}
              className="absolute -top-12 right-0 text-white hover:text-quantum-cyan transition-colors z-10"
            >
              <X size={32} />
            </button>
            
            {/* Video container */}
            <div className="relative bg-space-dark rounded-lg overflow-hidden border border-quantum-cyan/30">
              <video
                src={genghisVideo}
                controls
                autoPlay
                className="w-full h-auto max-h-[80vh]"
                onEnded={() => setShowGenghisVideo(false)}
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </motion.div>
        </div>
      )}

      {/* Cleopatra Video Modal */}
      {showCleopatraVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
          <motion.div
            className="relative w-full max-w-4xl mx-auto"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            {/* Close button */}
            <button
              onClick={() => setShowCleopatraVideo(false)}
              className="absolute -top-12 right-0 text-white hover:text-quantum-cyan transition-colors z-10"
            >
              <X size={32} />
            </button>
            
            {/* Video container */}
            <div className="relative bg-space-dark rounded-lg overflow-hidden border border-quantum-cyan/30">
              <video
                src={cleopatraVideo}
                controls
                autoPlay
                className="w-full h-auto max-h-[80vh]"
                onEnded={() => setShowCleopatraVideo(false)}
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </motion.div>
        </div>
      )}

    </div>
  );
}