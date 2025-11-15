import { TodoItem } from '../TodoItem/TodoItem';
import styles from './TodosList.module.css';

export const TodosList = ({
    todos,
    isLoading,
    editingId,
    editingTitle,
    isUpdating,
    isDeleting,
    onEditTitleChange,
    onSaveTodo,
    onCancelEdit,
    onStartEdit,
    onDeleteTodo,
}) => {
    if (isLoading) {
        return <div className={styles.loader}></div>;
    }

    return (
        <div className={styles.todoList}>
            {todos.map((todo, index) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    index={index}
                    isEditing={editingId === todo.id}
                    editingTitle={editingTitle}
                    isUpdating={isUpdating}
                    isDeleting={isDeleting}
                    onEditTitleChange={onEditTitleChange}
                    onSave={() => onSaveTodo(todo.id)}
                    onCancel={onCancelEdit}
                    onStartEdit={onStartEdit}
                    onDelete={onDeleteTodo}
                />
            ))}
        </div>
    );
};
