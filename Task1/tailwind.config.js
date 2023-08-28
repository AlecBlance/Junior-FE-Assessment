/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "palette-red": "#F96666",
        "white-red": "#FFFAFA",
        "custom-black": "#313131",
      },
      backgroundImage: {
        "custom-header-image": 'url("/img/header.jpg")',
        "custom-header-image-2": 'url("/img/secondHeader.jpg")',
      },
    },
  },
  plugins: [],
};
