import type { SVGProps } from "react";

/** Brand mark recreated from the mockup: dark shield, neon ring, white plate, star/wolf. */
export default function VargLogo({
  className = "",
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 80 78"
      className={className}
      role="img"
      aria-label="Varg"
      {...props}
    >
      <path
        d="M18 7.5H62C68.5 7.5 73 12.2 73 18.5V33.5C73 43 68.5 52 61 60.5L45.5 74C42.2 76.8 37.8 76.8 34.5 74L19 60.5C11.5 52 7 43 7 33.5V18.5C7 12.2 11.5 7.5 18 7.5Z"
        fill="#0F0F0F"
        stroke="#00FF7F"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      <path
        d="M21.5 13.5H58.5C63.2 13.5 66.5 16.8 66.5 21.5V33.5C66.5 41.5 62.5 49 56 56L43.5 67.5C41.2 69.5 38.8 69.5 36.5 67.5L24 56C17.5 49 13.5 41.5 13.5 33.5V21.5C13.5 16.8 16.8 13.5 21.5 13.5Z"
        fill="#FFFFFF"
      />
      <path
        fill="#0F0F0F"
        d="M40 19.5C42.2 19.5 43.8 21.4 44.8 24.6L48.2 33.5C50.2 31.8 53 31.2 56.2 32.4C58.8 33.4 60.2 35.2 59.9 37.6C59.5 40.8 56.8 43.2 52.2 45.5C50.2 50.8 48.8 55.5 48.1 59.5C47.6 62.2 45.6 63.8 42.8 63.8H41L40 57.5L39 63.8H37.2C34.4 63.8 32.4 62.2 31.9 59.5C31.2 55.5 29.8 50.8 27.8 45.5C23.2 43.2 20.5 40.8 20.1 37.6C19.8 35.2 21.2 33.4 23.8 32.4C27 31.2 29.8 31.8 31.8 33.5L35.2 24.6C36.2 21.4 37.8 19.5 40 19.5Z"
      />
      <path fill="#FFFFFF" d="M40 55.5L35.8 63.2H44.2Z" />
    </svg>
  );
}
