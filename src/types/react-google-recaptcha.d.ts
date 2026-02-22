declare module "react-google-recaptcha" {
  import type { Component, RefObject } from "react";

  export interface ReCAPTCHAProps {
    sitekey: string;
    theme?: "light" | "dark";
    size?: "compact" | "normal" | "invisible";
    "aria-label"?: string;
    onChange?: (token: string | null) => void;
  }

  export default class ReCAPTCHA extends Component<ReCAPTCHAProps> {
    getValue(): string | null;
    reset(): void;
    executeAsync(): Promise<string>;
  }
}
