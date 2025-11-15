import styles from './AddTodoButton.module.css';

export const AddTodoButton = ({ isCreating, onAddTodo }) => {
    return (
        <button
            type="button"
            className={styles.addButton}
            disabled={isCreating}
            onClick={onAddTodo}
        >
            {isCreating ? 'Добавление...' : 'Добавить задачу'}
        </button>
    );
};
