import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#12172B",
          light: "#1B2140",
          lighter: "#242C52",
        },
        paper: "#EDEAE2",
        signal: {
          DEFAULT: "#E8A23D",
          dim: "#B87F30",
        },
        teal: {
          DEFAULT: "#4C8C86",
          dim: "#356662",
        },
        ash: "#8B8FA3",
        coral: "#E2604F",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        grain: "radial-gradient(circle at 1px 1px, rgba(237,234,226,0.06) 1px, transparent 0)",
      },
    },
  },
  plugins: [],
};

export default config;
