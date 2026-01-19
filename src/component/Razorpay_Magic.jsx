import React, { useState } from "react";
import "./Razorpay_Magic.css";
import VideoCard from "./VideoCard";
import SupportedPlatforms from "./SupportedPlatforms";
export default function RazorPayMagic() {
  const [state, setState] = useState(0);
  return (
    <>
      <div className="container-magic">
        <h1 className="headline fw-bolder">The Magic? It's Now Self-Serve.</h1>
        <div
          className="container bg-linear-grad-magic shadow h-100 d-flex justify-content-center align-items-center gap-5 p-3"
          style={{ borderRadius: "15px", maxWidth: "1198px" }}
        >
          <SupportedPlatforms />
          <VideoCard />
        </div>
      </div>
    </>
  );
}
