import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "hsl(var(--color-primary))",
          foreground: "hsl(var(--color-primary-foreground))",
        },
        glass: {
          DEFAULT: "hsl(var(--color-glass))",
          border: "hsl(var(--color-glass-border))",
        },
        'text-on-glass': "hsl(var(--color-text-on-glass))",
        'text-on-hero': "hsl(var(--color-text-on-hero))",
      },
      backgroundImage: {
        'gradient-hero': 'var(--gradient-hero)',
      },
      boxShadow: {
        'glass': 'var(--shadow-glass)',
      },
      transitionProperty: {
        'smooth': 'var(--transition-smooth)',
        'section': 'var(--transition-section)',
      },
      backdropBlur: {
        'glass': '10px',
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        fadeInUp: {
          from: {
            opacity: "0",
            transform: "translateY(30px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in-up": "fadeInUp 0.6s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
