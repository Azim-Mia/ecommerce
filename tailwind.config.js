module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ec4899", // pink
        secondary: "#8b5cf6", // purple
        accent: "#3b82f6", // blue
        dark: "#0a0a0a",
        light: "#ffffff",
      },

      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.08)",
        card: "0 8px 25px rgba(0,0,0,0.12)",
        glow: "0 0 20px rgba(236, 72, 153, 0.4)",
      },

      borderRadius: {
        xl2: "1.25rem",
        xl3: "1.75rem",
      },

      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },

        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },

      animation: {
        fadeIn: "fadeIn 0.4s ease-in-out",
        float: "float 3s ease-in-out infinite",
      },

      fontSize: {
        xxs: "10px",
      },
    },
  },
  plugins: [],
};