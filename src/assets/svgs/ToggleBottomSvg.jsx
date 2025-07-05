const ToggleBottomSvg = ({ className = "" }) => {
  return (
    <svg
      className={`h-4 w-4 transition-transform ${className}`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 9l-7 7-7-7"
      />
    </svg>
  );
};

export default ToggleBottomSvg;
