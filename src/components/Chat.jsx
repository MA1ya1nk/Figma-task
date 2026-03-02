export default function ChatPaySection() {
  return (
    <section
      className="w-full overflow-hidden"
      style={{ background: "linear-gradient(135deg, #B8F0FF 0%, #C4A8FF 50%, #A78BFA 100%)" }}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-10 py-16 sm:py-20 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

        {/* LEFT CONTENT - Stays visible on both */}
        <div className="flex flex-col gap-6 text-center lg:text-left items-center lg:items-start">
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

        {/* RIGHT — Desktop Images: NOW HIDDEN ON MOBILE */}
        {/* 'hidden' removes it from mobile, 'lg:flex' brings it back for desktop */}
        <div className="hidden lg:flex relative justify-center items-center">
          <img
            src="/assets/chat/chess.png"
            alt="Chat Pay"
            className="w-full max-w-[380px] drop-shadow-xl rounded-2xl z-0"
          />

          <img
            src="/assets/chat/small.png"
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

      {/* MOBILE ONLY IMAGE - This is the only image that will show on mobile */}
      <div className="lg:hidden relative w-full flex justify-center pb-20">
        <img
          src="/assets/chat/chatimg.png" 
          alt="Mobile View Illustration"
          className="relative drop-shadow-2xl"
          style={{
            width: "320px", // Manually change width
            top: "0px",     // Manually change vertical position
            left: "0px",    // Manually change horizontal position
          }}
        />
      </div>
    </section>
  );
}