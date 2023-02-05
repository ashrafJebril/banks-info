import { init } from "@rematch/core";
import Banks from "./Banks/index";
const store = init({
  models: { Banks },
});
export default store;
