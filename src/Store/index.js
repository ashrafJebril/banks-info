import { init } from "@rematch/core";
import example from "./example/index";
const store = init({
  models: { example },
});
export default store;
