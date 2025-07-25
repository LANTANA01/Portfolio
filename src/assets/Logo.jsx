const Logo = () => {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      role="img"
      viewBox="0 0 24 24"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer petals */}
      <g transform="rotate(0 12 12)">
        <ellipse cx="12" cy="4" rx="1.5" ry="3" />
      </g>
      <g transform="rotate(45 12 12)">
        <ellipse cx="12" cy="4" rx="1.2" ry="2.5" />
      </g>
      <g transform="rotate(90 12 12)">
        <ellipse cx="12" cy="4" rx="1.5" ry="3" />
      </g>
      <g transform="rotate(135 12 12)">
        <ellipse cx="12" cy="4" rx="1.2" ry="2.5" />
      </g>
      <g transform="rotate(180 12 12)">
        <ellipse cx="12" cy="4" rx="1.5" ry="3" />
      </g>
      <g transform="rotate(225 12 12)">
        <ellipse cx="12" cy="4" rx="1.2" ry="2.5" />
      </g>
      <g transform="rotate(270 12 12)">
        <ellipse cx="12" cy="4" rx="1.5" ry="3" />
      </g>
      <g transform="rotate(315 12 12)">
        <ellipse cx="12" cy="4" rx="1.2" ry="2.5" />
      </g>
      
      {/* Center circle */}
      <circle cx="12" cy="12" r="3.5" />
      
      {/* Inner pattern */}
      <circle cx="12" cy="12" r="2.5" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.6" />
      <circle cx="12" cy="12" r="1.5" fill="none" stroke="currentColor" strokeWidth="0.3" opacity="0.4" />
      
      {/* Center dots pattern */}
      <circle cx="12" cy="12" r="0.3" opacity="0.8" />
      <circle cx="11.2" cy="11.2" r="0.2" opacity="0.6" />
      <circle cx="12.8" cy="11.2" r="0.2" opacity="0.6" />
      <circle cx="11.2" cy="12.8" r="0.2" opacity="0.6" />
      <circle cx="12.8" cy="12.8" r="0.2" opacity="0.6" />
    </svg>
  );
};

export default Logo;