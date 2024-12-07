/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        'custom-blue': 'rgba(43, 128, 255, 1)',
        'custom-grey-1': 'rgba(247, 247, 247, 1)',
        'custom-grey-2': 'rgba(217, 217, 217, 1)',
        'custom-green':'rgba(5, 148, 69, 1)'
      },
      keyframes: {
        slideDown: {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(0)", opacity: "1" },
          "100%": { transform: "translateY(-100%)", opacity: "0" },
        },
      },
      animation: {
        "slide-down": "slideDown 0.3s ease-in-out",
        "slide-up": "slideUp 0.3s ease-in-out",
      },
      plugins: [
        function ({ addUtilities }) {
          addUtilities({
            '.custom-scrollbar': {
              'scrollbar-width': 'thin', // Firefox scrollbar
            },
            '.custom-scrollbar::-webkit-scrollbar': {
              width: '6px', // Chrome, Safari scrollbar width
            },
            '.custom-scrollbar::-webkit-scrollbar-thumb': {
              backgroundColor: '#888', // Scrollbar thumb color
              borderRadius: '10px',
            },
            '.custom-scrollbar::-webkit-scrollbar-thumb:hover': {
              backgroundColor: '#555', // Scrollbar thumb hover color
            },
            '.custom-scrollbar::-webkit-scrollbar-track': {
              backgroundColor: '#f1f1f1', // Scrollbar track color
            },
          });
        },
      ]
    },
  },
  plugins: [],
}