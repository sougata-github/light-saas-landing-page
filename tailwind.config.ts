import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // keyframes: {
      //   move: {
      //     "0%": {
      //       transform: "translateX(0%)",
      //     },
      //     "100%": {
      //       transform: "translateX(-50%)",
      //     },
      //   },
      // },
      // animation: {
      //   move: "move 3s linear infinite",
      // },
    },
  },
  plugins: [],
};
export default config;
