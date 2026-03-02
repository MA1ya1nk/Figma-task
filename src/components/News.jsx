export default function NewsSection() {
  const logos = [
    { name: "LinkedIn", src: "/assets/news/linkedin.png" },
    { name: "Reddit", src: "/assets/news/reddit.png" },
    
    { name: "Google", src: "/assets/news/google.png" },
  ];

  // Repeat logos for smooth marquee
  const marqueeLogos = [...logos, ...logos, ...logos, ...logos];

  return (
    <section 
      className="relative py-20 overflow-hidden"
      style={{ background: "#FFFFFF1F" }} // Applied requested background
    >
      <div className="max-w-[1300px] mx-auto px-6 text-center mb-12">
        <h2 
          className="text-[32px] md:text-[48px] font-semibold text-white leading-[1.2] tracking-[0px]"
          style={{ fontFamily: "'Clash Grotesk Display', sans-serif" }}
        >
          Plena in the News
        </h2>
      </div>

      {/* Desktop/Marquee View */}
      <div className="hidden md:block">
        <div className="relative flex overflow-hidden">
          <div className="flex whitespace-nowrap animate-marquee py-4">
            {marqueeLogos.map((logo, index) => (
              <div key={`row1-${index}`} className="mx-16 flex items-center">
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="h-10 w-auto opacity-100 brightness-200 mix-blend-luminosity"
                  onError={(e) => { e.currentTarget.src = `https://via.placeholder.com/200x50/ffffff/000000?text=${logo.name}`; }}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex overflow-hidden mt-8">
          <div className="flex whitespace-nowrap animate-marquee-reverse py-4">
            {marqueeLogos.map((logo, index) => (
              <div key={`row2-${index}`} className="mx-16 flex items-center">
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="h-10 w-auto opacity-100 brightness-200 mix-blend-luminosity"
                  onError={(e) => { e.currentTarget.src = `https://via.placeholder.com/200x50/ffffff/000000?text=${logo.name}`; }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Grid View - Exactly per Figma dimensions */}
      <div className="md:hidden px-10">
        <div className="grid grid-cols-2 gap-y-10 gap-x-6 place-items-center">
          {marqueeLogos.slice(0, 6).map((logo, index) => (
            <img
              key={`mob-${index}`}
              src={logo.src}
              alt={logo.name}
              style={{ 
                width: '138.99px', // Figma Spec
                height: '36.81px', // Figma Spec
                mixBlendMode: 'luminosity', // Figma Spec
                opacity: 1 
              }}
              className="brightness-200 object-contain"
              onError={(e) => { e.currentTarget.src = `https://via.placeholder.com/139x37/ffffff/000000?text=${logo.name}`; }}
            />
          ))}
        </div>

        {/* See More Mobile Component */}
        <div className="mt-16 flex flex-col items-center">
          <span className="text-white/60 text-[14px] mb-4 font-normal">See more</span>
          <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center bg-white/5">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 10l5 5 5-5" />
            </svg>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
        .animate-marquee { animation: marquee 40s linear infinite; }
        .animate-marquee-reverse { animation: marquee-reverse 40s linear infinite; }
      `}</style>
    </section>
  );
}