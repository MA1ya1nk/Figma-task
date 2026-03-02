import React from "react";

export default function FasterTransactions() {
  return (
    <section className="w-full bg-black py-20 mb-0 px-6 flex justify-center items-center">
      
      {/* Main Dark Card */}
      <div className="relative w-full bg-black rounded-[40px] overflow-hidden min-h-[920px] flex items-center justify-center">

        {/* --- MOBILE MANUAL CONTROLS START --- */}
        {/* Adjust 'top' and 'left' (or 'right') below to move them manually on mobile */}
        
        {/* Mobile "Faster" line */}
        <div 
          className="md:hidden absolute z-30 flex items-center gap-2"
          style={{  bottom: "880px", left: "30%", transform: "translateX(-50%)" }} 
        >
          <div className="text-[#FFD700] text-5xl">⚡</div>
          <h2 className="text-white text-5xl font-bold tracking-tight">Faster</h2>
        </div>

        {/* Mobile "Transactions" line */}
        <div 
          className="md:hidden absolute z-30"
          style={{ left: "60%", bottom: "820px", transform: "translateX(-50%)" }}
        >
          <h2 className="text-white text-5xl font-bold tracking-tight">Transactions</h2>
        </div>
        {/* --- MOBILE MANUAL CONTROLS END --- */}


        {/* LEFT TEXT - (Untouched Desktop Logic) */}
        <div className="absolute left-[19%] top-40 translate-y-1/2 flex items-center gap-1 z-10">
          <div className="text-[#FFD700] text-7xl">⚡</div>
          <h2 className="text-white text-15xl md:text-7xl font-bold tracking-tight">
            Faster
          </h2>
        </div>

        {/* PHONE CENTER — (Untouched Desktop Logic) */}
        <div className="relative z-20 flex items-end justify-center" style={{ height: "820px" }}>
          <img
            src="/assets/Graphite.png"
            alt="Bridge Phone"
            className="h-full w-auto object-contain drop-shadow-2xl"
            style={{ maxHeight: "820px" }}
          />
        </div>

        {/* RIGHT TEXT - (Untouched Desktop Logic) */}
        <div className="absolute right-[9%] top-160 -translate-y-1/2 z-10">
          <h2 className="text-white text-15xl md:text-7xl font-bold tracking-tight">
            Transactions
          </h2>
        </div>

        {/* Glow Effects */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/10 blur-[120px] rounded-full"></div>

      </div>
    </section>
  );
}