import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { DashboardPreview } from "@/components/dashboard-preview";
import { Customization } from "@/components/customization";
import { Pricing } from "@/components/pricing";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Rocket, Calendar } from "lucide-react";



export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <DashboardPreview />
      <Customization />
      <Pricing />

    </div>
  );
}
