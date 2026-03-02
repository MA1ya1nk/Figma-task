import React from "react";

export default function Footer() {
  const socialLinks = ["Instagram", "Twitter", "Facebook", "LinkedIn", "TikTok", "YouTube", "Medium"];
  const legalLinks = ["Terms of use", "Privacy notice", "Security notice", "Contact us"];
  const companyLinks = ["Press", "Blog", "FAQs", "Support"];

  return (
    <footer className="bg-black py-20 border-t border-white/5">
      <div className="max-w-[85rem] mx-auto px-6 lg:px-8 flex flex-col items-center lg:items-stretch">
        
        {/* Top Section: Logo and Navigation Links */}
        <div className="flex flex-col lg:flex-row justify-between mb-12 lg:mb-16 w-full items-center lg:items-start">
          
          {/* Logo Section */}
          <div className="flex-shrink-0 mb-10 lg:mb-0">
             <img 
               src="/assets/main.png" 
               alt="Plena Logo" 
               className="w-16 h-auto md:w-28" 
             />
          </div>

          {/* Link Columns Wrapper */}
          <div className="flex flex-col md:flex-row lg:mr-20 items-center md:items-start text-center md:text-left w-full lg:w-auto">
            
            {/* 1. DUAL SOCIAL ROWS - Only visible on mobile (Matching image_347efa) */}
            <div className="flex lg:hidden flex-col gap-4 mb-10 items-center">
               <div className="flex gap-6">
                  {["Instagram", "Twitter", "Facebook"].map((social) => (
                    <a key={social} href="#" className="text-white flex items-center gap-1 text-[13px] font-medium">
                      {social} <span className="text-purple-500 text-[10px]">↗</span>
                    </a>
                  ))}
               </div>
               <div className="flex gap-6">
                  {["Instagram", "Twitter", "Facebook"].map((social) => (
                    <a key={social} href="#" className="text-white flex items-center gap-1 text-[13px] font-medium opacity-80">
                      {social} <span className="text-purple-500 text-[10px]">↗</span>
                    </a>
                  ))}
               </div>
            </div>

            {/* 2. NAVIGATION LINKS - Stacked without gap between columns on mobile */}
            <div className="flex flex-col md:flex-row gap-6 md:gap-32 items-center md:items-start">
              {/* Company Column */}
              <div className="flex flex-col gap-6">
                {companyLinks.map((link) => (
                  <a key={link} href="#" className="text-white/60 text-lg lg:text-xl hover:text-white transition-colors">
                    {link}
                  </a>
                ))}
              </div>

              {/* Legal Column - No extra parent gap so it sits directly under 'Support' */}
              <div className="flex flex-col gap-6">
                {legalLinks.map((link) => (
                  <a key={link} href="#" className="text-white/60 text-lg lg:text-xl hover:text-white transition-colors">
                    {link}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Social Media Row (Untouched) */}
        <div className="hidden lg:flex flex-wrap gap-x-8 gap-y-4 mb-16">
          {socialLinks.map((social) => (
            <a 
              key={social} 
              href="#" 
              className="group flex items-center gap-1 text-white text-lg md:text-xl hover:text-purple-400 transition-colors"
            >
              {social}
              <svg className="w-4 h-4 text-purple-500 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </a>
          ))}
        </div>

        {/* Divider Line */}
        <div className="w-full h-px bg-white/10 mb-10"></div>

        {/* Disclaimer Text */}
        <div className="max-w-full px-2">
          <p className="text-white/20 text-[10px] lg:text-sm leading-relaxed text-center lg:text-left font-light">
           Plena and the articles contained herein (the “Website”) is for informational purposes only. Please do not construe any such information or material on this Website as legal, tax, investment, financial, or other advice. This Website and the information contained herein is not an endorsement of any digital asset, protocol, network, or project. The risk of loss in cryptocurrency can be substantial and nothing herein is intended to be a guarantee against the possibility of loss. This Website and the content contained herein are based on information which is believed to be reliable and has been obtained by sources believed to be reliable, but Plena Ltd. makes no representation or warranty, express or implied, as to the fairness, accuracy, adequacy, reasonableness, or completeness of such information. Plena Ltd. cannot be responsible, in any way whatsoever, for your use of the information contained herein or linked from this Website. Any use of Plena Ltd. services are at all times subject to and governed by Plena Ltd. policies, including, without limitation, its Terms of Service and Privacy Policy, as may be amended from time to time.
            {/* Rest of disclaimer text remains same */}
          </p>
        </div>

      </div>
    </footer>
  );
}