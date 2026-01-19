import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

/**
 * Sub-component for the Navigation Bar
 */
const Navbar = () => {
  const navItems = [
    { label: 'Boost Conversion', href: '#boost-conversion', active: true },
    { label: 'COD Control', href: '#cod-control' },
    { label: 'Improve Purchase Intent', href: '#improve-intent' },
    { label: 'Build Loyalty', href: '#build-loyalty' },
  ];

  return (
    <nav className="nav-container">
      <div className="nav-links">
        {navItems.map((item, index) => (
          <React.Fragment key={item.label}>
            <a href={item.href} className={`nav-link ${item.active ? 'active' : ''}`}>
              {item.label}
              {item.active && <motion.div layoutId="underline" className="nav-underline" />}
            </a>
            {index < navItems.length - 1 && <div className="nav-divider" />}
          </React.Fragment>
        ))}
      </div>
      <div className="nav-actions">
        <button className="btn btn-outline">Book Demo</button>
        <button className="btn btn-primary">
          Get Started
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M5 12h14m-7-7 7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </nav>
  );
};

/**
 * Sub-component for the Content Sections (Islands)
 */
const SectionHero = ({ title, subtitle, videoSrc, imageSrc, id, reverse = false }) => {
  return (
    <section id={id} className={`hero-section ${reverse ? 'reverse' : ''}`}>
      <motion.div 
        initial={{ opacity: 0, x: reverse ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="hero-text"
      >
        <h2 className="display-text">{title}</h2>
        <p className="sub-text">{subtitle}</p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="hero-visual"
      >
        <div className="media-container">
          {videoSrc ? (
            <video autoPlay loop muted playsInline className="hero-video">
              <source src={videoSrc} type="video/mp4" />
            </video>
          ) : (
            <img src={imageSrc} alt={title} className="hero-image" />
          )}
        </div>
      </motion.div>
    </section>
  );
};

const GrowthLanding = () => {
  const { scrollYProgress } = useScroll();
  
  // Example of recreating the "Missing Piece" parallax effect
  const textXLeft = useTransform(scrollYProgress, [0, 0.2], [0, -100]);
  const textXRight = useTransform(scrollYProgress, [0, 0.2], [0, 100]);

  return (
    <div className="landing-wrapper">
      <Navbar />
      
      <main className="content-stack">
        {/* Sticky Intro Parallax Section */}
        <section className="sticky-intro">
          <motion.div style={{ x: textXLeft }} className="intro-title left">
            THE MISSING
          </motion.div>
          <motion.div style={{ x: textXRight }} className="intro-title right">
            IN D2C GROWTH.
          </motion.div>
        </section>

        {/* Dynamic Sections Refactored from Framer Islands */}
        <SectionHero 
          id="boost-conversion"
          title={<>They Tap Buy, <br/>The Form Fills Itself.</>}
          subtitle="Feels like the checkout already knew them."
          videoSrc="https://framerusercontent.com/assets/QEGCy18UF7QGRTkzUR0SdCE9Xk.webm"
        />

        <SectionHero 
          id="cod-control"
          title={<>RTO Protection <br/>& COD Control.</>}
          subtitle="Disables COD for high-risk users automatically."
          imageSrc="https://framerusercontent.com/images/Mv5GE83DoNiJSCE5tnenMTAL88.png"
          reverse
        />
      </main>
    </div>
  );
};

export default GrowthLanding;