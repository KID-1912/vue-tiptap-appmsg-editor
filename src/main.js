import "virtual:windi.css";
import "@/assets/styles/reset.css";
import "@/assets/styles/global.scss";
import SvgIcon from "@/components/SvgIcon/SvgIcon.js";

import App from "./App.vue";

const app = createApp(App);
app.component("SvgIcon", SvgIcon);
app.mount("#app");
