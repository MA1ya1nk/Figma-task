import { useState, useEffect } from "react";

const GradientText = ({ children, className = "" }) => (
  <span className={className} style={{ background: "linear-gradient(91.6deg, #AFE2ED 0.62%, #A26AFF 99.17%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
    {children}
  </span>
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
      <div className="w-full py-2 text-center text-sm text-white font-medium" style={{ background: "linear-gradient(270.02deg, #3D3AE7 0.01%, #CB5EE7 99.34%)" }}>
        🎉 Earn huge rewards on app referrals. <span className="underline cursor-pointer">Read the announcement</span>
      </div>
      {/* Main nav */}
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center font-black text-white text-sm" style={{ background: "linear-gradient(135deg, #AFE2ED, #A26AFF)" }}>P</div>
          <span className="text-white font-bold text-xl tracking-wide">PLENA</span>
          <span className="text-xs font-semibold ml-0.5" style={{ color: "#A26AFF" }}>FINANCE</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-white/80 text-sm font-medium">
          <a href="#" className="hover:text-white transition-colors">Earn</a>
          <a href="#" className="hover:text-white transition-colors">DeFi</a>
          <a href="#" className="hover:text-white transition-colors">Features</a>
          <a href="#" className="hover:text-white transition-colors">Blog</a>
        </div>
        <button className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/30 text-sm font-medium text-white hover:bg-white/10 transition-all">
          <GradientText>Get the App</GradientText>
        </button>
        <button className="md:hidden text-white">
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
        </button>
      </div>
    </nav>
  );
}