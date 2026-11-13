/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0B0B0B",
        coal: "#161616",
        paper: "#F4F2EC",
        smoke: "#E8E5DC",
        chalk: "#FFFFFF",
        blood: "#E3181E",
        gold: "#D9A441",
        // Admin panel tokens (dark UI, red accent)
        bone: "#F2EFE8",
        sun: "#FF3B30",
        flame: "#FF6A4D",
        mint: "#7DF0B0",
        ruby: "#D7263D",
      },
      fontFamily: {
        display: ["Anton", "Impact", "sans-serif"],
        sans: ['"Hanken Grotesk"', "system-ui", "sans-serif"],
        marker: ['"Permanent Marker"', "cursive"],
      },
    },
  },
  plugins: [],
};
