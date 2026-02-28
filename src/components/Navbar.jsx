// import { useState, useEffect } from "react";

// const PlenaLogo = () => (
//   <div className="flex items-center gap-3">
//     {/* Scaled icon to match the 20px text height proportion */}
//     <img src="/assets/main.png" className="h-7 w-auto" alt="Plena icon" />

//     <div className="flex flex-col leading-[1.1]">
//       <span className="text-white font-bold text-2xl tracking-tight">plena</span>
//       <span className="text-white/80 font-medium text-[10px] tracking-[0.2em] mt-0.5 uppercase">FINANCE</span>
//     </div>
//   </div>
// );

// export default function NavBar() {
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handler = () => setScrolled(window.scrollY > 40);
//     window.addEventListener("scroll", handler);
//     return () => window.removeEventListener("scroll", handler);
//   }, []);

//   // Custom typography style based on your Figma data
//   const navLinkStyle = {
//     fontFamily: "'Clash Grotesk Display', sans-serif",
//     fontWeight: "400",
//     fontSize: "20px",
//     lineHeight: "110%", // 110% per your spec
//     letterSpacing: "0px",
//   };

//   return (
//     <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//       scrolled ? "bg-black/90 backdrop-blur-xl border-b border-white/5" : "bg-transparent"
//     }`}>
      
//       {/* Announcement bar */}
//       <div
//         className="w-full py-3 text-center text-[15px] text-white font-medium"
//         style={{ background: "linear-gradient(270deg, #3D3AE7 0%, #CB5EE7 100%)" }}
//       >
//         Earn huge rewards on app referrals.{" "}
//         <span className="underline cursor-pointer font-bold ml-1">Read the announcement</span>
//       </div>

//       {/* Main nav - Using the max-width you needed (1360px approx) */}
//       <div className="max-w-[85rem] mx-auto px-8 py-7 flex items-center justify-between">
        
//         {/* Logo Section */}
//         <div className="flex items-center">
//           <PlenaLogo />
//         </div>

//         {/* Nav links - Applied your specific Typography */}
//         <div className="hidden lg:flex items-center gap-12 text-white/90">
//           <a href="#" style={navLinkStyle} className="hover:text-white transition-colors">Earn</a>
//           <a href="#" style={navLinkStyle} className="hover:text-white transition-colors">DeFi</a>
//           <a href="#" style={navLinkStyle} className="hover:text-white transition-colors">Features</a>
//           <a href="#" style={navLinkStyle} className="hover:text-white transition-colors">Blog</a>
//         </div>

//         {/* CTA Button - Matches the 20px font height but kept bold for button impact */}
//         <button
//           style={navLinkStyle}
//           className="hidden md:flex items-center px-8 py-3 rounded-2xl border border-white/20 text-white hover:bg-white/10 transition-all font-semibold"
//         >
//           Get the App
//         </button>

//         {/* Mobile menu icon */}
//         <button className="lg:hidden text-white p-2">
//           <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
//             <line x1="4" y1="8" x2="20" y2="8"/>
//             <line x1="4" y1="16" x2="20" y2="16"/>
//           </svg>
//         </button>
//       </div>
//     </nav>
//   );
// }



import { useState, useEffect } from "react";

const PlenaLogo = () => (
  <div className="flex items-center gap-3">
    <img src="/assets/main.png" className="h-7 w-auto" alt="Plena icon" />
    <div className="flex flex-col leading-[1.1]">
      <span className="text-white font-bold text-2xl tracking-tight">plena</span>
      <span className="text-white/80 font-medium text-[10px] tracking-[0.2em] mt-0.5 uppercase">FINANCE</span>
    </div>
  </div>
);

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const navLinkStyle = {
    fontFamily: "'Clash Grotesk Display', sans-serif",
    fontWeight: "400",
    fontSize: "20px",
    lineHeight: "110%",
    letterSpacing: "0px",
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || isOpen ? "bg-black/90 backdrop-blur-xl" : "bg-transparent"
      } ${scrolled ? "border-b border-white/5" : ""}`}>
        
        {/* Announcement bar - Hidden when mobile menu is open to match Figma */}
        {!isOpen && (
          <div
            className="w-full py-3 text-center text-[15px] text-white font-medium"
            style={{ background: "linear-gradient(270deg, #3D3AE7 0%, #CB5EE7 100%)" }}
          >
            Earn huge rewards on app referrals.{" "}
            <span className="underline cursor-pointer font-bold ml-1">Read the announcement</span>
          </div>
        )}

        <div className="max-w-[85rem] mx-auto px-6 md:px-8 py-5 md:py-7 flex items-center justify-between">
          
          <div className="flex items-center">
            <PlenaLogo />
          </div>

          {/* Desktop Nav Links - Unchanged */}
          <div className="hidden lg:flex items-center gap-12 text-white/90">
            <a href="#" style={navLinkStyle} className="hover:text-white transition-colors">Earn</a>
            <a href="#" style={navLinkStyle} className="hover:text-white transition-colors">DeFi</a>
            <a href="#" style={navLinkStyle} className="hover:text-white transition-colors">Features</a>
            <a href="#" style={navLinkStyle} className="hover:text-white transition-colors">Blog</a>
          </div>

          {/* Desktop CTA - Unchanged */}
          <button
            style={navLinkStyle}
            className="hidden md:flex items-center px-8 py-3 rounded-2xl border border-white/20 text-white hover:bg-white/10 transition-all font-semibold"
          >
            Get the App
          </button>

          {/* Mobile Toggle Button */}
          <button 
            className="lg:hidden text-white p-2 z-[60]" 
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              /* Close X Icon */
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              /* Hamburger Icon */
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
  <line x1="4" y1="8" x2="20" y2="8"/>        {/* Full top line */}
  <line x1="12" y1="16" x2="20" y2="16"/>     {/* Half bottom line aligned right */}
</svg>
            )}
          </button>
        </div>
      </nav>

      {/* MOBILE FULL SCREEN MENU (MOB_menu) */}
      <div className={`fixed inset-0 z-[45] bg-black transition-transform duration-500 lg:hidden ${
        isOpen ? "translate-y-0" : "-translate-y-full"
      }`}>
        {/* Glow effect matching Figma background */}
        <div className="absolute top-[-10%] left-[-10%] w-[80%] h-[50%] bg-white/5 blur-[120px] rounded-full" />
        
        <div className="flex flex-col items-center justify-center h-full gap-8 pt-20">
          <a href="#" className="text-white text-3xl font-medium" onClick={() => setIsOpen(false)}>Features</a>
          <a href="#" className="text-white text-3xl font-medium" onClick={() => setIsOpen(false)}>Partners</a>
          <a href="#" className="text-white text-3xl font-medium" onClick={() => setIsOpen(false)}>Team</a>
          <a href="#" className="text-white text-3xl font-medium" onClick={() => setIsOpen(false)}>Reviews</a>
          <a href="#" className="text-white text-3xl font-medium" onClick={() => setIsOpen(false)}>FAQs</a>
          <a href="#" className="text-white text-3xl font-medium" onClick={() => setIsOpen(false)}>Blog</a>

          {/* Mobile-only CTA */}
          <div className="mt-12 w-full px-10">
            <button className="w-full py-4 rounded-2xl text-white font-bold text-lg border border-white/10 bg-gradient-to-r from-[#3D3AE7] to-[#CB5EE7]">
              Download App
            </button>
            <p className="text-white/40 text-center text-xs mt-4 uppercase tracking-widest">
              Available for iOS & Android
            </p>
          </div>
        </div>
      </div>
    </>
  );
}