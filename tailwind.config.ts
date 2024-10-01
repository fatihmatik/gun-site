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
        gradient_flexbox_background:
          "linear-gradient(90deg, rgba(45,105,142,1) 0%, rgba(0,94,182,1) 22%, rgba(45,105,142,1) 100%)",
        cyan_to_darkblue: "linear-gradient(to right, #06b6d4, #1e3a8a)", // Cyan to Dark Blue gradient
      },
      fontFamily: {
        notosansbold: "notosansbold",
      },
    },
  },
  plugins: [],
};
export default config;
