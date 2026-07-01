import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {

      colors: {

        bos: {
          blue: "#1d4ed8",
          navy: "#0f172a",
          cyan: "#06b6d4",
          emerald: "#10b981",
          amber: "#f59e0b",
          red: "#dc2626",
          slate: "#64748b",
          background: "#f8fafc",
          surface: "#ffffff",
          border: "#e2e8f0"
        },

        executive: {
          success: "#16a34a",
          warning: "#f59e0b",
          danger: "#dc2626",
          information: "#2563eb"
        }

      },

      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem"
      },

      boxShadow: {
        executive:
          "0 10px 30px rgba(15,23,42,0.08)",

        card:
          "0 4px 16px rgba(15,23,42,0.05)"
      },

      fontFamily: {

        sans: [
          "Inter",
          "system-ui",
          "sans-serif"
        ],

        arabic: [
          "IBM Plex Sans Arabic",
          "sans-serif"
        ]

      },

      spacing: {
        18: "4.5rem",
        22: "5.5rem"
      },

      transitionTimingFunction: {
        executive: "cubic-bezier(.4,0,.2,1)"
      }

    },
  },

  plugins: [],
} satisfies Config;
