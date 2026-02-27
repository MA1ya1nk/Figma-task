// // import React from 'react';
// // import swapImage from '../assets/bitcoin-to-dollar.png';
// // import miniImage from '../assets/mining-cart 1.png';
// // import marketImage from '../assets/market-rally 1.png';
// // import secondImage from '../assets/Group 48095522.png';

// // export default function DeFiFeatures() {
// //   // EDIT YOUR IMAGE LINKS HERE
// //   const imageMap = {
// //     swap: "https://your-image-link.com/swap-3d.png",
// //     lending: "https://your-image-link.com/shield-3d.png",
// //     stake: "https://your-image-link.com/chart-3d.png",
// //     liquidity: "https://your-image-link.com/cart-3d.png",
// //   };

// //   return (
// //     <section className="bg-black py-20 px-6 min-h-screen flex items-center relative overflow-hidden">
      
// //       {/* Background Glows (Exact Figma style) */}
// //       <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-purple-600/10 blur-[120px] rounded-full -translate-y-1/2" />
      
// //       <div className="max-w-6xl mx-auto w-full relative z-10">
// //         {/* Heading */}
// //         <h2 className="text-white text-5xl md:text-6xl font-bold mb-26 mt-10 leading-[1.1] tracking-tight">
// //           Features Like Never <br /> Seen Before
// //         </h2>

// //         {/* The Grid Layout */}
// //         <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          
// //           {/* 1. Swap Crypto - Tall Card */}
// //           <div className="md:row-span-2 bg-[#0F0F11] rounded-[40px] p-10 flex flex-col justify-between border border-white/5 min-h-[620px]">
// //             <div className="flex justify-center items-center h-full">
// //                <img 
// //                 src={swapImage}
// //                 alt="Swap" 
// //                 className="w-100 object-contain" 
// //                 onError={(e) => e.target.style.display='none'} // Hides if link is broken
// //                />
// //             </div>
// //             <div>
// //               <h3 className="text-white text-5xl font-bold mb-4 leading-tight">Swap Crypto <br /> with ease</h3>
// //               <p className="text-gray-400 text-base leading-relaxed max-w-[280px]">
// //                 Swap smarter, not harder with Plena Finance - fast, safe, and competitive crypto swaps.
// //               </p>
// //             </div>
// //           </div>

// //           {/* 2. Lending Protocol - Small Card */}
// //           <div className="bg-[#0F0F11] rounded-[40px] p-8 border border-white/5 flex flex-col items-start gap-4">
// //             <div className="h-20 w-20 flex items-center">
// //                 <img src={secondImage} alt="Lending" className="h-full object-contain" />
// //             </div>
// //             <div>
// //               <h3 className="text-white text-2xl font-bold mb-2">Lending Protocol</h3>
// //               <p className="text-gray-400 text-sm leading-relaxed">
// //                 Earn interest with Top Protocols in the Industry with Just a Tap!
// //               </p>
// //             </div>
// //           </div>

// //           {/* 3. Stake your assets - Small Card */}
// //           <div className="bg-[#0F0F11] rounded-[40px] p-8 border border-white/5 flex flex-col items-start gap-4">
// //             <div className="h-20 w-20 flex items-center">
// //                 <img src={marketImage} alt="Stake" className="h-full object-contain" />
// //             </div>
// //             <div>
// //               <h3 className="text-white text-2xl font-bold mb-2">Stake your assets</h3>
// //               <p className="text-gray-400 text-sm leading-relaxed">
// //                 Earn interest with Top Protocols in the Industry with Just a Tap!
// //               </p>
// //             </div>
// //           </div>

// //           {/* 4. Liquidity Pools - Wide Card */}
// //           <div className="md:col-span-2 bg-[#0F0F11] rounded-[40px] p-10 border border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
// //             <div className="max-w-xs">
// //               <h3 className="text-white text-2xl font-bold mb-2">Liquidity Pools</h3>
// //               <p className="text-gray-400 text-sm leading-relaxed">
// //                 Enjoy the best exchange rates across all decentralized exchanges in one place!
// //               </p>
// //             </div>
// //             <div className="h-32 w-48 flex justify-end items-center">
// //                 <img src={miniImage} alt="Liquidity" className="h-full object-contain" />
// //             </div>
// //           </div>

// //         </div>
// //       </div>
// //     </section>
// //   );
// // }




// import React from 'react';
// import swapImage from '../assets/bitcoin-to-dollar.png';
// import miniImage from '../assets/mining-cart 1.png';
// import marketImage from '../assets/market-rally 1.png';
// import secondImage from '../assets/Group 48095522.png';

// export default function DeFiFeatures() {
//   return (
//     <section className="bg-black py-20 px-6 min-h-screen flex items-center relative overflow-hidden">
      
//       {/* Background Glows */}
//       <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-purple-600/10 blur-[120px] rounded-full -translate-y-1/2" />
      
//       <div className="max-w-6xl mx-auto w-full relative z-10">
//         {/* Heading */}
//         <h2 className="text-white text-5xl md:text-7xl font-bold mb-16 md:mb-26 mt-10 leading-[1.1] tracking-tight text-left">
//           Features Like Never <br /> Seen Before
//         </h2>

