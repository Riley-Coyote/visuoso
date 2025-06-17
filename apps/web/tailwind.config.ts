import type { Config } from "tailwindcss";
import nexusTokens from "@nexus/ui/plugin";

export default {
  content: ["./app/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: { extend: {} },
  plugins: [nexusTokens]
} satisfies Config;
