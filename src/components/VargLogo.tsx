/** Inline brand mark — prefers the traced SVG asset. */
export default function VargLogo({ className = "" }: { className?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/varg-mark.svg"
      alt="Varg"
      className={className}
      width={52}
      height={52}
    />
  );
}
