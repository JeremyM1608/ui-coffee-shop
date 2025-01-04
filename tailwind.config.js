/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        sans: ['var(--font-rubik)'],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)", //brown
        primaryHover:"#503526",
        secondary: "#FFBA33", //yellow
        secondaryHover:"#DC9A18",
        secondaryActive:"#FFBA33",
        stone:"#DCDCDC",
        check: "#2FAB73", //green
        blue:"#109CE9",
        greyHover: "#9F9F9F",
        grey: {
          10: "#4F5665",
        },
      },
    },
  },
  plugins: [],
};
