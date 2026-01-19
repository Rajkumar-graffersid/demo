import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { FaFingerprint, FaTruck, FaCreditCard, FaMagic } from "react-icons/fa";

const ScienceBehindMagic = () => {
  const containerRef = useRef(null);

  // 1. SCROLL PHYSICS
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 20,
    restDelta: 0.001,
  });

  // --- ANIMATION STAGES ---

  // STAGE 1: THE BOX GROWTH (0% - 30%)
  // The phone starts tiny (scale 0.2) in the center and grows to full size (scale 1)
  const boxScale = useTransform(smoothProgress, [0, 0.3], [0.25, 1]);
  const boxBorderRadius = useTransform(
    smoothProgress,
    [0, 0.3],
    ["10px", "45px"]
  );

  // The Text splits slightly to allow the box to grow, then stays put behind
  const textGap = useTransform(smoothProgress, [0, 0.15], ["20px", "300px"]);
  const textOpacity = useTransform(smoothProgress, [0.15, 0.25], [1, 0]); // Fades out as box covers it

  // STAGE 2: THE "LEFT SIDE" MOVEMENT (40% - 100%)
  // The Phone (Center) moves to the Left to make room for the new content
  const islandX = useTransform(smoothProgress, [0.4, 0.8], ["0%", "-100%"]);

  // The Blue Section (Science) enters from the Right
  const blueSlideX = useTransform(smoothProgress, [0.4, 0.8], ["100%", "0%"]);

  // The Carousel inside the blue section moves slightly for parallax
  const carouselX = useTransform(smoothProgress, [0.5, 1], ["20%", "-50%"]);

  return (
    <div
      ref={containerRef}
      style={{ height: "450vh", background: "#FFFFFF", position: "relative" }}
    >
      {/* STICKY PARENT */}
      <div
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          width: "100%",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          perspective: "1000px",
        }}
      >
        {/* ================= LAYER 1: THE TEXT (Background Layer) ================= */}
        {/* Z-Index 10: Sits behind the growing box */}
        <motion.div
          style={{
            position: "absolute",
            zIndex: 10,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: textGap, // This gap grows slightly
            opacity: textOpacity,
            width: "100%",
          }}
        >
          <h1
            style={{
              fontSize: "clamp(3rem, 7vw, 7rem)",
              color: "#033e3e",
              fontWeight: 800,
              margin: 0,
              textTransform: "uppercase",
              whiteSpace: "nowrap",
            }}
          >
            The Missing
          </h1>
          <h1
            style={{
              fontSize: "clamp(3rem, 7vw, 7rem)",
              color: "#033e3e",
              fontWeight: 800,
              margin: 0,
              textTransform: "uppercase",
            }}
          >
            Piece
          </h1>
        </motion.div>

        {/* ================= LAYER 2: THE SUBTLE CLOUDS (Corners) ================= */}
        {/* Z-Index 15: In front of text, but behind phone */}
        {/* Positioned at absolute corners, low opacity */}
        <motion.img
          src="https://framerusercontent.com/images/N2p4bjhoz4Zmev0cTW95ROBFbrE.png?width=607"
          style={{
            position: "absolute",
            top: "-10%",
            left: "-10%",
            width: "30vw",
            opacity: 0.4,
            zIndex: 15,
          }}
        />
        <motion.img
          src="https://framerusercontent.com/images/N2p4bjhoz4Zmev0cTW95ROBFbrE.png?width=607"
          style={{
            position: "absolute",
            top: "-5%",
            right: "-10%",
            width: "30vw",
            opacity: 0.4,
            zIndex: 15,
            transform: "scaleX(-1)",
          }}
        />
        <motion.img
          src="https://framerusercontent.com/images/N2p4bjhoz4Zmev0cTW95ROBFbrE.png?width=607"
          style={{
            position: "absolute",
            bottom: "-15%",
            left: "20%",
            width: "40vw",
            opacity: 0.3,
            zIndex: 15,
          }}
        />

        {/* ================= LAYER 3: THE BOX / PHONE (The Hero) ================= */}
        {/* Z-Index 50: Grows ON TOP of the text */}
        <motion.div
          style={{
            x: islandX, // Moves left later
            scale: boxScale, // Grows from 0.25 to 1
            zIndex: 50,
            position: "relative",
            width: "360px",
            height: "710px",
            transformOrigin: "center center", // Grows from center
          }}
        >
          {/* 3a. Background Mesh (Attached to phone) */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "180%",
              height: "80%",
              opacity: 0.5,
              zIndex: -1,
            }}
          >
            <img
              src="https://framerusercontent.com/images/Mv5GE83DoNiJSCE5tnenMTAL88.png"
              alt=""
              style={{ width: "100%" }}
            />
          </div>

          {/* 3b. Floating Bags (Subtle) */}
          <img
            src="https://framerusercontent.com/images/IXUirMjXcOeYMuL06Boyb4io4.png"
            alt="Bag"
            style={{
              position: "absolute",
              right: "-20%",
              top: "30%",
              width: "100px",
              zIndex: 0,
            }}
          />
          <img
            src="https://framerusercontent.com/images/eobjgtNXMivDStGpoBF5Gx5kWA.png"
            alt="Bag"
            style={{
              position: "absolute",
              left: "-20%",
              bottom: "30%",
              width: "120px",
              zIndex: 0,
            }}
          />

          {/* 3c. The Phone Container (Masks the video) */}
          <motion.div
            style={{
              position: "relative",
              width: "100%",
              height: "100%",
              borderRadius: boxBorderRadius, // Animates from square-ish to phone-rounded
              overflow: "hidden",
              boxShadow: "0 40px 80px rgba(0,0,0,0.2)",
            }}
          >
            {/* VIDEO LAYER (Background) */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "black",
                padding: "16px",
              }}
            >
              <video
                src="https://framerusercontent.com/assets/gB1m4z9zNtl0N81I7KRKGxandA.mov"
                autoPlay
                loop
                muted
                playsInline
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "35px",
                }}
              />
            </div>

            {/* FRAME LAYER (Foreground Image) */}
            <img
              src="https://framerusercontent.com/images/Lu7X7BFDpowHCmzfdamyCVsrfFk.png?scale-down-to=1024&width=735"
              alt="Phone Frame"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                pointerEvents: "none",
                zIndex: 10,
              }}
            />

            {/* LOGIN BUTTON OVERLAY */}
            <div
              style={{
                position: "absolute",
                bottom: "15%",
                left: "50%",
                transform: "translateX(-50%)",
                zIndex: 20,
                background: "#000",
                color: "white",
                padding: "10px 20px",
                borderRadius: "12px",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                minWidth: "160px",
                justifyContent: "center",
              }}
            >
              <span style={{ fontSize: "13px", fontWeight: 600 }}>
                Login with
              </span>
              <svg width="60" height="14" viewBox="0 0 76 20" fill="white">
                <path d="M14.6 15.6h-3.3V4.4h3.3v11.2ZM30 15.6h-3.4l-3.6-5.8h-.1v5.8h-3.3V4.4h5.3c2.7 0 4.6 1.8 4.6 4.6 0 2-.9 3.5-2.5 4.2l3 2.4Zm-5.3-8.3h-1.8v2.8h1.8c1 0 1.6-.6 1.6-1.4 0-.9-.7-1.4-1.6-1.4Z" />
              </svg>
            </div>
          </motion.div>
        </motion.div>

        {/* ================= LAYER 4: THE BLUE SLIDE (Entering from Right) ================= */}
        {/* Z-Index 100: Covers everything */}
        <motion.div
          style={{
            x: blueSlideX,
            position: "absolute",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            zIndex: 100,
            background: "linear-gradient(180deg, #52A2BF 0%, #5FB3D1 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <div style={{ width: "90%", display: "flex", overflow: "hidden" }}>
            {/* Fixed Text Block */}
            <div
              style={{
                minWidth: "400px",
                color: "white",
                zIndex: 2,
                paddingTop: "50px",
              }}
            >
              <h2
                style={{
                  fontSize: "4rem",
                  lineHeight: 1.1,
                  fontWeight: 700,
                  fontFamily: "Inter, sans-serif",
                }}
              >
                100M+ Data
                <br />
                Points Power
                <br />
                Every Checkout.
              </h2>
            </div>

            {/* Moving Carousel */}
            <motion.div
              style={{
                x: carouselX,
                display: "flex",
                gap: "40px",
                paddingLeft: "60px",
                alignItems: "center",
              }}
            >
              <ScienceCard
                title="Login with Razorpay"
                desc="Slash CAC & Win back drop-offs."
                img="https://framerusercontent.com/images/SKHS1gLucI86uA9KrgnC0LLk12s.png?width=140"
                icon={<FaMagic size={28} color="#60A9A9" />}
              />
              <ScienceCard
                title="Smart Auto-Selection"
                desc="Pre-saved addresses & AI shipping."
                img="https://framerusercontent.com/images/GQANqrcm5JZ8RCU3KOnx0XKKlx4.png?width=566"
                icon={<FaTruck size={28} color="#60A9A9" />}
              />
              <ScienceCard
                title="Intelligent Payment"
                desc="Prioritized UPI, BNPL options."
                img="https://framerusercontent.com/images/QfdQ9KxIxeYWtiGIMRLVDmQR8Jk.png?width=566"
                icon={<FaCreditCard size={28} color="#60A9A9" />}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

// --- STYLED CARD COMPONENT ---
const ScienceCard = ({ title, desc, img, icon }) => (
  <div
    style={{
      minWidth: "340px",
      height: "440px",
      background: "white",
      borderRadius: "24px",
      padding: "30px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      boxShadow: "0 25px 50px -12px rgba(0,0,0,0.15)",
    }}
  >
    <div>
      <div style={{ marginBottom: "20px" }}>{icon}</div>
      <h3
        style={{
          fontSize: "1.4rem",
          fontWeight: 700,
          color: "#0F172A",
          marginBottom: "8px",
        }}
      >
        {title}
      </h3>
      <p style={{ fontSize: "0.95rem", color: "#64748B", lineHeight: 1.5 }}>
        {desc}
      </p>
    </div>
    <div
      style={{
        height: "150px",
        background: "#F1F5F9",
        borderRadius: "16px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img
        src={img}
        alt={title}
        style={{ width: "80%", height: "auto", objectFit: "contain" }}
      />
    </div>
  </div>
);

export default ScienceBehindMagic;
