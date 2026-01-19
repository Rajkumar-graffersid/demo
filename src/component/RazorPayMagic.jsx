import React from "react";

export default function RazorpayMagicCheckout() {
  // Platform data with placeholder logo sources
  const webPlatforms = [
    {
      name: "WooCommerce",
      logo: "path/to/woocommerce-logo.png",
      alt: "WooCommerce",
    },
    { name: "Magento", logo: "path/to/magento-logo.png", alt: "Magento" },
    { name: "Shopify", logo: "path/to/shopify-logo.png", alt: "Shopify" },
  ];

  const appPlatforms = [
    { name: "Vajro", logo: "path/to/vajro-logo.png", alt: "Vajro" },
    { name: "Appmaker", logo: "path/to/appmaker-logo.png", alt: "Appmaker" },
    { name: "Appbrew", logo: "path/to/appbrew-logo.png", alt: "Appbrew" },
  ];

  const videoSrc = "path/to/your-video.mp4"; // Replace with your video source

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700&display=swap');

        body {
          font-family: 'Outfit', sans-serif;
          background: linear-gradient(135deg, #5eb3d6 0%, #7ec8e3 100%);
          min-height: 100vh;
          overflow-x: hidden;
        }

        .razorpay-container {
          padding: 60px 20px;
          min-height: 100vh;
        }

        .main-heading {
          color: white;
          font-size: clamp(2rem, 5vw, 3.5rem);
          font-weight: 600;
          text-align: center;
          margin-bottom: 60px;
          text-shadow: 0 2px 8px rgba(0,0,0,0.1);
          letter-spacing: -0.5px;
        }

        .content-wrapper {
          max-width: 1400px;
          margin: 0 auto;
        }

        .platforms-card {
          background: rgba(255, 255, 255, 0.95);
          border-radius: 24px;
          padding: 50px;
          box-shadow: 0 10px 40px rgba(0,0,0,0.1);
          height: fit-content;
        }

        .platforms-title {
          color: #2d3748;
          font-size: 2rem;
          margin-bottom: 40px;
          font-weight: 600;
        }

        .platform-category {
          margin-bottom: 40px;
        }

        .category-label {
          color: #4a5568;
          font-size: 0.95rem;
          font-weight: 600;
          margin-bottom: 20px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .platform-logos {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
          gap: 20px;
        }

        .platform-logo-box {
          background: white;
          border-radius: 16px;
          padding: 30px 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 8px rgba(0,0,0,0.06);
          transition: all 0.3s ease;
          cursor: pointer;
          height: 100px;
        }

        .platform-logo-box:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 20px rgba(0,0,0,0.12);
        }

        .platform-logo-box img {
          max-width: 100%;
          max-height: 50px;
          object-fit: contain;
        }

        .video-card {
          background: linear-gradient(135deg, #4c51bf 0%, #5a67d8 100%);
          border-radius: 24px;
          padding: 0;
          box-shadow: 0 10px 40px rgba(0,0,0,0.15);
          overflow: hidden;
          position: relative;
          height: 100%;
          min-height: 400px;
        }

        .video-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(76,81,191,0.3) 0%, rgba(90,103,216,0.3) 100%);
          pointer-events: none;
          z-index: 1;
        }

        .video-wrapper {
          position: relative;
          width: 100%;
          height: 100%;
          min-height: 400px;
        }

        .video-wrapper video {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 24px;
        }

        .video-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 40px;
          z-index: 2;
          pointer-events: none;
        }

        .razorpay-logo {
          color: white;
          font-size: 1.2rem;
          font-weight: 600;
          margin-bottom: 30px;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .razorpay-logo::before {
          content: '⚡';
          font-size: 1.5rem;
        }

        .video-title {
          color: white;
          font-size: clamp(1.8rem, 3vw, 2.5rem);
          font-weight: 700;
          text-align: center;
          line-height: 1.3;
          text-shadow: 0 4px 12px rgba(0,0,0,0.3);
        }

        .video-title-gradient {
          background: linear-gradient(135deg, #48ffc8 0%, #7fffd4 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .play-button {
          width: 80px;
          height: 80px;
          background: rgba(255, 255, 255, 0.95);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 30px auto;
          cursor: pointer;
          transition: all 0.3s ease;
          pointer-events: all;
          box-shadow: 0 8px 24px rgba(0,0,0,0.2);
        }

        .play-button:hover {
          transform: scale(1.1);
          background: white;
        }

        .play-button::after {
          content: '';
          width: 0;
          height: 0;
          border-left: 20px solid #4c51bf;
          border-top: 12px solid transparent;
          border-bottom: 12px solid transparent;
          margin-left: 4px;
        }

        .video-subtitle {
          color: rgba(255, 255, 255, 0.9);
          font-size: 0.9rem;
          text-align: center;
          margin-top: 20px;
        }

        @media (max-width: 991px) {
          .platforms-card {
            padding: 40px 30px;
            margin-bottom: 30px;
          }

          .video-card {
            min-height: 350px;
          }

          .platform-logos {
            grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
          }
        }

        @media (max-width: 576px) {
          .platforms-card {
            padding: 30px 20px;
          }

          .platforms-title {
            font-size: 1.5rem;
          }

          .platform-logo-box {
            padding: 20px 15px;
            height: 80px;
          }

          .video-title {
            font-size: 1.5rem;
          }

          .play-button {
            width: 60px;
            height: 60px;
          }
        }
      `}</style>

      <div className="razorpay-container">
        <h1 className="main-heading">The Magic? It's Now Self-Serve.</h1>

        <div className="content-wrapper">
          <div className="row g-4">
            {/* Platforms Section */}
            <div className="col-lg-5">
              <div className="platforms-card">
                <h2 className="platforms-title">Supported Platforms</h2>

                {/* Web Platforms */}
                <div className="platform-category">
                  <div className="category-label">Web Platforms</div>
                  <div className="platform-logos">
                    {webPlatforms.map((platform, index) => (
                      <div key={index} className="platform-logo-box">
                        <img
                          src={platform.logo}
                          alt={platform.alt}
                          onError={(e) => {
                            e.target.style.display = "none";
                            e.target.parentElement.innerHTML = `<span style="color: #7c3aed; font-weight: 600; font-size: 1.1rem;">${platform.name}</span>`;
                          }}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* App Platforms */}
                <div className="platform-category">
                  <div className="category-label">App Platforms</div>
                  <div className="platform-logos">
                    {appPlatforms.map((platform, index) => (
                      <div key={index} className="platform-logo-box">
                        <img
                          src={platform.logo}
                          alt={platform.alt}
                          onError={(e) => {
                            e.target.style.display = "none";
                            e.target.parentElement.innerHTML = `<span style="color: #e11d48; font-weight: 600; font-size: 1.1rem;">${platform.name}</span>`;
                          }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Video Section */}
            <div className="col-lg-7">
              <div className="video-card">
                <div className="video-wrapper">
                  <video controls poster="path/to/video-thumbnail.jpg">
                    <source src={videoSrc} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>

                  <div className="video-overlay">
                    <div className="razorpay-logo">Razorpay</div>
                    <h3 className="video-title">
                      How to Integrate
                      <br />
                      <span className="video-title-gradient">
                        Razorpay Magic Checkout
                      </span>
                      <br />
                      with your Shopify Store
                    </h3>
                    <div
                      className="play-button"
                      onClick={(e) => {
                        const video = e.target
                          .closest(".video-card")
                          .querySelector("video");
                        if (video) {
                          video.play();
                          e.target.closest(".video-overlay").style.display =
                            "none";
                        }
                      }}
                    ></div>
                    <p className="video-subtitle">
                      the Razorpay Magic Checkout with your
                      <br />
                      Shopify Store.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
