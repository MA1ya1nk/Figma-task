import React from "react";

export default function Hero() {
  return (
    <section className="relative w-full bg-black text-white pt-36 md:pt-48 pb-12 md:pb-24 overflow-hidden">
      
      {/* Glow Effect */}
      <div className="absolute top-0 left-[-10%] w-[60%] h-[60%] bg-purple-600/15 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-[85rem] mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-4 md:gap-10">

          {/* LEFT TEXT */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            
            {/* MAIN TITLE - Updated with Decorative Image Container */}
            <div className="relative mb-4 md:mb-6">
              <h1 className="font-['Clash_Grotesk_Display'] font-semibold text-[42px] sm:text-[64px] lg:text-[117px] leading-[1.1] tracking-normal">
                Be Your <br />
                Own Bank
              </h1>
              {/* Decorative Squiggle Image */}
              <img 
                src="/assets/navbar.png" // Ensure this matches your asset name
                alt=""
                style={{
                  width: '251px',
                  height: '39.57px',
                  opacity: 1
                }}
                className="absolute left-0 -bottom-2 md:-bottom-4 pointer-events-none select-none hidden lg:block"
              />
              {/* Mobile version of squiggle for smaller screens */}
              <img 
                src="/assets/navbar.png"
                alt=""
                className="block lg:hidden w-[120px] h-auto mx-auto mt[-10px] ml-0 opacity-100"
              />
            </div>

            {/* SUBTEXT - Updated with Clash Grotesk Specs */}
            <div className="mb-6 md:mb-8 max-w-[600px] font-['Clash_Grotesk_Display'] font-normal">
              <p className="text-white/60 text-lg md:text-[28px] leading-[1.6]">
                Introducing <span className="text-white">Plena 2.0</span>, Self-Custodial Smart
              </p>
              <p className="text-white/60 text-lg md:text-[28px] leading-[1.6]">
                Wallet with{" "}
                <span className="text-white border-b border-white/30">
                  EIP-4337: Account Abstraction
                </span>
              </p>
            </div>

            {/* BUTTONS */}
            <div className="flex items-center gap-6 md:gap-10 mb-6 md:mb-24">
              <button className="px-6 md:px-12 py-3 md:py-5 rounded-xl md:rounded-2xl bg-[#161618] border border-white/10 text-white font-semibold md:text-xl hover:bg-white/5 transition">
                Get the App
              </button>

              <button className="flex items-center gap-3 text-white/80 hover:text-white transition">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 flex items-center justify-center">
                  <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-purple-500 border-b-[6px] border-b-transparent ml-1" />
                </div>
                <span className="text-sm md:text-xl underline underline-offset-4">
                  Watch Intro
                </span>
              </button>
            </div>
          </div>

          {/* PHONE IMAGES (Visuals remain same) */}
          <div className="relative flex justify-center lg:justify-end items-center h-[220px] sm:h-[260px] md:h-[600px] mt-2 mb-2 md:mt-0">
            <div className="absolute w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-purple-500/5 blur-[100px] rounded-full" />
            <img
              src="/assets/phone/right.png"
              alt="Plena App"
              className="absolute w-[450px] sm:w-[260px] md:w-[400px] lg:w-[650px] translate-x-10 md:translate-x-20  md:translate-y-10 rotate-[2deg] opacity-90"
            />
            <img
              src="/assets/phone/left.png"
              alt="Plena Wallet"
              className="absolute w-[450px] sm:w-[260px] md:w-[400px] lg:w-[650px] -translate-x-10 -translate-y-5 md:-translate-x-24 -rotate-[4deg] drop-shadow-[0_40px_40px_rgba(0,0,0,0.8)]"
            />
          </div>
        </div>

        {/* STATS */}
        <div className="flex justify-center gap-6 md:gap-20 mt-6 md:mt-10 text-center font-['Clash_Grotesk_Display']">
          <div>
            <h3 className="text-xl md:text-5xl font-bold">140K+</h3>
            <p className="text-white/40 text-xs md:text-xl">Users</p>
          </div>
          <div>
            <h3 className="text-xl md:text-5xl font-bold">200K+</h3>
            <p className="text-white/40 text-xs md:text-xl">Strong Community</p>
          </div>
          <div>
            <h3 className="text-xl md:text-5xl font-bold">20M+</h3>
            <p className="text-white/40 text-xs md:text-xl">Transactions</p>
          </div>
        </div>
      </div>
    </section>
  );
}