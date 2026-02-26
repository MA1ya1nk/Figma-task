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
          {/* <div className="flex flex-wrap gap-4 mb-8">
            {[{ val: "140K+", label: "Users" }, { val: "200K+", label: "Strong Community" }, { val: "20M+", label: "Transactions" }].map((s) => (
              <div key={s.label} className="px-5 py-3 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm">
                <div className="text-white font-bold text-xl">{s.val}</div>
                <div className="text-white/50 text-xs">{s.label}</div>
              </div>
            ))}
          </div> */}
          {/* <div className="flex flex-wrap gap-3 mb-6">
            <button className="flex items-center gap-3 px-5 py-3 bg-black rounded-xl border border-white/20 hover:border-white/40 transition-all">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
              <div className="text-left"><div className="text-white/50 text-[10px]">Download on the</div><div className="text-white text-sm font-semibold">App Store</div></div>
            </button>
            <button className="flex items-center gap-3 px-5 py-3 bg-black rounded-xl border border-white/20 hover:border-white/40 transition-all">
              <div className="text-left"><div className="text-white/50 text-[10px]">Download on the</div><div className="text-white text-sm font-semibold">Play Store</div></div>
            </button>
          </div> */}
          <div className="flex gap-4 text-sm">
            <button className="px-4 py-2 rounded-lg border border-white/20 text-white/70 hover:text-white hover:border-white/40 transition-all"><GradientText>Get the App</GradientText></button>
            <button className="px-4 py-2 rounded-lg text-white/60 hover:text-white flex items-center gap-2 transition-all">
              <span className="w-4 h-4 rounded-full border border-white/30 flex items-center justify-center text-[8px]">▶</span>Watch Intro
            </button>
          </div>
        </div>
        {/* Phone container - centered in right half */}
      {/* Phone cluster container */}
<div style={{
  position: 'relative',
  width: '600px',
  height: '600px',
  flexShrink: 0,
}}>

  {/* Purple diamond outline decoration */}
  <div style={{
    position: 'absolute',
    width: '300px',
    height: '300px',
    border: '1px solid rgba(123, 94, 167, 0.6)',
    transform: 'rotate(45deg)',
    top: '150px',
    left: '180px',
    zIndex: 0,
  }} />

  {/* Back phone - 3D rotated, landscape-ish perspective */}
  <img
    src="src/assets/Screen.png"
    style={{
      position: 'absolute',
      width: '320px',
      top: '100px',
      left: '220px',
      transform: 'perspective(800px) rotateY(-40deg) rotateZ(-5deg)',
      zIndex: 1,
      filter: 'drop-shadow(-20px 30px 50px rgba(0,0,0,0.8))',
      opacity: 0.9,
    }}
  />

  {/* Front phone - upright with slight tilt */}
  <img
    src="src/assets/Large.png"
    style={{
      position: 'absolute',
      width: '300px',
      top: '30px',
      left: '60px',
      transform: 'perspective(800px) rotateY(5deg) rotateZ(-3deg)',
      zIndex: 2,
      filter: 'drop-shadow(0 40px 80px rgba(0,0,0,0.7))',
    }}
  />

  {/* Glow behind phones */}
  <div style={{
    position: 'absolute',
    width: '350px',
    height: '350px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(123,94,167,0.35) 0%, transparent 70%)',
    top: '100px',
    left: '100px',
    zIndex: 0,
    filter: 'blur(40px)',
    pointerEvents: 'none',
  }} />

</div>
      </div>
    </section>
  );
}