import logo from "./logo.svg";
import "./App.css";
import Todos from "./components/Todos/Todos";
import React, { useState } from "react";
import Counter from "./components/Counter/Counter";
import MyContext from "./MyContext";
import Button from "@mui/material/Button";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const changeToDark = () => {
    setIsDarkMode(true);
  };

  return (
    <MyContext.Provider value={[isDarkMode, setIsDarkMode]}>
      <div style={isDarkMode ? { background: "black", color: "white" } : {}}>
        <Button variant="outlined" onClick={() => changeToDark()}>
          Change to dark mode
        </Button>
        <br />
        <br />
        <br />
        <Todos />
      </div>
    </MyContext.Provider>
  );
}

export default App;
