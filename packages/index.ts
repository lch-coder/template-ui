import MyButton from "./button";
import { App } from "vue";
const components = [MyButton];
const install = function (app: App) {
  if ((install as any).installed) return;
  components.map((component) => {
    app.use(component);
  });
};
//  全局引用可自动安装
if (typeof window !== "undefined" && (window as any).Vue) {
  install((window as any).Vue);
}
export default {
  install,
  MyButton,
};
export { MyButton };
