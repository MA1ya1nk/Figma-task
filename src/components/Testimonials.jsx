// export default function TestimonialsSection() {
//   const reviews = [
//     { name: "Logan M.", text: "Bonjour, Excellente application que j'ai depuis juin dernier ☺️ les gains se cumulent tous seuls à chaque achat", stars: 5 },
//     { name: "Sarah K.", text: "J'étais sceptique les gains se cumulent tous  au début je dois le reconnaître mais vous pouvez y aller sans crainte les gains se cumulent tous  !", stars: 5 },
//     { name: "Mike T.", text: "Application géniale ! Elle permet de gagner du cashback à chaque passage en caisse dans nos enseignes préférées ! Je recommande à 100%", stars: 5 },
//     { name: "Emma R.", text: "Un peu sceptique au début j'ai vite été convaincue, les gains s'accumulent seuls et les cartes cadeaux s'accumulent très vite les gains se cumulent tous  !!", stars: 5 },
//     { name: "Alex P.", text: "Bonjour, Excellente application que j'ai depuis juin dernier ☺️ les gains se cumulent tous seuls à chaque achat", stars: 4 },
//     { name: "James W.", text: "J'étais sceptique au début je dois le reconnaître mais vous pouvez y aller sans crainte lorem50 ipsum les gains se cumulent tous ", stars: 5 },
//   ];
//   return (
//     <section className="py-24 overflow-hidden" style={{ background: "#1A1A1B" }}>
//       <div className="max-w-7xl mx-auto px-6">
//         <div className="text-center mb-16">
//           <h2 className="text-5xl sm:text-6xl font-bold text-white mb-4" style={{ fontFamily: "Georgia, serif" }}>What our users say 💬</h2>
//           <p className="text-white/60 text-lg">Protected by a multi-level security architecture and is regularly</p>
//         </div>
//         <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
//           {reviews.map((r, i) => (
//             <div key={i} className="break-inside-avoid p-6 rounded-3xl border border-white/10 mb-4" style={{ background: "rgba(255,255,255,0.03)" }}>
//               <div className="flex gap-1 mb-3">{Array(r.stars).fill("⭐").map((s, j) => <span key={j} className="text-sm">{s}</span>)}</div>
//               <p className="text-white/80 text-sm leading-relaxed mb-4">{r.text}</p>
//               <div className="flex items-center gap-3">
//                 <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold" style={{ background: `hsl(${i * 60}, 60%, 40%)` }}>{r.name[0]}</div>
//                 <span className="text-white font-semibold text-sm">{r.name}</span>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import React, { useRef } from "react";

export default function Testimonials() {
  const scrollRef = useRef(null);

  // Increased messages to match the "grid" look in Figma Desktop
  const testimonials = [
    { text: "Bonjour, Excellente application que j'ai depuis juin dernier 😍 les gains se cumulent tous seuls à chaque achat", author: "Logan", stars: 4 },
    { text: "J'étais sceptique au début, mais l'application est géniale ! Elle permet de gagner du cashback à chaque passage.", author: "Logan", stars: 5 },
    { text: "Security is my main concern and this app makes me feel completely safe with my assets.", author: "Marcus", stars: 5 },
    { text: "Excellent customer service and very fast transactions. Highly recommended for crypto beginners.", author: "Sarah", stars: 4 },
    { text: "The best interface I have used so far. The bridge feature is incredibly fast and cheap.", author: "Logan", stars: 5 },
    { text: "Un peu sceptique au début j'ai vite été convaincue, les gains s'accumulent seuls et les cartes cadeaux sont top!", author: "Logan", stars: 4 },
    { text: "Great experience so far! The interface is very intuitive and the rewards are better than any bank.", author: "Sarah", stars: 5 },
    { text: "Fantastic app! I've been using it for months and the rewards are consistent and easy to claim.", author: "Logan", stars: 5 },
  ];

  return (
    <section className="py-16 md:py-24 bg-black overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* Main Dark Card Container: Rounded on Mobile, Transparent on Desktop */}
        <div className="bg-[#1A1A1C] md:bg-transparent rounded-[40px] p-6 md:p-0 flex flex-col items-center">
          
          {/* Header Group */}
          <div className="flex items-center gap-3 mb-4">
            <h2 className="text-white text-3xl md:text-6xl font-bold text-center">
              What our users say
            </h2>
            <div className="bg-white/10 p-2 rounded-full hidden md:block">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                <path d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2Z" />
              </svg>
            </div>
          </div>

          <p className="text-white/60 text-center text-sm md:text-xl mb-12 max-w-md">
            Protected by a multi-level security architecture and is regularly audited.
          </p>

          {/* MOBILE: overflow-x-auto (Horizontal Swipe)
            DESKTOP: md:flex-wrap md:justify-center (Grid Layout)
          */}
          <div 
            ref={scrollRef}
            className="flex flex-row md:flex-wrap gap-4 md:gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory no-scrollbar w-full pb-4 md:justify-center"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {testimonials.map((item, index) => (
              <div 
                key={index} 
                className="flex-none w-[85%] md:w-[calc(33.33%-24px)] lg:w-[calc(25%-24px)] snap-center bg-transparent border border-white/10 rounded-[24px] md:rounded-[30px] p-6 md:p-8 flex flex-col justify-between min-h-[220px] md:min-h-[250px] hover:border-white/30 transition-colors"
              >
                <p className="text-white/80 text-base md:text-lg leading-relaxed mb-6">
                  {item.text}
                </p>

                <div className="flex items-center justify-between mt-auto">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-white/10 rounded-sm flex items-center justify-center">
                       <svg width="10" height="10" viewBox="0 0 24 24" fill="white"><path d="M8 5v14l11-7z" /></svg>
                    </div>
                    <span className="text-white font-semibold text-sm md:text-base">{item.author}</span>
                  </div>

                  {/* Stars */}
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={`text-xs md:text-sm ${i < item.stars ? "text-white" : "text-white/20"}`}>
                        ★
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}