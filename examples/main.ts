import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import templateUi from "../packages";

createApp(App).use(router).use(templateUi).mount("#app");
