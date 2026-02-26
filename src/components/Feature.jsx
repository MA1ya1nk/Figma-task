export default function FeaturesSection() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Clash+Display:wght@600&family=Inter:wght@400;500&display=swap');

        .features-section {
          background: #111113;
          width: 100%;
          padding: 80px 48px;
          box-sizing: border-box;
          font-family: 'Inter', sans-serif;
        }

        .features-inner {
          max-width: 900px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        /* Row: text left, image right */
        .feature-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          padding: 60px 0;
          border-bottom: 1px solid rgba(255,255,255,0.07);
          gap: 40px;
        }

        .feature-row:last-child {
          border-bottom: none;
        }

        .feature-row.reverse {
          direction: rtl;
        }
        .feature-row.reverse > * {
          direction: ltr;
        }

        .feature-text {}

        .feature-title {
          font-family: 'Clash Display', 'Georgia', serif;
          font-weight: 600;
          font-size: clamp(28px, 4vw, 46px);
          line-height: 1.2;
          letter-spacing: -0.5px;
          color: #ffffff;
          margin: 0 0 16px 0;
        }

        .feature-desc {
          font-size: 15px;
          line-height: 1.7;
          color: rgba(255,255,255,0.5);
          margin: 0 0 28px 0;
          max-width: 380px;
        }

        .feature-cta {
          display: inline-block;
          padding: 10px 22px;
          border: 1px solid rgba(255,255,255,0.25);
          border-radius: 8px;
          color: rgba(255,255,255,0.8);
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          background: transparent;
          transition: all 0.2s;
          text-decoration: none;
        }
        .feature-cta:hover {
          border-color: rgba(255,255,255,0.5);
          color: white;
        }

        .feature-image {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .feature-image .img-placeholder {
          width: 390px;
          height: 390px;
          max-width: 100%;
          border-radius: 24px;
          background: rgba(255,255,255,0.04);
          border: 1px dashed rgba(255,255,255,0.12);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 10px;
          color: rgba(255,255,255,0.25);
          font-size: 13px;
        }

        .feature-image .img-placeholder .icon-wrap {
          font-size: 48px;
          opacity: 0.5;
        }

        /* Real images when provided */
        .feature-image img {
          width: 390px;
          height: 390px;
          max-width: 100%;
          object-fit: contain;
          border-radius: 20px;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .features-section {
            padding: 60px 24px;
          }
          .feature-row {
            grid-template-columns: 1fr;
            padding: 48px 0;
            gap: 32px;
          }
          .feature-row.reverse {
            direction: ltr;
          }
          .feature-desc {
            max-width: 100%;
          }
          .feature-image .img-placeholder,
          .feature-image img {
            width: 100%;
            height: 280px;
          }
        }
      `}</style>

      <section className="features-section">
        <div className="features-inner">

          {/* Feature 1 — Take control of your assets */}
          <div className="feature-row">
            <div className="feature-text">
              <h2 className="feature-title">Take control of<br />your assets</h2>
              <p className="feature-desc">
                Unlike centralized exchanges, Plena ensures that only users have full control over their crypto assets.
              </p>
            </div>
            <div className="feature-image">
              {/* Replace src with your actual image path */}
              <div className="img-placeholder">
                <div className="icon-wrap">🛡️</div>
                <span>390 × 390 image</span>
              </div>
              <img src="src/assets/control-assets.png" alt="Take control of your assets" />
            </div>
          </div>

          {/* Feature 2 — Social Login & Easy recovery */}
          <div className="feature-row reverse">
            <div className="feature-text">
              <h2 className="feature-title">Social Login &<br />Easy recovery</h2>
              <p className="feature-desc">
                Sign in quickly and effortlessly using social media accounts, and retrieve your account even if your device is lost with MPC (Multi-Party Computation) security.
              </p>
            </div>
            <div className="feature-image">
              <div className="img-placeholder">
                <div className="icon-wrap">🔐</div>
                <span>390 × 390 image</span>
              </div>
              {/* <img src="src/assets/social-login.png" alt="Social Login" /> */}
            </div>
          </div>

          {/* Feature 3 — 100K+ Tokens */}
          <div className="feature-row">
            <div className="feature-text">
              <h2 className="feature-title">100K+ Tokens</h2>
              <p className="feature-desc">
                Store, Send, Receive and Trade over 100,000 crypto across Multiple Chains at Best Rates.
              </p>
              <a className="feature-cta">Get the App</a>
            </div>
            <div className="feature-image">
              <div className="img-placeholder">
                <div className="icon-wrap">🪙</div>
                <span>390 × 390 image</span>
              </div>
              {/* <img src="src/assets/tokens.png" alt="100K+ Tokens" /> */}
            </div>
          </div>

        </div>
      </section>
    </>
  );
}