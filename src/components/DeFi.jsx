import React from 'react';

export default function DeFiFeatures() {
  return (
    <section className="bg-black py-20 px-6 min-h-screen flex items-center relative ">
      
      {/* Background Glows */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-purple-600/10 blur-[120px] rounded-full -translate-y-1/2" />
      
      <div className="max-w-6xl mx-auto w-full relative z-10">
        {/* Heading */}
        <h2 className="text-white text-5xl md:text-7xl font-bold mb-16 md:mb-26 mt-10 leading-[1.1] tracking-tight text-left">
          Features Like Never <br /> Seen Before
        </h2>

        {/* The Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* 1. Swap Crypto - Tall Card */}
          <div className="md:row-span-2 bg-[#0F0F11] rounded-[40px] p-8 md:p-10 flex flex-col justify-between border border-white/5 min-h-[550px] md:min-h-[620px] relative ">
            <div className="relative w-full h-full flex justify-center items-center">
               <img 
                src="/assets/bitcoin-to-dollar.png"
                alt="Swap" 
                className="w-full h-auto max-w-[350px] object-contain relative z-10" 
                onError={(e) => e.target.style.display='none'}
               />
            </div>
            <div className="mt-8 relative z-20">
              <h3 className="text-white text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Swap Crypto <br /> with ease
              </h3>
              <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-[320px]">
                Swap smarter, not harder with Plena Finance - fast, safe, and competitive crypto swaps.
              </p>
            </div>
          </div>

          {/* 2. Lending Protocol - FIXED MOBILE SPACING */}
          {/* Changed min-h for mobile and added md:justify-between */}
          <div className="bg-[#0F0F11] rounded-[40px] p-8 md:p-10 border border-white/5 flex flex-col justify-end md:justify-between items-start min-h-[300px] md:min-h-[400px] relative ">
            <div className="relative bottom-5 md:bottom-15 left-20 md:left-32 w-full h-30 flex items-center pointer-events-none">
                <img 
                  src="/assets/Group 48095522.png"
                  alt="Lending" 
                  className="h-full w-auto object-contain transform scale-150 origin-center" 
                />
            </div>

            <div className="mt-2 md:mt-6 relative z-10">
              <h3 className="text-white text-3xl md:text-4xl font-bold mb-4">Lending Protocol</h3>
              <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
                Earn interest with Top Protocols in the Industry with Just a Tap!
              </p>
            </div>
          </div>

          {/* 3. Stake your assets - FIXED MOBILE SPACING */}
          {/* Changed min-h for mobile and added md:justify-between */}
          <div className="bg-[#0F0F11] rounded-[40px] p-8 md:p-10 border border-white/5 flex flex-col justify-end md:justify-between items-start min-h-[300px] md:min-h-[400px] relative ">
            <div className="relative bottom-5 md:bottom-15 left-20 md:left-32 w-full h-30 flex items-center pointer-events-none">
                <img 
                  src="/assets/market-rally 1.png"
                  alt="Stake" 
                  className="h-full w-auto object-contain transform scale-150 origin-center" 
                />
            </div>

            <div className="mt-2 md:mt-6 relative z-10">
              <h3 className="text-white text-3xl md:text-4xl font-bold mb-4">Stake your assets</h3>
              <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
                Earn interest with Top Protocols in the Industry with Just a Tap!
              </p>
            </div>
          </div>

          {/* 4. Liquidity Pools - Wide Card */}
          <div className="md:col-span-2 bg-[#0F0F11] rounded-[40px] p-8 md:p-10 border border-white/5 flex flex-col md:flex-row items-center justify-between gap-8 min-h-[350px] relative">
            <div className="max-w-md relative z-10">
              <h3 className="text-white text-3xl md:text-4xl font-bold mb-4">Liquidity Pools</h3>
              <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
                Enjoy the best exchange rates across all decentralized exchanges in one place!
              </p>
            </div>
            <div className="relative h-40 md:h-52 w-full md:w-64 flex justify-center md:justify-end items-center">
                <img src="/assets/mining-cart 1.png" alt="Liquidity" className="h-full w-auto object-contain" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}