module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],

  theme: {
    extend: {
      height: {
        128: "120vh", //Custom class h-120 with a height of 120vh of window screen
        200: "200vh", //Custom class h-120 with a height of 200vh of window screen
      },
      screens: {
        xs: "320px",
      },
    },
  },

  corePlugins: {
    aspectRatio: false,
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
