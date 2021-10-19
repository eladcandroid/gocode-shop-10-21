import { Button } from "@mui/material";
import { useContext, useState } from "react";
import Todos from "../components/Todos/Todos";
import MyContext from "../MyContext";

function Home() {
  const [isDarkMode, setIsDarkMode] = useContext(MyContext);

  return (
    <div style={isDarkMode ? { background: "black", color: "white" } : {}}>
      <br />
      <br />
      <br />
      <Todos />
    </div>
  );
}

export default Home;
