import { useState, useMemo } from 'react';
import { useDebounce } from './useDebounce';
import { sortTodosAlphabetically, searchTodos } from '../utils';

export const useTodosFilter = (todos) => {
    const [sortOrder, setSortOrder] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    const debouncedSearchQuery = useDebounce(searchQuery, 300);

    const filteredAndSortedTodos = useMemo(() => {
        let result = searchTodos(todos, debouncedSearchQuery);

        if (sortOrder) {
            result = sortTodosAlphabetically(result);
        }
        return result;
    }, [todos, debouncedSearchQuery, sortOrder]);

    const toggleSortOrder = () => {
        setSortOrder(!sortOrder);
    };

    return {
        filteredAndSortedTodos,
        sortOrder,
        searchQuery,
        setSearchQuery,
        toggleSortOrder,
    };
};
