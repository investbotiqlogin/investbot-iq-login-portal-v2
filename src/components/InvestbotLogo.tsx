// This file exports the SVG of the logo provided by the user as a React component.
import * as React from 'react';

const InvestbotLogo = ({ className = '', size = 48 }: { className?: string; size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 640 640"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Simplified SVG content representing the provided logo */}
    <g>
      <image href="/investbot-logo.png" x="0" y="0" width="640" height="640" preserveAspectRatio="xMidYMid slice" />
      <rect x="170" y="230" width="300" height="180" rx="90" fill="#222"/>
      <rect x="210" y="270" width="220" height="100" rx="50" fill="#fff"/>
      <circle cx="260" cy="320" r="20" fill="#222"/>
      <circle cx="380" cy="320" r="20" fill="#222"/>
      <path d="M280 370 Q320 410 360 370" stroke="#222" strokeWidth="10" fill="none"/>
      <rect x="290" y="170" width="60" height="60" rx="30" fill="#222"/>
      <rect x="200" y="130" width="40" height="120" rx="20" fill="#222"/>
      <rect x="400" y="130" width="40" height="120" rx="20" fill="#222"/>
      <path d="M320 60 Q500 120 570 320" stroke="#222" strokeWidth="30" fill="none"/>
      <polygon points="570,320 620,300 590,260" fill="#222"/>
      <circle cx="320" cy="320" r="320" fill="none" stroke="#222" strokeWidth="10"/>
    </g>
  </svg>
);

export default InvestbotLogo;
