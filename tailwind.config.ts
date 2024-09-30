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
        accent: "#c26404",
        background: "#fffcf7",
        lightaccent: "#e87a01",
      },
    },
  },
  plugins: [],
};
export default config;
