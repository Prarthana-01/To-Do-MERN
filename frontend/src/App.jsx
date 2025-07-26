import React, { useEffect, useState } from "react";
import axios from "axios";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState("");

  const fetchTodos = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/todos");
      setTodos(res?.data || []);
      setError("");
    } catch (err) {
      setError("Failed to fetch todos");
      console.error(err?.message);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const addTodo = async (todo) => {
    try {
      const res = await axios.post("http://localhost:3000/api/todos", todo);
      setTodos([res?.data, ...todos]); 
      setError("");
    } catch (err) {
      setError("Failed to add todo");
      console.error(err?.message);
    }
  };

  const updateTodo = async (id, updatedFields) => {
  try {
    const res = await axios.put(`http://localhost:3000/api/todos/${id}`, updatedFields);

    setTodos(
      todos.map((todo) =>
        todo?._id === id ? res?.data : todo
      )
    );

    setError("");
  } catch (err) {
    setError("Failed to update todo.");
    console.error(err?.message);
  }
};

  const deleteTodo = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/todos/${id}`);
      setTodos(todos.filter((todo) => todo?._id !== id));
      setError("");
    } catch (err) {
      setError("Failed to delete todo.");
      console.error(err?.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">📋 Todo List</h1>

      {error && (
        <div className="bg-red-500 text-white p-3 rounded mb-4 text-center">
          {error}
        </div>
      )}

      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} updateTodo={updateTodo} deleteTodo={deleteTodo} />
    </div>
  );
}

