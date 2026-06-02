import React from "react";

export default function Services() {
  const services = [
    {
      title: "Services overview",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Industrial Infrastructure & Construction",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Fixed plant Equipment Reliability Services",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  return (
    <section id="services" className="bg-[#f8fafc] text-slate-900 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-[#0d2240] mb-8 border-b pb-4 border-slate-200">
          Our Services
        </h2>

        <div className="relative flex items-center gap-4">
          <button className="text-amber-500 hover:text-amber-600 font-bold text-xl p-2">
            ‹
          </button>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            {services.map((svc, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition duration-300 border border-slate-100"
              >
                <div className="h-48 bg-slate-300 bg-[url('/service-placeholder.jpg')] bg-cover bg-center" />
                <div className="p-5">
                  <h3 className="font-bold text-sm text-[#0d2240] mb-2 min-h-40px flex items-center">
                    {svc.title}
                  </h3>
                  <p className="text-xs text-slate-500 mb-4">{svc.desc}</p>
                  <button className="w-6 h-6 rounded-full border border-amber-500 flex items-center justify-center text-amber-500 hover:bg-amber-500 hover:text-white transition ml-auto text-xs">
                    ➔
                  </button>
                </div>
              </div>
            ))}
          </div>

          <button className="text-amber-500 hover:text-amber-600 font-bold text-xl p-2">
            ›
          </button>
        </div>
      </div>
    </section>
  );
}
