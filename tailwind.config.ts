import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        "primary-300": "var(--primary-300)",
        "primary-500": "var(--primary-500)",

        "neutral-100": "var(--neutral-100)",
        "neutral-200": "var(--neutral-200)",
        "neutral-300": "var(--neutral-300)",
        "neutral-400": "var(--neutral-400)",
        "neutral-700": "var(--neutral-700)",
        "neutral-800": "var(--neutral-800)",

        "error-600": "var(--error-600)",
      },
    },
  },
  plugins: [],
};
export default config;
