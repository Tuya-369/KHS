"use client";

import React, { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    "About",
    "Services",
    "Project",
    "Equipment & Products",
    "Careers",
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#0d2240]/90 backdrop-blur-md border-b-2 border-[#f7a614] text-white">
      <div className="px-4 md:px-6 py-4 flex justify-between items-center">
        <a
          href="#"
          className="flex items-center gap-3 md:gap-4 hover:opacity-90 transition-opacity group cursor-pointer"
        >
          <div className="font-bold text-lg md:text-xl tracking-wider flex items-center gap-2">
            <span className="text-amber-500 flex items-center">
              <img
                className="w-auto h-8 object-contain transition-transform duration-300 group-hover:scale-105"
                src="HeaderLogo.png"
                alt="Khaanzaa Logo"
              />
            </span>{" "}
          </div>
          <span className="hidden lg:inline text-xs text-slate-300 border-l border-slate-500 pl-4">
            Build on Knowledge, Driven by Trust
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-2 lg:gap-4">
          {menuItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}`}
              className="relative px-2 py-1 text-xs lg:text-sm font-medium text-slate-200 hover:text-white transition-colors duration-300 group whitespace-nowrap"
            >
              {item}

              <span className="absolute bottom-0 left-0 w-0 h-2px bg-[#f7a614] transition-all duration-300 ease-out group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-xs font-semibold bg-white/5 px-3 py-1.5 rounded-full border border-white/10 shrink-0">
            <button className="text-[#f7a614] hover:opacity-80 transition">
              EN
            </button>
            <span className="text-white/20">|</span>
            <button className="text-slate-400 hover:text-white transition">
              MN
            </button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 focus:outline-none z-50"
            aria-label="Toggle Menu"
          >
            <span
              className={`h-0.5 w-6 bg-white rounded-full transition-all duration-300 ${isOpen ? "transform rotate-45 translate-y-2 bg-[#f7a614]" : ""}`}
            />
            <span
              className={`h-0.5 w-6 bg-white rounded-full transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`h-0.5 w-6 bg-white rounded-full transition-all duration-300 ${isOpen ? "transform -rotate-45 -translate-y-2 bg-[#f7a614]" : ""}`}
            />
          </button>
        </div>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-[#0d2240] border-t border-white/5 ${
          isOpen ? "max-h-300px opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col p-4 gap-1">
          {menuItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}`}
              onClick={() => setIsOpen(false)}
              className="px-4 py-3 rounded-xl text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 active:bg-white/10 transition-all border-l-2 border-transparent hover:border-[#f7a614]"
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
