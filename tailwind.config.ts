import type { Config } from "tailwindcss";
import forms from "@tailwindcss/forms";
import containerQueries from "@tailwindcss/container-queries";

export default {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "primary": "#1745cf",
                "background-light": "#ffffff",
                "background-dark": "#000000",
                "neutral-soft": "#f8f9fa",
            },
            fontFamily: {
                "sans": ["var(--font-inter)", "sans-serif"],
                "serif": ["var(--font-playfair)", "serif"],
            },
            borderRadius: {
                "DEFAULT": "0.25rem",
                "lg": "0.5rem",
                "xl": "0.75rem",
                "full": "9999px"
            },
        },
    },
    plugins: [forms, containerQueries],
} satisfies Config;
