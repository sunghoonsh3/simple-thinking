/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        underlineBlue: "#5AA8D6",
        descriptionGray: "#A29999",
      },
      fontFamily: {
        lateef: ["var(--font-lateef)", "sans-serif"],
      },
    },
    plugins: [],
  },
};
