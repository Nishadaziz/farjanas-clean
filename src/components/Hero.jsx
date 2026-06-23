import React from "react";
import saree1 from "../assets/saree1.webp";

// Ensure you include the premium Google Fonts in your index.html:
// <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,700;1,400&family=Montserrat:wght@800;900&display=swap" rel="stylesheet">

function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center pt-28 pb-16 overflow-hidden bg-gradient-to-b from-[#FAF8FC] via-white to-[#FFFDFB]">
      {/* Editorial Luxury Ambient Light Sources */}
      <div className="absolute top-1/4 -left-24 -z-10 h-80 w-80 rounded-full bg-[#6D28D9]/5 blur-[100px]" />
      <div className="absolute bottom-1/4 -right-24 -z-10 h-96 w-96 rounded-full bg-[#BE123C]/5 blur-[100px]" />

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 items-center md:grid-cols-2 md:px-12">
        
        {/* Left Editorial Content Column */}
        <div className="space-y-8 text-center md:text-left">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#6D28D9]/5 border border-[#6D28D9]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#6D28D9]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#BE123C] animate-pulse" />
            Exquisite Heritage Fashion
          </div>
          
          {/* Royal Editorial Headline */}
          <h1 
            className="text-4xl font-black leading-[1.15] text-transparent bg-clip-text bg-gradient-to-r from-[#6D28D9] via-[#9333EA] to-[#BE123C] sm:text-5xl lg:text-6xl tracking-tight" 
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Handcrafted Silk <br />
            <span className="italic font-normal tracking-normal">Batik Sarees</span>
          </h1>
          
          {/* Refined Descriptive Copy */}
          <p 
            className="max-w-lg text-base leading-relaxed text-gray-600 md:text-lg mx-auto md:mx-0 font-medium tracking-wide"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Premium soft rayon silk sarees with exquisite batik designs. Add a 
            new dimension of elegance to your everyday style.
          </p>

          {/* Luxury Pricing Architecture */}
          <div className="flex items-center justify-center md:justify-start gap-5 pt-2">
            <span 
              className="text-2xl text-gray-400 line-through font-medium"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              ৳1650
            </span>
            <div className="flex items-center gap-3">
              <span 
                className="text-4xl font-black text-[#BE123C] tracking-tight" 
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                ৳1350
              </span>
              <span 
                className="text-[10px] font-extrabold tracking-widest text-[#6D28D9] bg-[#F5F3FF] border border-[#6D28D9]/20 px-3 py-1.5 rounded-md uppercase animate-pulse"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Online Discount
              </span>
            </div>
          </div>

          {/* Official & Standardized Call to Action Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <a 
              href="#order" 
              className="group relative inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-[#6D28D9] to-[#BE123C] px-8 py-4 text-base font-bold text-white shadow-md shadow-[#6D28D9]/10 transition-all duration-200 hover:shadow-lg hover:shadow-[#6D28D9]/20 active:scale-98 cursor-pointer overflow-hidden text-center sm:w-auto"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              <span className="relative z-10 flex items-center gap-2">
                Order Now
                <svg className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
              <div className="absolute inset-0 z-0 bg-white/10 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
            </a>

            <a 
              href="#gallery" 
              className="inline-flex items-center justify-center rounded-xl border border-gray-300 bg-white px-8 py-4 text-base font-semibold text-gray-700 shadow-sm transition-all duration-200 hover:bg-gray-50 hover:border-gray-400 hover:text-gray-900 active:scale-98 text-center sm:w-auto"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              View Collection
            </a>
          </div>
        </div>

        {/* Right Framed Artwork Column */}
        <div className="relative mx-auto w-full max-w-md md:max-w-none">
          {/* Ambient Outer Layer Glow */}
          <div className="absolute -inset-2 rounded-[2.5rem] bg-gradient-to-tr from-[#6D28D9] to-[#BE123C] opacity-[0.08] blur-xl" />
          
          {/* High-End Clean Image Frame Container */}
          <div className="relative overflow-hidden rounded-[2rem] border-[6px] border-white bg-white shadow-xl aspect-[4/5]">
            <img 
              src={saree1} 
              alt="Premium Handcrafted Silk Batik Saree" 
              className="h-full w-full object-cover transition-transform duration-1000 ease-out hover:scale-105"
            />
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;