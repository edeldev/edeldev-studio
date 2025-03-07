import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F7F7F7",
        secondary: "#6B6B6B",
      },
      keyframes: {
        marquee: {
          from: {
            transform: "translateX(0%)",
          },
          to: {
            transform: "translateX(-50%)",
          },
        },
      },
      animation: {
        marquee: "marquee 15s linear infinite",
      },
    },
    plugins: [],
  },
} satisfies Config;
