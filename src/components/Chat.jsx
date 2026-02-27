// export default function ChatPaySection() {
//   return (
//     <section className="py-24 overflow-hidden" style={{ background: "linear-gradient(91.6deg, #AFE2ED 0.62%, #A26AFF 99.17%)" }}>
//       <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
//         <div>
//           <h2 className="text-4xl sm:text-5xl font-bold text-black mb-4" style={{ fontFamily: "Georgia, serif" }}>World's first crypto Chat'n'Pay 🤑</h2>
//           <p className="text-black/70 text-lg mb-8">The new culture of money is making headlines. Check out our latest blog to find out more.</p>
//           <button className="px-6 py-3 rounded-xl bg-black text-white font-semibold hover:bg-black/80 transition-all">Get the App</button>
//         </div>
//         <div className="flex justify-center">
//           <div className="w-72 rounded-3xl border border-black/20 overflow-hidden" style={{ background: "rgba(0,0,0,0.85)" }}>
//             <div className="p-4 border-b border-white/10 flex items-center gap-3">
//               <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-300 to-purple-500"/>
//               <div><p className="text-white text-sm font-semibold">Plena Chat</p><p className="text-white/40 text-xs">Send crypto instantly</p></div>
//             </div>
//             <div className="p-4 space-y-3">
//               {[{ msg: "Hey! Send me 0.1 ETH?", mine: false }, { msg: "Sure! Sending now... ✓", mine: true }, { msg: "💸 0.1 ETH Sent!", mine: true, special: true }, { msg: "Got it! Thanks 🙌", mine: false }].map((m, i) => (
//                 <div key={i} className={`flex ${m.mine ? "justify-end" : "justify-start"}`}>
//                   <div className={`px-3 py-2 rounded-2xl text-sm max-w-[80%] ${m.special ? "font-bold" : m.mine ? "bg-purple-600 text-white" : "bg-white/10 text-white"}`} style={m.special ? { background: "linear-gradient(91.6deg, #AFE2ED, #A26AFF)", color: "#000" } : {}}>{m.msg}</div>
//                 </div>
//               ))}
//             </div>
//             <div className="p-3 border-t border-white/10 flex gap-2">
//               <input className="flex-1 bg-white/10 rounded-xl px-3 py-2 text-white text-xs placeholder-white/30 outline-none" placeholder="Type a message..." readOnly />
//               <button className="px-3 py-2 rounded-xl text-black text-xs font-semibold" style={{ background: "linear-gradient(91.6deg, #AFE2ED, #A26AFF)" }}>▶</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

export default function ChatPaySection() {
  return (
    <section
      className="w-full overflow-hidden"
      style={{ background: "linear-gradient(135deg, #B8F0FF 0%, #C4A8FF 50%, #A78BFA 100%)" }}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-10 py-16 sm:py-20 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

        {/* LEFT CONTENT */}
        {/* Add this import in your index.html or index.css */}
{/* @import url('https://api.fontshare.com/v2/css?f[]=clash-grotesk@600&display=swap'); */}

<div className="flex flex-col gap-6">
  <div>
    <p
      className="text-black/80 leading-[108%]"
      style={{
        fontFamily: "'Clash Grotesk', sans-serif",
        fontWeight: 600,
        fontSize: "clamp(28px, 3.5vw, 48px)",
        letterSpacing: "0px",
      }}
    >
      Worlds first crypto
    </p>
    <h2
      className="text-black leading-[108%]"
      style={{
        fontFamily: "'Clash Grotesk', sans-serif",
        fontWeight: 700,
        fontSize: "clamp(40px, 5.5vw, 72px)",
        letterSpacing: "0px",
      }}
    >
      Chat'n'Pay 🤑
    </h2>
  </div>

  <p
    className="text-black/70 leading-relaxed max-w-md"
    style={{ fontSize: "clamp(15px, 1.5vw, 20px)" }}
  >
    The new culture of money is making headlines check out our latest blog
  </p>

  <button
    className="w-fit px-10 py-4 rounded-xl border-2 border-black/50 bg-transparent text-black font-semibold hover:bg-black/10 transition-all"
    style={{ fontSize: "clamp(14px, 1.2vw, 18px)" }}
  >
    Get the App
  </button>
</div>

        {/* RIGHT — two images */}
        <div className="relative flex justify-center items-center">

          {/* Main image — checkerboard with coins */}
          <img
            src="src/assets/chat/chess.png"
            alt="Chat Pay"
            className="w-full max-w-[380px] drop-shadow-xl rounded-2xl z-0"
          />

          {/* Left coin — overlapping left edge */}
          <img
            src="src/assets/chat/small.png"
            alt="Coin"
            className="absolute drop-shadow-2xl z-10"
            style={{
              width: "clamp(70px, 12vw, 110px)",
              top: "40%",
              left: "-20px",
              transform: "translateY(-50%)",
            }}
          />

        </div>

      </div>
    </section>
  );
}