export default function BetterThanBanks() {
  return (
    <section
      className="relative py-16 md:py-28 overflow-hidden"
      style={{ background: "#7F4BC4" }}
    >
      {/* Background radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(255,255,255,0.12) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-[1300px] mx-auto px-6 text-center z-10">
        
        {/* Header Section */}
        <div className="mb-10 md:mb-14">
          <h2
            className="font-['Clash_Grotesk_Display'] font-semibold text-[44px] md:text-[76px] leading-[1.2] text-white mb-4 tracking-normal"
          >
            Better than <br className="block md:hidden" /> Banks
          </h2>

          <p className="font-['Clash_Grotesk_Display'] font-normal text-white/90 text-lg md:text-[28px] leading-[1.4] max-w-[260px] md:max-w-none mx-auto opacity-90">
            Watch our quick intro video to learn more
          </p>
        </div>

        {/* Video/Image Container */}
        <div className="relative max-w-[1100px] mx-auto group">
          {/* aspect-[4/5] for mobile (portrait), aspect-[21/9] for desktop (cinematic) */}
          <div className="relative aspect-[4/5] md:aspect-[21/9] rounded-[35px] md:rounded-[45px] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.4)] border border-white/20 bg-[#1A1A1A]">
            
            <img 
              src="assets/bank.png" 
              alt="Plena Campaign"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              onError={(e) => { e.currentTarget.src = "https://via.placeholder.com/1200x600/1a1a1a/ffffff?text=Plena+Campaign"; }}
            />

            <div className="absolute inset-0 bg-black/10 transition-opacity group-hover:bg-black/5" />

            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 md:w-32 md:h-32 rounded-full bg-white/10 backdrop-blur-xl border border-white/30 flex items-center justify-center shadow-2xl transition-all duration-500 group-hover:scale-110">
                <div className="w-12 h-12 md:w-20 md:h-20 rounded-full bg-white flex items-center justify-center shadow-inner cursor-pointer">
                  <svg
                    className="w-6 h-6 md:w-10 md:h-10 text-[#7F4BC4] translate-x-0.5 md:translate-x-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}