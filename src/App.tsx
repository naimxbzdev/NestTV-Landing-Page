/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Ticker from './components/Ticker';
import Stats from './components/Stats';
import PreviewPlayer from './components/PreviewPlayer';
import DeviceShowcase from './components/DeviceShowcase';
import Features from './components/Features';
import DownloadSection from './components/DownloadSection';
import InfoGrid from './components/InfoGrid';
import Pricing from './components/Pricing';
import FAQContact from './components/FAQContact';
import Footer from './components/Footer';
import AuroraBackground from './components/AuroraBackground';
import PWAInstallPrompt from './components/PWAInstallPrompt';
import { ResponsiveAdBanner } from './components/AdBanner';
import LiveSupportWidget from './components/LiveSupportWidget';
import { ChevronUp } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [showTopBtn, setShowTopBtn] = useState(false);
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => setShowTopBtn(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useGSAP(() => {
    const sections = gsap.utils.toArray<HTMLElement>('.gsap-section');
    
    sections.forEach((section) => {
      // 1. Entry Animation
      gsap.fromTo(
        section,
        {
          opacity: 0,
          filter: 'blur(16px)',
          y: 40,
        },
        {
          opacity: 1,
          filter: 'blur(0px)',
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%", // Trigger exactly when entering viewport
            toggleActions: "play none none none"
          }
        }
      );

      // 2. Subtle 3D Tilt Parallax Effect on Scroll
      gsap.set(section, { transformPerspective: 1200 });
      gsap.fromTo(
        section,
        {
          rotationX: 5,
        },
        {
          rotationX: -5,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: 1, // Smooth scrub for high-end feel
          }
        }
      );
    });
  }, { scope: mainRef });

  return (
    <main ref={mainRef} className="min-h-screen relative text-white selection:bg-primary/30">
      <AuroraBackground />
      <Navbar />
      
      <div className="pt-20">
        <div id="home" className="gsap-section">
          <Hero />
        </div>
        
        <div className="container mx-auto px-4 py-8">
           <ResponsiveAdBanner />
        </div>
        
        <div className="gsap-section">
          <Ticker />
        </div>
        
        <div className="gsap-section">
          <Stats />
        </div>
        
        <div id="live-tv" className="gsap-section">
          <PreviewPlayer />
        </div>
        
        <div className="container mx-auto px-4 py-4">
           <ResponsiveAdBanner />
        </div>
        
        <div id="devices" className="gsap-section">
          <DeviceShowcase />
        </div>
        
        <div id="features" className="gsap-section">
          <Features />
        </div>
        
        <div className="container mx-auto px-4 py-8">
           <ResponsiveAdBanner />
        </div>
        
        <div id="download" className="gsap-section">
          <DownloadSection />
        </div>
        
        <div className="gsap-section">
          <InfoGrid />
        </div>
        
        <div id="pricing" className="gsap-section">
          <Pricing />
        </div>
        
        <div id="faq-contact" className="gsap-section">
          <FAQContact />
        </div>
        
        <div className="container mx-auto px-4 py-12">
           <ResponsiveAdBanner />
        </div>
      </div>
      
      <Footer />

      <PWAInstallPrompt />
      <LiveSupportWidget />

      {/* Floating Back to Top Button */}
      <button 
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 w-12 h-12 bg-primary/20 hover:bg-primary text-primary hover:text-black rounded-full flex items-center justify-center backdrop-blur-md border border-primary/30 transition-all duration-300 z-50 ${showTopBtn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
      >
        <ChevronUp className="w-6 h-6" />
      </button>
    </main>
  );
}
