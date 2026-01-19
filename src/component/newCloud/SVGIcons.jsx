import React from "react";

// Replace <use> with inline <path> if SVG defs aren't available
export function LeftArrow() {
  return (
    <svg viewBox="0 0 52 258" width="100%" height="100%">
      <path d="M0,0 L52,129 L0,258" fill="rgb(0,0,0)" />
    </svg>
  );
}

export function RightArrow() {
  return (
    <svg viewBox="0 0 52 258" width="100%" height="100%">
      <path d="M52,0 L0,129 L52,258" fill="rgb(0,0,0)" />
    </svg>
  );
}

export function LoginCardSVG() {
  return (
    <svg viewBox="0 0 479 258" width="100%" height="100%">
      <rect width="479" height="258" fill="rgb(25,40,57)" rx="12" />
    </svg>
  );
}

export function FingerprintIcon() {
  return (
    <svg viewBox="0 0 19 20" width="40" height="40">
      <path
        d="M 4.465 15.201 C 5.417 16.72 5.417 17.853 5.417 19.167 L 7.25 19.167 C 7.25 17.772 7.25 16.193 6.019 14.227 Z M 14.129 2.105 C 11.812 0.751 5.921 -0.151 2.924 2.946 C -0.163 6.137 0.863 11.262 2.925 13.389 C 3.033 13.501 3.149 13.599 3.263 13.694 C 3.329 13.75 3.397 13.8 3.451 13.863 L 4.821 12.644 C 4.702 12.515 4.573 12.395 4.437 12.285 C 4.371 12.23 4.303 12.176 4.24 12.113 C 2.719 10.544 1.943 6.597 4.241 4.222 C 6.556 1.829 11.637 2.775 13.204 3.69 C 15.67 5.128 16.959 7.639 16.97 7.662 L 18.61 6.841 C 18.551 6.717 17.081 3.826 14.129 2.105 Z"
        fill="rgb(96, 169, 169)"
      />
    </svg>
  );
}
