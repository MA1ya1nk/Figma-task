// export default function BetterThanBanks() {
//   return (
//     <section
//       className="relative py-24 overflow-hidden"
//       style={{ background: "#7F4BC4" }}
//     >
//       <div
//         className="absolute inset-0 pointer-events-none"
//         style={{
//           background:
//             "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(255,255,255,0.05) 0%, transparent 70%)",
//         }}
//       />

//       {/* only changed here */}
//       <div className="relative max-w-7xl mx-auto px-6 grid gap-12 items-center justify-items-center text-center">
        
//         <div>
//           <h2
//             className="text-5xl sm:text-6xl font-bold text-white mb-4"
//             style={{ fontFamily: "Georgia, serif" }}
//           >
//             Better than Banks
//           </h2>

//           <p className="text-white/80 text-lg mb-8">
//             Watch our quick intro video to learn more
//           </p>

//           <div
//             className="relative rounded-3xl overflow-hidden cursor-pointer group mx-auto"
//             style={{ background: "rgba(41,42,40,0.6)" }}
//           >
//             <div className="aspect-video flex items-center justify-center bg-gradient-to-br from-white/5 to-white/10">
//               <div className="w-20 h-20 rounded-full border-2 border-white/60 flex items-center justify-center group-hover:scale-110 transition-transform">
//                 <svg
//                   className="w-8 h-8 text-white ml-1"
//                   fill="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path d="M8 5v14l11-7z" />
//                 </svg>
//               </div>
//             </div>
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }

export default function BetterThanBanks() {
  return (
    <section
      className="relative py-28 overflow-hidden"
      style={{ background: "#7F4BC4" }} // Exact Figma Purple
    >
      {/* Background radial glow for depth */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(255,255,255,0.12) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-[1300px] mx-auto px-6 text-center z-10">
        
        {/* Typography matched to your Figma Spec */}
        <div className="mb-14">
          <h2
            className="text-[60px] md:text-[85px] font-bold text-white mb-4 leading-[1.1] tracking-tight"
            style={{ fontFamily: "'Clash Grotesk Display', sans-serif" }}
          >
            Better than Banks
          </h2>

          <p className="text-white/90 text-xl md:text-2xl font-medium opacity-90">
            Watch our quick intro video to learn more
          </p>
        </div>

        {/* IMAGE CONTAINER - Designed for easy asset swapping */}
        <div className="relative max-w-[1100px] mx-auto group">
          <div className="relative aspect-[16/9] md:aspect-[21/9] rounded-[45px] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.4)] border border-white/20 bg-[#1A1A1A]">
            
            {/* ACTION: Put your image in public/assets/ 
              and change the filename below 
            */}
            <img 
              src="assets/bank.png" 
              alt="Plena Campaign"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              onError={(e) => { e.target.src = "https://via.placeholder.com/1200x600/1a1a1a/ffffff?text=Add+Image+to+public/assets/"; }}
            />

            {/* Subtle dark overlay to make the play button pop */}
            <div className="absolute inset-0 bg-black/10 transition-opacity group-hover:bg-black/5" />

            {/* PLAY BUTTON OVERLAY (Visual only) */}
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Outer Glow Ring */}
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-white/10 backdrop-blur-xl border border-white/30 flex items-center justify-center shadow-2xl transition-all duration-500 group-hover:scale-110">
                
                {/* Inner White Button */}
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white flex items-center justify-center shadow-inner cursor-pointer">
                  <svg
                    className="w-8 h-8 md:w-10 md:h-10 text-[#7F4BC4] translate-x-1"
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