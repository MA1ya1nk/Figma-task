export default function InvestSection() {
  return (
    <section className="py-24 overflow-hidden" style={{ background: "linear-gradient(226.73deg, #C196C8 1.98%, #4F618D 97.5%)" }}>
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4" style={{ fontFamily: "Georgia, serif" }}>Invest in Crypto,<br/>Starting with Just $1</h2>
          <p className="text-white/80 text-lg mb-8">Buy BTC, ETH, Matic, & 100,000+ crypto Assets across Multiple Chains with Ease</p>
          <div className="flex flex-wrap gap-3">
            <button className="flex items-center gap-3 px-5 py-3 bg-black rounded-xl hover:bg-black/80 transition-all">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
              <span className="text-white text-sm font-medium">App Store</span>
            </button>
            <button className="flex items-center gap-3 px-5 py-3 bg-black rounded-xl hover:bg-black/80 transition-all">
              <span className="text-white text-sm font-medium">Play Store</span>
            </button>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="relative w-80 h-80">
            <div className="absolute inset-0 rounded-full opacity-30" style={{ background: "radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 70%)" }} />
            {["₿", "Ξ", "◈", "◎", "Ⓜ", "◉"].map((sym, i) => {
              const angle = (i * 60 * Math.PI) / 180;
              const r = 110;
              const x = 50 + (r * Math.cos(angle)) / 1.6;
              const y = 50 + (r * Math.sin(angle)) / 1.6;
              return (
                <div key={i} className="absolute w-14 h-14 rounded-full flex items-center justify-center text-white text-2xl font-bold border border-white/30" style={{ left: `${x}%`, top: `${y}%`, transform: "translate(-50%, -50%)", background: `hsl(${i * 60}, 50%, 25%)`, boxShadow: `0 0 20px hsla(${i * 60}, 60%, 50%, 0.3)` }}>{sym}</div>
              );
            })}
            <div className="absolute inset-1/4 rounded-full flex items-center justify-center text-white text-4xl font-black" style={{ background: "linear-gradient(135deg, #AFE2ED, #A26AFF)" }}>P</div>
          </div>
        </div>
      </div>
    </section>
  );
}