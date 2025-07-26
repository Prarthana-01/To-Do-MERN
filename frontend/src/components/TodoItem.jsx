import React, { useState } from "react";

export default function TodoItem({ todo, updateTodo, deleteTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({
    title: todo?.title,
    description: todo?.description,
  });

  const toggleCompleted = () => {
    updateTodo(todo?._id, {
      ...todo,
      completed: !todo?.completed,
    });
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    updateTodo(todo?._id, {
      ...todo,
      title: editData.title,
      description: editData.description,
    });
    setIsEditing(false);
  };

  return (
    <div className="bg-gray-800 p-4 rounded flex flex-col sm:flex-row sm:items-center justify-between">
      <div className="w-full">
        {isEditing ? (
          <form onSubmit={handleEditSubmit} className="space-y-2">
            <input
              type="text"
              className="w-full p-2 rounded bg-gray-700 text-white"
              value={editData.title}
              onChange={(e) =>
                setEditData({ ...editData, title: e.target.value })
              }
              required
            />
            <input
              type="text"
              className="w-full p-2 rounded bg-gray-700 text-white"
              value={editData.description}
              onChange={(e) =>
                setEditData({ ...editData, description: e.target.value })
              }
            />
            <div className="flex gap-2">
              <button
                type="submit"
                className="bg-green-500 px-3 py-1 rounded text-white"
              >
                Save
              </button>
              <button
                type="button"
                className="bg-gray-500 px-3 py-1 rounded text-white"
                onClick={() => setIsEditing(false)}
              >
                Cancel
              </button>
            </div>
          </form>
        ) : (
          <div>
            <h3
              className={`text-lg font-semibold ${
                todo?.completed ? "line-through text-gray-400" : ""
              }`}
            >
              {todo?.title}
            </h3>
            <p className="text-sm text-gray-400">{todo?.description}</p>
          </div>
        )}
      </div>

      {!isEditing && (
        <div className="mt-4 sm:mt-0 sm:ml-4 flex flex-wrap gap-2">
          <button
            onClick={toggleCompleted}
            className={`px-3 py-1 rounded ${
              todo?.completed ? "bg-yellow-500" : "bg-green-500"
            }`}
          >
            {todo?.completed ? "Undo" : "Done"}
          </button>
          <button
            onClick={() => setIsEditing(true)}
            className="bg-blue-500 px-3 py-1 rounded"
          >
            Edit
          </button>
          <button
            onClick={() => deleteTodo(todo?._id)}
            className="bg-red-500 px-3 py-1 rounded"
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
}
