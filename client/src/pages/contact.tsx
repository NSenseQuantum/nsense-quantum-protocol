import { motion } from "framer-motion";
import { Star, Download, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState, useRef, useEffect } from "react";

interface FeedbackForm {
  name: string;
  tripTaken: string;
  stars: string;
  review: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FeedbackForm>({
    name: "",
    tripTaken: "",
    stars: "",
    review: "",
  });
  const [showPreview, setShowPreview] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Draw canvas when modal opens
  useEffect(() => {
    if (showPreview) {
      // Small delay to ensure canvas is mounted
      setTimeout(() => {
        drawCanvas();
      }, 100);
    }
  }, [showPreview]);

  const generateMeme = () => {
    console.log("Generate meme called with data:", formData);
    
    if (!formData.name || !formData.tripTaken || !formData.stars || !formData.review) {
      alert("Please fill out all fields!");
      return;
    }
    
    // Show the preview modal first, then draw on canvas
    setShowPreview(true);
  };

  const drawCanvas = () => {
    const canvas = canvasRef.current;
    console.log("Drawing canvas, ref:", canvas);
    if (!canvas) {
      console.error("Canvas not found during draw!");
      return;
    }
    
    const ctx = canvas.getContext('2d');
    console.log("Canvas context:", ctx);
    if (!ctx) {
      console.error("Canvas context not found!");
      return;
    }

    // Set canvas size explicitly
    canvas.width = 800;
    canvas.height = 600;
    console.log("Canvas size set to:", canvas.width, "x", canvas.height);

    // Clear canvas first
    ctx.clearRect(0, 0, 800, 600);

    // Create futuristic background
    const gradient = ctx.createLinearGradient(0, 0, 800, 600);
    gradient.addColorStop(0, '#0a0a23');
    gradient.addColorStop(0.5, '#1a1a3a');
    gradient.addColorStop(1, '#0a0a23');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 800, 600);

    // Add grid pattern
    ctx.strokeStyle = 'rgba(0, 255, 255, 0.2)';
    ctx.lineWidth = 1;
    for (let i = 0; i < 800; i += 40) {
      ctx.beginPath();
      ctx.moveTo(i, 0);
      ctx.lineTo(i, 600);
      ctx.stroke();
    }
    for (let i = 0; i < 600; i += 40) {
      ctx.beginPath();
      ctx.moveTo(0, i);
      ctx.lineTo(800, i);
      ctx.stroke();
    }

    // Add border
    ctx.strokeStyle = '#00ffff';
    ctx.lineWidth = 3;
    ctx.strokeRect(10, 10, 780, 580);

    // Header - use web safe fonts
    ctx.fillStyle = '#00ffff';
    ctx.font = 'bold 28px Arial, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('N-SENSE QUANTUM PROTOCOL', 400, 60);
    
    ctx.fillStyle = '#ff00ff';
    ctx.font = 'bold 20px Arial, sans-serif';
    ctx.fillText('TEMPORAL FEEDBACK REPORT', 400, 90);

    // Form fields
    ctx.textAlign = 'left';
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 18px Arial, sans-serif';
    
    // Name
    ctx.fillText('TRAVELER ID:', 60, 150);
    ctx.fillStyle = '#00ff00';
    ctx.font = '16px Arial, sans-serif';
    ctx.fillText(formData.name, 220, 150);

    // Trip
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 18px Arial, sans-serif';
    ctx.fillText('DESTINATION:', 60, 190);
    ctx.fillStyle = '#00ff00';
    ctx.font = '16px Arial, sans-serif';
    ctx.fillText(formData.tripTaken, 220, 190);

    // Stars
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 18px Arial, sans-serif';
    ctx.fillText('QUANTUM RATING:', 60, 230);
    ctx.fillStyle = '#ffff00';
    ctx.font = '20px Arial, sans-serif';
    const starCount = parseInt(formData.stars) || 0;
    const stars = '★'.repeat(starCount) + '☆'.repeat(5 - starCount);
    ctx.fillText(stars, 260, 235);

    // Review box
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 18px Arial, sans-serif';
    ctx.fillText('TEMPORAL EXPERIENCE REPORT:', 60, 280);
    
    // Review text background
    ctx.fillStyle = 'rgba(0, 0, 21, 0.6)';
    ctx.fillRect(50, 300, 700, 200);
    ctx.strokeStyle = '#00ffff';
    ctx.lineWidth = 2;
    ctx.strokeRect(50, 300, 700, 200);

    // Review text with proper word wrapping
    ctx.fillStyle = '#ffffff';
    ctx.font = '14px Arial, sans-serif';
    const words = formData.review.split(' ');
    let line = '';
    let y = 330;
    const maxWidth = 660;
    
