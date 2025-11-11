import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "ui-sans-serif", "system-ui"]
      },
      colors: {
        brand: {
          50: "#f1fcf7",
          100: "#dcf8eb",
          200: "#b5f0d6",
          300: "#7ee2ba",
          400: "#40c995",
          500: "#14b47a",
          600: "#0d9a67",
          700: "#097a54",
          800: "#075f43",
          900: "#064f39"
        }
      },
      backgroundImage: {
        "grid-brand":
          "radial-gradient(circle at 1px 1px, rgba(20, 180, 122, 0.12) 1px, transparent 0)"
      },
      boxShadow: {
        "glow-brand": "0 20px 45px -25px rgba(20, 180, 122, 0.55)",
        "surface-soft": "0 15px 35px -20px rgba(15, 23, 42, 0.35)"
      },
      animation: {
        "pulse-slow": "pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite"
      }
    }
  },
  plugins: [require("tailwindcss-animate")]
};

export default config;
