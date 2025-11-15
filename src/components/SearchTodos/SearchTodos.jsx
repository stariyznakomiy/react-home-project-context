import styles from './SearchTodos.module.css';

export const SearchTodos = ({ searchQuery, setSearchQuery }) => {
    return (
        <input
            type="text"
            placeholder="Поиск"
            value={searchQuery}
            className={styles.searchInput}
            onChange={(event) => setSearchQuery(event.target.value)}
        />
    );
};
