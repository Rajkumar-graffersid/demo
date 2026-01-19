import { useRef, useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import PhoneInteraction from "./Phoneinteraction";
import CarouselCards from "./Carouselcards";
import "./Scrollanimationsection.css";

const ScrollAnimationSectionRight = () => {
  const containerRef = useRef(null);
  const [currentCard, setCurrentCard] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Transform values for parallax effects
  const titleOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const titleY = useTransform(scrollYProgress, [0, 0.2], [0, -100]);

  const contentOpacity = useTransform(scrollYProgress, [0.2, 0.4], [0, 1]);
  const contentX = useTransform(scrollYProgress, [0.2, 0.4], [320, 0]);

  const islandLeftX = useTransform(scrollYProgress, [0.3, 0.5], [-360, -360]);
  const islandLeftY = useTransform(scrollYProgress, [0.3, 0.5], [130, 130]);
  const islandLeftScale = useTransform(scrollYProgress, [0.3, 0.5], [0.9, 0.9]);

  const cloudScale = useTransform(scrollYProgress, [0.4, 0.6], [0.9, 1]);

  const cards = [
    {
      title: "Login with Razorpay",
      features: [
        {
          icon: "login",
          text: "Instantly spot what, when, and how shoppers buy.",
        },
        {
          icon: "exit",
          text: "Win back drop-offs via your own email, SMS, or WhatsApp.",
        },
      ],
    },
    {
      title: "Smart Auto-Selection",
      features: [
        {
          icon: "address",
          text: "Pre-saved addresses and AI-driven shipping selection based on delivery",
        },
        {
          icon: "truck",
          text: "Provide real-time delivery estimates & area serviceability",
        },
      ],
    },
    {
      title: "Intelligent Payment Recommendation",
      features: [
        {
          icon: "methods",
          text: "Largest coverage of 100+ payment methods, intelligently prioritised by shopper history.",
        },
        {
          icon: "payments",
          text: "Netbanking | Cards | UPI | BNPL | EMI and more",
        },
      ],
    },
    {
      title: "Biometric Authentication",
      features: [
        {
          icon: "fingerprint",
          text: "Replaces card OTP with biometrics for faster, secure payment access in just one click",
        },
        {
          icon: "click",
          text: "Instant authentication without app-switching",
        },
      ],
    },
  ];

  return (
    <div ref={containerRef} className="scroll-animation-section">
      {/* Initial Title */}
      {/* Science Section - Blue Background */}
      <div className="science-section">
        <motion.div
          className="science-content"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          {/* Left Side - Phone with Interactions */}
          <div className="science-right">
            <div className="science-phone">
              <img
                src="https://framerusercontent.com/images/NzXanXeoxpQZxURV6Iku2LogO8.png"
                alt=""
                className="phone-bg-blur"
              />
              <img
                src="https://framerusercontent.com/images/8zesKBGLXPcLKN8OBqqSpkIDM.png"
                alt=""
                className="phone-mesh"
              />
              <PhoneInteraction isScience={true} current={currentCard} />
            </div>
          </div>

          {/* Right Side - Carousel Cards */}
          <div className="science-left">
            <div className="science-text">
              <h2>
                100M+ Data Points
                <br />
                Power Every Checkout.
              </h2>
              <p>Checkout Built on Predictive Logic.</p>
            </div>

            <CarouselCards
              cards={cards}
              currentCard={currentCard}
              setCurrentCard={setCurrentCard}
            />
          </div>
        </motion.div>

        {/* Decorative Clouds */}
        <div className="science-clouds">
          <img
            src="https://framerusercontent.com/images/N2p4bjhoz4Zmev0cTW95ROBFbrE.png"
            alt=""
            className="science-cloud-1"
          />
          <img
            src="https://framerusercontent.com/images/N2p4bjhoz4Zmev0cTW95ROBFbrE.png"
            alt=""
            className="science-cloud-2"
          />
          <img
            src="https://framerusercontent.com/images/N2p4bjhoz4Zmev0cTW95ROBFbrE.png"
            alt=""
            className="science-cloud-3"
          />
        </div>
      </div>
    </div>
  );
};

export default ScrollAnimationSectionRight;
