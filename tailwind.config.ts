import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        georgian: ["Noto Sans Georgian", "sans-serif"],
      },
      colors: {
        primary: "#2E86AB",
        secondary: "#A8D8EA",
        accent: "#F5A623",
        dark: "#1B4965",
        text: "#2D3436",
      },
    },
  },
  plugins: [],
};

export default config;
