import { TextField } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import Counter from "../Counter/Counter";
import Todo from "../Todo/Todo";
import "./Todos.css";

function Todos() {
  let newTodo = "";

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("/api/todos")
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
      <br />
      <TextField
        onChange={(e) => (newTodo = e.target.value)}
        label="New todo"
        color="secondary"
        placeholder="Enter a new title"
        autoFocus
      />
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
      {todos.map(({ _id, completed, title }) => (
        <h1 key={_id}>
          <Todo
            id={_id}
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
