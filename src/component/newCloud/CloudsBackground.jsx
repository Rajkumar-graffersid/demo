import React from "react";
import { motion } from "framer-motion";
// import cloud1 from "../assets/cloud1.svg";
// import cloud2 from "../assets/cloud2.svg";
const cloud1 = (
  <svg
    width={60}
    height={40}
    viewBox="0 0 100 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M30 50C15 50 5 40 5 28C5 18 12 10 22 10C25 5 30 2 35 2C45 2 52 8 55 18C65 18 72 25 72 35C72 45 65 50 55 50"
      fill="white"
      stroke="#E0E7FF"
      strokeWidth="1.5"
    />
  </svg>
);
export default function CloudsBackground() {
  const float = { y: [0, 10, 0] };

  return (
    <div className="clouds-background">
      <motion.img
        src={cloud1}
        className="cloud cloud1"
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 0.7, y: float.y }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "loop" }}
      />
      <motion.img
        src={cloud1}
        className="cloud cloud2"
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: -100, opacity: 0.5, y: float.y }}
        transition={{ duration: 25, repeat: Infinity, repeatType: "loop" }}
      />
    </div>
  );
}
