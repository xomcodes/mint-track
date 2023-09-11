import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  corePlugins: { preflight: false },
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      // This color style is just for my sign-in page that doesnt use Mantine
      colors: {
        horizon: {
          light: {
            primary01: "#2B3674",
            primary02: "#4318FF",
            secondary01: "#A3AED0",
            secondary02: "#707EAE",
            secondary03: "#F4F7FE",
            "caribbean-green": "#05CD99",
            "bright-grey": "#E9EDF7",

            grey: {
              300: "#F4F7FE",
            },
          },

          dark: {
            primary01: "#0B1437",
            primary02: "#111C44",
            primary03: "#1B254B",

            // secondary01: "#A3AED0",
            // secondary02: "#707EAE",
            // "caribbean-green": "#05CD99",
            // "bright-grey": "#E9EDF7",
          },

          greydark: {
            300: "#1B254B",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
