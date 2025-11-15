import styles from './TodoItem.module.css';

export const TodoItem = ({
    todo,
    index,
    isEditing,
    editingTitle,
    isUpdating,
    isDeleting,
    onEditTitleChange,
    onSave,
    onCancel,
    onStartEdit,
    onDelete,
}) => {
    const { id, title } = todo;

    return (
        <div className={styles.todoItem}>
            {isEditing ? (
                <>
                    <input
                        type="text"
                        value={editingTitle}
                        onChange={(e) => onEditTitleChange(e.target.value)}
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
                            onClick={onCancel}
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
                            onClick={() => onStartEdit(id, title)}
                        >
                            Редактировать
                        </button>
                        <button
                            type="button"
                            className={styles.deleteBtn}
                            disabled={isUpdating || isDeleting}
                            onClick={() => onDelete(id)}
                        >
                            Удалить
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};
