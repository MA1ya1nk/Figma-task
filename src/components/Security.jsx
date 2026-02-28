import React from "react";

export default function SecuritySection() {
  // Array to represent the logo grid shown in the Figma screenshot
  const partners = [
    { name: "polygon", type: "logo" },
    { name: "polygon", type: "logo" },
    { name: "polygon", type: "logo" },
    { name: "Biconomy", type: "text" },
    { name: "polygon", type: "logo" },
    { name: "polygon", type: "logo" },
    { name: "polygon", type: "logo" },
    { name: "polygon", type: "logo" },
    { name: "polygon", type: "logo" },
    { name: "polygon", type: "logo" },
    { name: "polygon", type: "logo" },
    { name: "polygon", type: "logo" },
  ];

  return (
    <section className="bg-black py-16 lg:py-24 overflow-hidden">
      <div className="max-w-[85rem] mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        
        {/* Left Content: Header and Description */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 lg:mb-8 tracking-tight">
            Backed by the <br className="hidden lg:block" /> best
          </h2>
          <p className="text-white/50 text-lg md:text-xl lg:text-2xl leading-relaxed max-w-xl mx-auto lg:mx-0">
            Protected by a multi-level security architecture and is regularly audited to ensure that all of our users are safe.
          </p>
        </div>

        {/* Right Content: Logo Grid */}
        <div className="w-full lg:w-1/2 relative">
          {/* Subtle Radial Glow background from the image */}
          <div className="absolute inset-0 bg-purple-600/5 blur-[80px] rounded-full pointer-events-none" />
          
          {/* The Grid: 2 columns on mobile (image_737c3e) | 2 columns on desktop (image_737c7b) */}
          {/* Note: In the Figma "MOB" view, it's a tight 2-column list */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-8 lg:gap-x-12 lg:gap-y-10 items-center justify-items-center lg:justify-items-start relative z-10">
            {partners.map((partner, index) => (
              <div 
                key={index} 
                className="transition-opacity duration-500"
                style={{ opacity: index > 5 ? 0.4 : 1 }} // Mimicking the fade effect in the grid
              >
                {partner.name === "Biconomy" ? (
                  <span className="text-white font-bold text-2xl lg:text-3xl tracking-tight">
                    Biconomy
                  </span>
                ) : (
                  <div className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all cursor-default">
                    {/* SVG/Icon Placeholder for Polygon Logo */}
                    <svg className="w-6 h-6 lg:w-8 lg:h-8 text-white/80" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2L3.5 7v10L12 22l8.5-5V7L12 2zm0 2.5l6.5 3.8v7.4L12 19.5 5.5 15.7V8.3L12 4.5z"/>
                    </svg>
                    <span className="text-white/80 font-semibold text-xl lg:text-2xl lowercase tracking-tighter">
                      polygon
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}