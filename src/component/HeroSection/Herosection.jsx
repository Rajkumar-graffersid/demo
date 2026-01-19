import { motion } from "framer-motion";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero-container">
      {/* Background Video */}
      <video
        className="hero-video"
        src="https://framerusercontent.com/assets/jtISvDNBQbqMfCX7CyjtbDQqdg4.mp4"
        autoPlay
        preload="auto"
        muted
        playsInline
        loop
      />

      {/* Content Overlay */}
      <div className="hero-content">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Subtitle */}
          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Razorpay Magic Checkout
          </motion.p>

          {/* Main Heading */}
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            It's Not Just A Checkout.{" "}
            <span className="hero-title-bold">It's Engineered Magic.</span>
          </motion.h1>

          {/* CTA Button */}
          <motion.div
            className="hero-cta"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <motion.a
              href="#demo"
              className="cta-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Book Demo"
            >
              Book Demo
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