//         {/* The Grid Layout */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
//           {/* 1. Swap Crypto - Tall Card */}
//           <div className="md:row-span-2 bg-[#0F0F11] rounded-[40px] p-8 md:p-10 flex flex-col justify-between border border-white/5 min-h-[550px] md:min-h-[620px]">
//             <div className="flex justify-center items-center h-full">
//                <img 
//                 src={swapImage}
//                 alt="Swap" 
//                 className="w-full max-w-[300px] object-contain" 
//                 onError={(e) => e.target.style.display='none'}
//                />
//             </div>
//             <div className="mt-8">
//               <h3 className="text-white text-4xl md:text-5xl font-bold mb-6 leading-tight">
//                 Swap Crypto <br /> with ease
//               </h3>
//               <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-[320px]">
//                 Swap smarter, not harder with Plena Finance - fast, safe, and competitive crypto swaps.
//               </p>
//             </div>
//           </div>

//           {/* 2. Lending Protocol - Small Card */}
//           <div className="bg-[#0F0F11] rounded-[40px] p-8 md:p-10 border border-white/5 flex flex-col justify-between items-start min-h-[300px]">
//             <div className="h-20 w-20 flex items-center">
//                 <img src={secondImage} alt="Lending" className="w-100 h-full object-contain" />
//             </div>
//             <div className="mt-6">
//               <h3 className="text-white text-3xl md:text-4xl font-bold mb-4">Lending Protocol</h3>
//               <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
//                 Earn interest with Top Protocols in the Industry with Just a Tap!
//               </p>
//             </div>
//           </div>

//           {/* 3. Stake your assets - Small Card */}
//           <div className="bg-[#0F0F11] rounded-[40px] p-8 md:p-10 border border-white/5 flex flex-col justify-between items-start min-h-[300px]">
//             <div className="h-20 w-20 flex items-center">
//                 <img src={marketImage} alt="Stake" className="w-full h-full object-contain" />
//             </div>
//             <div className="mt-6">
//               <h3 className="text-white text-3xl md:text-4xl font-bold mb-4">Stake your assets</h3>
//               <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
//                 Earn interest with Top Protocols in the Industry with Just a Tap!
//               </p>
//             </div>
//           </div>

//           {/* 4. Liquidity Pools - Wide Card */}
//           <div className="md:col-span-2 bg-[#0F0F11] rounded-[40px] p-8 md:p-10 border border-white/5 flex flex-col md:flex-row items-center justify-between gap-8 min-h-[300px]">
//             <div className="max-w-md">
//               <h3 className="text-white text-3xl md:text-4xl font-bold mb-4">Liquidity Pools</h3>
//               <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
//                 Enjoy the best exchange rates across all decentralized exchanges in one place!
//               </p>
//             </div>
//             <div className="h-32 md:h-40 w-full md:w-48 flex justify-center md:justify-end items-center">
//                 <img src={miniImage} alt="Liquidity" className="h-full object-contain" />
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }



import React from 'react';
import swapImage from '../assets/bitcoin-to-dollar.png';
import miniImage from '../assets/mining-cart 1.png';
import marketImage from '../assets/market-rally 1.png';
import secondImage from '../assets/Group 48095522.png';

export default function DeFiFeatures() {
  return (
    <section className="bg-black py-20 px-6 min-h-screen flex items-center relative overflow-hidden">
      
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
          <div className="md:row-span-2 bg-[#0F0F11] rounded-[40px] p-8 md:p-10 flex flex-col justify-between border border-white/5 min-h-[550px] md:min-h-[620px] relative overflow-hidden">
            {/* Image Container: Manipulate position here */}
            <div className="relative w-full h-full flex justify-center items-center">
               <img 
                src={swapImage}
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

          {/* 2. Lending Protocol - Small Card */}
          <div className="bg-[#0F0F11] rounded-[40px] p-8 md:p-10 border border-white/5 flex flex-col justify-between items-start min-h-[400px] relative">
  
  {/* Image Container: Increased height from h-24 to h-48 and added scale */}
  <div className="relative bottom-15 left-32 w-full h-30 flex items-center pointer-events-none">
      <img 
        src={secondImage} 
        alt="Lending" 
        className="h-full w-auto object-contain transform scale-150 origin-center" 
      />
  </div>

  {/* Text Content */}
  <div className="mt-6 relative z-10">
    <h3 className="text-white text-3xl md:text-4xl font-bold mb-4">Lending Protocol</h3>
    <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
      Earn interest with Top Protocols in the Industry with Just a Tap!
    </p>
  </div>
</div>

          {/* 3. Stake your assets - Small Card */}
<div className="bg-[#0F0F11] rounded-[40px] p-8 md:p-10 border border-white/5 flex flex-col justify-between items-start min-h-[400px] relative">
  
  {/* Image Container: Increased height and added scale for a much larger visual */}
  {/* You can now adjust bottom and left without the image clipping or being too small */}
  <div className="relative bottom-15 left-32 w-full h-30 flex items-center pointer-events-none">
      <img 
        src={marketImage} 
        alt="Stake" 
        className="h-full w-auto object-contain transform scale-150 origin-center" 
      />
  </div>

  {/* Text Content: z-10 ensures text stays readable over the enlarged image */}
  <div className="mt-6 relative z-10">
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
            {/* Image Container: Manipulate position here */}
            <div className="relative h-40 md:h-52 w-full md:w-64 flex justify-center md:justify-end items-center">
                <img src={miniImage} alt="Liquidity" className="h-full w-auto object-contain" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}