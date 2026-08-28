import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#080f0b",
        surface: {
          DEFAULT: "#0f1c14",
          elevated: "#15271d",
          border: "#1d3829",
          borderHover: "#2b533c",
        },
        brand: {
          50: "#ecfdf5",
          100: "#d1fae5",
          200: "#a7f3d0",
          300: "#6ee7b7",
          400: "#34d399",
          500: "#10b981", // Living Emerald Green
          600: "#059669",
          700: "#047857",
          800: "#065f46",
          900: "#064e3b",
          950: "#022c22",
        },
        moss: {
          50: "#f4fbf4",
          100: "#e5f7e5",
          200: "#ccf0cc",
          300: "#a3e3a4",
          400: "#70cd73",
          500: "#4cb250",
          600: "#38923c",
          700: "#2d7431",
          800: "#275c2b",
          900: "#224d25",
          950: "#0e2a11",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "monospace"],
      },
      animation: {
        "fade-in": "fadeIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
      boxShadow: {
        glow: "0 0 35px -5px rgba(16, 185, 129, 0.3)",
        "glow-lg": "0 0 50px -10px rgba(16, 185, 129, 0.4)",
        glass: "0 8px 32px 0 rgba(0, 0, 0, 0.45)",
      },
    },
  },
  plugins: [],
};
export default config;
