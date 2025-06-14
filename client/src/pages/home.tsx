import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { DashboardPreview } from "@/components/dashboard-preview";
import { Customization } from "@/components/customization";
import { LegalDisclaimers } from "@/components/legal-disclaimers";



export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <DashboardPreview />
      <Customization />
      <LegalDisclaimers />
    </div>
  );
}
