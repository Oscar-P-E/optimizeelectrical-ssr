import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", ...fontFamily.sans],
      },
      colors: {
        "oe-orange": "hsl(36, 73%, 51%)",
        "oe-blue": "hsl(212, 65%, 23%)",
        "oe-blue-10": "hsla(212, 65%, 23%, 0.1)",
      },
    },
  },
  plugins: [],
} satisfies Config;
