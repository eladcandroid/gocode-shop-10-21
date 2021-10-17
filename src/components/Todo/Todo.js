import "./Todo.css";
import MyContext from "../../MyContext";
import { useContext } from "react";
function Todo({ id, title, completed, children, onRemove, onToggle }) {
  const [isDarkMode, setIsDarkMode] = useContext(MyContext);
  const color = isDarkMode ? "white" : "green";
  return (
    <>
      <span
        onClick={() => {
          onToggle(id);
          setIsDarkMode(!isDarkMode);
        }}
        style={
          completed ? { textDecoration: "line-through", color } : { color }
        }
      >
        {children}
      </span>
      <span onClick={() => onRemove(id)} style={{ cursor: "pointer" }}>
        🗑
      </span>
    </>
  );
}

export default Todo;
