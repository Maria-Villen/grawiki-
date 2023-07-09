// .storybook/manager.js

import { addons } from "@storybook/manager-api";
import grawikiTheme from "./mytheme";

addons.setConfig({
  theme: grawikiTheme,
});
