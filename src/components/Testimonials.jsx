export default function TestimonialsSection() {
  const reviews = [
    { name: "Logan M.", text: "Bonjour, Excellente application que j'ai depuis juin dernier ☺️ les gains se cumulent tous seuls à chaque achat", stars: 5 },
    { name: "Sarah K.", text: "J'étais sceptique au début je dois le reconnaître mais vous pouvez y aller sans crainte !", stars: 5 },
    { name: "Mike T.", text: "Application géniale ! Elle permet de gagner du cashback à chaque passage en caisse dans nos enseignes préférées ! Je recommande à 100%", stars: 5 },
    { name: "Emma R.", text: "Un peu sceptique au début j'ai vite été convaincue, les gains s'accumulent seuls et les cartes cadeaux s'accumulent très vite !!", stars: 5 },
    { name: "Alex P.", text: "Bonjour, Excellente application que j'ai depuis juin dernier ☺️ les gains se cumulent tous seuls à chaque achat", stars: 4 },
    { name: "James W.", text: "J'étais sceptique au début je dois le reconnaître mais vous pouvez y aller sans crainte !", stars: 5 },
  ];
  return (
    <section className="py-24 overflow-hidden" style={{ background: "#1A1A1B" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl font-bold text-white mb-4" style={{ fontFamily: "Georgia, serif" }}>What our users say 💬</h2>
          <p className="text-white/60 text-lg">Trusted by over 140,000 users worldwide</p>
        </div>
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
          {reviews.map((r, i) => (
            <div key={i} className="break-inside-avoid p-6 rounded-3xl border border-white/10 mb-4" style={{ background: "rgba(255,255,255,0.03)" }}>
              <div className="flex gap-1 mb-3">{Array(r.stars).fill("⭐").map((s, j) => <span key={j} className="text-sm">{s}</span>)}</div>
              <p className="text-white/80 text-sm leading-relaxed mb-4">{r.text}</p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold" style={{ background: `hsl(${i * 60}, 60%, 40%)` }}>{r.name[0]}</div>
                <span className="text-white font-semibold text-sm">{r.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}