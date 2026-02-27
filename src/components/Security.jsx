export default function SecuritySection() {
  return (
    <section className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-5xl sm:text-6xl font-bold text-white mb-6" style={{ fontFamily: "Georgia, serif" }}>Backed by the <br /> best</h2>
          <p className="text-white/60 leading-relaxed text-3xl mb-8 mt-12 ">Protected by a multi-level security architecture and is regularly audited to ensure that all of our users are safe.</p>
          {/* <div className="grid grid-cols-2 gap-4">
            {["Multi-sig Security", "MPC Encryption", "Regular Audits", "EIP-4337 Standard"].map((b) => (
              <div key={b} className="flex items-center gap-3 p-4 rounded-2xl border border-white/10 bg-white/5">
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm" style={{ background: "linear-gradient(135deg, rgba(133,234,255,0.2), rgba(162,106,255,0.2))" }}>✓</div>
                <span className="text-white/80 text-sm font-medium">{b}</span>
              </div>
            ))}
          </div> */}
        </div>
        <div className="relative flex items-center justify-center h-64">
          <div className="absolute inset-0 rounded-3xl" style={{ background: "radial-gradient(circle at 50% 50%, rgba(162,106,255,0.15) 0%, transparent 70%)" }} />
          <div className="grid grid-cols-4 gap-4 opacity-60 w-full px-4">
            {Array(8).fill(null).map((_, i) => (
              <div key={i} className="h-12 rounded-xl bg-white/10 border border-white/10" style={{ opacity: 1 - i * 0.08 }} />
            ))}
          </div>
          <div className="absolute inset-0 flex items-center justify-center"><div className="text-6xl">🏛️</div></div>
        </div>
      </div>
    </section>
  );
}