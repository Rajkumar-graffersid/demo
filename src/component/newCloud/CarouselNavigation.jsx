import React from "react";
import { LeftArrow, RightArrow } from "./SVGIcons";

export default function CarouselNavigation({ onPrev, onNext }) {
  return (
    <div className="carousel-navigation">
      <button onClick={onPrev} className="prev-btn">
        <LeftArrow />
      </button>
      <button onClick={onNext} className="next-btn">
        <RightArrow />
      </button>
    </div>
  );
}
