import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import StickyNavbar from "./component/StickyNavbar";
import RazorPayMagic from "./component/Razorpay_Magic";
import TestimonialFold from "./component/TestimonialFold";
import StaticCard from "./component/StaticCard";
import FlipCardCarousel from "./component/FlipCarousel";
import FAQSection from "./component/Faq";
import Footer from "./component/Footer";
import ScrollAnimationSection from "./component/Scrollanimationsection/Scrollanimationsection";
import useSmoothScroll from "./component/useScrollHook";
import ScrollCinematicSection from "./component/latest/index-2";
import LayeringScroll from "./component/layeringScroll/LayeringScroll";
import AnimatedNavbar from "./component/layeringScroll/animatedNav";

function App() {
  const [count, setCount] = useState(0);
  const [navbarProgress, setNavbarProgress] = useState(0);
  useSmoothScroll();
  const handleScrollProgress = (progress) => {
    setNavbarProgress(progress);
  };
  return (
    <>
      {" "}
      <StickyNavbar />
      <AnimatedNavbar scrollProgress={navbarProgress} />
      <LayeringScroll
        Component1={ScrollCinematicSection}
        Component2={ScrollAnimationSection}
        onScrollProgress={handleScrollProgress}
      />
      <RazorPayMagic />
      <StaticCard />
      <FlipCardCarousel />
      <TestimonialFold />
      <FAQSection />
      <Footer />
    </>
  );
}

export default App;
