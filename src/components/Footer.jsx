export default function Footer() {
  return (
    <footer className="py-16" style={{ background: "rgba(21,21,21,0.8)", backdropFilter: "blur(82px)" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center font-black text-white text-sm" style={{ background: "linear-gradient(135deg, #AFE2ED, #A26AFF)" }}>P</div>
              <span className="text-white font-bold text-xl">PLENA FINANCE</span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed">The self-custodial smart wallet with Account Abstraction.</p>
          </div>
          <div>
            <h5 className="text-white font-semibold mb-4">Legal</h5>
            <ul className="space-y-2">
              {["Terms of use", "Privacy notice", "Security notice", "Contact us"].map((l) => (
                <li key={l}><a href="#" className="text-white/50 text-sm hover:text-white transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="text-white font-semibold mb-4">Company</h5>
            <ul className="space-y-2">
              {["Press", "Blog", "FAQs", "Support"].map((l) => (
                <li key={l}><a href="#" className="text-white/50 text-sm hover:text-white transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-wrap gap-6 items-center justify-center mb-8 opacity-50">
            {["LinkedIn", "Reddit", "Forbes", "TechCrunch", "CoinDesk"].map((brand) => (
              <div key={brand} className="px-4 py-2 rounded-lg bg-white/5 text-white/60 text-sm font-medium border border-white/10">{brand}</div>
            ))}
          </div>
          <p className="text-white/30 text-xs text-center leading-relaxed max-w-4xl mx-auto">
            Plena and the articles contained herein are for informational purposes only. Please do not construe any such information or material on this Website as legal, tax, investment, financial, or other advice. The risk of loss in cryptocurrency can be substantial.
          </p>
          <p className="text-white/20 text-xs text-center mt-4">© 2024 Plena Finance. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}