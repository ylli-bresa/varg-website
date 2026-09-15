import type { SVGProps } from "react";

/** SVG recreation of the mockup brand mark (shield + neon ring + star/wolf). */
export default function VargLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 780 760"
      role="img"
      aria-label="Varg"
      {...props}
    >
      <image href="/varg-mark.svg" width="780" height="760" />
    </svg>
  );
}
