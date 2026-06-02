import React from "react";

export function Footer() {
  const socialLinks = [
    {
      id: "fb",
      href: "https://www.facebook.com/profile.php?id=100063051380290",
      label: "Facebook",

      svg: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
        </svg>
      ),
    },
    {
      id: "ig",
      href: "https://www.instagram.com/khaanzaaservice?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      label: "Instagram",

      svg: (
        <svg
          className="w-4 h-4 stroke-current fill-none"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
        >
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      ),
    },
    {
      id: "Zangai",
      href: "https://www.zangia.mn/company/Khaanzaa-Service",
      label: "Zangia",

      svg: (
        <img
          src="https://play-lh.googleusercontent.com/gw023Pixk7dRsMteUI-lq71XkvYA-Z6yMLqb-yrrUvxlhEy0Nb1mDAEuoG0t61HuLNY3FsT_CR1CY2-F5A67BQ"
          alt="Zangia"
          className="w-5 h-5 object-contain rounded-md transition-all duration-300 group-hover:brightness-0 group-hover:invert"
        />
      ),
    },
    {
      id: "mail",
      href: "mailto:info@khs.mn",
      label: "Email",

      svg: (
        <svg
          className="w-4 h-4 stroke-current fill-none"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
        >
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="relative .bg-gradient-to-b from-[#1f4a88] via-[#163663] to-[#0d1b30] text-white pt-16 pb-8 border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        {/* Дээд уриа хэсэг */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-normal tracking-wide text-slate-100">
            Let's build your next project{" "}
            <span className="text-[#f7a614] font-medium">together</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-sm text-slate-300 border-b border-white/10 pb-12">
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-semibold text-lg tracking-wider">
              Contact Us
            </h3>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <span className="text-[#f7a614]">📞</span>
                <a
                  href="tel:+97672723355"
                  className="hover:text-white transition"
                >
                  +(976) 7272-3355
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#f7a614]">✉️</span>
                <a
                  href="mailto:info@khs.mn"
                  className="hover:text-white transition"
                >
                  info@khs.mn
                </a>
              </div>
            </div>

            <div className="flex gap-3 mt-2">
              {socialLinks.map(({ id, href, svg, label }) => (
                <a
                  key={id}
                  href={href}
                  title={label}
                  target={id !== "mail" ? "_blank" : undefined}
                  rel={id !== "mail" ? "noopener noreferrer" : undefined}
                  className="w-9 h-9 rounded-full border border-[#f7a614] flex items-center justify-center text-[#f7a614] hover:bg-[#f7a614] hover:text-white transition-all duration-300"
                >
                  {svg}
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-white font-semibold text-lg tracking-wider">
              Principal Office
            </h3>
            <p className="leading-relaxed text-slate-300">
              📍 Mongolia, Ulaanbaatar - 17060, Khan-Uul district, 3rd khoroo,
              Industrial street, "Khaanzaa Service LLC" Office
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-white font-semibold text-lg tracking-wider">
              Khanbogd Office
            </h3>
            <p className="leading-relaxed text-slate-300">
              📍 Mongolia, Umnugovi Province, Khanbogd soum, Galbiin Naran
              Villa, Building 101 - 308
            </p>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-400 gap-4">
          <p>
            &copy; {new Date().getFullYear()} Khaanzaa Service LLC. All rights
            reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
