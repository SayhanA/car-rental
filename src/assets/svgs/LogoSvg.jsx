import { twMerge } from "tailwind-merge";

const LogoSvg = ({
  width = 113,
  height = 50,
  strokeWidth = 12,
  className = "",
  ...props
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 113 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={twMerge("shrink-0", className)}
      {...props}
    >
      <path
        d="M56.5631 25.0631L40.8943 11.6134C33.0496 4.87968 20.7866 4.87968 12.9419 11.6134C4.43685 18.9139 4.43685 31.2123 12.9419 38.5128C20.7866 45.2465 33.0496 45.2465 40.8943 38.5128L56.5631 25.0631ZM56.5631 25.0631L72.2319 11.6134C80.0766 4.87968 92.3397 4.87968 100.184 11.6134C108.689 18.9139 108.689 31.2123 100.184 38.5128C92.3397 45.2465 80.0766 45.2465 72.2319 38.5128L56.5631 25.0631Z"
        stroke="currentColor"
        strokeWidth={strokeWidth}
      />
    </svg>
  );
};

export default LogoSvg;
