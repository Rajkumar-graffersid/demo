import React, { useState, useEffect, useRef } from "react";

const LayeringScroll = ({ Component1, Component2, onScrollProgress }) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef(null);
  const component1Ref = useRef(null);
  const component2Ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !component1Ref.current) return;

      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      // Get the height of Component1
      const component1Height = component1Ref.current.scrollHeight;

      // Slow down the reveal by increasing the scroll distance
      // Start revealing earlier and take more scroll distance to complete
      const revealDuration = window.innerHeight * 2; // Takes 2 viewports to fully reveal (adjust this for speed)
      const revealStartPoint = component1Height - revealDuration;

      // Calculate progress for Component2 reveal
      const progress = Math.min(
        Math.max((scrollTop - revealStartPoint) / revealDuration, 0),
        1
      );

      // Calculate when Component2 section ends
      const component2SectionEnd =
        component1Height + (200 * window.innerHeight) / 100; // 200vh extra space
      const isScrolledPastComponent2 = scrollTop > component2SectionEnd;

      // If scrolled past Component2, start hiding the navbar
      let finalProgress = progress;
      if (isScrolledPastComponent2) {
        // Calculate how far past Component2 we've scrolled
        const scrollPastComponent2 = scrollTop - component2SectionEnd;
        const hideDistance = window.innerHeight; // Hide navbar over 1 viewport distance
        const hideProgress = Math.min(scrollPastComponent2 / hideDistance, 1);

        // Reduce progress from 1 to 0 as we scroll past
        finalProgress = 1 - hideProgress;
      }

      setScrollProgress(progress);

      // Notify parent about scroll progress
      if (onScrollProgress) {
        onScrollProgress(finalProgress);
      }
    };

    handleScroll(); // Initial call
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [onScrollProgress]);

  return (
    <div ref={containerRef} style={{ position: "relative" }}>
      {/* Component 1 - Scrolls normally */}
      <div ref={component1Ref} style={{ position: "relative", zIndex: 1 }}>
        <Component1 />
      </div>

      {/* Component 2 - Layers on top while Component1 is visible */}
      <div style={{ position: "relative", zIndex: 2, marginTop: "-100vh" }}>
        {/* Sticky Container for Component 2 reveal */}
        <div
          style={{
            position: "sticky",
            top: 0,
            height: "100vh",
            width: "100vw",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "100%",
              height: `${scrollProgress * 100}%`,
              transition: "height 0.05s linear",
              overflow: "hidden",
            }}
          >
            {/* Component 2 rendered here for the reveal effect - building from bottom */}
            <div
              style={{
                height: "100vh",
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "100%",
              }}
            >
              <Component2 />
            </div>
          </div>
        </div>

        {/* Extra space for the slower reveal animation (2 viewports) */}
        <div style={{ height: "200vh" }}></div>
      </div>

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(-10px); }
        }
      `}</style>
    </div>
  );
};

export default LayeringScroll;
