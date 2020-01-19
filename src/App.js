import React, { useState, useReducer } from "react";
import { Searchbar, Tools, VideoList } from "./components";
import ThemeContext from "./contexts/Themes";

import GlobalContext from "./contexts/";
import { searchReducer } from "./modules/index";

import "./reset.css";
import "./App.css";

function App() {
  const [themes, Context] = ThemeContext;
  const [darkTheme, setDarkTheme] = useState(false);
  const [searchState, searchDispatch] = useReducer(
    searchReducer.reducer,
    searchReducer.initialState
  );

  const switchTheme = () => {
    setDarkTheme(!darkTheme);
  };

  let states = {
    search: searchState
  };

  let dispatchs = {
    search: searchDispatch
  };

  return (
    <GlobalContext.Provider value={{ states, dispatchs }}>
      <Context.Provider value={darkTheme ? themes.dark : themes.light}>
        <div className="App">
          <Searchbar />
          <Tools />
          <div className="viewer"></div>
          <VideoList />
          <span onClick={switchTheme}>{darkTheme ? "🌞" : "🌙"}</span>
        </div>
      </Context.Provider>
    </GlobalContext.Provider>
  );
}

export default App;
