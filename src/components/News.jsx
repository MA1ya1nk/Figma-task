import { useState } from "react";

const logos = [
  {
    name: "LinkedIn",
    svg: (
      <svg viewBox="0 0 120 32" fill="white" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
        <rect width="32" height="32" rx="4" fill="white" fillOpacity="0.15"/>
        <path d="M10 12h4v12h-4V12zm2-5.5a2.5 2.5 0 110 5 2.5 2.5 0 010-5zM16 12h3.8v1.7h.05c.53-1 1.82-2.05 3.75-2.05C27.4 11.65 28 14 28 17.2V24h-4v-6.1c0-1.45-.03-3.32-2.02-3.32-2.03 0-2.34 1.58-2.34 3.22V24H16V12z" fill="white"/>
        <text x="38" y="22" fontFamily="sans-serif" fontWeight="700" fontSize="17" fill="white">Linked</text>
        <text x="93" y="22" fontFamily="sans-serif" fontWeight="900" fontSize="17" fill="white">in</text>
      </svg>
    ),
    dWidth: "226.59px", dHeight: "60px",
    mWidth: "138.986px", mHeight: "36.813px", mOpacity: 1
  },
  {
    name: "Reddit",
    svg: (
      <svg viewBox="0 0 110 32" fill="white" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
        <circle cx="16" cy="16" r="16" fill="white" fillOpacity="0.15"/>
        <path d="M26.7 16a2.3 2.3 0 00-2.3-2.3c-.6 0-1.1.2-1.5.6A11.3 11.3 0 0016.2 13l1.1-5.2 3.6.8a1.6 1.6 0 103.2-.2 1.6 1.6 0 00-3 .7l-4-.9-1.3 6c-2.8.1-5.3.8-7.1 2a2.3 2.3 0 10-2.7 3.6 4.5 4.5 0 000 .6c0 3.3 3.8 6 8.5 6s8.5-2.7 8.5-6a4.5 4.5 0 000-.6 2.3 2.3 0 001.7-2.3zm-14 1.6a1.6 1.6 0 113.2 0 1.6 1.6 0 01-3.2 0zm8.9 4.2c-1 1-3 1.3-4.6 1.3s-3.6-.3-4.6-1.3a.5.5 0 01.7-.7c.8.8 2.5 1 3.9 1s3.1-.2 3.9-1a.5.5 0 01.7.7zm-.3-2.6a1.6 1.6 0 110-3.2 1.6 1.6 0 010 3.2z" fill="white"/>
        <text x="38" y="22" fontFamily="sans-serif" fontWeight="700" fontSize="17" fill="white">reddit</text>
      </svg>
    ),
    dWidth: "185.19px", dHeight: "60px",
    mWidth: "113.193px", mHeight: "36.568px", mOpacity: 1
  },
  {
    name: "Facebook",
    svg: (
      <svg viewBox="0 0 130 32" fill="white" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
        <circle cx="16" cy="16" r="16" fill="white" fillOpacity="0.15"/>
        <path d="M20.5 10h-2.8c-.4 0-.7.4-.7 1v2h3.5l-.5 3.5H17V26h-3.5V16.5H11V13h2.5v-2.5C13.5 8.1 15 6.5 17 6.5h3.5V10z" fill="white"/>
        <text x="38" y="22" fontFamily="sans-serif" fontWeight="700" fontSize="17" fill="white">facebook</text>
      </svg>
    ),
    dWidth: "303.15px", dHeight: "60px",
    mWidth: "138.986px", mHeight: "36.813px", mOpacity: 0.8
  },
  {
    name: "Google",
    svg: (
      <svg viewBox="0 0 160 32" fill="white" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
        <circle cx="16" cy="16" r="16" fill="white" fillOpacity="0.15"/>
        <path d="M24 16.2h-8v3h4.6A4.6 4.6 0 0116 22a6 6 0 110-12 5.8 5.8 0 014.1 1.7l2.1-2.1A9 9 0 107 16a9 9 0 009 9c5 0 8.7-3.5 8.7-8.7 0-.7-.1-1.4-.2-2.1H24v2z" fill="white"/>
        <text x="38" y="18" fontFamily="sans-serif" fontWeight="700" fontSize="30" fill="white">Google</text>
        <text x="38" y="36" fontFamily="sans-serif" fontWeight="400" fontSize="15" fill="white" opacity="0.7">for Entrepreneurs</text>
      </svg>
    ),
    // Desktop View Specs Fix
    dWidth: "131.3715057373047px", 
    dHeight: "42.86592483520508px", 
    dOpacity: 1,
    // Mobile View Specs Fix
    mWidth: "80.60413360595703px", 
    mHeight: "26.300762176513672px", 
    mOpacity: 1
  },
];

