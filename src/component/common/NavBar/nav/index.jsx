import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
// import "./index.css"; // Assuming you move styles here
import "../../../StickyNavbar.css";
import "./index.css";

export default function CloudScrollSection() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["center start", "end end"], // Utilize the full height of the section
  });

  /* ANIMATION TIMELINE (0.0 to 1.0 of scroll progress):
     0.0 -> 0.4 : Cloud grows from 20% to 100% width
     0.4 -> 0.6 : Clouds start clearing
     0.6 -> 1.0 : Text appears
  */

  /* ---------------- PHASE 1: GROW WIDTH ---------------- */
  // It stays pinned, so we just animate width
  const width = useTransform(scrollYProgress, [0, 0.9], ["20%", "100%"]);
  const height = useTransform(scrollYProgress, [0, 0.9], ["20%", "100%"]);
  // Optional: Add a border radius change for polish
  const borderRadius = useTransform(scrollYProgress, [0, 0.4], ["50px", "0px"]);

  /* ---------------- PHASE 2: CLEAR CLOUDS ---------------- */
  const cloudFrontOpacity = useTransform(scrollYProgress, [0.4, 0.6], [1, 0]);
  const cloudMidOpacity = useTransform(scrollYProgress, [0.4, 0.7], [1, 0]);
  const cloudBackOpacity = useTransform(scrollYProgress, [0.4, 0.8], [1, 0]);

  /* ---------------- INNER CONTENT ---------------- */
  const contentOpacity = useTransform(scrollYProgress, [0.6, 0.9], [0, 1]);
  const contentY = useTransform(scrollYProgress, [0.6, 0.9], [50, 0]);

  return (
    <section ref={sectionRef} className="cloud-scroll-track">
      {/* This wrapper is Sticky. It stays in the viewport 
        while the user scrolls through the 'cloud-scroll-track'
      */}
      <div className="cloud-sticky-wrapper">
        {/* BACKGROUND CONTENT (Behind the cloud) */}
        <div className="background-content">
          <div className="side left">
            <h3>Left Content</h3>
            <p>I stay here while the cloud grows over me.</p>
          </div>
          <div className="side right">
            <h3>Right Content</h3>
            <p>I also get covered.</p>
          </div>
        </div>

        {/* THE EXPANDING CLOUD CONTAINER */}
        <motion.div
          className="cloud-container"
          style={{
            width,
            borderRadius,
            height,
            marginTop: "-50px",
          }}
        >
          {/* Dense cloud layers */}
          <motion.img
            src="https://framerusercontent.com/images/kEy5gcMvRbXbIpAUzSs1mIR0UGQ.png"
            className="cloud layer-front"
            style={{ opacity: cloudFrontOpacity }}
            alt="cloud"
          />
          <motion.img
            src="https://framerusercontent.com/images/kEy5gcMvRbXbIpAUzSs1mIR0UGQ.png"
            className="cloud layer-mid"
            style={{ opacity: cloudMidOpacity }}
            alt="cloud"
          />
          <motion.img
            src="https://framerusercontent.com/images/kEy5gcMvRbXbIpAUzSs1mIR0UGQ.png"
            className="cloud layer-back"
            style={{ opacity: cloudBackOpacity }}
            alt="cloud"
          />

          {/* CONTENT REVEALED INSIDE */}
          <motion.div
            className="cloud-inner"
            style={{
              opacity: contentOpacity,
              y: contentY,
            }}
          >
            <h1>Clear Skies Ahead</h1>
            <p>The clouds have cleared, and the width is 100%.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
