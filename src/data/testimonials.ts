export type Testimonial = {
  quote: string;
  name: string;
  company: string;
  /** Optional: plain text shown to the left of name and company (e.g. company initials). */
  logoLabel?: string;
  /** Optional: path to client logo image. Used when you have a logo file; otherwise use logoLabel. */
  logoPath?: string;
};

export const testimonials: Testimonial[] = [
  {
    quote: "Outstanding design quality and smooth communication throughout. Everything was delivered exactly as promised.",
    name: "Nathan",
    company: "Founder of ClipWine",
    logoLabel: "CW",
  },
  {
    quote: "Fast, creative, and incredibly precise. The final result exceeded our expectations in every way.",
    name: "Chris",
    company: "Founder of Neobit",
    logoLabel: "NB",
  },
  {
    quote: "A seamless experience from start to finish. Professional work that truly elevated our brand presence.",
    name: "Olev",
    company: "Founder of Clarity Alliance",
    logoLabel: "CA",
  },
  {
    quote: "Reliable, detail-focused, and highly skilled. We got exactly what we needed to move forward confidently.",
    name: "Jimmy",
    company: "Founder of Bolt",
    logoLabel: "B",
  },
  {
    quote: "Exceptional service and flawless execution. The final files were perfect and ready for immediate use.",
    name: "Sendrit",
    company: "Founder of RS Immowerk",
    logoLabel: "RS",
  },
  {
    quote: "Creative vision combined with real professionalism. The process was smooth and the outcome was outstanding.",
    name: "Nathan F",
    company: "Founder of HyphenResearch",
    logoLabel: "HR",
  },
];
