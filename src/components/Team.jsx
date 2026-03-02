import React, { useRef } from "react";

export default function TeamSection() {
  const scrollRef = useRef(null);

  const team = [
    { name: "Jared E. Wallace", role: "CEO & Co-Founder", img: "/assets/team-img-1.png", color: "bg-blue-500/20" },
    { name: "Jessica Johnson", role: "Co-Founder", img: "/assets/team-img-2.png", color: "bg-purple-500/20" },
    { name: "Trevor Noah", role: "Tech Lead", img: "/assets/team-img-3.png", color: "bg-blue-600/20" },
    { name: "Kate Winslet", role: "Marketing Lead", img: "/assets/team-img-4.png", color: "bg-purple-600/20" },
    { name: "Marcus Wright", role: "Design Lead", img: "/assets/team-img-4.png", color: "bg-blue-500/20" },
    { name: "Sarah Chen", role: "Operations", img: "/assets/team-img-4.png", color: "bg-purple-600/20" },
  ];

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      // On mobile, we scroll by half the container width to show the next item
      const scrollAmount = window.innerWidth < 768 ? clientWidth / 2 : clientWidth;
      const scrollTo = direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <section className="py-16 md:py-24 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative flex flex-col items-center">
        
        {/* Header Text - Responsive Sizes */}
        <h2 className="text-[40px] md:text-6xl font-bold text-white mb-4 text-center">The Team</h2>
        <p className="text-white/60 text-lg md:text-2xl leading-relaxed mb-12 md:mb-16 max-w-xl text-center">
          Protected by a multi-level security architecture and is regularly.
        </p>

        <div className="relative w-full">
          {/* Desktop Left Arrow */}
          <button 
            onClick={() => scroll("left")}
            className="absolute -left-16 top-[40%] -translate-y-1/2 z-20 text-white/20 hover:text-white transition hidden md:block"
          >
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {/* Scrolling Container */}
          <div 
            ref={scrollRef}
            className="flex flex-row gap-4 md:gap-6 overflow-x-hidden scroll-smooth transition-all"
          >
            {team.map((member, index) => (
              /* Mobile: w-[calc(50%-8px)] shows 2 items side-by-side */
              <div key={index} className="flex-none w-[calc(50%-8px)] md:w-[calc(25%-18px)] flex flex-col">
                <div className="relative rounded-[24px] md:rounded-[40px] overflow-hidden aspect-[4/5] border border-white/5 bg-[#121214]">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover grayscale" />
                  <div className={`absolute inset-0 ${member.color} mix-blend-overlay`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>

                <div className="mt-4 md:mt-6 text-left">
                  <h4 className="text-white font-bold text-lg md:text-2xl mb-1">{member.name}</h4>
                  <p className="text-white/50 text-xs md:text-base mb-3 md:mb-4">{member.role}</p>
                  <div className="flex items-center gap-2 text-[10px] md:text-sm font-medium">
                    <a href="#" className="text-purple-400 hover:text-purple-300">Linked IN</a>
                    <span className="text-white/20">|</span>
                    <a href="#" className="text-orange-400 hover:text-orange-300">Twitter</a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop Right Arrow */}
          <button 
            onClick={() => scroll("right")}
            className="absolute -right-16 top-[40%] -translate-y-1/2 z-20 text-[#8B5CF6] hover:text-purple-400 transition hidden md:block"
          >
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Arrows - Matches Figma Screenshot */}
        <div className="flex items-center gap-8 mt-12 md:hidden">
          <button onClick={() => scroll("left")} className="text-white/20 active:text-white transition">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button onClick={() => scroll("right")} className="text-[#8B5CF6] active:text-purple-400 transition">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
}