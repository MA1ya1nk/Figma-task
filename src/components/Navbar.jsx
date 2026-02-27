// import { useState, useEffect } from "react";

// const GradientText = ({ children, className = "" }) => (
//   <span className={className} style={{ background: "linear-gradient(91.6deg, #AFE2ED 0.62%, #A26AFF 99.17%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
//     {children}
//   </span>
// );

// const PlenaLogo = () => (
//   <div className="flex items-center gap-2">
//     <img src="src/assets/main.png" className="h-5 w-auto" alt="Plena icon" />

//     <svg width="72" height="28" viewBox="0 0 72 28" fill="none" xmlns="http://www.w3.org/2000/svg">
//       <text x="0" y="18" fontFamily="'Helvetica Neue', Helvetica, Arial, sans-serif" fontSize="18" fontWeight="700" letterSpacing="0.5" fill="white">
//         plena
//       </text>
//       <text x="12" y="27" fontFamily="'Helvetica Neue', Helvetica, Arial, sans-serif" fontSize="7.5" fontWeight="500" letterSpacing="0.5" fill="white">
//         FINANCE
//       </text>
//     </svg>
//   </div>
// );

// export default function NavBar() {
//   const [scrolled, setScrolled] = useState(false);
//   useEffect(() => {
//     const handler = () => setScrolled(window.scrollY > 40);
//     window.addEventListener("scroll", handler);
//     return () => window.removeEventListener("scroll", handler);
//   }, []);

//   return (
//     <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-black/80 backdrop-blur-lg" : "bg-black/20 backdrop-blur-sm"}`}>
//       {/* Announcement bar */}
//       <div
//         className="w-full py-2 text-center text-sm text-white font-medium"
//         style={{ background: "linear-gradient(270.02deg, #3D3AE7 0.01%, #CB5EE7 99.34%)" }}
//       >
//         Earn huge rewards on app referrals.{" "}
//         <span className="underline cursor-pointer font-semibold">Read the announcement</span>
//       </div>

//       {/* Main nav */}
//       <div className="max-w-7xl mx-auto px-6 py-3.5 flex items-center justify-between">
//         {/* Logo */}
//         <div className="flex items-center">
//           <PlenaLogo />
//         </div>

//         {/* Nav links */}
//         <div className="hidden md:flex items-center gap-8 text-white/80 text-sm font-medium">
//           <a href="#" className="hover:text-white transition-colors">Earn</a>
//           <a href="#" className="hover:text-white transition-colors">DeFi</a>
//           <a href="#" className="hover:text-white transition-colors">Features</a>
//           <a href="#" className="hover:text-white transition-colors">Blog</a>
//         </div>

//         {/* CTA Button */}
//         <button
//           className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/30 text-sm font-medium text-white hover:bg-white/10 transition-all"
//         >
//           Get the App
//         </button>

//         {/* Mobile hamburger */}
//         <button className="md:hidden text-white">
//           <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
//             <line x1="3" y1="6" x2="21" y2="6"/>
//             <line x1="3" y1="12" x2="21" y2="12"/>
//             <line x1="3" y1="18" x2="21" y2="18"/>
//           </svg>
//         </button>
//       </div>
//     </nav>
//   );
// }


import { useState, useEffect } from "react";

const PlenaLogo = () => (
  <div className="flex items-center gap-3">
    {/* Scaled up the icon */}
    <img src="src/assets/main.png" className="h-8 w-auto" alt="Plena icon" />

    <div className="flex flex-col leading-none">
      <span className="text-white font-bold text-2xl tracking-tight">plena</span>
      <span className="text-white/80 font-medium text-[10px] tracking-[0.2em] mt-0.5">FINANCE</span>
    </div>
  </div>
);

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-black/90 backdrop-blur-xl border-b border-white/5" : "bg-transparent"
    }`}>
      
      {/* Announcement bar - Scaled for better legibility */}
      <div
        className="w-full py-3 text-center text-[15px] text-white font-medium"
        style={{ background: "linear-gradient(270deg, #3D3AE7 0%, #CB5EE7 100%)" }}
      >
        Earn huge rewards on app referrals.{" "}
        <span className="underline cursor-pointer font-bold ml-1">Read the announcement</span>
      </div>

      {/* Main nav - Increased max-width and vertical padding */}
      <div className="max-w-[1400px] mx-auto px-8 py-6 flex items-center justify-between">
        
        {/* Logo Section */}
        <div className="flex items-center">
          <PlenaLogo />
        </div>

        {/* Nav links - Increased font size and spacing */}
        <div className="hidden lg:flex items-center gap-12 text-white/90 text-lg font-medium">
          <a href="#" className="hover:text-white transition-colors duration-200">Earn</a>
          <a href="#" className="hover:text-white transition-colors duration-200">DeFi</a>
          <a href="#" className="hover:text-white transition-colors duration-200">Features</a>
          <a href="#" className="hover:text-white transition-colors duration-200">Blog</a>
        </div>

        {/* CTA Button - Pill shaped and larger text */}
        <button
          className="hidden md:flex items-center px-8 py-3 rounded-2xl border border-white/20 text-lg font-semibold text-white hover:bg-white/10 transition-all duration-300"
        >
          Get the App
        </button>

        {/* Mobile menu icon */}
        <button className="lg:hidden text-white p-2">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <line x1="4" y1="8" x2="20" y2="8"/>
            <line x1="4" y1="16" x2="20" y2="16"/>
          </svg>
        </button>
      </div>
    </nav>
  );
}