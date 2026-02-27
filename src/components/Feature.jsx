export default function FeaturesSection() {
  return (
    <>
      <style>
        {`
        @import url('https://fonts.googleapis.com/css2?family=Clash+Display:wght@600&family=Inter:wght@400;500&display=swap');

        .features-section {
          background: #111113;
          width: 100%;
          padding: 100px 48px;
          box-sizing: border-box;
          font-family: 'Inter', sans-serif;
        }

        .features-inner {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
        }

        .feature-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          padding: 90px 0;
          border-bottom: 1px solid rgba(255,255,255,0.07);
          gap: 60px;
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

        .feature-title {
          font-family: 'Clash Display', serif;
          font-weight: 600;
          font-size: clamp(42px, 5vw, 64px);
          line-height: 1.15;
          letter-spacing: -0.5px;
          color: #ffffff;
          margin: 0 0 20px 0;
          max-width: 575px;
        }

        .feature-desc {
          font-size: clamp(16px, 1.2vw, 20px);
          line-height: 1.7;
          color: rgba(255,255,255,0.55);
          margin: 0 0 32px 0;
          max-width: 596px;
        }

        .feature-cta {
          display: inline-block;
          padding: 12px 26px;
          border: 1px solid rgba(255,255,255,0.25);
          border-radius: 8px;
          color: rgba(255,255,255,0.9);
          font-size: 15px;
          font-weight: 500;
          cursor: pointer;
          background: transparent;
          transition: all 0.2s;
          text-decoration: none;
        }

        .feature-cta:hover {
          border-color: rgba(255,255,255,0.6);
          color: white;
        }

        .feature-image {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .feature-image img {
          width: 390px;
          height: 390px;
          max-width: 100%;
          object-fit: contain;
        }

        @media (max-width: 900px) {
          .features-section {
            padding: 80px 24px;
          }

          .feature-row {
            grid-template-columns: 1fr;
            padding: 70px 0;
            gap: 40px;
          }

          .feature-row.reverse {
            direction: ltr;
          }

          .feature-image img {
            width: 100%;
            max-width: 340px;
            height: auto;
          }

          .feature-title {
            font-size: clamp(34px, 6vw, 48px);
          }

          .feature-desc {
            font-size: 16px;
          }
        }
        `}
      </style>

      <section className="features-section">
        <div className="features-inner">

          {/* Feature 1 */}
          <div className="feature-row">
            <div>
              <h2 className="feature-title">
                Take control of <br /> your assets
              </h2>

              <p className="feature-desc">
                Unlike centralized exchanges, Plena ensures that only users have full control over their crypto assets.
              </p>
            </div>

            <div className="feature-image">
              <img src="public/assets/feature/security-shield.png" alt="control assets" />
            </div>
          </div>

          {/* Feature 2 */}
          <div className="feature-row reverse">
            <div>
              <h2 className="feature-title">
                Social Login & <br /> Easy recovery
              </h2>

              <p className="feature-desc">
                Sign in quickly and effortlessly using social media accounts, and retrieve your account even if your device is lost with MPC security.
              </p>
            </div>

            <div className="feature-image">
              <img src="public/assets/feature/social.png" alt="social login" />
            </div>
          </div>

          {/* Feature 3 */}
          <div className="feature-row">
            <div>
              <h2 className="feature-title">100K+ Tokens</h2>

              <p className="feature-desc">
                Store, Send, Receive and Trade over 100,000 crypto across Multiple Chains at Best Rates.
              </p>

              <a className="feature-cta">Get the App</a>
            </div>

            <div className="feature-image">
              <img src="public/assets/feature/crypto-coins.png" alt="tokens" />
            </div>
          </div>

        </div>
      </section>
    </>
  );
}