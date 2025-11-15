import { useContext } from 'react';
import { TodosContext } from '../../context';
import styles from './TodoItem.module.css';

export const TodoItem = ({ todo, index, isEditing, onSave }) => {
    const {
        editingTitle,
        isUpdating,
        isDeleting,
        handleTitleChange,
        cancelEditing,
        startEditing,
        requestDeleteTodo,
    } = useContext(TodosContext);

    const { id, title } = todo;

    return (
        <li className={styles.todoItem}>
            {isEditing ? (
                <>
                    <input
                        type="text"
                        value={editingTitle}
                        onChange={(e) => handleTitleChange(e.target.value)}
                        className={styles.input}
                        disabled={isUpdating}
                    />
                    <div className={styles.actions}>
                        <button
                            type="button"
                            className={styles.saveBtn}
                            disabled={isUpdating}
                            onClick={onSave}
                        >
                            ОК
                        </button>
                        <button
                            type="button"
                            className={styles.cancelBtn}
                            disabled={isUpdating}
                            onClick={cancelEditing}
                        >
                            Отмена
                        </button>
                    </div>
                </>
            ) : (
                <>
                    <div className={styles.title}>
                        {index + 1}. {title}
                    </div>
                    <div className={styles.actions}>
                        <button
                            type="button"
                            className={styles.editBtn}
                            disabled={isUpdating || isDeleting}
                            onClick={() => startEditing(id, title)}
                        >
                            Редактировать
                        </button>
                        <button
                            type="button"
                            className={styles.deleteBtn}
                            disabled={isUpdating || isDeleting}
                            onClick={() => requestDeleteTodo(id)}
                        >
                            Удалить
                        </button>
                    </div>
                </>
            )}
        </li>
    );
};
