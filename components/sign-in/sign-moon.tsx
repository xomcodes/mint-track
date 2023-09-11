import React from "react";

export const SignMoon = () => {
  return (
    <svg
      width="50"
      height="50"
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="30" cy="30" r="30" fill="url(#paint0_linear_101_11480)" />
      <circle cx="30" cy="30" r="29.5" stroke="white" strokeOpacity="0.1" />
      <defs>
        <linearGradient
          id="paint0_linear_101_11480"
          x1="0"
          y1="0"
          x2="60"
          y2="60"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#868CFF" />
          <stop offset="1" stopColor="#4318FF" />
        </linearGradient>
      </defs>
    </svg>
  );
};
