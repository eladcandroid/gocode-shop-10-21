import Todo from "../Todo/Todo";
import "./Todos.css";

function Todos() {
  const todos = [
    {
      id: 1,
      title: "Wash your dishes",
      completed: false,
    },
    {
      id: 2,
      title: "Throw the garbage",
      completed: true,
    },
  ];
  return (
    <div>
      {todos.map((todo) => (
        <h1 key={todo.id}>
          <Todo completed={todo.completed}>{todo.title}</Todo>
        </h1>
      ))}
    </div>
  );
}

export default Todos;
