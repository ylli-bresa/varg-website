/** Faint landscape + plus mark — matches mockup hero center placeholder. */
export default function ImagePlaceholder({
  className = "",
}: {
  className?: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 160"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <rect
        x="10"
        y="28"
        width="168"
        height="116"
        rx="8"
        stroke="#525252"
        strokeWidth="6"
      />
      <circle cx="140" cy="58" r="14" fill="#525252" />
      <path d="M22 132L78 62L108 96L132 72L168 132H22Z" fill="#525252" />
      <path
        d="M178 8V32M166 20H190"
        stroke="#525252"
        strokeWidth="6"
        strokeLinecap="round"
      />
    </svg>
  );
}
