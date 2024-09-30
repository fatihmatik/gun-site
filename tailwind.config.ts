import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#001f3c",
        secondary: "#2d698e",
        background: "#fffcf7",
        accent: "#c26404",
        lightaccent: "#e87a01",
      },
      backgroundImage: {
        gradient_background:
          "linear-gradient(to right, #fffcf7, #f9efdf, #fffcf7)",
      },
    },
  },
  plugins: [],
};
export default config;
