import React from 'react';

const Circle = () => {
  return (
    <div>
      <svg
        viewBox="0 0 558 558"
        width="300"
        height="300"
        fill="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient
            id=":R3b9m:"
            x1="79"
            y1="16"
            x2="105"
            y2="237"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#0ea5e9"></stop>
            <stop offset="2" stopColor="#0ea5e9" stopOpacity="0"></stop>
          </linearGradient>
        </defs>
        <path
          opacity=".3"
          d="M1 279C1 125.465 125.465 1 279 1s278 124.465 278 278-124.465 278-278 278S1 432.535 1 279Z"
          stroke="#0ea5e9"
          strokeWidth="3"
        ></path>
        <path
          d="M1 279C1 125.465 125.465 1 279 1"
          stroke="url(#:R3b9m:)"
          strokeLinecap="round"
          strokeWidth="3"
        ></path>
      </svg>
    </div>
  );
};

export default Circle;
