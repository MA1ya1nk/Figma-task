// import React from 'react';

// export default function FasterTransactions() {
//   return (
//     <section className="w-full bg-[#B696F8] py-20 px-6 flex justify-center items-center">
//       {/* Main Dark Card */}
//       <div className="relative w-full max-w-6xl bg-[#0B0B0F] rounded-[40px] overflow-hidden min-h-[500px] flex flex-col md:flex-row items-center justify-between px-10 md:px-20">
        
//         {/* Left Side: Text Content */}
//         <div className="z-10 py-16 md:py-0">
//           <div className="flex items-center gap-3 mb-4">
//             {/* Lightning Bolt Icon */}
//             <div className="text-[#FFD700] text-4xl">
//               <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
//                 <path d="M5.52.359A.5.5 0 0 1 6 0h4a.5.5 0 0 1 .474.658L8.694 6H12.5a.5.5 0 0 1 .395.807l-7 9a.5.5 0 0 1-.873-.454L6.823 9.5H3.5a.5.5 0 0 1-.48-.641l2.5-8.5z"></path>
//               </svg>
//             </div>
//             <h2 className="text-white text-5xl md:text-7xl font-bold tracking-tight">
//               Faster
//             </h2>
//           </div>
//           <h2 className="text-white text-5xl md:text-7xl font-bold tracking-tight">
//             Transactions
//           </h2>
//         </div>

//         {/* Right Side: Phone Mockup */}
//         <div className="relative mt-10 md:mt-0 md:absolute md:left-1/2 md:-translate-x-1/2 bottom-[-20px] lg:bottom-[-50px]">
//           <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[8px] rounded-[2.5rem] h-[550px] w-[270px] shadow-2xl">
//             {/* Speaker/Notch */}
//             <div className="h-[25px] w-[100px] bg-gray-800 top-0 left-1/2 -translate-x-1/2 absolute rounded-b-xl"></div>
//             {/* Inner Screen Content */}
//             <div className="rounded-[2rem] overflow-hidden w-full h-full bg-[#161618] p-4 flex flex-col">
//               {/* Mock UI Header */}
//               <div className="flex justify-between text-white text-[10px] mb-6 pt-2">
//                 <span>Swap</span>
//                 <span>Earn</span>
//                 <span className="font-bold border-b border-purple-500">Bridge</span>
//               </div>
              
//               {/* Mock UI Card */}
//               <div className="bg-[#1C1C1E] rounded-xl p-3 border border-white/5 mb-3">
//                 <p className="text-gray-400 text-[10px] mb-2">From</p>
//                 <div className="flex justify-between items-center text-white text-xs">
//                   <div className="flex items-center gap-1 bg-black/20 p-1 rounded-lg">Polygon</div>
//                   <span>12.3524</span>
//                 </div>
//               </div>

//               {/* Mock UI Button */}
//               <div className="mt-auto mb-4 bg-[#7F4BC4] text-white py-3 rounded-xl text-center text-sm font-semibold">
//                 Confirm
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Decorative Background Glows */}
//         <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/20 blur-[100px] rounded-full"></div>
//         <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/10 blur-[100px] rounded-full"></div>
//       </div>
//     </section>
//   );
// }



import React from "react";

export default function FasterTransactions() {
  return (
    <section className="w-full bg-black py-20 px-6 flex justify-center items-center">
      
      {/* Main Dark Card */}
      <div className="relative w-full bg-black rounded-[40px] overflow-hidden min-h-[520px] flex items-center justify-center">

        {/* LEFT TEXT */}
        <div className="absolute left-[22%] top-20 -translate-y-1/2 flex items-center gap-1 z-10">
          <div className="text-[#FFD700] text-7xl">⚡</div>

          <h2 className="text-white text-8xl md:text-7xl font-bold tracking-tight">
            Faster
          </h2>
        </div>


       {/* PHONE CENTER — replace src with your actual asset path */}
<div className="relative z-20 flex items-end justify-center" style={{ height: "620px" }}>
  <img
    src="src/assets/Graphite.png"
    alt="Bridge Phone"
    className="h-full w-auto object-contain drop-shadow-2xl"
    style={{ maxHeight: "620px" }}
  />
</div>

        {/* RIGHT TEXT */}
        <div className="absolute right-[14%] top-100 -translate-y-1/2 z-10">
          <h2 className="text-white text-6xl md:text-7xl font-bold tracking-tight">
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