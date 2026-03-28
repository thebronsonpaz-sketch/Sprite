/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { InstantPurchase } from "./components/InstantPurchase";
import { SocialProof } from "./components/SocialProof";
import { ProductShowcase } from "./components/ProductShowcase";
import { CampaignSection } from "./components/CampaignSection";
import { EmailCapture } from "./components/EmailCapture";
import { Footer } from "./components/Footer";
import { StickyCTA } from "./components/StickyCTA";

export default function App() {
  return (
    <div className="min-h-screen bg-sprite-dark text-white font-sans selection:bg-sprite-green selection:text-sprite-dark">
      <Navbar />

      <main>
        <Hero />
        <InstantPurchase />
        <SocialProof />
        <ProductShowcase />
        <CampaignSection />
        <EmailCapture />
      </main>

      <Footer />
      <StickyCTA />
    </div>
  );
}
