import plugin from "tailwindcss/plugin";
import { tokens } from "./design-tokens";

export default plugin(({ addBase }) => {
  addBase({
    ":root": {
      "--primary": tokens.color.primary,
      "--secondary": tokens.color.secondary,
      "--accent": tokens.color.accent,
      "--bg-primary": tokens.color.bg.primary,
      "--bg-secondary": tokens.color.bg.secondary
    }
  });
});
