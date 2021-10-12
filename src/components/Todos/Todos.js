import { useEffect, useState } from "react";
import Counter from "../Counter/Counter";
import Todo from "../Todo/Todo";
import "./Todos.css";

function Todos() {
  let newTodo = "";

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        return res.json();
      })
      .then((todos) => {
        setTodos(todos);
      });
  }, []);

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
      <div>Todos count: {todos.length}</div>
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
