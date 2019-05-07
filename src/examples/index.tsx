import { AppRegistry } from "react-native-web";

import Examples from "./Examples";

AppRegistry.registerComponent("Examples", () => Examples); // eslint-disable-line @typescript-eslint/explicit-function-return-type

AppRegistry.runApplication("Examples", {
  rootTag: document.getElementById("react-root"),
});
