import React from "react";
import TodoItem from "./TodoItem";

export default function TodoList({ todos, updateTodo, deleteTodo }) {
  return (
    <div className="space-y-4">
      {todos.length === 0 && <p className="text-center text-gray-400">No todos yet</p>}
      {todos.map((todo) => (
        <TodoItem
          key={todo._id}
          todo={todo}
          updateTodo={updateTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </div>
  );
}
