/** @type {import('tailwindcss').Config} */
export const content = ["./src/main.js", "./src/css/input.css", "./index.html"];
export const theme = {
  extend: {
    colors: {
      primary: {
        orange: "hsl(26, 100%, 55%)",
        paleorange: "hsl(25, 100%, 94%)",
      },
      neutral: {
        verydarkblue: "hsl(220, 13%, 13%)",
        darkgrayishblue: "hsl(219, 9%, 45%)",
        grayishblue: "hsl(220, 14%, 75%)", 
        lightgrayishblue: "hsl(223, 64%, 98%)",
        white: "hsl(0, 0%, 100%)", 
        black: "hsl(0, 0%, 0%)",
      }
    }, 
    fontFamily: {
      kumbh: ["Kumbh Sans", "sans-serif"]
    },
  },
};
export const plugins = [];
