import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'border':'rgb(19,14,44)',
        'companies':'rgb(233,229,251)',
        'topborder':'rgb(57, 52, 94)',
        'bottomborder':'rgb(21,16,46)',
        'bigtext':'rgb(232,230,253)'
      },
    },
  },
  plugins: [],
} satisfies Config;
