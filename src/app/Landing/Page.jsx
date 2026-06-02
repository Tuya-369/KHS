"use client";
import Header from "@/components/layout/Header";
import About from "@/components/HomeLanding/About";
import Services from "@/components/HomeLanding/Services";
import Products from "@/components/HomeLanding/Products";
import Project from "@/components/HomeLanding/Project";
import Career from "@/components/HomeLanding/Career";
import Partners from "@/components/layout/Partners";
import { Footer } from "@/components/layout/Footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#0a192f] antialiased">
      <main>
        <About />
        <Services />
        <Products />
        <Project />
        <Career />
      </main>
      <Partners />
    </div>
  );
}
