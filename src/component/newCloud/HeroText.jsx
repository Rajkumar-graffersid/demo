import React from "react";
import { motion } from "framer-motion";

export default function HeroText() {
  return (
    <section className="hero-text">
      <motion.div
        className="hero-left"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <p>The Missing</p>
        <p>Piece</p>
      </motion.div>

      <motion.div
        className="hero-right"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <p>In D2C</p>
        <p>Growth.</p>
      </motion.div>
    </section>
  );
}
