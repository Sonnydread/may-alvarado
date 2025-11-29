// postcss.config.js
module.exports = {
  plugins: {
    "@tailwindcss/postcss": {},  // ← Esto es lo nuevo para v4
    autoprefixer: {},            // ← Mantén si lo usas
  },
};