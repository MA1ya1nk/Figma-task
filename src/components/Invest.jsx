// export default function InvestSection() {
//   return (
//     <>
//       <style>{`
//         .invest-section {
//           background: linear-gradient(226.73deg, #C196C8 1.98%, #4F618D 97.5%);
//           width: 100%;
//           overflow: hidden;
//           position: relative;
//         }

//         .invest-inner {
//           max-width: 1200px;
//           margin: 0 auto;
//           padding: 80px 60px;
//           display: grid;
//           grid-template-columns: 1fr 1fr;
//           align-items: center;
//           gap: 40px;
//           min-height: 420px;
//         }

//         .invest-text {}

//         .invest-title {
//           font-family: 'Georgia', serif;
//           font-weight: 700;
//           font-size: clamp(28px, 3.5vw, 48px);
//           line-height: 1.2;
//           color: #ffffff;
//           margin: 0 0 16px 0;
//           letter-spacing: -0.5px;
//         }

//         .invest-desc {
//           font-size: 26px;
//           line-height: 1.6;
//           color: rgba(255,255,255,0.85);
//           margin: 0 0 32px 0;
//           max-width: 700px;
//         }

//         .store-buttons {
//           display: flex;
//           gap: 12px;
//           flex-wrap: wrap;
//         }

//         .store-btn {
//           display: flex;
//           align-items: center;
//           gap: 10px;
//           background: #000000;
//           border: none;
//           border-radius: 10px;
//           padding: 10px 20px;
//           cursor: pointer;
//           transition: background 0.2s;
//           text-decoration: none;
//         }
//         .store-btn:hover { background: #1a1a1a; }

//         .store-btn-icon { font-size: 22px; color: white; }

//         .store-btn-text { text-align: left; }
//         .store-btn-small {
//           display: block;
//           font-size: 10px;
//           color: rgba(255,255,255,0.6);
//           font-family: 'Inter', sans-serif;
//           line-height: 1;
//           margin-bottom: 2px;
//         }
//         .store-btn-large {
//           display: block;
//           font-size: 14px;
//           color: #ffffff;
//           font-family: 'Inter', sans-serif;
//           font-weight: 600;
//           line-height: 1;
//         }

//         /* Image side */
//         .invest-image {
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           position: relative;
//         }

//         .invest-image-placeholder {
//           width: 460px;
//           max-width: 100%;
//           height: 360px;
//           border-radius: 20px;
//           background: rgba(255,255,255,0.08);
//           border: 1px dashed rgba(255,255,255,0.2);
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           justify-content: center;
//           gap: 12px;
//           color: rgba(255,255,255,0.4);
//           font-size: 13px;
//           font-family: 'Inter', sans-serif;
//         }

//         .invest-image-placeholder .placeholder-icon {
//           font-size: 52px;
//         }

//         /* When using real image */
//         .invest-real-img {
//           width: 480px;
//           max-width: 100%;
//           height: auto;
//           object-fit: contain;
//           filter: drop-shadow(0 30px 60px rgba(0,0,0,0.3));
//           transform: translateY(-10px);
//         }

//         /* Responsive */
//         @media (max-width: 900px) {
//           .invest-inner {
//             grid-template-columns: 1fr;
//             padding: 60px 32px;
//             text-align: center;
//           }
//           .invest-desc { max-width: 100%; }
//           .store-buttons { justify-content: center; }
//           .invest-image { margin-top: 20px; }
//           .invest-image-placeholder { width: 100%; height: 280px; }
//         }

//         @media (max-width: 480px) {
//           .invest-inner { padding: 48px 20px; }
//           .invest-title { font-size: 26px; }
//           .store-buttons { flex-direction: column; align-items: center; }
//           .store-btn { width: 180px; justify-content: center; }
//         }
//       `}</style>

//       <section className="invest-section">
//         <div className="invest-inner">

//           {/* LEFT — Text */}
//           <div className="invest-text">
//             <h2 className="invest-title">
//               Invest in Crypto,<br />
//               Starting with Just $1
//             </h2>
//             <p className="invest-desc">
//               Buy BTC, ETH, Matic, &amp; 100,000+ crypto Assets across Multiple Chains with Ease
//             </p>
//             <div className="store-buttons">
//               <a className="store-btn">
//                 <span className="store-btn-icon">🍎</span>
//                 <span className="store-btn-text">
//                   <span className="store-btn-small">Download on the</span>
//                   <span className="store-btn-large">App Store</span>
//                 </span>
//               </a>
//               <a className="store-btn">
//                 <span className="store-btn-icon">▶</span>
//                 <span className="store-btn-text">
//                   <span className="store-btn-small">Download on the</span>
//                   <span className="store-btn-large">Play Store</span>
//                 </span>
//               </a>
//             </div>
//           </div>

          
//         </div>

        
//       </section>
//     </>
//   );
// }


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

        /* RIGHT SIDE IMAGE AREA */

        .invest-image {
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
          bottom: 60px;
          left: 10px;
          top: 230px;
          filter: drop-shadow(0 10px 20px rgba(0,0,0,0.25));
        }

        /* Responsive */

        @media (max-width: 900px) {
          .invest-inner {
            grid-template-columns: 1fr;
            padding: 60px 32px;
            text-align: center;
          }

          .store-buttons {
            justify-content: center;
          }

          .invest-image {
            margin-top: 40px;
          }

          .buy-img {
            left: 50%;
            transform: translateX(-50%);
          }
        }

        @media (max-width: 480px) {
          .invest-inner {
            padding: 48px 20px;
          }

          .invest-title {
            font-size: 26px;
          }

          .store-buttons {
            flex-direction: column;
            align-items: center;
          }

          .store-btn {
            width: 180px;
            justify-content: center;
          }
        }
      `}</style>

      <section className="invest-section">
        <div className="invest-inner">

          {/* LEFT SIDE TEXT */}
          <div>
            <h2 className="invest-title">
              Invest in Crypto,<br />
              Starting with Just $1
            </h2>

            <p className="invest-desc">
              Buy BTC, ETH, Matic, &amp; 100,000+ crypto Assets across Multiple Chains with Ease
            </p>

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

          {/* RIGHT SIDE IMAGES */}
          <div className="invest-image">

            {/* Wallet */}
            <img
              src="src/assets/invest/first.png"
              alt="wallet"
              className="wallet-img"
            />

            {/* Buy Button */}
            <img
              src="src/assets/invest/buy.png"
              alt="buy"
              className="buy-img"
            />

          </div>

        </div>
      </section>
    </>
  );
}