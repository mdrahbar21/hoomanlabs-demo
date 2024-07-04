import type { Config } from "tailwindcss";
import { Gilroy } from '@/components/fonts/fonts';

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    fontFamily: {
      Gilroy: ["var(--font-gilroy)"],
    },
    extend: {
      backgroundImage: {
        "home-background": "url('/GridBackground2.svg')",
        "card-background": "url('/cardGrid2.svg')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        "text-primary": "#FFFFFF",
        "text-secondary": "#919191",
        "border-1":"#6D6B6C",
        "border-2":"#A4A3A1/57",
        "border-3":"#C1BFBD",
        "border-4":"#D3D1CF",
        "border-5":"#C1C0BE",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        "primary-dark": {
          DEFAULT: "hsl(var(--primary-dark))",
          foreground: "hsl(var(--primary-foreground))",
        },
        "back-second": {
          DEFAULT: "hsl(var(--back-second))",
          foreground: "hsl(var(--backg-second))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        pulse1: {
          "0%,1%,100%": {
            opacity: "0",
            transform: "scale(80%)",
          },
          "34%,67%": {
            opacity: "1",
            transform: "scale(100%)",
          },
        },
        pulse2: {
          "0%,40%,100%": {
            opacity: "0",
            transform: "scale(80%)",
          },
          "60%,80%": {
            opacity: "1",
            transform: "scale(100%)",
          },
        },
        pulse3: {
          "0%,25%,100%": {
            opacity: "0",
            transform: "scale(80%)",
          },
          "50%,75%": {
            opacity: "1",
            transform: "scale(100%)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        wiggle: "wiggle 1s ease-in-out infinite",
        pulse1: "pulse1 1.5s cubic-bezier(0.29, 0.17, 0.34, 1) infinite",
        pulse2: "pulse2 2s cubic-bezier(0.29, 0.17, 0.34, 1) infinite",
        pulse3: "pulse3 2.5s cubic-bezier(0.29, 0.17, 0.34, 1) infinite",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("tailwindcss-border-gradient-radius"),
  ],
};

export default config;
