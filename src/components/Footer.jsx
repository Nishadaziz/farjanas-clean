import React from "react";
import { Mail, Phone, MapPin, Instagram, Facebook } from "lucide-react";

function Footer() {
  const googleMapsUrl = "https://maps.app.goo.gl/uXpXg6vE8VWhvC2C7";

  return (
    <footer
      className="bg-gray-950 pt-16 pb-8 text-gray-400"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <div className="mx-auto max-w-7xl grid grid-cols-1 gap-12 border-b border-gray-800 px-6 pb-12 md:grid-cols-3 md:px-12">
        
        {/* Brand */}
        <div className="space-y-4">
          <h3
            className="text-xl font-black tracking-widest text-white"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            FARJANAS
          </h3>

          <p className="max-w-xs text-sm leading-relaxed text-gray-400">
            Bringing you the finest handcrafted traditional batik silk clothing
            lines straight from master local artisans.
          </p>
        </div>

        {/* Contact */}
        <div className="space-y-3">
          <h4 className="text-sm font-bold uppercase tracking-wider text-white">
            Contact & Support
          </h4>

          <ul className="space-y-3 text-sm text-gray-400">
            <li>
              <a
                href="tel:+8801912783281"
                className="flex items-center gap-2.5 transition hover:text-white"
              >
                <Phone className="h-4 w-4 text-[#6D28D9]" />
                <span>+880 1912-783281</span>
              </a>
            </li>

            <li>
              <a
                href="mailto:farjanasattire@gmail.com"
                className="flex items-center gap-2.5 transition hover:text-white"
              >
                <Mail className="h-4 w-4 text-[#6D28D9]" />
                <span>farjanasattire@gmail.com</span>
              </a>
            </li>

            <li>
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 transition hover:text-white"
              >
                <MapPin className="h-4 w-4 shrink-0 text-[#6D28D9] transition-transform group-hover:scale-110" />

                <span className="underline decoration-gray-700 underline-offset-4 group-hover:decoration-white">
                  Dhaka, Bangladesh
                </span>

                <svg
                  className="h-3 w-3 text-gray-500 opacity-0 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div className="space-y-4">
          <h4 className="text-sm font-bold uppercase tracking-wider text-white">
            Follow Our Journey
          </h4>

          <div className="flex gap-4">
            <a
              href="https://www.facebook.com/Shokuntola.FARJANAs?share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F18ryzS33D4%2F#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-900 text-gray-400 transition hover:bg-[#6D28D9] hover:text-white"
            >
              <Facebook className="h-5 w-5" />
            </a>

            <a
              href="https://www.instagram.com/farjanasattire?utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-900 text-gray-400 transition hover:bg-[#6D28D9] hover:text-white"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="pt-8 text-center text-xs tracking-wide text-gray-600">
        © {new Date().getFullYear()} Farjanas Attire. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;