const mobileOrder = [logos[0], logos[1], logos[3], logos[0], logos[0], logos[1], logos[2], logos[3]];

export default function NewsSection() {
  const [expanded, setExpanded] = useState(false);
  const mobileDisplayList = expanded ? mobileOrder : mobileOrder.slice(0, 6);

  return (
    <section className="news-section">
      <div className="title-container">
        <h2 className="news-title">Plena in the News</h2>
      </div>

      <div className="desktop-rows">
        <div className="row-style">
          {[...logos, ...logos].map((logo, i) => (
            <div 
              key={"d1-" + i} 
              className="logo-item" 
              style={{ 
                width: logo.dWidth, 
                height: logo.dHeight,
                opacity: logo.name === "Google" ? (logo.dOpacity || 1) : 0.8 
              }}
            >
              {logo.svg}
            </div>
          ))}
        </div>
        <div className="row-style" style={{ marginTop: "40px" }}>
          {[...logos, ...logos].map((logo, i) => (
            <div 
              key={"d2-" + i} 
              className="logo-item" 
              style={{ 
                width: logo.dWidth, 
                height: logo.dHeight,
                opacity: logo.name === "Google" ? (logo.dOpacity || 1) : 0.8 
              }}
            >
              {logo.svg}
            </div>
          ))}
        </div>
      </div>

      <div className="mobile-grid">
        <div className="mobile-logo-grid">
          {mobileDisplayList.map((logo, i) => (
            <div 
              key={"mob-" + i} 
              className="mobile-logo-wrapper"
              style={{ 
                width: logo.mWidth, 
                height: logo.mHeight,
                opacity: logo.mOpacity,
                mixBlendMode: logo.name !== "Google" ? "luminosity" : "normal"
              }}
            >
              {logo.svg}
            </div>
          ))}
        </div>

        <div className="see-more-container" onClick={() => setExpanded(!expanded)}>
          <span className="see-more-text">{expanded ? "See less" : "See more"}</span>
          <button className="expand-btn" style={{ transform: expanded ? "rotate(180deg)" : "rotate(0deg)" }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 10l5 5 5-5" />
            </svg>
          </button>
        </div>
      </div>

      <style>{`
        .news-section {
          background: rgba(255,255,255,0.12);
          backdrop-filter: blur(94px);
          -webkit-backdrop-filter: blur(94px);
          border-radius: 52px;
          overflow: hidden;
          padding: 80px 0;
          position: relative;
        }

        .title-container { text-align: center; margin-bottom: 48px; }
        .news-title { font-family: 'Clash Grotesk Display', sans-serif; font-weight: 600; font-size: 48px; color: #fff; margin: 0; }

        .desktop-rows { display: block; }
        .mobile-grid { display: none; }
        .row-style { display: flex; justify-content: center; gap: 60px; mix-blend-mode: luminosity; }
        .logo-item { flex-shrink: 0; }

        @media (max-width: 767px) {
          .desktop-rows { display: none; }
          .mobile-grid { display: flex; flex-direction: column; align-items: center; width: 100%; }

          .news-title {
            width: 275px;
            height: 38px;
            font-size: 28px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 32px auto;
          }

          .mobile-logo-grid {
            display: grid;
            grid-template-columns: repeat(2, auto);
            gap: 40px 30px;
            padding: 0 20px;
            justify-items: center;
            align-items: center;
          }

          .mobile-logo-wrapper {
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .see-more-container {
            margin-top: 48px;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 8px;
            cursor: pointer;
          }

          .see-more-text { color: rgba(255,255,255,0.6); font-size: 14px; font-family: sans-serif; }
          .expand-btn {
            width: 36px;
            height: 36px;
            border-radius: 50%;
            border: 1px solid rgba(255,255,255,0.2);
            background: rgba(255,255,255,0.05);
            display: flex;
            align-items: center;
            justify-content: center;
            transition: transform 0.3s ease;
          }
        }
      `}</style>
    </section>
  );
}