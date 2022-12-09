/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#a8a29e",

          "secondary": "#dc2626",

          "accent": "#37CDBE",

          "neutral": "#3D4451",

          "base-100": "#FFFFFF",

          "info": "#3ABFF8",

          "success": "#36D399",

          "warning": "#FBBD23",

          "error": "#F87272",
        },
      },
      "dark",
      "cupcake",
    ],
  },
  // daisyui: {
  //   themes: [
  //     {
  //       mytheme: {
  //         primary: "#2990f0",
  //         secondary: "#19D3AE",
  //         accent: "#f511de",
  //         neutral: "#3d4451",
  //         "base-100": "#ffffff",
  //       },
  //     },
  //     "dark",
  //     "cupcake",
  //   ],
  // },
  plugins: [require("daisyui")],
}
