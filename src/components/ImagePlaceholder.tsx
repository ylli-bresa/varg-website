/** Landscape + plus placeholder matching the mockup hero center mark. */
export default function ImagePlaceholder({
  className = "",
}: {
  className?: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 160 130"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      {/* Soft frame */}
      <rect
        x="6"
        y="18"
        width="148"
        height="100"
        rx="6"
        stroke="#525252"
        strokeWidth="5"
      />
      {/* Sun / moon */}
      <circle cx="118" cy="46" r="11" fill="#525252" />
      {/* Mountains */}
      <path d="M18 108L62 52L86 78L108 58L142 108H18Z" fill="#525252" />
      {/* Plus (top-right) */}
      <path
        d="M142 6V26M132 16H152"
        stroke="#525252"
        strokeWidth="5"
        strokeLinecap="round"
      />
    </svg>
  );
}
