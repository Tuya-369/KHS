import React from "react";

export default function Career() {
  return (
    <section id="careers" className="bg-[#f8fafc] text-slate-900 py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-[#0d2240] mb-6">Career</h2>
        <p className="text-xs text-slate-600 leading-relaxed max-w-3xl mx-auto mb-10">
          At Khaanzaa Service LLC, our most valuable asset is our people. As a
          multidisciplinary company operating across industrial sectors, we take
          pride in cultivating a workplace built on safety, growth, and purpose.
          Our Human Resources philosophy is guided by three core principles:
          professionalism, development, and equal opportunity.
        </p>

        {/* HR Stats */}
        <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto border-t border-slate-200 pt-8">
          <div>
            <div className="text-3xl font-extrabold text-[#0d2240]">+65%</div>
            <div className="text-[10px] text-slate-500 uppercase font-semibold mt-1">
              On-Site Technical Crew
            </div>
          </div>
          <div>
            <div className="text-3xl font-extrabold text-[#0d2240]">+400</div>
            <div className="text-[10px] text-slate-500 uppercase font-semibold mt-1">
              Employees
            </div>
          </div>
          <div>
            <div className="text-3xl font-extrabold text-[#0d2240]">6</div>
            <div className="text-[10px] text-slate-500 uppercase font-semibold mt-1">
              Sectors
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
