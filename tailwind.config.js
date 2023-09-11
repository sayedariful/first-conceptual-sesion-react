/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    daisyui: {
      themes: [
        {
          mytheme: {
            primary: "#ac80f2",

            secondary: "#179b76",

            accent: "#298402",

            neutral: "#232934",

            "base-100": "#34414c",

            info: "#2882d7",

            success: "#36d9c6",

            warning: "#d7ab09",

            error: "#e92d1c",
          },
        },
      ],
    },
  },
  plugins: [require("daisyui")],
};
