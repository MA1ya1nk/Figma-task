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
            {/* <h5 className="text-white font-semibold mb-4">Legal</h5> */}
            <ul className="space-y-2">
              {["Terms of use", "Privacy notice", "Security notice", "Contact us"].map((l) => (
                <li key={l}><a href="#" className="text-white/50 text-sm hover:text-white transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>
          <div>
            {/* <h5 className="text-white font-semibold mb-4">Company</h5> */}
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
          <p className="text-white/30 text-xs leading-relaxed w-[1328px] h-[154px] overflow-hidden">
  Plena and the articles contained herein (the “Website”) is for informational purposes only.
  Please do not construe any such information or material on this Website as legal, tax, investment, financial, 
  or other advice. This Website and the information contained herein is not an endorsement of any digital asset, 
  protocol, network, or project. The risk of loss in cryptocurrency can be substantial and nothing herein is intended to 
  be a guarantee against the possibility of loss. This Website and the content contained herein are based on information 
  which is believed to be reliable and has been obtained by sources believed to be reliable, but Plena Ltd. makes no 
  representation or warranty, express or implied, as to the fairness, accuracy, adequacy, reasonableness, or completeness 
  of such information. Plena Ltd. cannot be responsible, in any way whatsoever, for your use of the information contained
  herein or linked from this Website. Any use of Plena Ltd. services are at all times subject to and governed by Plena Ltd.
  policies, including, without limitation, its Terms of Service and Privacy Policy, as may be amended from time to time.
</p>
        </div>
      </div>
    </footer>
  );
}