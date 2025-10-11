/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./hooks/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        '15': '15px',
      },
      colors: {
        background: '#FFFFFF',
        foreground: '#000000',
        card: {
          DEFAULT: '#FFFFFF',
          foreground: '#000000',
        },
        popover: {
          DEFAULT: '#FFFFFF',
          foreground: '#000000',
        },
        primary: {
          DEFAULT: '#0A3161',
          foreground: '#FFFFFF',
        },
        secondary: {
          DEFAULT: '#FFFFFF',
          foreground: '#000000',
        },
        muted: {
          DEFAULT: '#FFFFFF',
          foreground: '#000000',
        },
        accent: {
          DEFAULT: '#0A3161',
          foreground: '#FFFFFF',
        },
        destructive: {
          DEFAULT: '#B31942',
          foreground: '#FFFFFF',
        },
        border: '#000000',
        input: '#000000',
        ring: '#0A3161',
        brand: {
          navy: '#0A3161',
          red: '#B31942',
          'navy-50': '#0A3161',
          'navy-100': '#0A3161',
          'red-50': '#B31942',
          'red-100': '#B31942',
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xl: "calc(var(--radius) + 4px)",
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
        "collapsible-down": {
          from: { height: "0" },
          to: { height: "var(--radix-collapsible-content-height)" },
        },
        "collapsible-up": {
          from: { height: "var(--radix-collapsible-content-height)" },
          to: { height: "0" },
        },
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - var(--gap)))" },
        },
        "marquee-vertical": {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(calc(-100% - var(--gap)))" },
        },
        rainbow: {
          "0%": { "background-position": "0% 50%" },
          "50%": { "background-position": "100% 50%" },
          "100%": { "background-position": "0% 50%" },
        },
        aurora: {
          "0%": {
            "background-position": "0% 50%",
            transform: "rotate(-5deg) scale(0.9)",
          },
          "25%": {
            "background-position": "50% 100%",
            transform: "rotate(5deg) scale(1.1)",
          },
          "50%": {
            "background-position": "100% 50%",
            transform: "rotate(-3deg) scale(0.95)",
          },
          "75%": {
            "background-position": "50% 0%",
            transform: "rotate(3deg) scale(1.05)",
          },
          "100%": {
            "background-position": "0% 50%",
            transform: "rotate(-5deg) scale(0.9)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "collapsible-down": "collapsible-down 0.2s ease-out",
        "collapsible-up": "collapsible-up 0.2s ease-out",
        "caret-blink": "caret-blink 1.25s ease-out infinite",
        marquee: "marquee var(--duration) infinite linear",
        "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
        "border-move": "border-move 5s linear infinite",
        "border-beam": "border-beam var(--duration) infinite linear",
        rainbow: "rainbow var(--duration) infinite linear",
        aurora: "aurora var(--duration) infinite linear",
      },
    },
  },
  plugins: [],
};

export default config;
