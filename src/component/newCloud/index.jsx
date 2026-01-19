import React, { useState } from "react";
import HeroText from "./HeroText";
import CarouselCard from "./CarouselCard";
import CarouselNavigation from "./CarouselNavigation";
import CloudsBackground from "./CloudsBackground";
import "./index.css";

export default function NewCloud() {
  const cards = [
    {
      title: "Biometric Authentication",
      description:
        "Replaces card OTP with biometrics for faster, secure payment access in just one click",
      iconType: "fingerprint",
    },
    {
      title: "Instant Appless Auth",
      description: "Instant authentication without app-switching",
      iconType: "fingerprint",
    },
  ];

  const [current, setCurrent] = useState(0);

  const prevCard = () =>
    setCurrent((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
  const nextCard = () =>
    setCurrent((prev) => (prev === cards.length - 1 ? 0 : prev + 1));

  return (
    <div className="app">
      <CloudsBackground />
      <HeroText />
      <div className="carousel">
        <CarouselCard {...cards[current]} />
        <CarouselNavigation onPrev={prevCard} onNext={nextCard} />
      </div>
    </div>
  );
}
