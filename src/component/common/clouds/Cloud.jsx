"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function ScrollCloudSection() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!triggerRef.current) return;

      const triggerRect = triggerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const startPoint = windowHeight * 0.8;
      const endPoint = -windowHeight * 0.5;

      const progress = Math.max(
        0,
        Math.min(1, (startPoint - triggerRect.top) / (startPoint - endPoint))
      );
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const width = 10 + scrollProgress * 90;
  const height = 10 + scrollProgress * 90;

  const clouds = [
    { id: 1, top: "20%", left: "15%", delay: 0 },
    { id: 2, top: "40%", left: "60%", delay: 0.1 },
    { id: 3, top: "60%", left: "40%", delay: 0.2 },
    { id: 4, top: "25%", left: "75%", delay: 0.15 },
    { id: 5, top: "70%", left: "20%", delay: 0.25 },
    { id: 6, top: "45%", left: "10%", delay: 0.05 },
  ];

  return (
    <div
      style={{
        position: "relative",
        minHeight: "200vh",
        width: `${width}vw`,
        height: `${height}vh`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        backgroundColor: "white",
        marginTop: `${height}vh`,
        marginBottom: `${height}vh`,
        // paddingTop: `${height}vh`,
      }}
    >
      <div
        ref={triggerRef}
        style={{ position: "absolute", top: 0, width: "100%", height: "24rem" }}
      />

      <div
        style={{
          position: "relative",
          top: 0,
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: "none",
        }}
      >
        <motion.div
          ref={containerRef}
          style={{
            width: `${width}vw`,
            height: `${height}vh`,
          }}
          className="shadow-lg"
          transition={{ type: "tween", duration: 0.1 }}
        >
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "100%",
              background:
                "linear-gradient(180deg, rgba(219, 234, 254, 1) 0%, rgba(240, 249, 255, 1) 100%)",
              borderRadius: "24px",
              overflow: "hidden",
              boxShadow:
                "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            }}
          >
            <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
              {clouds.map((cloud) => (
                <motion.div
                  key={cloud.id}
                  style={{
                    position: "absolute",
                    top: cloud.top,
                    left: cloud.left,
                  }}
                  animate={{
                    opacity: 0.3 + scrollProgress * 0.5,
                    scale: 0.5 + scrollProgress * 0.8,
                  }}
                  transition={{ type: "tween", duration: 0.1 }}
                >
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
                </motion.div>
              ))}
            </div>

            <motion.div
              style={{
                position: "absolute",
                top: "2rem",
                left: "50%",
                transform: "translateX(-50%)",
                textAlign: "center",
              }}
              animate={{
                opacity: scrollProgress > 0.3 ? 1 : 0,
                y: scrollProgress > 0.3 ? 0 : -20,
              }}
              transition={{ type: "tween", duration: 0.1 }}
            >
              <h2
                style={{
                  fontSize: "1.25rem",
                  fontWeight: "700",
                  color: "#1e293b",
                  margin: 0,
                }}
              >
                Your Journey
              </h2>
              <p
                style={{
                  fontSize: "0.875rem",
                  color: "#475569",
                  margin: "0.25rem 0 0 0",
                }}
              >
                Begins Here
              </p>
            </motion.div>

            <motion.div
              style={{
                position: "absolute",
                bottom: "2rem",
                left: "50%",
                transform: "translateX(-50%)",
                textAlign: "center",
              }}
              animate={{
                opacity: scrollProgress > 0.5 ? 1 : 0,
                y: scrollProgress > 0.5 ? 0 : 20,
              }}
              transition={{ type: "tween", duration: 0.1 }}
            >
              <p
                style={{
                  fontSize: "1.125rem",
                  fontWeight: "600",
                  color: "#3f3f46",
                  margin: 0,
                }}
              >
                Scroll to Discover
              </p>
              <p
                style={{
                  fontSize: "0.75rem",
                  color: "#78716c",
                  margin: "0.25rem 0 0 0",
                }}
              >
                The Magic Unfolds
              </p>
            </motion.div>

            <div
              style={{
                position: "absolute",
                bottom: "1rem",
                right: "1rem",
                fontSize: "0.75rem",
                color: "#78716c",
              }}
            >
              {Math.round(scrollProgress * 100)}%
            </div>
          </div>
        </motion.div>
      </div>

      {/* <motion.div
        style={{
          position: "relative",
          zIndex: 10,
          textAlign: "center",
        }}
        animate={{
          opacity: scrollProgress >= 0.95 ? 1 : 0,
          pointerEvents: scrollProgress >= 0.95 ? "auto" : "none",
        }}
        transition={{ type: "tween", duration: 0.3 }}
      >
        <h3
          style={{
            fontSize: "2.25rem",
            fontWeight: "700",
            color: "#0f172a",
            marginBottom: "1rem",
          }}
        >
          Next Section
        </h3>
        <p style={{ color: "#4b5563", maxWidth: "28rem", margin: "0 auto" }}>
          This content appears after the cloud animation is complete
        </p>
      </motion.div> */}
    </div>
  );
}
