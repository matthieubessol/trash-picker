module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "spin-twice": {
          "0%": { transform: "rotate(0deg) scale(1.05)" },
          "100%": { transform: "rotate(720deg) scale(1.05)" },
        },
        rainbow: {
          "0% ": { color: "red" },
          "15%": { color: "aqua" },
          "25%": { color: "blue" },
          "15%": { color: "darkkhaki" },
          "50%": { color: "orange" },
          "60%": { color: "green" },
          "70%": { color: "purple" },
          "80%": { color: "pink" },
          "90%": { color: "yellow" },
          "100%": { color: "red" },
        },
      },
      animation: {
        "spin-twice": "spin-twice 0.5s forwards",
        "rainbow-text": "rainbow 1s linear infinite",
      },
    },
  },
  plugins: [],
};
