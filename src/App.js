import React, { useState, useReducer } from "react";
import { Searchbar, Tools, VideoList, Viewer } from "./components";
import ThemeContext from "./contexts/Themes";

import GlobalContext from "./contexts/";
import { searchReducer, videoReducer } from "./modules/index";

import "./reset.css";
import "./App.css";

function App() {
  const [themes, Context] = ThemeContext;
  const [darkTheme, setDarkTheme] = useState(false);
  const [videoState, videoDispatch] = useReducer(
    videoReducer.reducer,
    videoReducer.initialState
  );
  const [searchState, searchDispatch] = useReducer(
    searchReducer.reducer,
    searchReducer.initialState
  );

  const switchTheme = () => {
    setDarkTheme(!darkTheme);
  };

  let states = {
    search: searchState,
    video: videoState
  };

  let dispatchs = {
    search: searchDispatch,
    video: videoDispatch
  };

  return (
    <GlobalContext.Provider value={{ states, dispatchs }}>
      <Context.Provider value={darkTheme ? themes.dark : themes.light}>
        <div className="App">
          <Searchbar />
          <Tools />
          <Viewer />
          <VideoList />
          <span onClick={switchTheme}>{darkTheme ? "🌞" : "🌙"}</span>
        </div>
      </Context.Provider>
    </GlobalContext.Provider>
  );
}

export default App;
