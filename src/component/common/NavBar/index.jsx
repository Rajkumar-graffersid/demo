import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "../../StickyNavbar.css";

export default function CloudScrollSection() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  /* ---------------- PHASE 1: GROW WIDTH ---------------- */
  const width = useTransform(scrollYProgress, [0, 0.6], ["10%", "100%"]);

  /* lock vertical position until width is done */
  const translateY = useTransform(scrollYProgress, [0, 0.6, 1], [0, 0, -120]);

  /* ---------------- PHASE 2: CLEAR CLOUDS ---------------- */
  const cloudFrontOpacity = useTransform(
    scrollYProgress,
    [0.6, 0.75, 1],
    [1, 0.5, 0]
  );

  const cloudMidOpacity = useTransform(
    scrollYProgress,
    [0.6, 0.85, 1],
    [1, 0.6, 0]
  );

  const cloudBackOpacity = useTransform(scrollYProgress, [0.6, 1], [1, 0.3]);

  /* ---------------- INNER CONTENT ---------------- */
  const contentOpacity = useTransform(scrollYProgress, [0.7, 1], [0, 1]);

  const contentY = useTransform(scrollYProgress, [0.7, 1], [40, 0]);

  return (
    <section ref={sectionRef} className="cloud-section">
      {/* Side content (behind cloud) */}
      <div className="cloud-side left">
        <h3>Left Content</h3>
        <p>This stays behind the growing cloud.</p>
      </div>

      <div className="cloud-side right">
        <h3>Right Content</h3>
        <p>This also gets covered.</p>
      </div>

      {/* CLOUD CONTAINER */}
      <motion.div
        className="cloud-container"
        style={{
          width,
          y: translateY,
        }}
      >
        {/* Dense cloud layers */}
        <motion.img
          src="https://framerusercontent.com/images/kEy5gcMvRbXbIpAUzSs1mIR0UGQ.png"
          className="cloud layer-front"
          style={{ opacity: cloudFrontOpacity, height: "100px" }}
        />

        <motion.img
          src="https://framerusercontent.com/images/kEy5gcMvRbXbIpAUzSs1mIR0UGQ.png"
          className="cloud layer-mid"
          style={{ opacity: cloudMidOpacity, height: "100px" }}
        />

        <motion.img
          src="https://framerusercontent.com/images/kEy5gcMvRbXbIpAUzSs1mIR0UGQ.png"
          className="cloud layer-back"
          style={{ opacity: cloudBackOpacity, height: "100px" }}
        />

        {/* CONTENT INSIDE CLOUD */}
        <motion.div
          className="cloud-inner"
          style={{
            opacity: contentOpacity,
            y: contentY,
          }}
        >
          <h1>Clear Skies Ahead</h1>
          <p>This appears after clouds start clearing.</p>
        </motion.div>
      </motion.div>
    </section>
  );
}
