export default function InvestSection() {
  return (
    <>
      <style>{`
        .invest-section {
          background: linear-gradient(226.73deg, #C196C8 1.98%, #4F618D 97.5%);
          width: 100%;
          overflow: hidden;
          position: relative;
        }

        .invest-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 80px 60px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: 40px;
          min-height: 420px;
        }

        .invest-title {
          font-family: Georgia, serif;
          font-weight: 700;
          font-size: clamp(28px, 3.5vw, 48px);
          line-height: 1.2;
          color: #ffffff;
          margin-bottom: 16px;
        }

        .invest-desc {
          font-size: 26px;
          line-height: 1.6;
          color: rgba(255,255,255,0.85);
          margin-bottom: 32px;
          max-width: 700px;
        }

        .store-buttons {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .store-btn {
          display: flex;
          align-items: center;
          gap: 10px;
          background: #000;
          border-radius: 10px;
          padding: 10px 20px;
          cursor: pointer;
          text-decoration: none;
        }

        .store-btn-icon {
          font-size: 22px;
          color: white;
        }

        .store-btn-text {
          text-align: left;
        }

        .store-btn-small {
          display: block;
          font-size: 10px;
          color: rgba(255,255,255,0.6);
        }

        .store-btn-large {
          display: block;
          font-size: 14px;
          color: #ffffff;
          font-weight: 600;
        }

        /* --- DESKTOP IMAGES (Default) --- */
        .desktop-image-container {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .wallet-img {
          width: 720px;
          height: auto;
          filter: drop-shadow(0 30px 60px rgba(0,0,0,0.35));
        }

        .buy-img {
          position: absolute;
          width: 180px;
          top: 230px;
          left: 10px;
          filter: drop-shadow(0 10px 20px rgba(0,0,0,0.25));
        }

        /* --- MOBILE IMAGES (Hidden by default) --- */
        .mobile-image-container {
          display: none;
          position: relative;
          height: 850px;
          width: 100%;
          margin-top: 20px;
        }

        .m-phone-right {
          position: absolute;
          width: 620px;
          right: 7%;
          bottom: 20px;
          z-index: 10;          
        }

        .m-phone-left {
          position: absolute;
          width: 420px;
          left: 15%;
          
          z-index: 20;
          
          filter: drop-shadow(0 20px 40px rgba(0,0,0,0.4));
        }

        /* --- RESPONSIVE LOGIC --- */
        @media (max-width: 900px) {
          .invest-inner {
            grid-template-columns: 1fr;
            padding: 60px 24px;
            text-align: center;
          }

          .invest-desc {
             font-size: 18px;
             margin-bottom: 24px;
             margin-left: auto;
             margin-right: auto;
          }

          .store-buttons {
            justify-content: center;
            order: 3; /* Buttons go below images on mobile */
          }

          /* Hide Desktop Assets */
          .desktop-image-container {
            display: none;
          }

          /* Show Mobile Assets */
          .mobile-image-container {
            display: flex;
            justify-content: center;
            order: 2; /* Images sit between text and buttons */
          }

          .store-btn {
            width: 100%;
            max-width: 240px;
          }
        }

        @media (max-width: 480px) {
          .invest-title {
            font-size: 32px;
          }
          .mobile-image-container {
            height: 300px;
          }
          .m-phone-right, .m-phone-left {
            width: 180px;
          }
        }
      `}</style>

      <section className="invest-section">
        <div className="invest-inner">
          {/* LEFT SIDE TEXT */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <h2 className="invest-title">
              Invest in Crypto,<br />
              Starting with Just $1
            </h2>

            <p className="invest-desc">
              Buy BTC, ETH, Matic, &amp; 100,000+ crypto Assets across Multiple Chains with Ease
            </p>

            {/* Mobile Image Container - Appears only on Mobile between text and buttons */}
            <div className="mobile-image-container">
              <img src="/assets/phone/right.png" className="m-phone-right h-[300px] w-[400px] object-cover" alt="phone-ui" />
              <img src="/assets/phone/left.png" className="m-phone-left h-[300px] w-[400px] object-cover" alt="phone-ui" />
            </div>

            <div className="store-buttons">
              <a className="store-btn">
                <span className="store-btn-icon">🍎</span>
                <span className="store-btn-text">
                  <span className="store-btn-small">Download on the</span>
                  <span className="store-btn-large">App Store</span>
                </span>
              </a>

              <a className="store-btn">
                <span className="store-btn-icon">▶</span>
                <span className="store-btn-text">
                  <span className="store-btn-small">Download on the</span>
                  <span className="store-btn-large">Play Store</span>
                </span>
              </a>
            </div>
          </div>

          {/* Desktop Image Container - Hidden on Mobile */}
          <div className="desktop-image-container">
            <img src="/assets/invest/first.png" alt="wallet" className="wallet-img" />
            <img src="/assets/invest/buy.png" alt="buy" className="buy-img" />
          </div>
        </div>
      </section>
    </>
  );
}