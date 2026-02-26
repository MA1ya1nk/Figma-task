const GradientText = ({ children }) => (
  <span style={{ background: "linear-gradient(91.6deg, #AFE2ED 0.62%, #A26AFF 99.17%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
    {children}
  </span>
);

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-black overflow-hidden flex items-center">
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 60% at 70% 40%, rgba(162,106,255,0.15) 0%, transparent 70%), radial-gradient(ellipse 50% 50% at 30% 60%, rgba(133,234,255,0.12) 0%, transparent 60%)" }} />
      <div className="relative max-w-7xl mx-auto px-6 pt-40 pb-20 grid lg:grid-cols-2 gap-12 items-center w-full">
        <div>
          <div className="flex items-center gap-3 mb-6">
            <span className="px-3 py-1 rounded-full text-xs font-semibold text-white/70 border border-white/20 bg-white/5">Introducing Plena 2.0 · EIP-4337 Account Abstraction</span>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-none mb-6 text-white" style={{ fontFamily: "Georgia, serif", letterSpacing: "-0.02em" }}>
            Be Your<br /><GradientText>Own Bank</GradientText>
          </h1>
          <p className="text-white/70 text-lg mb-8 max-w-lg leading-relaxed">Introducing Plena 2.0, Self-Custodial Smart Wallet with EIP-4337: Account Abstraction</p>
          
          <div className="flex gap-4 text-sm">
            <button className="px-4 py-2 rounded-lg border border-white/20 text-white/70 hover:text-white hover:border-white/40 transition-all"><GradientText>Get the App</GradientText></button>
            <button className="px-4 py-2 rounded-lg text-white/60 hover:text-white flex items-center gap-2 transition-all">
              <span className="w-4 h-4 rounded-full border border-white/30 flex items-center justify-center text-[8px]">▶</span>Watch Intro
            </button>
          </div>
        </div>
       
       
      </div>

      
    </section>
  );
}