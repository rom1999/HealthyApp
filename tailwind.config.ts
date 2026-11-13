import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "BNazanin"],
      },
      boxShadow: { glow: "0 20px 65px rgba(94, 234, 212, 0.14)" },
    },
  },
  plugins: [],
};

export default config;
