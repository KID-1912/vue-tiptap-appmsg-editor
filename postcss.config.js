import autoprefixer from "autoprefixer";
import cssnano from "cssnano";

export default {
  plugins: [
    autoprefixer({
      // overrideBrowserslist: ["last 2 version", ">1%"],
    }),
    cssnano({}),
  ],
};
