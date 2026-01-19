import React, { useState, useEffect } from "react";
import "./CheckoutShowcase.css";

const CheckoutShowcase = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const slides = [
    {
      title: "Login with Razorpay",
      features: [
        {
          icon: "👁️",
          text: "Instantly spot what, when, and how shoppers buy.",
        },
        {
          icon: "🔄",
          text: "Win back drop-offs via your own email, SMS, or WhatsApp.",
        },
      ],
    },
    {
      title: "Smart Auto-Selection",
      features: [
        {
          icon: "📋",
          text: "Pre-saved addresses and AI-driven shipping selection based on delivery",
        },
        {
          icon: "🚚",
          text: "Provide real-time delivery estimates & area serviceability",
        },
      ],
    },
    {
      title: "Intelligent Payment Recommendation",
      features: [
        {
          icon: "💳",
          text: "Largest coverage of 100+ payment methods, intelligently prioritised by shopper history.",
        },
        {
          icon: "💰",
          text: "Netbanking | Cards | UPI | BNPL | EMI and more",
        },
      ],
    },
    {
      title: "Biometric Authentication",
      features: [
        {
          icon: "👆",
          text: "Replaces card OTP with biometrics for faster, secure payment access in just one click",
        },
        {
          icon: "⚡",
          text: "Instant authentication without app-switching",
        },
      ],
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="checkout-showcase" id="boost-conversion">
      <div className="showcase-container">
        <div className="main-island">
          {/* Hero Content */}
          <div className={`hero-content ${isVisible ? "visible" : ""}`}>
            <h1 className="hero-title">
              They Tap Buy,
              <br />
              The Form Fills Itself.
            </h1>
            <p className="hero-subtitle">
              Feels like the checkout already knew them.
            </p>
          </div>

          {/* Left Island with Phone Mockup */}
          <div className="island-left">
            <div className="island-bg">
              <div className="phone-mockup">
                <div className="phone-screen">
                  <div className="login-button">
                    <span>Login with</span>
                    <svg
                      className="razorpay-logo"
                      viewBox="0 0 76 20"
                      fill="white"
                    >
                      <text x="0" y="15" fontSize="12" fill="white">
                        Razorpay
                      </text>
                    </svg>
                  </div>

                  <div className="interaction-frame">
                    <div className="coupon-card">
                      <img
                        src="https://framerusercontent.com/images/SKHS1gLucI86uA9KrgnC0LLk12s.png?width=140&height=136"
                        alt="Product"
                        className="coupon-image"
                      />
                      <div className="coupon-text">
                        <p className="coupon-title">
                          Free ₹1000 on Puffer Jackets
                        </p>
                        <p className="coupon-subtitle">
                          Login to apply coupon "PFJ1000"
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="use-case-carousel">
                    <div className="carousel-track">
                      <img
                        src="https://framerusercontent.com/images/GQANqrcm5JZ8RCU3KOnx0XKKlx4.png?scale-down-to=512"
                        alt="Use case 1"
                      />
                      <img
                        src="https://framerusercontent.com/images/QfdQ9KxIxeYWtiGIMRLVDmQR8Jk.png?scale-down-to=512"
                        alt="Use case 2"
                      />
                      <img
                        src="https://framerusercontent.com/images/ly5S3UeFVoWszANsayiFo7geeIE.png?scale-down-to=512"
                        alt="Use case 3"
                      />
                    </div>
                  </div>
                </div>

                <div className="phone-shadow"></div>
              </div>

              {/* Floating bags */}
              <div className="floating-bags">
                <img
                  src="https://framerusercontent.com/images/IXUirMjXcOeYMuL06Boyb4io4.png?width=132&height=180"
                  alt="Bag 1"
                  className="bag bag-1"
                />
                <img
                  src="https://framerusercontent.com/images/eobjgtNXMivDStGpoBF5Gx5kWA.png?width=176&height=200"
                  alt="Bag 2"
                  className="bag bag-2"
                />
                <img
                  src="https://framerusercontent.com/images/vfuArOGV04GVjFoKlOObLpfVBM.png?width=186&height=253"
                  alt="Bag 3"
                  className="bag bag-3"
                />
              </div>
            </div>
          </div>

          {/* Right Island */}
          <div className="island-right">
            <img
              src="https://framerusercontent.com/images/Wf7XW3RevDiZYIQyAFFbOjXDUM.png?scale-down-to=1024"
              alt="Island background"
            />
          </div>

          {/* Clouds */}
          <div className="cloud cloud-left">
            <img
              src="https://framerusercontent.com/images/N2p4bjhoz4Zmev0cTW95ROBFbrE.png?scale-down-to=512"
              alt="Cloud"
            />
          </div>
          <div className="cloud cloud-right">
            <img
              src="https://framerusercontent.com/images/N2p4bjhoz4Zmev0cTW95ROBFbrE.png?scale-down-to=512"
              alt="Cloud"
            />
          </div>
          <div className="cloud cloud-bottom">
            <img
              src="https://framerusercontent.com/images/N2p4bjhoz4Zmev0cTW95ROBFbrE.png?scale-down-to=512"
              alt="Cloud"
            />
          </div>

          {/* Swipe Down Indicator */}
          <div className="swipe-indicator">
            <p>SWIPE DOWN FOR THE SCIENCE BEHIND THE MAGIC</p>
            <div className="swipe-arrows">
              <span>↓</span>
              <span>↓</span>
              <span>↓</span>
            </div>
          </div>
        </div>

        {/* Science Section */}
        <div className="science-section">
          <div className="science-background">
            <div className="science-content">
              <h2 className="science-title">
                100M+ Data Points
                <br />
                Power Every Checkout.
              </h2>
              <p className="science-subtitle">
                Checkout Built on Predictive Logic.
              </p>

              {/* Carousel Cards */}
              <div className="carousel-container">
                <button
                  className="carousel-btn prev-btn"
                  onClick={prevSlide}
                  aria-label="Previous"
                >
                  ‹
                </button>

                <div className="carousel-card">
                  <div className="card-content">
                    <h3 className="card-title">{slides[currentSlide].title}</h3>

                    <div className="card-features">
                      {slides[currentSlide].features.map((feature, index) => (
                        <div key={index} className="feature-item">
                          <span className="feature-icon">{feature.icon}</span>
                          <p className="feature-text">{feature.text}</p>
                        </div>
                      ))}
                    </div>

                    {currentSlide === 3 && (
                      <div className="card-badge">
                        <span>One-Click Checkout</span>
                      </div>
                    )}
                  </div>
                </div>

                <button
                  className="carousel-btn next-btn"
                  onClick={nextSlide}
                  aria-label="Next"
                >
                  ›
                </button>
              </div>

              {/* Carousel Dots */}
              <div className="carousel-dots">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    className={`dot ${index === currentSlide ? "active" : ""}`}
                    onClick={() => setCurrentSlide(index)}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Decorative clouds in science section */}
            <div className="science-cloud science-cloud-left">
              <img
                src="https://framerusercontent.com/images/N2p4bjhoz4Zmev0cTW95ROBFbrE.png?scale-down-to=512"
                alt="Cloud"
              />
            </div>
            <div className="science-cloud science-cloud-right">
              <img
                src="https://framerusercontent.com/images/N2p4bjhoz4Zmev0cTW95ROBFbrE.png?scale-down-to=512"
                alt="Cloud"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutShowcase;
