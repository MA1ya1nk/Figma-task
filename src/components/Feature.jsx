const GradientText = ({ children }) => (
  <span style={{ background: "linear-gradient(91.6deg, #AFE2ED 0.62%, #A26AFF 99.17%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
    {children}
  </span>
);

export default function FeaturesSection() {
  return (
    <section className="bg-black py-4">
      <div className="max-w-7xl mx-auto px-6">
        {/* Take control */}
        <div className="grid lg:grid-cols-2 gap-16 items-center py-20">
          <div>
            <div className="text-5xl mb-4">🏦</div>
            <h3 className="text-4xl sm:text-5xl font-bold text-white mb-6" style={{ fontFamily: "Georgia, serif" }}>Take control of your assets</h3>
            <p className="text-white/70 text-lg leading-relaxed">Unlike centralized exchanges, Plena ensures that only users have full control over their crypto assets.</p>
            <button className="mt-8 px-6 py-3 rounded-xl border border-white/20 text-white hover:bg-white/5 transition-all">
              <GradientText>Get the App →</GradientText>
            </button>
          </div>
          <div className="flex items-center justify-center">
            <div className="w-64 h-64 rounded-3xl flex items-center justify-center" style={{ background: "linear-gradient(135deg, rgba(133,234,255,0.1), rgba(162,106,255,0.15))", border: "1px solid rgba(255,255,255,0.1)" }}>
              <div className="text-8xl">🛡️</div>
            </div>
          </div>
        </div>
        {/* Social Login */}
        <div className="grid lg:grid-cols-2 gap-16 items-center py-20">
          <div className="order-2 lg:order-1 flex flex-wrap gap-4 justify-center">
            {[{ name: "Google", color: "#DB4437", emoji: "G" }, { name: "Apple", color: "#1a1a1a", emoji: "🍎" }, { name: "Twitter", color: "#1DA1F2", emoji: "𝕏" }, { name: "Facebook", color: "#1877F2", emoji: "f" }].map((s) => (
              <div key={s.name} className="w-20 h-20 rounded-2xl flex items-center justify-center text-3xl font-bold text-white shadow-lg border border-white/10" style={{ background: s.color }}>{s.emoji}</div>
            ))}
          </div>
          <div className="order-1 lg:order-2">
            <div className="text-5xl mb-4">🔐</div>
            <h3 className="text-4xl sm:text-5xl font-bold text-white mb-6" style={{ fontFamily: "Georgia, serif" }}>Social Login &amp; Easy recovery</h3>
            <p className="text-white/70 text-lg leading-relaxed">Sign in quickly and effortlessly using social media accounts, and retrieve your account even if your device is lost with MPC security.</p>
          </div>
        </div>
        {/* 100K Tokens */}
        <div className="grid lg:grid-cols-2 gap-16 items-center py-20">
          <div>
            <div className="text-5xl mb-4">💎</div>
            <h3 className="text-4xl sm:text-5xl font-bold text-white mb-6" style={{ fontFamily: "Georgia, serif" }}>100K+ Tokens</h3>
            <p className="text-white/70 text-lg leading-relaxed">Store, Send, Receive and Trade over 100,000 crypto across Multiple Chains at Best Rates.</p>
            <button className="mt-8 px-6 py-3 rounded-xl border border-white/20 text-white hover:bg-white/5 transition-all">
              <GradientText>Get the App →</GradientText>
            </button>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {["BTC", "ETH", "MATIC", "SOL", "BNB", "AVAX"].map((t, i) => (
              <div key={t} className="aspect-square rounded-2xl flex items-center justify-center font-bold text-white text-sm border border-white/10" style={{ background: `hsl(${i * 60}, 60%, 20%)`, boxShadow: `0 0 20px hsla(${i * 60}, 60%, 50%, 0.2)` }}>{t}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}