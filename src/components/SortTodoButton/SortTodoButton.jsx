import styles from './SortTodoButton.module.css';

export const SortTodoButton = ({ sortOrder, toggleSortOrder }) => {
    return (
        <button type="button" className={styles.sortButton} onClick={toggleSortOrder}>
            {!sortOrder ? 'Сортировать А-Я' : 'Вернуть порядок'}
        </button>
    );
};
