import { motion } from "framer-motion";
import { useState } from "react";
import "./PhoneInteraction.css";

const PhoneInteraction = ({ isScience = false, current }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const usecaseSlides = [
    "https://framerusercontent.com/images/GQANqrcm5JZ8RCU3KOnx0XKKlx4.png",
    "https://framerusercontent.com/images/QfdQ9KxIxeYWtiGIMRLVDmQR8Jk.png",
    "https://framerusercontent.com/images/ly5S3UeFVoWszANsayiFo7geeIE.png",
  ];

  const paymentSlides = [
    "https://framerusercontent.com/images/eRhAiaJ6U75PFFBc1mGaLjjLKo.png",
    "https://framerusercontent.com/images/ZvRcGidI7t64EZFgg5zvxpU1IMM.png",
    "https://framerusercontent.com/images/vNAshSUcsAmzudKwNyMHN1eVtfg.png",
  ];

  return (
    <div className="phone-interaction">
      {/* Video Background */}
      <div className="phone-video-container">
        {/* <video autoPlay loop muted playsInline className="phone-video">
          <source
            src="https://framerusercontent.com/assets/gB1m4z9zNtl0N81I7KRKGxandA.mov"
            type='video/quicktime; codecs="hvc1"'
          />
          <source
            src="https://framerusercontent.com/assets/QEGCy18UF7QGRTkzUR0SdCE9Xk.webm"
            type="video/webm"
          />
        </video> */}
        <img
          src="https://framerusercontent.com/images/rEWB0i8XssBGGSNV6sX6rlN6CA.png?scale-down-to=1024&width=2372&height=1348"
          alt=""
          className="phone-video"
        />
      </div>

      {/* Left Decorative Elements */}
      <div className="phone-left-elements">
        {/* <img
          src="https://framerusercontent.com/images/SchXT2AANlOhGieC8K5bUcThSTg.png"
          alt=""
        /> */}
      </div>

      {isScience && (
        <div className="phone-science-overlay">
          {/* Mobile Phone Frame */}
          <div className="mobile-frame">
            <img
              src="https://framerusercontent.com/images/Lu7X7BFDpowHCmzfdamyCVsrfFk.png?scale-down-to=1024&width=735&height=1407"
              alt=""
              className="mobile-image"
            />

            {/* Scan Animation */}
            <div className="scan-animation">
              {/* <div className="scan-frame">
                <div className="scan-corner scan-tl" />
                <div className="scan-line scan-line-1" />
                <div className="scan-line scan-line-2" />
                <div className="scan-line scan-line-3" />
                <div className="scan-line scan-line-4" />
              </div> */}
            </div>

            {/* Coupon Card */}
            {current === 0 && (
              <motion.div
                className="coupon-card"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <div className="coupon-content">
                  <img
                    src="https://framerusercontent.com/images/SKHS1gLucI86uA9KrgnC0LLk12s.png"
                    alt=""
                    className="coupon-product"
                  />
                  <div className="coupon-text">
                    <p className="coupon-title">Free ₹1000 on Puffer Jackets</p>
                    <p className="coupon-subtitle">
                      Login to apply coupon "PFJ1000"
                    </p>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Coupon Card */}
            {current === 0 && (
              <motion.div
                className="coupon-card-1 px-5"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <div className="coupon-content rounded-3 bg-dark text-light d-flex w-100">
                  <div className="coupon-tex p-2 m-auto d-flex gap-2 justify-content-center">
                    <p className="coupon-title text-light h1 fw-bolder fs-6">
                      Login with
                    </p>
                    <p className="coupon-subtitle text-light h1 fw-bolder fs-6">
                      Razorpay
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
            {current === 1 && (
              <motion.div
                className="coupon-card-3"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <div className="coupon-content">
                  <img
                    src="https://framerusercontent.com/images/SKHS1gLucI86uA9KrgnC0LLk12s.png"
                    alt=""
                    className="coupon-product"
                  />
                  <div className="coupon-text">
                    <p className="coupon-title">Free ₹1000 on Puffer Jackets</p>
                    <p className="coupon-subtitle">
                      Login to apply coupon "PFJ1000"
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
            {current === 2 && (
              <motion.div
                className="coupon-card-4"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <div className="coupon-content">
                  <img
                    src="https://framerusercontent.com/images/SKHS1gLucI86uA9KrgnC0LLk12s.png"
                    alt=""
                    className="coupon-product"
                  />
                  <div className="coupon-text">
                    <p className="coupon-title">Free ₹1000 on Puffer Jackets</p>
                    <p className="coupon-subtitle">
                      Login to apply coupon "PFJ1000"
                    </p>
                  </div>
                </div>
              </motion.div>
            )}

            {current === 3 && (
              <motion.div
                className="coupon-card-5"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <div className="coupon-content">
                  <img
                    src="https://framerusercontent.com/images/SKHS1gLucI86uA9KrgnC0LLk12s.png"
                    alt=""
                    className="coupon-product"
                  />
                  <div className="coupon-text">
                    <p className="coupon-title">Free ₹1000 on Puffer Jackets</p>
                    <p className="coupon-subtitle">
                      Login to apply coupon "PFJ1000"
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
            {/* Usecase Carousel */}
            {/* <div className="usecase-carousel">
              <AutoCarousel slides={usecaseSlides} />
            </div> */}

            {/* Payment Options Carousel */}
            {/* <div className="payment-carousel">
              <AutoCarousel slides={paymentSlides} speed={3000} />
            </div> */}
          </div>

          {/* Bottom Shadow */}
          <div className="phone-shadow">
            {/* <img
              src="https://framerusercontent.com/images/6mAZdGkPZsVu3f9dksaFvWFhgUQ.png"
              alt=""
            /> */}
          </div>

          {/* Wireframe Overlay */}
          <div className="phone-wireframe">
            {/* <img
              src="https://framerusercontent.com/images/rEWB0i8XssBGGSNV6sX6rlN6CA.png"
              alt=""
            /> */}
          </div>
        </div>
      )}
    </div>
  );
};

// Auto-scrolling Carousel Component
const AutoCarousel = ({ slides, speed = 2500 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-advance slides
  useState(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, speed);
    return () => clearInterval(interval);
  }, [slides.length, speed]);

  return (
    <div className="auto-carousel">
      <motion.div
        className="carousel-track"
        animate={{ x: -currentIndex * 100 + "%" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="carousel-slide">
            <img src={slide} alt="" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default PhoneInteraction;
