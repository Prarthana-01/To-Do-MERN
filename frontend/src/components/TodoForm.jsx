import React, { useState } from "react";

export default function TodoForm({ addTodo }) {
  const [formData, setFormData] = useState({ title: "", description: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title.trim()) return;
    addTodo(formData);
    setFormData({ title: "", description: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 space-y-4">
      <input
        type="text"
        placeholder="Title"
        className="w-full p-2 rounded bg-gray-800 text-white"
        value={formData.title}
        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
      />
      <input
        type="text"
        placeholder="Description (optional)"
        className="w-full p-2 rounded bg-gray-800 text-white"
        value={formData.description}
        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
      />
      <button type="submit" className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600">
        Add Todo
      </button>
    </form>
  );
}
