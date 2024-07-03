import React, { useEffect, useState } from "react";

import styles from "@/styles/Todos.module.css";
import axios from "axios";

interface todos {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export default function Todos() {
  const [todos, setTodos] = useState<todos[]>();

  useEffect(() => {
    const getTodos = async () => {
      const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
      setTodos(res.data);
    };
    getTodos();
  }, []);

  return (
    <>
      <h1>Tarefas para Fazer: </h1>
      <ul className={styles.todolist}>
        {todos?.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </>
  );
}
