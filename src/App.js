import React, { useState } from "react";
import { Searchbar, Tools } from "./components";
import { ThemeContext } from "./contexts";
import "./reset.css";
import "./App.css";

function App() {
  const [themes, Context] = ThemeContext;
  const [darkTheme, setDarkTheme] = useState(false);

  const switchTheme = () => {
    setDarkTheme(!darkTheme);
  };

  return (
    <Context.Provider value={darkTheme ? themes.dark : themes.light}>
      <div className="App">
        <Searchbar />
        <Tools />
        <div className="viewer"></div>
        <div className="results"></div>
        <span onClick={switchTheme}>{darkTheme ? "🌞" : "🌙"}</span>
      </div>
    </Context.Provider>
  );
}

export default App;
