// const GradientText = ({ children }) => (
//   <span style={{ background: "linear-gradient(91.6deg, #AFE2ED 0.62%, #A26AFF 99.17%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
//     {children}
//   </span>
// );

// export default function CTASection() {
//   return (
//     <section className="py-24 overflow-hidden bg-black">
//       <div className="max-w-7xl mx-auto px-6">
//         <div className="relative rounded-3xl p-12 overflow-hidden" style={{ background: "linear-gradient(265.43deg, rgba(220,191,224,0.1) 2.36%, rgba(154,170,170,0.1) 94.29%)", border: "1px solid rgba(255,255,255,0.1)", backdropFilter: "blur(67px)" }}>
//           <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full opacity-30 pointer-events-none" style={{ background: "radial-gradient(circle, rgba(133,234,255,0.4) 0%, transparent 70%)", filter: "blur(40px)" }} />
//           <div className="relative grid lg:grid-cols-2 gap-12 items-center">
//             <div>
//               <h2 className="text-4xl sm:text-5xl font-bold mb-4" style={{ fontFamily: "Georgia, serif" }}>
//                 <GradientText>Start building your portfolio with just $1</GradientText>
//               </h2>
//               <p className="text-white/70 text-2xl mb-8">Over 100,000+ Crypto to choose from, Download the app now!</p>
//              <div className="flex flex-wrap gap-4">
//   {/* App Store Button */}
//   <button className="flex items-center gap-3 px-7 py-3 bg-black rounded-2xl border border-white/10 hover:bg-[#161618] transition-all duration-300">
//     {/* Clean Apple SVG */}
//     <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
//       <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.1 2.48-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.31-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.24-1.99 1.1-3.15-1.02.04-2.25.68-2.98 1.54-.66.76-1.24 1.93-1.1 3.07 1.13.09 2.25-.63 2.98-1.46z" />
//     </svg>
//     <div className="text-left leading-tight">
//       <div className="text-white/60 text-[10px] uppercase font-medium tracking-wider">Download on the</div>
//       <div className="text-white text-xl font-bold">App Store</div>
//     </div>
//   </button>

//   {/* Play Store Button */}
//   <button className="flex items-center gap-3 px-7 py-3 bg-black rounded-2xl border border-white/10 hover:bg-[#161618] transition-all duration-300">
//     {/* Clean Play Store SVG */}
//     <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
//       <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L18.66,16.19C19.34,16.58 19.34,17.56 18.66,17.95L15.42,19.82L14.4,12.71L16.81,15.12M14.4,11.29L15.42,4.18L18.66,6.05C19.34,6.44 19.34,7.42 18.66,7.81L16.81,8.88L14.4,11.29M4.54,2.15L13.69,11.29L14.4,12L13.69,12.71L4.54,21.85L13.69,12.71L14.4,12L13.69,11.29L4.54,2.15Z" />
//     </svg>
//     <div className="text-left leading-tight">
//       <div className="text-white/60 text-[10px] uppercase font-medium tracking-wider">Download on the</div>
//       <div className="text-white text-xl font-bold">Play Store</div>
//     </div>
//   </button>
// </div>
//             </div>
//             <div className="flex justify-center">
//               <div className="w-48 sm:w-56 aspect-[9/19] rounded-[2.5rem] border border-white/20 overflow-hidden" style={{ background: "linear-gradient(135deg, #0a0a14, #14041e)", boxShadow: "0 0 60px rgba(162,106,255,0.3)" }}>
//                 <div className="mx-auto w-16 h-5 bg-black rounded-b-xl mt-2"/>
//                 <div className="p-3 pt-4">
//                   <p className="text-white/40 text-xs mb-2">Portfolio</p>
//                   <div className="space-y-2">
//                     {[["BTC", "+12.4%"], ["ETH", "+8.2%"], ["MATIC", "+34.1%"]].map(([tok, chg]) => (
//                       <div key={tok} className="flex justify-between items-center bg-white/5 rounded-xl p-2 text-xs text-white">
//                         <span>{tok}</span><span style={{ color: "#4ade80" }}>{chg}</span>
//                       </div>
//                     ))}
//                   </div>
//                   <div className="mt-4 p-2 rounded-xl text-center text-xs font-bold text-black" style={{ background: "linear-gradient(91.6deg, #AFE2ED, #A26AFF)" }}>Trade Now</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }





