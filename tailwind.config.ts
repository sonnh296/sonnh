/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/**/*.{js,vue,ts}",
    "./src/layouts/**/*.vue",
    "./src/pages/**/*.vue",
    "./src/plugins/**/*.{js,ts}",
    "./app.vue",
    "./src/error.vue",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  darkMode: "class",
};
