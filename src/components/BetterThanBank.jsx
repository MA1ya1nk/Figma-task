export default function BetterThanBanks() {
  return (
    <section
      className="relative py-24 overflow-hidden"
      style={{ background: "#7F4BC4" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(255,255,255,0.05) 0%, transparent 70%)",
        }}
      />

      {/* only changed here */}
      <div className="relative max-w-7xl mx-auto px-6 grid gap-12 items-center justify-items-center text-center">
        
        <div>
          <h2
            className="text-5xl sm:text-6xl font-bold text-white mb-4"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Better than Banks
          </h2>

          <p className="text-white/80 text-lg mb-8">
            Watch our quick intro video to learn more
          </p>

          <div
            className="relative rounded-3xl overflow-hidden cursor-pointer group mx-auto"
            style={{ background: "rgba(41,42,40,0.6)" }}
          >
            <div className="aspect-video flex items-center justify-center bg-gradient-to-br from-white/5 to-white/10">
              <div className="w-20 h-20 rounded-full border-2 border-white/60 flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg
                  className="w-8 h-8 text-white ml-1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* untouched commented section */}
        {/* 
        <div className="grid grid-cols-3 gap-4">
          {[{ val: "140K+", label: "Users" }, { val: "200K+", label: "Strong Community" }, { val: "20M+", label: "Transactions" }].map((s) => (
            <div key={s.label} className="p-5 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-sm text-center">
              <div className="text-white font-bold text-3xl mb-1">{s.val}</div>
              <div className="text-white/70 text-sm">{s.label}</div>
            </div>
          ))}
        </div> 
        */}

      </div>
    </section>
  );
}