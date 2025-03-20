/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient": "linear-gradient(135deg, #130428 7%, #251043 34%, #381E60 51%, #261045 85%, #190634 100%)",
      },
    },
  },
  plugins: [],
};
