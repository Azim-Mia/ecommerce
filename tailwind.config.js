module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      /* =========================
         RESPONSIVE BREAKPOINTS
      ========================= */
      screens: {
        xs: "480px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        "3xl": "1920px",
        "4xl": "2560px",
      },

      /* =========================
         COLORS
      ========================= */
      colors: {
        primary: "#ec4899", // pink
        secondary: "#8b5cf6", // purple
        accent: "#3b82f6", // blue

        dark: "#0a0a0a",
        light: "#ffffff",

        success: "#22c55e",
        warning: "#f59e0b",
        danger: "#ef4444",
        muted: "#6b7280",
      },

      /* =========================
         BOX SHADOW
      ========================= */
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.08)",
        card: "0 8px 25px rgba(0,0,0,0.12)",
        glow: "0 0 20px rgba(236, 72, 153, 0.4)",
        strong: "0 15px 40px rgba(0,0,0,0.15)",
      },

      /* =========================
         BORDER RADIUS
      ========================= */
      borderRadius: {
        xl2: "1.25rem",
        xl3: "1.75rem",
        xl4: "2rem",
      },

      /* =========================
         FONT SIZE
      ========================= */
      fontSize: {
        xxs: "10px",
      },

      /* =========================
         KEYFRAMES
      ========================= */
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },

        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" },
        },

        slideIn: {
          "0%": { opacity: "0", transform: "translateX(-10px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },

      /* =========================
         ANIMATIONS
      ========================= */
      animation: {
        fadeIn: "fadeIn 0.4s ease-in-out",
        float: "float 3s ease-in-out infinite",
        slideIn: "slideIn 0.3s ease-out",
      },
    },
  },

  plugins: [],
};