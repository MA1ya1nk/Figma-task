// import { useState, useEffect } from "react";

// const GradientText = ({ children, className = "" }) => (
//   <span className={className} style={{ background: "linear-gradient(91.6deg, #AFE2ED 0.62%, #A26AFF 99.17%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
//     {children}
//   </span>
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
//       <div className="w-full py-2 text-center text-sm text-white font-medium" style={{ background: "linear-gradient(270.02deg, #3D3AE7 0.01%, #CB5EE7 99.34%)" }}>
//         🎉 Earn huge rewards on app referrals. <span className="underline cursor-pointer">Read the announcement</span>
//       </div>
//       {/* Main nav */}
//       <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
//         <div className="flex items-center gap-2">
//           <div className="w-8 h-8 rounded-lg flex items-center justify-center font-black text-white text-sm" style={{ background: "linear-gradient(135deg, #AFE2ED, #A26AFF)" }}>P</div>
//           <span className="text-white font-bold text-xl tracking-wide">PLENA</span>
//           <span className="text-xs font-semibold ml-0.5" style={{ color: "#A26AFF" }}>FINANCE</span>
//         </div>
//         <div className="hidden md:flex items-center gap-8 text-white/80 text-sm font-medium">
//           <a href="#" className="hover:text-white transition-colors">Earn</a>
//           <a href="#" className="hover:text-white transition-colors">DeFi</a>
//           <a href="#" className="hover:text-white transition-colors">Features</a>
//           <a href="#" className="hover:text-white transition-colors">Blog</a>
//         </div>
//         <button className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/30 text-sm font-medium text-white hover:bg-white/10 transition-all">
//           <GradientText>Get the App</GradientText>
//         </button>
//         <button className="md:hidden text-white">
//           <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
//         </button>
//       </div>
//     </nav>
//   );
// }



// import { useState, useEffect } from "react";

// const GradientText = ({ children, className = "" }) => (
//   <span className={className} style={{ background: "linear-gradient(91.6deg, #AFE2ED 0.62%, #A26AFF 99.17%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
//     {children}
//   </span>
// );

// // Plena Finance SVG Logo — matches the actual Plena brand mark
// const PlenaLogo = () => (
//   <svg width="110" height="28" viewBox="0 0 110 28" fill="none" xmlns="http://www.w3.org/2000/svg">
//     {/* Plena "P" symbol */}
    
//     <img src="src/assets/main.png" className="h-6 w-3" alt="main image" />

//     {/* "plena" wordmark */}
//     <text x="26" y="18.5" fontFamily="'Helvetica Neue', Helvetica, Arial, sans-serif" fontSize="20" fontWeight="700" letterSpacing="0.5" fill="white">
//       plena
//     </text>
//     {/* "finance" sub-wordmark */}
//     <text x="26" y="26.5" fontFamily="'Helvetica Neue', Helvetica, Arial, sans-serif" fontSize="7.5" fontWeight="500" letterSpacing="1.5" fill="#A78BFA">
//       FINANCE
//     </text>

//     <defs>
//       <linearGradient id="plenaShieldGrad" x1="4" y1="1" x2="20" y2="25.5" gradientUnits="userSpaceOnUse">
//         <stop offset="0%" stopColor="#AFE2ED" />
//         <stop offset="100%" stopColor="#A26AFF" />
//       </linearGradient>
//     </defs>
//   </svg>
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

const GradientText = ({ children, className = "" }) => (
  <span className={className} style={{ background: "linear-gradient(91.6deg, #AFE2ED 0.62%, #A26AFF 99.17%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
    {children}
  </span>
);

const PlenaLogo = () => (
  <div className="flex items-center gap-2">
    <img src="src/assets/main.png" className="h-5 w-auto" alt="Plena icon" />

    <svg width="72" height="28" viewBox="0 0 72 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <text x="0" y="18" fontFamily="'Helvetica Neue', Helvetica, Arial, sans-serif" fontSize="18" fontWeight="700" letterSpacing="0.5" fill="white">
        plena
      </text>
      <text x="12" y="27" fontFamily="'Helvetica Neue', Helvetica, Arial, sans-serif" fontSize="7.5" fontWeight="500" letterSpacing="0.5" fill="white">
        FINANCE
      </text>
    </svg>
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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-black/80 backdrop-blur-lg" : "bg-black/20 backdrop-blur-sm"}`}>
      {/* Announcement bar */}
      <div
        className="w-full py-2 text-center text-sm text-white font-medium"
        style={{ background: "linear-gradient(270.02deg, #3D3AE7 0.01%, #CB5EE7 99.34%)" }}
      >
        Earn huge rewards on app referrals.{" "}
        <span className="underline cursor-pointer font-semibold">Read the announcement</span>
      </div>

      {/* Main nav */}
      <div className="max-w-7xl mx-auto px-6 py-3.5 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <PlenaLogo />
        </div>

        {/* Nav links */}
        <div className="hidden md:flex items-center gap-8 text-white/80 text-sm font-medium">
          <a href="#" className="hover:text-white transition-colors">Earn</a>
          <a href="#" className="hover:text-white transition-colors">DeFi</a>
          <a href="#" className="hover:text-white transition-colors">Features</a>
          <a href="#" className="hover:text-white transition-colors">Blog</a>
        </div>

        {/* CTA Button */}
        <button
          className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/30 text-sm font-medium text-white hover:bg-white/10 transition-all"
        >
          Get the App
        </button>

        {/* Mobile hamburger */}
        <button className="md:hidden text-white">
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="3" y1="6" x2="21" y2="6"/>
            <line x1="3" y1="12" x2="21" y2="12"/>
            <line x1="3" y1="18" x2="21" y2="18"/>
          </svg>
        </button>
      </div>
    </nav>
  );
}