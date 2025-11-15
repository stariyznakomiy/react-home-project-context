import { TodoItem } from '../TodoItem/TodoItem';
import styles from './TodosList.module.css';

export const TodosList = ({ todos, isLoading, editingId, onSaveTodo }) => {
    if (isLoading) {
        return <div className={styles.loader}></div>;
    }

    return (
        <ul className={styles.todoList}>
            {todos.map((todo, index) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    index={index}
                    isEditing={editingId === todo.id}
                    onSave={() => onSaveTodo(todo.id)}
                />
            ))}
        </ul>
    );
};
