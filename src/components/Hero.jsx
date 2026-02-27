// const GradientText = ({ children }) => (
//   <span style={{ background: "linear-gradient(91.6deg, #AFE2ED 0.62%, #A26AFF 99.17%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
//     {children}
//   </span>
// );

// export default function HeroSection() {
//   return (
//     <section className="relative min-h-screen bg-black overflow-hidden flex items-center">
//       <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 60% at 70% 40%, rgba(162,106,255,0.15) 0%, transparent 70%), radial-gradient(ellipse 50% 50% at 30% 60%, rgba(133,234,255,0.12) 0%, transparent 60%)" }} />
//       <div className="relative max-w-7xl mx-auto px-6 pt-40 pb-20 grid lg:grid-cols-2 gap-12 items-center w-full">
//         <div>
//           <div className="flex items-center gap-3 mb-6">
//             <span className="px-3 py-1 rounded-full text-xs font-semibold text-white/70 border border-white/20 bg-white/5">Introducing Plena 2.0 · EIP-4337 Account Abstraction</span>
//           </div>
//           <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-none mb-6 text-white" style={{ fontFamily: "Georgia, serif", letterSpacing: "-0.02em" }}>
//             Be Your<br /><GradientText>Own Bank</GradientText>
//           </h1>
//           <p className="text-white/70 text-lg mb-8 max-w-lg leading-relaxed">Introducing Plena 2.0, Self-Custodial Smart Wallet with EIP-4337: Account Abstraction</p>
          
//           <div className="flex gap-4 text-sm">
//             <button className="px-4 py-2 rounded-lg border border-white/20 text-white/70 hover:text-white hover:border-white/40 transition-all"><GradientText>Get the App</GradientText></button>
//             <button className="px-4 py-2 rounded-lg text-white/60 hover:text-white flex items-center gap-2 transition-all">
//               <span className="w-4 h-4 rounded-full border border-white/30 flex items-center justify-center text-[8px]">▶</span>Watch Intro
//             </button>
//           </div>
//         </div>
       
       
//       </div>

      
//     </section>
//   );
// }


// import React from "react";

// export default function Hero() {
//   return (
//     <section className="relative w-full bg-black overflow-hidden">

//       {/* Top Gradient Announcement */}
//       <div className="w-full text-center text-sm py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white">
//         Earn huge rewards on app referrals. <span className="underline cursor-pointer">Read the announcement</span>
//       </div>

//       <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20 flex flex-col lg:flex-row items-center">

//         {/* LEFT CONTENT */}
//         <div className="flex-1 text-white z-10">

//           <h1 className="text-[64px] font-bold leading-[72px]">
//             Be Your <br />
//             Own Bank
//           </h1>

//           <p className="mt-6 text-gray-400 max-w-[420px]">
//             Introducing Plena 2.0, Self-Custodial Smart Wallet with
//             EIP-4337: Account Abstraction
//           </p>

//           {/* Buttons */}
//           <div className="flex items-center gap-6 mt-8">

//             <button className="px-6 py-3 rounded-xl border border-purple-500 bg-gradient-to-r from-purple-500 to-blue-500 text-white">
//               Get the App
//             </button>

//             <button className="flex items-center gap-2 text-gray-300">
//               <div className="w-6 h-6 rounded-full border border-gray-400 flex items-center justify-center">
//                 ▶
//               </div>
//               Watch Intro
//             </button>

//           </div>

//           {/* Stats */}
//           <div className="flex gap-16 mt-16 text-gray-300">

//             <div>
//               <h3 className="text-2xl font-bold text-white">140K+</h3>
//               <p className="text-sm">Users</p>
//             </div>

//             <div>
//               <h3 className="text-2xl font-bold text-white">200K+</h3>
//               <p className="text-sm">Strong Community</p>
//             </div>

//             <div>
//               <h3 className="text-2xl font-bold text-white">20M+</h3>
//               <p className="text-sm">Transactions</p>
//             </div>

//           </div>

//         </div>


//         {/* RIGHT IMAGE SECTION */}
//         <div className="flex-1 relative h-[550px] hidden lg:block">

//           {/* LEFT PHONE IMAGE */}
//           <img
//             src="src/assets/phone/left.png"
//             alt="phone"
//             className="absolute"
//             style={{
//               width: "705px",
//               height: "546px",
//               top: "65px",
//               left: "0px",
//               transform: "rotate(-120deg)"
//             }}
//           />

//           {/* RIGHT PHONE IMAGE */}
//           <img
//             src="src/assets/phone/right.png"
//             alt="phone"
//             className="absolute"
//             style={{
//               width: "635px",
//               height: "492px",
//               top: "130px",
//               left: "200px",
//               transform: "rotate(-60deg)"
//             }}
//           />

//         </div>

//       </div>

//     </section>
//   );
// }

import React from "react";

export default function Hero() {
  return (
    <section className="bg-black text-white overflow-hidden">

      {/* Main Container */}
      <div className="max-w-[1300px] mx-auto px-6 pt-24 pb-20 grid grid-cols-1 lg:grid-cols-2 items-center">

        {/* LEFT CONTENT */}
        <div>

          <h1 className="text-[72px] font-bold leading-[78px]">
            Be Your <br />
            Own Bank
          </h1>

          <p className="text-gray-400 mt-6 max-w-[420px]">
            Introducing Plena 2.0, Self-Custodial Smart Wallet with
            EIP-4337: Account Abstraction
          </p>

          {/* Buttons */}
          <div className="flex items-center gap-6 mt-8">
            <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500">
              Get the App
            </button>

            <button className="flex items-center gap-2 text-gray-300">
              <span className="border border-gray-500 rounded-full w-6 h-6 flex items-center justify-center text-xs">
                ▶
              </span>
              Watch Intro
            </button>
          </div>

          {/* Stats */}
          <div className="flex justify-start gap-20 mt-16">

            <div className="text-center">
              <h3 className="text-2xl font-bold">140K+</h3>
              <p className="text-gray-400 text-sm">Users</p>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold">200K+</h3>
              <p className="text-gray-400 text-sm">Strong Community</p>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold">20M+</h3>
              <p className="text-gray-400 text-sm">Transactions</p>
            </div>

          </div>

        </div>

        {/* RIGHT IMAGE SECTION */}
        <div className="relative h-[500px] mt-20 lg:mt-0">

  {/* Left Phone */}
  <img
    src="src/assets/phone/left.png"
    alt="phone"
    className="absolute w-[500px] z-20"
    style={{
      transform: "rotate(10deg)",
      left: "0px",
      top: "0px",
    }}
  />

  {/* Right Phone */}
  <img
    src="src/assets/phone/right.png"
    alt="phone"
    className="absolute w-[460px] z-10"
    style={{
      transform: "rotate(-10deg)",
      right: "20px",
      top: "30px",
    }}
  />

</div>

      </div>
    </section>
  );
}