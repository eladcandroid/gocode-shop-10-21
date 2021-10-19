import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import MyContext from "../MyContext";

function TodoDetails() {
  const { id } = useParams();
  const [todo, setTodo] = useState(null);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((res) => res.json())
      .then((todo) => {
        setTodo(todo);
      });
  }, [id]);
  return (
    <div>
      Todo details: ID: {id}, title: {todo?.title}
    </div>
  );
}

export default TodoDetails;
