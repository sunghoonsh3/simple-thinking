/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "xs-sm": "340px", // Custom breakpoint between sm (640px) and md (768px)
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        underlineBlue: "#5AA8D6",
        descriptionGray: "#A29999",
      },
      fontFamily: {
        lateef: ["var(--font-lateef)", "sans-serif"],
        nanumPenScript: ["var(--font-nanumPenScript)", "cursive"],
        dongle: ["var(--font-dongle)", "sans-serif"],
        hiMelody: ["var(--font-hiMelody)", "cursive"],
        gowunBatang: ["var(--font-gowunBatang)", "serif"],
        gamjaFlower: ["var(--font-gamjaFlower)", "cursive"],
        poorStory: ["var(--font-poorStory)", "cursive"],
        cuteFont: ["var(--font-cuteFont)", "cursive"],
      },
    },
    plugins: [],
  },
};
