import React from "react";
import {
  Shield,
  Settings,
  Cpu,
  Briefcase,
  Award,
  Building2,
  Truck,
  Wrench,
  Database,
} from "lucide-react";

export default function Partners() {
  const row1 = [
    { name: "JAVASCRIPT", icon: <Cpu className="w-4 h-4 text-slate-400" /> },
    {
      name: "TYPESCRIPT",
      icon: <Database className="w-4 h-4 text-slate-400" />,
    },
    { name: "NEXT.JS", icon: <Building2 className="w-4 h-4 text-slate-400" /> },
    { name: "REACT", icon: <Settings className="w-4 h-4 text-slate-400" /> },
    { name: "TAILWIND", icon: <Shield className="w-4 h-4 text-slate-400" /> },
  ];

  const row2 = [
    { name: "NODE.JS", icon: <Wrench className="w-4 h-4 text-slate-400" /> },
    { name: "EXPRESS", icon: <Briefcase className="w-4 h-4 text-slate-400" /> },
    { name: "PRISMA", icon: <Award className="w-4 h-4 text-slate-400" /> },
    { name: "POSTGRESQL", icon: <Truck className="w-4 h-4 text-slate-400" /> },
    { name: "MONGODB", icon: <Cpu className="w-4 h-4 text-slate-400" /> },
  ];

  const row3 = [
    { name: "GITHUB", icon: <Settings className="w-4 h-4 text-slate-400" /> },
    { name: "VERCEL", icon: <Database className="w-4 h-4 text-slate-400" /> },
    { name: "GEMINI", icon: <Shield className="w-4 h-4 text-slate-400" /> },
    { name: "C++", icon: <Building2 className="w-4 h-4 text-slate-400" /> },
    { name: "SHADCN", icon: <Wrench className="w-4 h-4 text-slate-400" /> },
  ];

  const duplicateItems = (items) => [...items, ...items];

  return (
    <section className="bg-[#040d1a] py-20 w-full text-white">
      <div className="max-w-6xl mx-auto px-6 mb-12 text-center">
        <h2 className="text-2xl font-bold tracking-wider uppercase">
          Our valued clients and partners{" "}
          {/* <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            SERVICES
          </span> */}
        </h2>
      </div>

      <div className="relative max-w-5xl mx-auto overflow-hidden rounded-2xl border .border-white/[0.03] bg-black/10 py-6 px-4">
        <div className="absolute inset-y-0 left-0 w-24 .bg-gradient-to-r from-[#040d1a] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 .bg-gradient-to-l from-[#040d1a] to-transparent z-10 pointer-events-none" />

        <div className="space-y-4 flex flex-col w-full">
          {/* 1-р эгнээ: Баруунаас Зүүн рүү (animate-marquee-left) */}
          <div className="w-full overflow-hidden flex justify-start">
            <div className="animate-marquee-left hover-pause flex flex-row flex-nowrap gap-3 pr-3 w-max">
              {duplicateItems(row1).map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 px-5 py-2.5 bg-[#0d192b]/60 backdrop-blur-md border .border-white/[0.06] rounded-full text-slate-300 font-bold text-[11px] tracking-widest uppercase hover:border-white/20 hover:bg-[#13243d]/80 transition-all duration-300 cursor-pointer shadow-inner shrink-0"
                >
                  {item.icon}
                  <span>{item.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full overflow-hidden flex justify-start">
            <div className="animate-marquee-right hover-pause flex flex-row flex-nowrap gap-3 pr-3 w-max">
              {duplicateItems(row2).map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 px-5 py-2.5 bg-[#0d192b]/60 backdrop-blur-md border .border-white/[0.06] rounded-full text-slate-300 font-bold text-[11px] tracking-widest uppercase hover:border-white/20 hover:bg-[#13243d]/80 transition-all duration-300 cursor-pointer shadow-inner shrink-0"
                >
                  {item.icon}
                  <span>{item.name}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full overflow-hidden flex justify-start">
            <div className="animate-marquee-left hover-pause flex flex-row flex-nowrap gap-3 pr-3 w-max">
              {duplicateItems(row3).map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 px-5 py-2.5 bg-[#0d192b]/60 backdrop-blur-md border .border-white/[0.06] rounded-full text-slate-300 font-bold text-[11px] tracking-widest uppercase hover:border-white/20 hover:bg-[#13243d]/80 transition-all duration-300 cursor-pointer shadow-inner shrink-0"
                >
                  {item.icon}
                  <span>{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
