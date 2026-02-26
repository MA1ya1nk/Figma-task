import { useState } from "react";

export default function FAQSection() {
  const [open, setOpen] = useState(2);
  const faqs = [
    { q: "What is Plena crypto wallet?", a: "Plena is a self-custodial smart wallet leveraging EIP-4337 Account Abstraction, giving you full control over your crypto assets across multiple chains." },
    { q: "What makes Plena wallet the most secured among others?", a: "Plena uses multi-level security architecture including MPC (Multi-Party Computation), social recovery, and regular third-party security audits." },
    { q: "Where can I download the Plena wallet App?", a: "Plena App can be downloaded on the App Store on Apple devices or Play Store on Android Devices." },
  ];
  return (
    <section className="py-24 bg-black">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-5xl sm:text-6xl font-bold text-white mb-4" style={{ fontFamily: "Georgia, serif" }}>Have more questions? 🛟</h2>
        <p className="text-white/60 text-lg mb-12">Read our support document to find out more</p>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="rounded-3xl border border-white/10 overflow-hidden cursor-pointer" style={{ background: "rgba(32,32,32,0.7)" }} onClick={() => setOpen(open === i ? -1 : i)}>
              <div className="flex justify-between items-center p-6">
                <h4 className="text-white font-bold text-xl">{faq.q}</h4>
                <span className="text-white/60 text-2xl transition-transform duration-300" style={{ transform: open === i ? "rotate(180deg)" : "none" }}>↓</span>
              </div>
              {open === i && (
                <div className="px-6 pb-6"><p className="text-white/70 text-lg">{faq.a}</p></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}