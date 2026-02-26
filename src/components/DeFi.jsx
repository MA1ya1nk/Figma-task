import React from 'react';
import swapImage from '../assets/bitcoin-to-dollar.png';
import miniImage from '../assets/mining-cart 1.png';
import marketImage from '../assets/market-rally 1.png';
import secondImage from '../assets/Group 48095522.png';

export default function DeFiFeatures() {
  // EDIT YOUR IMAGE LINKS HERE
  const imageMap = {
    swap: "https://your-image-link.com/swap-3d.png",
    lending: "https://your-image-link.com/shield-3d.png",
    stake: "https://your-image-link.com/chart-3d.png",
    liquidity: "https://your-image-link.com/cart-3d.png",
  };

  return (
    <section className="bg-black py-20 px-6 min-h-screen flex items-center relative overflow-hidden">
      
      {/* Background Glows (Exact Figma style) */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-purple-600/10 blur-[120px] rounded-full -translate-y-1/2" />
      
      <div className="max-w-6xl mx-auto w-full relative z-10">
        {/* Heading */}
        <h2 className="text-white text-5xl md:text-6xl font-bold mb-16 leading-[1.1] tracking-tight">
          Features Like Never <br /> Seen Before
        </h2>

        {/* The Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          
          {/* 1. Swap Crypto - Tall Card */}
          <div className="md:row-span-2 bg-[#0F0F11] rounded-[40px] p-10 flex flex-col justify-between border border-white/5 min-h-[620px]">
            <div className="flex justify-center items-center h-full">
               <img 
                src={swapImage}
                alt="Swap" 
                className="w-4/5 object-contain" 
                onError={(e) => e.target.style.display='none'} // Hides if link is broken
               />
            </div>
            <div>
              <h3 className="text-white text-3xl font-bold mb-4 leading-tight">Swap Crypto <br /> with ease</h3>
              <p className="text-gray-400 text-base leading-relaxed max-w-[280px]">
                Swap smarter, not harder with Plena Finance - fast, safe, and competitive crypto swaps.
              </p>
            </div>
          </div>

          {/* 2. Lending Protocol - Small Card */}
          <div className="bg-[#0F0F11] rounded-[40px] p-8 border border-white/5 flex flex-col items-start gap-4">
            <div className="h-20 w-20 flex items-center">
                <img src={secondImage} alt="Lending" className="h-full object-contain" />
            </div>
            <div>
              <h3 className="text-white text-2xl font-bold mb-2">Lending Protocol</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Earn interest with Top Protocols in the Industry with Just a Tap!
              </p>
            </div>
          </div>

          {/* 3. Stake your assets - Small Card */}
          <div className="bg-[#0F0F11] rounded-[40px] p-8 border border-white/5 flex flex-col items-start gap-4">
            <div className="h-20 w-20 flex items-center">
                <img src={marketImage} alt="Stake" className="h-full object-contain" />
            </div>
            <div>
              <h3 className="text-white text-2xl font-bold mb-2">Stake your assets</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Earn interest with Top Protocols in the Industry with Just a Tap!
              </p>
            </div>
          </div>

          {/* 4. Liquidity Pools - Wide Card */}
          <div className="md:col-span-2 bg-[#0F0F11] rounded-[40px] p-10 border border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xs">
              <h3 className="text-white text-2xl font-bold mb-2">Liquidity Pools</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Enjoy the best exchange rates across all decentralized exchanges in one place!
              </p>
            </div>
            <div className="h-32 w-48 flex justify-end items-center">
                <img src={miniImage} alt="Liquidity" className="h-full object-contain" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}