    for (let n = 0; n < words.length; n++) {
      const testLine = line + words[n] + ' ';
      const metrics = ctx.measureText(testLine);
      const testWidth = metrics.width;
      if (testWidth > maxWidth && n > 0) {
        ctx.fillText(line.trim(), 70, y);
        line = words[n] + ' ';
        y += 20;
        if (y > 480) break; // Don't overflow
      } else {
        line = testLine;
      }
    }
    if (line.trim()) {
      ctx.fillText(line.trim(), 70, y);
    }

    // Footer
    ctx.fillStyle = '#ff00ff';
    ctx.font = 'bold 14px Arial, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('CLASSIFIED - FOR MEME USE ONLY', 400, 540);
    ctx.fillText('SHARE RESPONSIBLY ACROSS TIMELINES', 400, 560);
    
    console.log("Canvas drawing completed!");
  };

  const downloadMeme = () => {
    const canvas = canvasRef.current;
    console.log("Download called, canvas:", canvas);
    if (!canvas) {
      console.error("No canvas for download!");
      return;
    }
    
    const dataURL = canvas.toDataURL('image/png');
    console.log("Canvas data URL length:", dataURL.length);
    console.log("Canvas data URL preview:", dataURL.substring(0, 100));
    
    const link = document.createElement('a');
    link.download = `nsense-feedback-${formData.name.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.png`;
    link.href = dataURL;
    link.click();
  };

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
            <span className="text-quantum-cyan neon-text">Feedback</span>{" "}
            <span className="text-white">Meme Generator</span>
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-cool-gray max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Create your own quantum temporal feedback report to share across timelines and social media platforms.
          </motion.p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="glass-morphism rounded-xl p-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-orbitron font-bold text-white mb-6">Generate Your Feedback Report</h3>
            <div className="space-y-6">
              <div>
                <label className="text-cool-gray font-semibold block mb-2">Name</label>
                <Input
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Enter your traveler name..."
                  className="bg-space-dark border-quantum-cyan/30 focus:border-quantum-cyan text-white"
                />
              </div>

              <div>
                <label className="text-cool-gray font-semibold block mb-2">Trip Taken</label>
                <Input
                  value={formData.tripTaken}
                  onChange={(e) => setFormData({ ...formData, tripTaken: e.target.value })}
                  placeholder="Which temporal destination did you visit?"
                  className="bg-space-dark border-quantum-cyan/30 focus:border-quantum-cyan text-white"
                />
              </div>

              <div>
                <label className="text-cool-gray font-semibold block mb-2">Stars</label>
                <Select value={formData.stars} onValueChange={(value) => setFormData({ ...formData, stars: value })}>
                  <SelectTrigger className="bg-space-dark border-quantum-cyan/30 focus:border-quantum-cyan text-white">
                    <SelectValue placeholder="Rate your quantum experience" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0">0 Stars - Paradox Created</SelectItem>
                    <SelectItem value="1">1 Star - Timeline Slightly Damaged</SelectItem>
                    <SelectItem value="2">2 Stars - Mediocre Time Travel</SelectItem>
                    <SelectItem value="3">3 Stars - Standard Quantum Experience</SelectItem>
                    <SelectItem value="4">4 Stars - Excellent Temporal Journey</SelectItem>
                    <SelectItem value="5">5 Stars - Mind-Blowing Reality Shift</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-cool-gray font-semibold block mb-2">Review</label>
                <Textarea
                  value={formData.review}
                  onChange={(e) => setFormData({ ...formData, review: e.target.value })}
                  placeholder="Describe your temporal experience in detail..."
                  rows={4}
                  className="bg-space-dark border-quantum-cyan/30 focus:border-quantum-cyan text-white resize-none"
                />
              </div>

              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  onClick={generateMeme}
                  className="w-full bg-gradient-to-r from-quantum-cyan to-quantum-magenta text-space-dark py-3 font-semibold hover:shadow-lg hover:shadow-quantum-cyan/50 transition-all duration-300"
                >
                  <Share2 className="mr-2" size={20} />
                  Generate Feedback Meme
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Preview Modal */}
      {showPreview && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-space-dark rounded-xl p-6 max-w-4xl w-full max-h-screen overflow-auto">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-orbitron font-bold text-white">Your Quantum Feedback Report</h3>
              <Button
                onClick={() => setShowPreview(false)}
                className="bg-red-600 hover:bg-red-700 text-white"
              >
                Close
              </Button>
            </div>
            
            <div className="flex justify-center mb-4">
              <canvas
                ref={canvasRef}
                className="border border-quantum-cyan rounded-lg max-w-full h-auto"
                style={{ maxHeight: '70vh', display: 'block' }}
                width={800}
                height={600}
              />
            </div>
            
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                onClick={downloadMeme}
                className="w-full bg-gradient-to-r from-quantum-green to-quantum-cyan text-space-dark py-3 font-semibold hover:shadow-lg transition-all duration-300"
              >
                <Download className="mr-2" size={20} />
                Download Your Meme
              </Button>
            </motion.div>
          </div>
        </div>
      )}
    </div>
  );
}
