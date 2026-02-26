export default function StoriesSection() {
  const posts = [
    { title: "Celsius will compensate consumers with a new token", desc: "Celsius, a defunct crypto lending company, will likely release a new token aimed at reimbursing creditors...", emoji: "📰" },
    { title: "Bitcoin reaches new all-time high in 2024", desc: "The world's largest cryptocurrency surpassed previous records, driven by institutional adoption and ETF approvals...", emoji: "₿" },
    { title: "DeFi protocols see record TVL growth", desc: "Total value locked in decentralized finance protocols reaches a new milestone as more users seek alternatives...", emoji: "📊" },
  ];
  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-5xl font-bold text-white mb-3" style={{ fontFamily: "Georgia, serif" }}>Our Stories</h2>
            <p className="text-white/60 text-lg max-w-lg">The new culture of money is making headlines. Check out our latest blog posts to find out more.</p>
          </div>
          <button className="hidden md:flex items-center gap-2 px-5 py-3 rounded-xl border border-white/20 text-white hover:bg-white/5 transition-all text-sm">More stories →</button>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((p, i) => (
            <div key={i} className="rounded-3xl overflow-hidden border border-white/10 hover:border-white/30 transition-all cursor-pointer group" style={{ background: "#202020" }}>
              <div className="aspect-video flex items-center justify-center text-4xl" style={{ background: `linear-gradient(135deg, hsl(${i * 80}, 30%, 15%), hsl(${i * 80 + 40}, 40%, 20%))` }}>{p.emoji}</div>
              <div className="p-6">
                <h4 className="text-white font-semibold text-lg mb-2 group-hover:text-purple-300 transition-colors">{p.title}</h4>
                <p className="text-white/60 text-sm leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}