const GradientText = ({ children }) => (
  <span style={{ background: "linear-gradient(91.6deg, #AFE2ED 0.62%, #A26AFF 99.17%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
    {children}
  </span>
);

export default function CTASection() {
  return (
    <section className="py-8 lg:py-24 overflow-hidden bg-black">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="relative rounded-3xl p-6 lg:p-12 overflow-hidden" style={{ background: "linear-gradient(265.43deg, rgba(220,191,224,0.1) 2.36%, rgba(154,170,170,0.1) 94.29%)", border: "1px solid rgba(255,255,255,0.1)", backdropFilter: "blur(67px)" }}>
          <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full opacity-30 pointer-events-none" style={{ background: "radial-gradient(circle, rgba(133,234,255,0.4) 0%, transparent 70%)", filter: "blur(40px)" }} />
          
          <div className="relative flex flex-col lg:grid lg:grid-cols-2 gap-2 lg:gap-12 items-center">
            
            {/* TEXT CONTENT */}
            <div className="text-center lg:text-left order-1">
              <h2 className="text-[28px] lg:text-5xl font-bold mb-4" style={{ fontFamily: "Georgia, serif", lineHeight: "1.2" }}>
                <GradientText>Start building your portfolio with just $1</GradientText>
              </h2>
              <p className="text-white/70 text-sm lg:text-2xl mb-6 lg:mb-8 max-w-[300px] lg:max-w-none mx-auto lg:mx-0">
                Buy BTC, ETH, Matic, & 100,000+ crypto Assets across Multiple Chains with Ease
              </p>
            </div>

            {/* RIGHT IMAGE PART - Height fixed to remove huge space on mobile */}
            <div className="relative flex justify-center items-center h-[260px] lg:h-[500px] w-full order-2 mb-4 lg:mb-0">
              <img 
                src="/assets/phone/right.png" 
                alt="" 
                className="absolute w-[260px] lg:w-[600px] z-10 translate-x-10 lg:translate-x-25 rotate-[6deg] opacity-70"
              />
              <img 
                src="/assets/phone/left.png" 
                alt="" 
                className="absolute w-[260px] lg:w-[600px] z-20 -translate-x-6 lg:-translate-x-10 translate-y-4 lg:translate-y-10 -rotate-[4deg] drop-shadow-[0_25px_50px_rgba(0,0,0,0.5)]"
              />
              {/* Coin image removed on mobile via hidden lg:block */}
              <img 
                src="/assets/temp.png" 
                alt="" 
                className="hidden lg:block absolute w-[200px] z-30 -right-4 top-50"
              />
            </div>

            {/* BUTTON SECTION - Full width on mobile to match Figma */}
            <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-3 order-3 w-full lg:col-start-1">
              <button className="flex items-center justify-center lg:justify-start gap-3 px-7 py-3 bg-black rounded-2xl border border-white/10 hover:bg-[#161618] transition-all duration-300 w-full lg:w-auto">
                <svg className="w-6 h-6 lg:w-7 lg:h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.1 2.48-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.31-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.24-1.99 1.1-3.15-1.02.04-2.25.68-2.98 1.54-.66.76-1.24 1.93-1.1 3.07 1.13.09 2.25-.63 2.98-1.46z" />
                </svg>
                <div className="text-left leading-tight">
                  <div className="text-white/60 text-[8px] lg:text-[10px] uppercase font-medium tracking-wider">Download on the</div>
                  <div className="text-white text-lg lg:text-xl font-bold">App Store</div>
                </div>
              </button>

              <button className="flex items-center justify-center lg:justify-start gap-3 px-7 py-3 bg-black rounded-2xl border border-white/10 hover:bg-[#161618] transition-all duration-300 w-full lg:w-auto">
                <svg className="w-6 h-6 lg:w-7 lg:h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L18.66,16.19C19.34,16.58 19.34,17.56 18.66,17.95L15.42,19.82L14.4,12.71L16.81,15.12M14.4,11.29L15.42,4.18L18.66,6.05C19.34,6.44 19.34,7.42 18.66,7.81L16.81,8.88L14.4,11.29M4.54,2.15L13.69,11.29L14.4,12L13.69,12.71L4.54,21.85L13.69,12.71L14.4,12L13.69,11.29L4.54,2.15Z" />
                </svg>
                <div className="text-left leading-tight">
                  <div className="text-white/60 text-[8px] lg:text-[10px] uppercase font-medium tracking-wider">Download on the</div>
                  <div className="text-white text-lg lg:text-xl font-bold">Play Store</div>
                </div>
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}