export default function FasterTransactions() {
  return (
    <section className="py-24 overflow-hidden" style={{ background: "#19191A" }}>
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-6xl sm:text-8xl lg:text-9xl font-black text-white mb-2" style={{ fontFamily: "Georgia, serif" }}>⚡ Faster</h2>
        <h2 className="text-6xl sm:text-8xl lg:text-9xl font-black text-white mb-12" style={{ fontFamily: "Georgia, serif" }}>Transactions</h2>
        <div className="flex justify-center">
          <div className="relative w-56 sm:w-64 aspect-[9/19] rounded-[2.5rem] border border-white/20 overflow-hidden" style={{ background: "linear-gradient(135deg, #0a0a14 0%, #14041e 100%)", boxShadow: "0 0 60px rgba(162,106,255,0.4), 0 30px 80px rgba(0,0,0,0.8)" }}>
            <div className="mx-auto w-20 h-5 bg-black rounded-b-xl mt-2"/>
            <div className="px-4 pt-4">
              <p className="text-white/50 text-xs mb-2">Bridge Assets</p>
              <div className="space-y-2">
                {[["Ethereum", "→", "Polygon"], ["USDC", "$500", "Done"]].map((row, i) => (
                  <div key={i} className="flex justify-between items-center p-2 bg-white/5 rounded-xl text-white text-xs">
                    <span>{row[0]}</span><span className="text-white/40">{row[1]}</span><span style={{ color: "#A26AFF" }}>{row[2]}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 p-3 rounded-xl text-center text-xs font-semibold text-black" style={{ background: "linear-gradient(91.6deg, #AFE2ED, #A26AFF)" }}>Bridge Now</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}