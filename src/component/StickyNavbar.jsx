import React, { useState, useEffect, useRef } from "react";
import "./StickyNavbar.css";
import CustomDropdown from "./CustomDropdown";
import { ChevronUp, Headphones } from "lucide-react";
import MegaMenu from "./common/MegaMenu";
import logo from "../assets/pngwing.com.png";
import { US, IN, MY, SG } from "country-flag-icons/react/3x2";
import { ChevronDown } from "lucide-react";
export default function StickyNavbarBootstrap() {
  const [isSticky, setIsSticky] = useState(false);
  const containerRef = useRef(null);
  const navbarRef = useRef(null);
  const [fadeProgress, setFadeProgress] = useState(0);
  const [openHeadPhone, setOpenHeadPhone] = useState(false);
  const [dropDown, setDropDown] = useState("down");
  const [selectedCountry, setSelectedCountry] = useState(
    <IN title="India" style={{ width: 32, height: 20 }} />
  );
  const [openMegaMenu, setOpenMegaMenu] = useState({
    home: false,
    about: false,
    service: false,
    contact: false,
    headphone: false,
    country: false,
  });

  const handleMegaMenu = (key, value) => {
    setOpenMegaMenu((prev) => ({
      ...prev,
      [key]: value,
    }));
  };
  const onCountryChange = (value) => {
    setSelectedCountry(value);
    console.log(value);
  };
  let options = ["1", "2"];
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const height = containerRef.current.offsetHeight;

      // how much user has scrolled inside hero
      const scrolled = Math.min(Math.max(-rect.top, 0), height);

      // progress from 0 → 1
      const progress = scrolled / height;

      setFadeProgress(progress);

      // existing sticky logic
      const halfwayPoint = height / 2;
      const hasScrolledPastTop = rect.top <= 0;
      const hasScrolledPastHalf = Math.abs(rect.top) >= halfwayPoint;

      setIsSticky(hasScrolledPastTop && !hasScrolledPastHalf);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div>
        {/* Container div with video/content */}
        <div ref={containerRef} className="hero-section">
          {/* Navbar */}
          <nav
            ref={navbarRef}
            className={`p-sm-1 pt-0 navbar-expand-lg ${
              isSticky
                ? "navbar-sticky navbar-transparent"
                : "navbar-absolute navbar-transparent"
            }`}
            style={{
              opacity: 1 - fadeProgress,
              transform: `translateY(-${fadeProgress * 30}px)`,
              transition: "opacity 0.1s linear, transform 0.1s linear",
            }}
          >
            <div className="container-fluid p-0">
              <div className="d-flex padding-left-right">
                <div
                  style={{
                    width: "200px",
                    height: "60px",
                    aspectRatio: "inherit",
                  }}
                  className="p-1 d-flex align-items-center"
                >
                  <img src={logo} style={{ height: "60%", width: "90%" }} />
                </div>

                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>

                <div
                  className="p-0 collapse navbar-collapse justify-content-start gap-5"
                  id="navbarNav"
                >
                  <ul className="navbar-nav h-100">
                    <li
                      className="nav-item hover-border d-flex align-items-center"
                      onMouseEnter={() => handleMegaMenu("home", true)}
                      onMouseLeave={() => handleMegaMenu("home", false)}
                    >
                      <a
                        className={`nav-link ${
                          isSticky ? "nav-link-light" : "nav-link-light"
                        }`}
                        href="#"
                      >
                        Payments
                      </a>

                      {openMegaMenu.home && (
                        <div style={{}}>
                          <MegaMenu variant="large" />
                        </div>
                      )}
                    </li>
                    <li
                      className="nav-item hover-border d-flex align-items-center"
                      onMouseEnter={() => handleMegaMenu("about", true)}
                      onMouseLeave={() => handleMegaMenu("about", false)}
                    >
                      <a
                        className={`nav-link ${
                          isSticky ? "nav-link-light" : "nav-link-light"
                        }`}
                        href="#"
                      >
                        Banking+
                      </a>
                      {openMegaMenu.about && (
                        <div style={{}}>
                          <MegaMenu variant="small" />
                        </div>
                      )}
                    </li>
                    <li className="nav-item hover-border d-flex align-items-center">
                      <a
                        className={`nav-link ${
                          isSticky ? "nav-link-light" : "nav-link-light"
                        }`}
                        href="#"
                      >
                        Payroll
                      </a>
                      {openMegaMenu.service && (
                        <div style={{}}>
                          <MegaMenu />
                        </div>
                      )}
                    </li>
                    <li className="nav-item hover-border d-flex align-items-center">
                      <a
                        className={`nav-link ${
                          isSticky ? "nav-link-light" : "nav-link-light"
                        }`}
                        href="#"
                      >
                        Engage
                      </a>
                    </li>
                    <li className="nav-item hover-border d-flex align-items-center">
                      <a
                        className={`nav-link ${
                          isSticky ? "nav-link-light" : "nav-link-light"
                        }`}
                        href="#"
                      >
                        Partners
                      </a>
                      {openMegaMenu.service && (
                        <div style={{}}>
                          <MegaMenu />
                        </div>
                      )}
                    </li>
                    <li className="nav-item hover-border d-flex align-items-center">
                      <a
                        className={`nav-link ${
                          isSticky ? "nav-link-light" : "nav-link-light"
                        }`}
                        href="#"
                      >
                        Resources
                      </a>
                      {openMegaMenu.service && (
                        <div style={{}}>
                          <MegaMenu />
                        </div>
                      )}
                    </li>
                    <li className="nav-item hover-border d-flex align-items-center">
                      <a
                        className={`nav-link ${
                          isSticky ? "nav-link-light" : "nav-link-light"
                        }`}
                        href="#"
                      >
                        Pricing
                      </a>
                      {openMegaMenu.service && (
                        <div style={{}}>
                          <MegaMenu />
                        </div>
                      )}
                    </li>
                  </ul>
                </div>
                <div
                  className="p-0 collapse navbar-collapse justify-content-start gap-5"
                  id="navbarNav"
                >
                  <ul className="navbar-nav h-100">
                    <li
                      className="nav-item hover-border d-flex align-items-center"
                      onMouseEnter={() => handleMegaMenu("headphone", true)}
                      onMouseLeave={() => handleMegaMenu("headphone", false)}
                    >
                      <a
                        className={`nav-link ${
                          isSticky ? "nav-link-light" : "nav-link-light"
                        }`}
                        href="#"
                      >
                        <Headphones />
                      </a>
                      {openMegaMenu.headphone && (
                        <div style={{}}>
                          <MegaMenu item={"headphone"} />
                        </div>
                      )}
                    </li>
                    <li
                      className="nav-item hover-border d-flex align-items-center"
                      onMouseEnter={() => {
                        handleMegaMenu("country", true);
                        setDropDown("up");
                      }}
                      onMouseLeave={() => {
                        handleMegaMenu("country", false);
                        setDropDown("down");
                      }}
                    >
                      <a
                        className={`nav-link d-flex gap-2 ${
                          isSticky ? "nav-link-light" : "nav-link-light"
                        }`}
                        href="#"
                      >
                        {selectedCountry}
                        {dropDown === "down" ? <ChevronDown /> : <ChevronUp />}
                      </a>
                      {openMegaMenu.country && (
                        <div style={{}}>
                          <MegaMenu
                            item={"country"}
                            variant="large"
                            onChangeCountry={onCountryChange}
                          />
                        </div>
                      )}
                    </li>
                    <li className="nav-item d-flex align-items-center ms-5">
                      <button
                        className="btn border-light text-light"
                        style={{ height: "35px" }}
                      >
                        Login
                      </button>
                    </li>
                    <li className="nav-item d-flex align-items-center ms-3">
                      <button
                        className="btn btn-light"
                        style={{ height: "35px" }}
                      >
                        Sign Up
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>

          {/* Hero Content */}
          <div className="d-flex align-items-center justify-content-center h-100">
            <div className="text-center text-white">
              <video
                src="https://framerusercontent.com/assets/jtISvDNBQbqMfCX7CyjtbDQqdg4.mp4"
                autoPlay
                preload="auto"
                muted
                playsInline
                style={{
                  cursor: "auto",
                  width: "100%",
                  height: "100%",
                  borderRadius: "0px",
                  display: "block",
                  objectFit: "cover",
                  backgroundColor: "rgba(0, 0, 0, 0)",
                  objectPosition: "50% 50%",
                }}
              ></video>
            </div>
          </div>
          <div
            className="position-absolute start-50 translate-middle"
            style={{
              zIndex: 10,
              textAlign: "center",
              opacity: 1 - fadeProgress,
              top: "20%", // Optional: fade out with scroll
            }}
          >
            <p
              className="lead fs-1 fw-bolder mb-5 text-light"
              style={{
                fontSize: "clamp(1rem, 2vw, 1.5rem)",
                textShadow: "1px 1px 2px rgba(0,0,0,0.5)",
              }}
            >
              It’s Not Just A Checkout. It’s Engineered Magic.
            </p>
            <div className="d-flex gap-3 justify-content-center">
              <button className="btn btn-primary btn-lg px-5">Book Demo</button>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="scroll-indicator">
            <svg width="24" height="24" fill="white" viewBox="0 0 24 24">
              <path d="M12 4l-8 8h5v8h6v-8h5z" transform="rotate(180 12 12)" />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}
