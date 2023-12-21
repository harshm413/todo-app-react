import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

export function Todo({ todo, toggleComplete, editTodo, deleteTodo }) {
    return (
        <div className="Todo">
            <p
                className={`${todo.completed ? 'completed' : 'incompleted'}`}
                onClick={() => toggleComplete(todo.id)}
            >
                {todo.task}
            </p>
            <div>
                <FontAwesomeIcon
                    className="edit-icon"
                    icon={faPenToSquare}
                    onClick={() => editTodo(todo.id)}
                />
                <FontAwesomeIcon
                    className="delete-icon"
                    icon={faTrash}
                    onClick={() => deleteTodo(todo.id)}
                />
            </div>
        </div>
    );
}
