import React from "react";

const LinesBottom = () => {
  return (
    <svg
      width="100%"
      viewBox="0 0 1920 700"
      fill="none"
      class="keplr-animation-lines">
      <path
        d="M1 704.996C179.628 509.653 377.216 423 632.684 423C888.152 423 973.973 423 1290.31 423C1606.65 423 1797.76 564.249 1921 707"
        stroke="url(#lines-path)"
        vector-effect="non-scaling-stroke"></path>
      <line
        x1="0"
        y1="0"
        x2="80"
        y2="0"
        stroke="url(#lines-gradient)"
        stroke-width="2"
        stroke-linecap="round"
        transform="translate(-80,0)"
        vector-effect="non-scaling-stroke">
        <animateMotion
          dur="4.5s"
          repeatCount="indefinite"
          path="M1 704.996C179.628 509.653 377.216 423 632.684 423C888.152 423 973.973 423 1290.31 423C1606.65 423 1797.76 564.249 1921 707"
          rotate="auto"
          begin="0"></animateMotion>
      </line>

      <defs>
        <linearGradient
          id="lines-gradient"
          x1="0"
          y1="0"
          x2="80"
          y2="0"
          gradientUnits="userSpaceOnUse">
          <stop stop-color="transparent " offset="0"></stop>
          <stop stop-color="white" offset="1"></stop>
        </linearGradient>
        <linearGradient
          id="lines-path"
          x1="0"
          y1="0"
          x2="100%"
          y2="0"
          gradientUnits="userSpaceOnUse">
          <stop stop-color="transparent " offset="0%"></stop>
          <stop stop-color="#EAC57E" offset="10%"></stop>
          <stop stop-color="#EAC57E" offset="90%"></stop>
          <stop stop-color="transparent" offset="100%"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
};

export default LinesBottom;
