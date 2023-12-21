import { useState } from 'react';

export function EditTodoForm({ editTodo, todo }) {
    const [value, setValue] = useState(todo.task);

    function handleSubmit(e) {
        e.preventDefault();
        editTodo(value, todo.id);
    }

    return (
        <form onSubmit={handleSubmit} className="TodoForm">
            <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="todo-input"
                placeholder="Update task"
            />
            <button type="submit" className="todo-btn">
                Add Task
            </button>
        </form>
    );
}
