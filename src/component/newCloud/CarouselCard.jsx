import React from "react";
import { motion } from "framer-motion";
import { LoginCardSVG, FingerprintIcon } from "./SVGIcons";

export default function CarouselCard({ title, description, iconType }) {
  return (
    <motion.div
      className="carousel-card"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="card-svg">
        <LoginCardSVG />
      </div>

      <div className="card-content">
        {iconType === "fingerprint" && <FingerprintIcon />}
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </motion.div>
  );
}
