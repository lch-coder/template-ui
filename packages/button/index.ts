import MyButton from "./src/index.vue";
import { App } from "vue";

export default (app: App) => {
  app.component(MyButton.name, MyButton);
};
