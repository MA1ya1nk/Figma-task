import React, { useRef } from "react";

export default function TeamSection() {
  const scrollRef = useRef(null);

  const team = [
    { name: "Jared E. Wallace", role: "CEO & Co-Founder", img: "public/assets/team-img-1.png", color: "bg-blue-500/20" },
    { name: "Jessica Johnson", role: "Co-Founder", img: "public/assets/team-img-2.png", color: "bg-purple-500/20" },
    { name: "Trevor Noah", role: "Tech Lead", img: "public/assets/team-img-3.png", color: "bg-blue-600/20" },
    { name: "Kate Winslet", role: "Marketing Lead", img: "public/assets/team-img-4.png", color: "bg-purple-600/20" },
    { name: "Marcus Wright", role: "Design Lead", img: "public/assets/team-img-4.png", color: "bg-blue-500/20" },
    { name: "Sarah Chen", role: "Operations", img: "public/assets/team-img-4.png", color: "bg-purple-600/20" },
  ];

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <section className="py-24 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative flex flex-col items-center">
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">The Team</h2>
        <p className="text-white/60 text-2xl leading-relaxed mb-16 max-w-2xl">
          Protected by a multi-level security architecture and is regularly audited to ensure that all of our users are safe.
        </p>

        <div className="relative">
          {/* Left Arrow */}
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
            className="flex flex-row gap-6 overflow-x-hidden scroll-smooth transition-all"
          >
            {team.map((member, index) => (
              <div key={index} className="flex-none w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] flex flex-col">
                <div className="relative rounded-[40px] overflow-hidden aspect-[4/5] border border-white/5 bg-[#121214]">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover grayscale" />
                  <div className={`absolute inset-0 ${member.color} mix-blend-overlay`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>

                <div className="mt-6 text-left">
                  <h4 className="text-white font-bold text-2xl mb-1">{member.name}</h4>
                  <p className="text-white/50 text-base mb-4">{member.role}</p>
                  <div className="flex items-center gap-2 text-sm font-medium">
                    <a href="#" className="text-purple-400 hover:text-purple-300">Linked IN</a>
                    <span className="text-white/20">|</span>
                    <a href="#" className="text-orange-400 hover:text-orange-300">Twitter</a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button 
            onClick={() => scroll("right")}
            className="absolute -right-16 top-[40%] -translate-y-1/2 z-20 text-[#8B5CF6] hover:text-purple-400 transition hidden md:block"
          >
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}