import React from "react";

const LinesTop = () => {
  return (
    <svg
      width="100%"
      viewBox="0 0 1920 300"
      fill="none"
      className="keplr-animation-lines">
      <path
        d="M1 3.00354C179.628 198.347 377.216 285 632.684 285C888.152 285 973.973 285 1290.31 285C1606.65 
285 1797.76 143.751 1921 1.00002"
        stroke="url(#lines-path)"
        vectorEffect="non-scaling-stroke"></path>

      <line
        x1="0"
        y1="0"
        x2="80"
        y2="0"
        stroke="url(#lines-gradient)"
        strokeWidth="2"
        strokeLinecap="round"
        transform="translate(-80,0)"
        vectorEffect="non-scaling-stroke">
        <animateMotion
          dur="3s"
          repeatCount="indefinite"
          path="M1 3.00354C179.628 198.347 377.216 285 632.684 285C888.152 285 973.973 285 1290.31 285C1606.65 285 1797.76 143.751 1921 1.00002"
          rotate="auto"
          begin="1"></animateMotion>
      </line>

      <defs>
        <linearGradient
          id="lines-gradient"
          x1="0"
          y1="0"
          x2="80"
          y2="0"
          gradientUnits="userSpaceOnUse">
          <stop stopColor="transparent " offset="0"></stop>
          <stop stopColor="white" offset="1"></stop>
        </linearGradient>
        <linearGradient
          id="lines-path"
          x1="0"
          y1="0"
          x2="100%"
          y2="0"
          gradientUnits="userSpaceOnUse">
          <stop stopColor="transparent " offset="0%"></stop>
          <stop stopColor="#EAC57E" offset="10%"></stop>
          <stop stopColor="#EAC57E" offset="90%"></stop>
          <stop stopColor="transparent" offset="100%"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
};

export default LinesTop;
