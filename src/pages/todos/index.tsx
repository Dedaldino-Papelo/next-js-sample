import React, { useEffect, useState } from "react";

import styles from "@/styles/Todos.module.css";
import axios from "axios";
import Link from "next/link";
import api from "@/services/api";

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
      const res = await api.get("https://jsonplaceholder.typicode.com/todos");
      setTodos(res.data);
    };
    getTodos();
  }, []);

  return (
    <>
      <h1>Tarefas para Fazer: </h1>
      <ul className={styles.todolist}>
        {todos?.map((todo) => (
          <li key={todo.id}>{todo.title} <Link href={`todos/${todo.id}`}>see more</Link></li>
        ))}
      </ul>
    </>
  );
}
