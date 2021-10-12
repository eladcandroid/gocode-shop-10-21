import { useState } from "react";
import Todo from "../Todo/Todo";
import "./Todos.css";

function Todos() {
  let newTodo = "";

  const [todos, setTodos] = useState([
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
  ]);

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div>
      <input type="text" onChange={(e) => (newTodo = e.target.value)} />
      <button
        onClick={() => {
          setTodos([
            {
              id: todos.length + 1,
              title: newTodo,
              completed: false,
            },
            ...todos,
          ]);
        }}
      >
        Add new todo
      </button>
      {todos.map(({ id, completed, title }) => (
        <h1 key={id}>
          <Todo
            id={id}
            completed={completed}
            onRemove={removeTodo}
            onToggle={toggleTodo}
          >
            {title}
          </Todo>
        </h1>
      ))}
    </div>
  );
}

export default Todos;
