import React from "react";

export default function Products() {
  const items = [
    { name: "Device 1", active: false },
    { name: "Device 2", active: false },
    { name: "Submersible mixer", active: true },
    { name: "Device 4", active: false },
    { name: "Device 5", active: false },
  ];

  return (
    <section
      id="equipment-&-products"
      className="bg-white text-slate-900 py-16 px-6 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-2xl font-bold text-[#0d2240] mb-10">
          Equipment & Products
        </h2>

        {/* Product Carousel Tabs */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <button className="text-[#0d2240] text-2xl font-bold">‹</button>
          <div className="flex items-center gap-4 overflow-x-auto py-2">
            {items.map((item, idx) => (
              <div
                key={idx}
                className={`min-w-100px h-120px rounded-xl flex items-center justify-center border p-2 text-center text-[10px] transition-all duration-300 ${
                  item.active
                    ? "bg-[#0d2240] text-white border-[#0d2240] scale-110 shadow-lg"
                    : "bg-slate-50 text-slate-500 border-slate-200"
                }`}
              >
                <div>
                  <div className="w-12 h-12 bg-slate-300 mx-auto mb-2 rounded" />
                  {item.name}
                </div>
              </div>
            ))}
          </div>
          <button className="text-[#0d2240] text-2xl font-bold">›</button>
        </div>

        <div className="absolute left-0 right-0 top-[40%] text-center select-none pointer-events-none z-0">
          <span className="text-[7rem] font-bold text-slate-100 tracking-wider block uppercase">
            Submersible mixer
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10 mt-6">
          <div className="md:col-span-4 flex justify-center">
            <div className="h-64 w-40 bg-slate-200 bg-[url('/mixer-large.png')] bg-contain bg-no-repeat bg-center" />
          </div>
          <div className="md:col-span-8">
            <h3 className="text-xl font-bold text-[#0d2240] mb-4">
              Submersible mixer
            </h3>
            <div className="text-xs text-slate-600 space-y-3 leading-relaxed max-w-2xl">
              <p>
                As an authorized distributor of Flygt pumps in Mongolia, we
                specialize in supplying and installing equipment for wastewater
                treatment plant systems. Our solutions are designed based on
                precise engineering calculations...
              </p>
              <p>
                The Flygt F-series pump is a high-performance submersible mixer
                designed for efficient fluid movement in wastewater treatment
                and industrial applications...
              </p>
            </div>
            <div className="mt-4 font-bold text-sm text-blue-800">
              Price: <span className="text-amber-600">₮0</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
