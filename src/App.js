import logo from "./logo.svg";
import "./App.css";
import Todos from "./components/Todos/Todos";
import React, { useState } from "react";
import Counter from "./components/Counter/Counter";
import MyContext from "./MyContext";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const changeToDark = () => {
    setIsDarkMode(true);
  };

  return (
    <MyContext.Provider value={[isDarkMode, setIsDarkMode]}>
      <div style={isDarkMode ? { background: "black", color: "white" } : {}}>
        <button onClick={() => changeToDark()}>Change to dark mode</button>
        <br />
        <Todos />
      </div>
    </MyContext.Provider>
  );
}

export default App;
