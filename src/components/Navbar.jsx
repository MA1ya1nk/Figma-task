import { useState, useEffect } from "react";

const PlenaLogo = () => (
  <div className="flex items-center gap-3">
    {/* Scaled icon to match the 20px text height proportion */}
    <img src="public/assets/main.png" className="h-7 w-auto" alt="Plena icon" />

    <div className="flex flex-col leading-[1.1]">
      <span className="text-white font-bold text-2xl tracking-tight">plena</span>
      <span className="text-white/80 font-medium text-[10px] tracking-[0.2em] mt-0.5 uppercase">FINANCE</span>
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

  // Custom typography style based on your Figma data
  const navLinkStyle = {
    fontFamily: "'Clash Grotesk Display', sans-serif",
    fontWeight: "400",
    fontSize: "20px",
    lineHeight: "110%", // 110% per your spec
    letterSpacing: "0px",
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-black/90 backdrop-blur-xl border-b border-white/5" : "bg-transparent"
    }`}>
      
      {/* Announcement bar */}
      <div
        className="w-full py-3 text-center text-[15px] text-white font-medium"
        style={{ background: "linear-gradient(270deg, #3D3AE7 0%, #CB5EE7 100%)" }}
      >
        Earn huge rewards on app referrals.{" "}
        <span className="underline cursor-pointer font-bold ml-1">Read the announcement</span>
      </div>

      {/* Main nav - Using the max-width you needed (1360px approx) */}
      <div className="max-w-[85rem] mx-auto px-8 py-7 flex items-center justify-between">
        
        {/* Logo Section */}
        <div className="flex items-center">
          <PlenaLogo />
        </div>

        {/* Nav links - Applied your specific Typography */}
        <div className="hidden lg:flex items-center gap-12 text-white/90">
          <a href="#" style={navLinkStyle} className="hover:text-white transition-colors">Earn</a>
          <a href="#" style={navLinkStyle} className="hover:text-white transition-colors">DeFi</a>
          <a href="#" style={navLinkStyle} className="hover:text-white transition-colors">Features</a>
          <a href="#" style={navLinkStyle} className="hover:text-white transition-colors">Blog</a>
        </div>

        {/* CTA Button - Matches the 20px font height but kept bold for button impact */}
        <button
          style={navLinkStyle}
          className="hidden md:flex items-center px-8 py-3 rounded-2xl border border-white/20 text-white hover:bg-white/10 transition-all font-semibold"
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