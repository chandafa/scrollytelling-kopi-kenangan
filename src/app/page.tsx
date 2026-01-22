"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { SmoothScroll } from "@/components/ui/smooth-scroll";
import { LoadingScreen } from "@/components/loading-screen";
import { Navbar } from "@/components/navbar";
import { SequenceScroll } from "@/components/sequence-scroll";
import { StoryOverlay } from "@/components/story-overlay";
import { AboutSection } from "@/components/sections/about-section";
import { BentoSection } from "@/components/sections/bento-section";
import { StatsSection } from "@/components/sections/stats-section";
import { TestimonialSection } from "@/components/sections/testimonial-section";
import { CTASection } from "@/components/sections/cta-section";
import { Footer } from "@/components/sections/footer";
import { MarqueeSection } from "@/components/sections/marquee-section";
import { HorizontalScrollSection } from "@/components/sections/horizontal-scroll-section";
import { CustomCursor } from "@/components/ui/custom-cursor";
import { ParallaxSection } from "@/components/sections/parallax-section";
import { MenuSection } from "@/components/sections/menu-section";

export default function Home() {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // Auto-dismiss loader when progress hits 100
  if (loadingProgress >= 100 && isLoading) {
      setTimeout(() => setIsLoading(false), 500);
  }

  return (
    <>
      <CustomCursor />
      <AnimatePresence>
        {isLoading && <LoadingScreen progress={loadingProgress} />}
      </AnimatePresence>

      <Navbar />

      <SmoothScroll>
        <main className="min-h-screen bg-[#1a1512]">
          <div className="relative">
             <SequenceScroll onLoad={(progress) => setLoadingProgress(progress)} />
             <StoryOverlay />
          </div>
          
          <MarqueeSection />
          <AboutSection />
          <ParallaxSection />
          <MenuSection />
          <BentoSection />
          <HorizontalScrollSection />
          <StatsSection />
          <TestimonialSection />
          <CTASection />
          <Footer />
        </main>
      </SmoothScroll>
    </>
  );
}
