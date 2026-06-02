import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="relative w-full pt-24 bg-[#0a192f] text-white"
    >
      <div className="relative h- 450px w-full bg-[url('/hero-bg.jpg')] bg-cover bg-center flex items-end">
        <div className="absolute inset-0 .bg-gradient-to-t from-[#0a192f] via-transparent to-[#0d2240]/70" />

        <div className="relative max-w-4xl mx-auto px-6 pb-16 w-full">
          <h1 className="text-4xl font-bold mb-4 tracking-tight">About us</h1>
          <p className="text-sm text-slate-300 max-w-2xl leading-relaxed">
            To become a leading industrial service company recognized for
            professionalism, technical competence, and trust across mining,
            industrial and municipal sectors.
          </p>
          <button className="mt-4 flex items-center gap-2 text-amber-500 hover:text-amber-400 text-sm font-semibold transition">
            <span>Read More</span>
            <span className="border border-amber-500 rounded-full w-5 h-5 flex items-center justify-center text-xs">
              →
            </span>
          </button>
        </div>
      </div>

      <div className=".bg-gradient-to-r from-[#112d55] to-[#0d2240] border-y border-white/5 py-10">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-center text-lg font-semibold text-slate-300 mb-8 tracking-wider uppercase">
            Trusted Certified Proven
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { num: "750+", label: "Numbers of Projects done" },
              { num: "7", label: "Government-Issued Permits & Licenses" },
              { num: "3", label: "International ISO Standards Applied" },
              { num: "6", label: "Licensed Industrial Sectors" },
            ].map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <span className="text-4xl font-bold text-white tracking-tight mb-2">
                  {stat.num}
                </span>
                <span className="text-xs text-slate-400 max-w-180px leading-snug">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
