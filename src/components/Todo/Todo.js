import "./Todo.css";

function Todo({ title, completed, children }) {
  return (
    <div style={completed ? { textDecoration: "line-through" } : {}}>
      {/* TODO! {title} completed: {completed ? "YES!" : "NO :("} */}
      {children}
    </div>
  );
}

export default Todo;
