/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        darkSlate: "#3D3B4F",
        ligthGray: "#E8E8E8",
        skyBlue: "#6CA0D4",
        darkGreen: "#1F3C2C"
      },
      fontFamily: {
        Montserrat: "'Montserrat', sans-serif",
        Source: "'Source Code Pro', monospace",
      }
    }
  },
  plugins: []
};