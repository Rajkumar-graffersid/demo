import React, { useState } from "react";
import "./AnimatedNavbar.css";

const AnimatedNavbar = ({ scrollProgress = 0 }) => {
  const translateY = -110 + scrollProgress * 120;
  const [activeTab, setActiveTab] = useState("");
  return (
    <nav
      className="animated-navbar rounded-3 m-auto"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "70px",
        backgroundColor: "rgba(255, 255, 255, 0.95)",
        backdropFilter: "blur(10px)",
        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
        display: "flex",
        alignItems: "center",
        // justifyContent: "center",
        gap: 5,
        padding: "0 40px",
        zIndex: 9999,
        transform: `translateY(${translateY}%)`,
        transition: "transform 0.05s linear",
      }}
    >
      {/* Navigation Links */}
      <div
        style={{
          display: "flex",
          gap: "50px",
          alignItems: "center",
          height: "100%",
        }}
      >
        <a
          href="#products"
          style={{
            textDecoration: "none",
            color: "#333",
            fontSize: "16px",
            fontWeight: "500",
            transition: "color 0.3s",
          }}
          onClick={() => setActiveTab("boost")}
          className={`${activeTab === "boost" ? "active-tab" : ""}`}
        >
          Boost Conversion
        </a>
        <a
          href="#solutions"
          style={{
            textDecoration: "none",
            color: "#333",
            fontSize: "16px",
            fontWeight: "500",
            transition: "color 0.3s",
          }}
          onClick={() => setActiveTab("cod")}
          className={`${activeTab === "cod" ? "active-tab" : ""}`}
        >
          COD Control
        </a>
        <a
          href="#pricing"
          style={{
            textDecoration: "none",
            color: "#333",
            fontSize: "16px",
            fontWeight: "500",
            transition: "color 0.3s",
          }}
          onClick={() => setActiveTab("intent")}
          className={`${activeTab === "intent" ? "active-tab" : ""}`}
        >
          Improve Purchase Intent
        </a>
        <a
          href="#pricing"
          style={{
            textDecoration: "none",
            color: "#333",
            fontSize: "16px",
            fontWeight: "500",
            transition: "color 0.3s",
          }}
          onClick={() => setActiveTab("loyalty")}
          className={`${activeTab === "loyalty" ? "active-tab" : ""}`}
        >
          Build Loyalty
        </a>
        <div className="d-flex h-100 gap-3 align-items-center">
          <button className="btn btn-outline-primary p-2 h-75 px-4 ms-5">
            Book Demo
          </button>
          <button className="btn btn-primary p-2 h-75 px-4">Get Start</button>
        </div>
      </div>
    </nav>
  );
};

export default AnimatedNavbar;
