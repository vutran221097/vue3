// tailwind.config.js
import typography from "@tailwindcss/typography";
import forms from "@tailwindcss/forms";
import aspectRatio from "@tailwindcss/aspect-ratio";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        banner: "url('./src/assets/banner.jpeg')",
      },
      colors: {
        main: "#F4F3F2",
        secondary: "#B78A27",
        detail: "#E4DECE",
      },
    },
  },
  plugins: [typography, forms, aspectRatio],
};
