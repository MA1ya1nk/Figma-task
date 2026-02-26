const GradientText = ({ children }) => (
  <span style={{ background: "linear-gradient(91.6deg, #AFE2ED 0.62%, #A26AFF 99.17%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
    {children}
  </span>
);

export default function CTASection() {
  return (
    <section className="py-24 overflow-hidden bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative rounded-3xl p-12 overflow-hidden" style={{ background: "linear-gradient(265.43deg, rgba(220,191,224,0.1) 2.36%, rgba(154,170,170,0.1) 94.29%)", border: "1px solid rgba(255,255,255,0.1)", backdropFilter: "blur(67px)" }}>
          <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full opacity-30 pointer-events-none" style={{ background: "radial-gradient(circle, rgba(133,234,255,0.4) 0%, transparent 70%)", filter: "blur(40px)" }} />
          <div className="relative grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold mb-4" style={{ fontFamily: "Georgia, serif" }}>
                <GradientText>Start building your portfolio with just $1</GradientText>
              </h2>
              <p className="text-white/70 text-lg mb-8">Over 100,000+ Crypto to choose from. Download the app now!</p>
              <div className="flex flex-wrap gap-3">
                <button className="flex items-center gap-3 px-6 py-3 bg-black rounded-xl border border-white/20 hover:border-white/40 transition-all">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                  <div className="text-left"><div className="text-white/50 text-[10px]">Download on the</div><div className="text-white text-sm font-semibold">App Store</div></div>
                </button>
                <button className="flex items-center gap-3 px-6 py-3 bg-black rounded-xl border border-white/20 hover:border-white/40 transition-all">
                  <div className="text-left"><div className="text-white/50 text-[10px]">Download on the</div><div className="text-white text-sm font-semibold">Play Store</div></div>
                </button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-48 sm:w-56 aspect-[9/19] rounded-[2.5rem] border border-white/20 overflow-hidden" style={{ background: "linear-gradient(135deg, #0a0a14, #14041e)", boxShadow: "0 0 60px rgba(162,106,255,0.3)" }}>
                <div className="mx-auto w-16 h-5 bg-black rounded-b-xl mt-2"/>
                <div className="p-3 pt-4">
                  <p className="text-white/40 text-xs mb-2">Portfolio</p>
                  <div className="space-y-2">
                    {[["BTC", "+12.4%"], ["ETH", "+8.2%"], ["MATIC", "+34.1%"]].map(([tok, chg]) => (
                      <div key={tok} className="flex justify-between items-center bg-white/5 rounded-xl p-2 text-xs text-white">
                        <span>{tok}</span><span style={{ color: "#4ade80" }}>{chg}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 p-2 rounded-xl text-center text-xs font-bold text-black" style={{ background: "linear-gradient(91.6deg, #AFE2ED, #A26AFF)" }}>Trade Now</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}