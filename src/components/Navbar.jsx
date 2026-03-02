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
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  // TYPOGRAPHY UPDATED: 20px, 110% line-height, 0.8 Opacity
  const navLinkStyle = {
    fontFamily: "'Clash Grotesk Display', sans-serif",
    fontWeight: "400",
    fontSize: "20px",
    lineHeight: "110%",
    letterSpacing: "0px",
    opacity: 0.8, // Applied the 0.8 opacity per spec
    width: "auto", // width: 45 used for individual item containers in Figma
    textAlign: "center"
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || isOpen ? "bg-black/90 backdrop-blur-xl" : "bg-transparent"
      } ${scrolled ? "border-b border-white/5" : ""}`}>
        
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

          {/* Nav Links: Applied specific opacity and hover state */}
          <div className="hidden lg:flex items-center gap-12 text-white">
            <a href="#" style={navLinkStyle} className="hover:opacity-100 transition-opacity">Earn</a>
            <a href="#" style={navLinkStyle} className="hover:opacity-100 transition-opacity">DeFi</a>
            <a href="#" style={navLinkStyle} className="hover:opacity-100 transition-opacity">Features</a>
            <a href="#" style={navLinkStyle} className="hover:opacity-100 transition-opacity">Blog</a>
          </div>

          <button
            style={{...navLinkStyle, opacity: 1}}
            className="hidden md:flex items-center px-8 py-3 rounded-2xl border border-white/20 text-white hover:bg-white/10 transition-all font-semibold"
          >
            Get the App
          </button>

          <button 
            className="lg:hidden text-white p-2 z-[60]" 
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="4" y1="8" x2="20" y2="8"/>
                <line x1="12" y1="16" x2="20" y2="16"/>
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div className={`fixed inset-0 z-[45] bg-black transition-all duration-500 lg:hidden ${
        isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}>
        {/* Figma-style background glow */}
        <div className="absolute top-[-10%] left-[-10%] w-[80%] h-[50%] bg-purple-600/10 blur-[120px] rounded-full" />
        
        <div className="flex flex-col items-center justify-center h-full gap-8 pt-20">
          {["Features", "Partners", "Team", "Reviews", "FAQs", "Blog"].map((item) => (
            <a 
              key={item} 
              href="#" 
              className="text-white text-3xl font-medium opacity-80 hover:opacity-100 transition-opacity"
              onClick={() => setIsOpen(false)}
              style={{ fontFamily: "'Clash Grotesk Display', sans-serif" }}
            >
              {item}
            </a>
          ))}

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