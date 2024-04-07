import { defineConfig } from "windicss/helpers";
import LineClamp from "windicss/plugin/line-clamp";

export default defineConfig({
  corePlugins: {
    // container: false, // disable container
  },
  plugins: [LineClamp],
});
