export default function TeamSection() {
  const team = [
    { name: "Jared E. Wallace", role: "CEO & Co-Founder", emoji: "👨‍💼" },
    { name: "Jessica Johnson", role: "Co-Founder", emoji: "👩‍💼" },
    { name: "Trevor Noah", role: "Tech Lead", emoji: "👨‍💻" },
    { name: "Kate Winslet", role: "Marketing Lead", emoji: "👩‍💼" },
  ];
  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-5xl sm:text-6xl font-bold text-white mb-4" style={{ fontFamily: "Georgia, serif" }}>The Team</h2>
        <p className="text-white/60 text-lg mb-16 max-w-xl mx-auto">Protected by a multi-level security architecture and is regularly audited to ensure all users are safe.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, i) => (
            <div key={i} className="group">
              <div className="relative mb-4 rounded-3xl overflow-hidden aspect-[3/4]" style={{ background: `linear-gradient(135deg, hsl(${i * 90}, 40%, 15%) 0%, hsl(${i * 90 + 60}, 50%, 20%) 100%)`, border: "1px solid rgba(255,255,255,0.1)" }}>
                <div className="absolute inset-0 opacity-30" style={{ background: "linear-gradient(91.6deg, #AFE2ED 0.62%, #A26AFF 99.17%)", mixBlendMode: "multiply" }} />
                <div className="absolute inset-0 flex items-center justify-center text-6xl">{member.emoji}</div>
              </div>
              <h4 className="text-white font-bold text-lg">{member.name}</h4>
              <p className="text-white/50 text-sm mb-2">{member.role}</p>
              <div className="flex justify-center gap-2 text-xs">
                <a href="#" style={{ color: "#984DF6" }}>LinkedIn</a>
                <span className="text-white/30">|</span>
                <a href="#" style={{ color: "#CD7644" }}>Twitter</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}