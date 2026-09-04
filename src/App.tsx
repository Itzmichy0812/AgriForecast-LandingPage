import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { ArchitectureSection } from './components/ArchitectureSection';
import { InteractiveSimulator } from './components/InteractiveSimulator';
import { PersonalizedAdvisory } from './components/PersonalizedAdvisory';
import { RoiCalculator } from './components/RoiCalculator';
import { TestimonialsSection } from './components/TestimonialsSection';
import { LeadCaptureSection } from './components/LeadCaptureSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';

export default function App() {
  const handleScrollToRegister = () => {
    const el = document.getElementById('register-demo');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToSimulator = () => {
    const el = document.getElementById('simulator');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFCF8] text-[#2D3436] flex flex-col font-sans selection:bg-[#2D5A27] selection:text-white">
      {/* 1. Header / Navbar */}
      <Navbar
        onOpenRegister={handleScrollToRegister}
        onOpenSimulator={handleScrollToSimulator}
      />

      {/* Main Landing Page Content */}
      <main className="flex-1">
        {/* 2. Hero Section: Direct commercial value proposition */}
        <Hero
          onExploreClick={handleScrollToSimulator}
          onOpenDocClick={handleScrollToRegister}
        />

        {/* 3. Problem Statement: Retailer inventory & cashflow dilemmas */}
        <ProblemSection />

        {/* 4. Core Practical Features: Smart ordering, 14-day weather alerts, customer care */}
        <ArchitectureSection />

        {/* 5. Interactive Simulator: Real-world demand & weather reorder demo */}
        <InteractiveSimulator />

        {/* 6. Farmer Care & Zalo Advisory Module */}
        <PersonalizedAdvisory />

        {/* 7. Profit & Loss Savings Calculator */}
        <RoiCalculator />

        {/* 8. Real Customer Testimonials */}
        <TestimonialsSection />

        {/* 9. Lead Capture / Free 14-day Trial Registration */}
        <LeadCaptureSection />

        {/* 10. Frequently Asked Questions (FAQ) */}
        <FaqSection />
      </main>

      {/* 11. Commercial Footer */}
      <Footer />
    </div>
  );
}
