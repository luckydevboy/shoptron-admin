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
        "celtic-blue": "var(--celtic-blue)",
        "payne-gray": "var(--payne-gray)",
        "payne-gray-darker": "var(--payne-gray-darker)",
        "french-gray": "var(--french-gray)",
        "alice-blue": "var(--alice-blue)",
        "jordy-blue": "var(--jordy-blue)",
        gunmetal: "var(--gunmetal)",
      },
    },
  },
  plugins: [],
};
export default config;
