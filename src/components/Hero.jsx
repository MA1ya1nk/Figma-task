import React from "react";

export default function Hero() {
  const navLinkStyle = {
    fontFamily: "'Clash Grotesk Display', sans-serif",
    fontWeight: "400",
    fontSize: "20px",
    lineHeight: "110%",
    letterSpacing: "0px",
  };

  return (
    <section className="relative w-full bg-black text-white pt-48 pb-24 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-[-10%] w-[60%] h-[60%] bg-purple-600/15 blur-[140px] rounded-full pointer-events-none" />
      
      <div className="max-w-[85rem] mx-auto px-8 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-4">
          
          {/* LEFT CONTENT - All text and buttons are now significantly larger */}
          <div className="flex flex-col items-start z-30">
            <h1 className="text-[80px] md:text-[110px] font-bold leading-[0.95] tracking-tight mb-10">
              Be Your <br />
              Own Bank
            </h1>

            <div className="mb-10 flex flex-col gap-2">
               <p className="text-white/50 text-2xl md:text-3xl max-w-[650px] leading-[1.2]">
                Introducing <span className="text-white/80">Plena 2.0</span>, Self-Custodial Smart 
               </p>
               <p className="text-white/50 text-2xl md:text-3xl max-w-[600px] leading-[1.2]">
                Wallet with <span className="text-white/80 border-b border-white/30">EIP-4337: Account Abstraction</span>
               </p>
            </div>

            {/* Huge Action Buttons */}
            <div className="flex items-center gap-10 mb-24">
              <button className="px-12 py-5 rounded-2xl bg-[#161618] border border-white/10 text-white font-bold text-xl hover:bg-white/5 transition-all">
                Get the App
              </button>

              <button className="flex items-center gap-4 text-white/80 hover:text-white group transition-colors">
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white/10 transition-all">
                  <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-purple-500 border-b-[8px] border-b-transparent ml-1" />
                </div>
                <span style={navLinkStyle} className="text-2xl font-medium underline underline-offset-8 decoration-white/20">Watch Intro</span>
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE SECTION - Huge Phones */}
          <div className="relative flex justify-end items-center h-[700px]">
            {/* The "P" Logo Glow Background */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/5 blur-[100px] rounded-full" />
            
            {/* Secondary Phone (Back) - Scaled to w-[550px] */}
            <img
              src="/assets/phone/right.png"
              alt="Plena App Interface"
              className="absolute w-[450px] md:w-[650px] z-10 translate-x-20 translate-y-10 rotate-[12deg] opacity-90 transition-transform hover:scale-105 duration-700"
            />
            {/* Primary Phone (Front) - Scaled to w-[550px] */}
            <img
              src="/assets/phone/left.png"
              alt="Plena App Main"
              className="absolute w-[450px] md:w-[650px] z-20 -translate-x-24 -rotate-[6deg] drop-shadow-[0_50px_50px_rgba(0,0,0,0.8)] transition-transform hover:scale-105 duration-700"
            />
          </div>
        </div>

        {/* BOTTOM STATS - Fixed Alignment (Left Aligned, NOT centered) */}
        <div className="flex flex-row justify-center gap-24 md:gap-40 mt-10">
          <div className="flex flex-col items-start">
            <h3 className="text-5xl md:text-6xl font-bold mb-3 tracking-tighter">140K+</h3>
            <p className="text-white/40 text-xl md:text-2xl font-medium">Users</p>
          </div>

          <div className="flex flex-col items-start">
            <h3 className="text-5xl md:text-6xl font-bold mb-3 tracking-tighter">200K+</h3>
            <p className="text-white/40 text-xl md:text-2xl font-medium">Strong Community</p>
          </div>

          <div className="flex flex-col items-start">
            <h3 className="text-5xl md:text-6xl font-bold mb-3 tracking-tighter">20M+</h3>
            <p className="text-white/40 text-xl md:text-2xl font-medium">Transactions</p>
          </div>
        </div>
      </div>
    </section>
  );
}