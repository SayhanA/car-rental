const CircleWright = ({
  width = "16",
  height = "16",
  className = "",
  ...props
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        d="M14.5339 6.66666C14.8384 8.16086 14.6214 9.71428 13.9192 11.0679C13.2169 12.4214 12.0719 13.4934 10.675 14.1049C9.27803 14.7164 7.7137 14.8305 6.24281 14.4282C4.77193 14.026 3.48341 13.1316 2.59213 11.8943C1.70085 10.657 1.26069 9.15148 1.34505 7.62892C1.42941 6.10635 2.0332 4.65872 3.05571 3.52744C4.07823 2.39616 5.45767 1.64961 6.96399 1.4123C8.47031 1.17498 10.0125 1.46123 11.3333 2.22333"
        stroke="currentColor"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 7.33335L8 9.33335L14.6667 2.66669"
        stroke="currentColor"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CircleWright;
