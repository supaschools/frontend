import React from "react";
import Navbar from "./components/navbar";
import HeroSection from "./components/herosection";
import Features from "./components/features";
import FAQ from "./components/faq";
import Footer from "./components/footer";
import HowItWorks from "./components/howitworks";
export default function landingpage() {
  return (
    <div className="min-h-screen bg-[#000207] overflow-x-hidden">
      <Navbar mode="normal" />
      <HeroSection />
      <HowItWorks />
      <Features />
      <FAQ />
      <Footer />
    </div>
  );
}
