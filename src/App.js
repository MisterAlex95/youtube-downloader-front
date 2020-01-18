import React from "react";
import { Searchbar, Tools } from "./components";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Searchbar />
      <Tools />
      <div className="viewer"></div>
      <div className="results"></div>
    </div>
  );
}

export default App;
