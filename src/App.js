import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import MyContext from "./MyContext";
import { Button } from "@mui/material";
import TodoDetails from "./pages/TodoDetails";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const changeToDark = () => {
    setIsDarkMode(true);
  };

  return (
    <Router>
      <MyContext.Provider value={[isDarkMode, setIsDarkMode]}>
        <Button variant="outlined" onClick={() => changeToDark()}>
          Change to dark mode
        </Button>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/todos/:id">
            <TodoDetails />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </MyContext.Provider>
    </Router>
  );
}

export default App;
