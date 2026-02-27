import { useState } from "react";

export default function FAQSection() {
  const [open, setOpen] = useState(0);

  const faqs = [
    { 
      q: "What is Plena crypto wallet?", 
      a: "Plena is a self-custodial smart wallet leveraging EIP-4337 Account Abstraction, giving you full control over your crypto assets across multiple chains with a seamless, seedless experience." 
    },
    { 
      q: "What makes Plena wallet the most secured among others?", 
      a: "Plena uses a multi-level security architecture including MPC (Multi-Party Computation) and account abstraction, ensuring that even if you lose access, your funds can be safely recovered without compromising security." 
    },
    { 
      q: "Where can I download the Plena wallet App?", 
      a: "The Plena App is available globally on the Apple App Store for iOS devices and the Google Play Store for all Android devices. Simply search 'Plena Finance' to get started." 
    },
  ];

  return (
    <section className="py-32 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Large Heading with Image replacement */}
        <div className="mb-16">
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight flex items-center gap-4 flex-wrap">
              Have more questions? 
              {/* <img 
                src="/assets/lifebuoy.png" 
                alt="Support icon" 
                className="w-12 h-12 md:w-20 md:h-20 object-contain"
                
              /> */}
            </h2>
            <p className="text-white/60 text-xl md:text-3xl">
            Read our <span className="text-white/80 underline decoration-white/20 underline-offset-8 cursor-pointer hover:text-white transition-colors">support document</span> to find out more
            </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <div 
              key={i} 
              onClick={() => setOpen(open === i ? -1 : i)}
              className={`rounded-[40px] border transition-all duration-500 cursor-pointer overflow-hidden ${
                open === i 
                ? "bg-[#161618] border-white/20" 
                : "bg-[#0F0F11] border-white/5 hover:border-white/10"
              }`}
            >
              <div className="flex justify-between items-center p-10 md:p-12">
                <h4 className="text-white font-bold text-2xl md:text-4xl pr-8">
                  {faq.q}
                </h4>
                
                <div className={`transition-transform duration-500 ease-in-out ${open === i ? "rotate-180" : ""}`}>
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M6 9l6 6 6-6"/>
                    </svg>
                </div>
              </div>

              <div 
                className={`transition-all duration-500 ease-in-out px-10 md:px-12 ${
                  open === i 
                  ? "max-h-[500px] pb-12 opacity-100" 
                  : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-white/50 text-xl md:text-2xl leading-relaxed max-w-4xl">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}