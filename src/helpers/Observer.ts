import { Observer } from "tailwindcss-intersect";

export function startObserver() {
  if (typeof window !== "undefined" && typeof document !== "undefined") {
    window.addEventListener("DOMContentLoaded", () => {
      Observer.start();
    });
  }
}
