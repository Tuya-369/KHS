import React from "react";

export default function Project() {
  return (
    <section id="project" className="bg-[#0a192f] text-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-white mb-8">Projects</h2>

        <div className="relative h-400px rounded-xl overflow-hidden bg-[url('/project-bg.jpg')] bg-cover bg-center flex items-center justify-center text-center px-6">
          <div className="absolute inset-0 bg-[#071424]/75 backdrop-blur-[2px]" />

          {/* Arrow Overlays */}
          <button className="absolute left-4 text-white/50 hover:text-white text-3xl">
            ‹
          </button>
          <button className="absolute right-4 text-white/50 hover:text-white text-3xl">
            ›
          </button>

          <div className="relative max-w-2xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-3 tracking-wide leading-tight">
              WWTP Operation - Tsogt-tsetsii & Tsagaan-Khad, Umnugovi
            </h3>
            <p className="text-xs text-amber-400 tracking-widest uppercase font-medium">
              Reliable wastewater operations serving remote mining camps
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
