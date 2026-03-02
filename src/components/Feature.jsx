export default function FeaturesSection() {
  return (
    <>
      <style>
        {`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=swap');

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

        /* Update Heading Style for 42px spec */
        .feature-title {
          font-family: 'Clash Grotesk Display', sans-serif;
          font-weight: 600;
          font-size: 42px; 
          line-height: 1.2; 
          letter-spacing: 0px;
          vertical-align: bottom;
          color: #ffffff;
          margin: 0 0 20px 0;
          max-width: 575px;
        }

        /* Update Description Style for 28px spec */
        .feature-desc {
          font-family: 'Clash Grotesk Display', sans-serif;
          font-weight: 400;
          font-size: 28px;
          line-height: 1.4;
          letter-spacing: 0px;
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
            padding: 60px 24px;
          }

          .feature-row {
            display: flex;
            flex-direction: column-reverse;
            align-items: flex-start;
            padding: 50px 0;
            gap: 24px;
          }

          .feature-row.reverse {
            direction: ltr;
            flex-direction: column-reverse;
          }

          .feature-image {
            justify-content: flex-start;
            width: 100%;
          }

          .feature-image img {
            width: 180px;
            height: auto;
            margin-bottom: 12px;
          }

          .feature-title {
            font-size: 32px; 
            text-align: left;
            max-width: 100%;
          }

          .feature-desc {
            font-size: 18px;
            text-align: left;
            max-width: 100%;
            color: rgba(255,255,255,0.7);
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
              <img src="/assets/feature/security-shield.png" alt="control assets" />
            </div>
          </div>

          {/* Feature 2: Swap Crypto Example */}
          <div className="feature-row reverse">
            <div>
              <h2 className="feature-title">
                Swap Crypto <br /> with ease
              </h2>
              <p className="feature-desc">
                Swap smarter, not harder with Plena Finance - fast, safe, and competitive crypto swaps.
              </p>
            </div>
            <div className="feature-image">
              <img src="/assets/feature/social.png" alt="swap crypto" />
            </div>
          </div>

          {/* Feature 3: Lending Example */}
          <div className="feature-row">
            <div>
              <h2 className="feature-title">Lending Protocol</h2>
              <p className="feature-desc">
                Earn Interest with Top Protocols in the Industry with Just a Tap!
              </p>
              <a className="feature-cta">Get the App</a>
            </div>
            <div className="feature-image">
              <img src="/assets/feature/crypto-coins.png" alt="lending" />
            </div>
          </div>

        </div>
      </section>
    </>
  );
}