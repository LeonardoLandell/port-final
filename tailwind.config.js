module.exports = {
  theme: {
    extend: {
      keyframes: {
        carousel: {
          "0%": { transform: "translateX(0%)" },
          "25%": { transform: "translateX(0%)" }, // Banner 1 visível
          "30%": { transform: "translateX(-100%)" },
          "55%": { transform: "translateX(-100%)" }, // Banner 2 visível
          "60%": { transform: "translateX(-200%)" },
          "85%": { transform: "translateX(-200%)" }, // Banner 3 visível
          "90%": { transform: "translateX(0%)" }, // Volta ao início
          "100%": { transform: "translateX(0%)" },
        },
      },
      animation: {
        carousel: "carousel 15s infinite", // 3 banners × 5s cada
      },
    },
  },
  plugins: [],
};
