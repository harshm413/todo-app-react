import { useState } from 'react';
import { Todo } from './Todo';
import { TodoForm } from './TodoForm';
import { EditTodoForm } from './EditTodoForm';

export function TodoWrapper() {
    const [todos, setTodos] = useState([]);

    function addTodo(task) {
        setTodos([
            ...todos,
            { id: todos.length + 1, task, completed: false, isEditing: false },
        ]);
    }
    function deleteTodo(id) {
        setTodos(todos.filter((todo) => todo.id != id));
    }
    function toggleComplete(id) {
        setTodos(
            todos.map((todo) =>
                todo.id == id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    }
    function editTodo(id) {
        setTodos(
            todos.map((todo) =>
                todo.id == id ? { ...todo, isEditing: !todo.isEditing } : todo
            )
        );
    }
    function editTask(task, id) {
        setTodos(
            todos.map((todo) =>
                todo.id == id
                    ? { ...todo, task, isEditing: !todo.isEditing }
                    : todo
            )
        );
    }
    function todoRender(todo) {
        if (todo.isEditing) {
            return <EditTodoForm editTodo={editTask} todo={todo} />;
        } else {
            return (
                <Todo
                    key={todo.id}
                    todo={todo}
                    toggleComplete={toggleComplete}
                    editTodo={editTodo}
                    deleteTodo={deleteTodo}
                />
            );
        }
    }

    return (
        <div className="TodoWrapper">
            <h1>Todo React App</h1>
            <TodoForm addTodo={addTodo} />
            {todos.map(todoRender)}
        </div>
    );
}
