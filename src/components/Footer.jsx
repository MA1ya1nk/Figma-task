// export default function Footer() {
//   return (
//     <footer className="py-16" style={{ background: "rgba(21,21,21,0.8)", backdropFilter: "blur(82px)" }}>
//       <div className="max-w-7xl mx-auto px-6">
//         <div className="grid md:grid-cols-3 gap-12 mb-12">
//           <div>
//             <div className="flex items-center gap-2 mb-4">
//               <div className="w-8 h-8 rounded-lg flex items-center justify-center font-black text-white text-sm" style={{ background: "linear-gradient(135deg, #AFE2ED, #A26AFF)" }}>P</div>
//               <span className="text-white font-bold text-xl">PLENA FINANCE</span>
//             </div>
//             <p className="text-white/50 text-sm leading-relaxed">The self-custodial smart wallet with Account Abstraction.</p>
//           </div>
//           <div>
//             {/* <h5 className="text-white font-semibold mb-4">Legal</h5> */}
//             <ul className="space-y-2">
//               {["Terms of use", "Privacy notice", "Security notice", "Contact us"].map((l) => (
//                 <li key={l}><a href="#" className="text-white/50 text-sm hover:text-white transition-colors">{l}</a></li>
//               ))}
//             </ul>
//           </div>
//           <div>
//             {/* <h5 className="text-white font-semibold mb-4">Company</h5> */}
//             <ul className="space-y-2">
//               {["Press", "Blog", "FAQs", "Support"].map((l) => (
//                 <li key={l}><a href="#" className="text-white/50 text-sm hover:text-white transition-colors">{l}</a></li>
//               ))}
//             </ul>
//           </div>
//         </div>
//         <div className="border-t border-white/10 pt-8">
//           <div className="flex flex-wrap gap-6 items-center justify-center mb-8 opacity-50">
//             {["LinkedIn", "Reddit", "Forbes", "TechCrunch", "CoinDesk"].map((brand) => (
//               <div key={brand} className="px-4 py-2 rounded-lg bg-white/5 text-white/60 text-sm font-medium border border-white/10">{brand}</div>
//             ))}
//           </div>
//           <p className="text-white/30 text-xs leading-relaxed w-[1328px] h-[154px] overflow-hidden">
//   Plena and the articles contained herein (the “Website”) is for informational purposes only.
//   Please do not construe any such information or material on this Website as legal, tax, investment, financial, 
//   or other advice. This Website and the information contained herein is not an endorsement of any digital asset, 
//   protocol, network, or project. The risk of loss in cryptocurrency can be substantial and nothing herein is intended to 
//   be a guarantee against the possibility of loss. This Website and the content contained herein are based on information 
//   which is believed to be reliable and has been obtained by sources believed to be reliable, but Plena Ltd. makes no 
//   representation or warranty, express or implied, as to the fairness, accuracy, adequacy, reasonableness, or completeness 
//   of such information. Plena Ltd. cannot be responsible, in any way whatsoever, for your use of the information contained
//   herein or linked from this Website. Any use of Plena Ltd. services are at all times subject to and governed by Plena Ltd.
//   policies, including, without limitation, its Terms of Service and Privacy Policy, as may be amended from time to time.
// </p>
//         </div>
//       </div>
//     </footer>
//   );
// }


import React from "react";

export default function Footer() {
  const socialLinks = ["Instagram", "Twitter", "Facebook", "LinkedIn", "TikTok", "YouTube", "Medium"];
  const legalLinks = ["Terms of use", "Privacy notice", "Security notice", "Contact us"];
  const companyLinks = ["Press", "Blog", "FAQs", "Support"];

  return (
    <footer className="bg-black py-20 border-t border-white/5">
      <div className="max-w-[85rem] mx-auto px-6 lg:px-8">
        
        {/* Top Section: Logo and Navigation Links */}
        <div className="flex flex-col lg:flex-row justify-between mb-16 gap-12 lg:gap-0">
          
          {/* Logo Section - Matching the stylized large 'P' */}
          <div className="flex-shrink-0">
             <img 
               src="/assets/main.png" 
               alt="Plena Logo" 
               className="w-24 h-auto md:w-28" 
             />
          </div>

          {/* Link Columns - Right Aligned */}
          <div className="flex gap-20 md:gap-32 lg:mr-20">
            {/* Legal Column */}
            <div className="flex flex-col gap-6">
              {legalLinks.map((link) => (
                <a key={link} href="#" className="text-white/60 text-xl hover:text-white transition-colors">
                  {link}
                </a>
              ))}
            </div>

            {/* Company Column */}
            <div className="flex flex-col gap-6">
              {companyLinks.map((link) => (
                <a key={link} href="#" className="text-white/60 text-xl hover:text-white transition-colors">
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Social Media Row with Arrows */}
        <div className="flex flex-wrap gap-x-8 gap-y-4 mb-16">
          {socialLinks.map((social) => (
            <a 
              key={social} 
              href="#" 
              className="group flex items-center gap-1 text-white text-lg md:text-xl hover:text-purple-400 transition-colors"
            >
              {social}
              <svg 
                className="w-4 h-4 text-purple-500 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2.5"
              >
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </a>
          ))}
        </div>

        {/* Divider Line */}
        <div className="w-full h-px bg-white/10 mb-10"></div>

        {/* Disclaimer Text - Matching the small, thin weight in Figma */}
        <div className="max-w-full">
          <p className="text-white/30 text-sm leading-relaxed text-justify md:text-left">
            Plena and the articles contained herein (the “Website”) is for informational purposes only. Please do not construe any such information or material on this Website as legal, tax, investment, financial, or other advice. This Website and the information contained herein is not an endorsement of any digital asset, protocol, network, or project. The risk of loss in cryptocurrency can be substantial and nothing herein is intended to be a guarantee against the possibility of loss. This Website and the content contained herein are based on information which is believed to be reliable and has been obtained by sources believed to be reliable, but Plena Ltd. makes no representation or warranty, express or implied, as to the fairness, accuracy, adequacy, reasonableness, or completeness of such information. Plena Ltd. cannot be responsible, in any way whatsoever, for your use of the information contained herein or linked from this Website. Any use of Plena Ltd. services are at all times subject to and governed by Plena Ltd. policies, including, without limitation, its Terms of Service and Privacy Policy, as may be amended from time to time.
          </p>
        </div>

      </div>
    </footer>
  );
}