import React from "react";
import "./StaticCard.css";
const StaticCard = () => {
  return (
    <div class="container">
      <div class="header">
        <h1>Your E-commerce Success Toolkit</h1>
        <p>Master E-commerce & Grow Faster</p>
      </div>

      <div class="cards-container">
        <div class="card">
          <div class="card-image">
            <img
              src="https://framerusercontent.com/images/oBeZWQuU8nISCBsH4vPJTclvGgc.png?width=382&height=290"
              alt="Knowledge Center"
            />
          </div>
          <div class="p-4" style={{ margin: "auto", textAlign: "center" }}>
            <h2 class="card-title">Knowledge Center</h2>
            <p class="card-description">Explore the latest E-commerce trends</p>
            <button class="btn-static">Get Started</button>
          </div>
        </div>

        <div class="card">
          <div class="card-image">
            <img
              src="https://framerusercontent.com/images/LIaKqIABwhspVGnfs6Tot2yqiU.png?width=382&height=290"
              alt="Product Updates"
            />
          </div>
          <div class="p-4" style={{ margin: "auto", textAlign: "center" }}>
            <h2 class="card-title">Product Updates</h2>
            <p class="card-description">
              Discover the power of Magic's latest features
            </p>
            <button class="btn-static">Get Started</button>
          </div>
        </div>
        <div class="card">
          <div class="card-image">
            <img
              src="https://framerusercontent.com/images/4BzsASAh6mERYs38hQzudSNGN8Q.png?width=382&height=290"
              alt="Success Stories"
            />
          </div>
          <div class="p-4" style={{ margin: "auto", textAlign: "center" }}>
            <h2 class="card-title">Success Stories</h2>
            <p class="card-description">Inspiring E-commerce success stories</p>
            <button class="btn-static">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaticCard;
