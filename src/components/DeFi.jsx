export default function DeFiFeatures() {
  const features = [
    { title: "Swap Crypto with ease", desc: "Swap smarter, not harder with Plena Finance — fast, safe, and competitive crypto swaps.", icon: "⇄", cols: "md:col-span-1 md:row-span-2" },
    { title: "Lending Protocol", desc: "Earn Interest with Top Protocols in the Industry with Just a Tap!", icon: "📈" },
    { title: "Stake your assets", desc: "Earn Interest with Top Protocols in the Industry with Just a Tap!", icon: "🏹" },
    { title: "Liquidity Pools", desc: "Enjoy the best exchange rates across all decentralized exchanges in one place!", icon: "💧", cols: "md:col-span-2" },
  ];
  return (
    <section className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl sm:text-6xl font-bold text-white mb-4" style={{ fontFamily: "Georgia, serif" }}>Features Like Never<br />Seen Before</h2>
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-12 text-sm font-medium" style={{ background: "rgba(162,106,255,0.2)", color: "#A26AFF", border: "1px solid rgba(162,106,255,0.3)" }}>
          🔓 Non-custodial · EIP-4337 · Multi-chain
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {features.map((f) => (
            <div key={f.title} className={`p-8 rounded-3xl border border-white/10 flex flex-col justify-end ${f.cols || ""}`} style={{ background: "rgba(32,32,32,0.6)", backdropFilter: "blur(37px)", minHeight: "200px" }}>
              <div className="text-4xl mb-4">{f.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-2">{f.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}