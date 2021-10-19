import "./Todo.css";
import MyContext from "../../MyContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
function Todo({ id, title, completed, children, onRemove, onToggle }) {
  const [isDarkMode, setIsDarkMode] = useContext(MyContext);
  const color = isDarkMode ? "white" : "green";
  return (
    <>
      <span
        className="Todo"
        style={
          completed ? { textDecoration: "line-through", color } : { color }
        }
      >
        <input
          type="checkbox"
          onClick={() => {
            onToggle(id);
            // setIsDarkMode(!isDarkMode);
          }}
          checked={completed}
        />
        <Link to={`/todos/${id}`}>{children}</Link>
      </span>
      <span onClick={() => onRemove(id)} style={{ cursor: "pointer" }}>
        🗑
      </span>
    </>
  );
}

export default Todo;
