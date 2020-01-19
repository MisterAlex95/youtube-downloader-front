import { createContext } from "react";

const GlobalContext = createContext({
  state: {},
  dispatch: {}
});

export default GlobalContext;
