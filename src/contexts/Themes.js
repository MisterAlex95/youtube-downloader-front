import { createContext } from "react";

const themes = {
  light: {
    fontColor: "lightcoral",
    background: "#ffffff"
  },
  dark: {
    fontColor: "lightcoral",
    background: "rgb(175, 93, 93)"
  }
};

const context = createContext(themes.dark);

export default [themes, context];
