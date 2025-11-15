import { useMemo } from 'react';
import {
    useRequestAddTodo,
    useRequestDeleteTodo,
    useRequestUpdateTodo,
    useRequestGetTodos,
    useTodosFilter,
} from '../../hooks';
import styles from './TodosContainer.module.css';
import { TodosList } from '../TodosList/TodosList';
import { AddTodoButton } from '../AddTodoButton/AddTodoButton';
import { SortTodoButton } from '../SortTodoButton/SortTodoButton';
import { SearchTodos } from '../SearchTodos/SearchTodos';
import { TodosContext } from '../../context';

export const TodosContainer = () => {
    const { todos, isLoading, setTodos } = useRequestGetTodos();
    const { isCreating, requestAddTodo } = useRequestAddTodo(setTodos);
    const {
        isUpdating,
        requestUpdateTodo,
        startEditing,
        cancelEditing,
        editingId,
        editingTitle,
        handleTitleChange,
    } = useRequestUpdateTodo(setTodos);
    const { isDeleting, requestDeleteTodo } = useRequestDeleteTodo(setTodos);
    const { filteredAndSortedTodos, sortOrder, searchQuery, setSearchQuery, toggleSortOrder } =
        useTodosFilter(todos);

    const contextValue = useMemo(
        () => ({
            editingTitle,
            isUpdating,
            isDeleting,
            handleTitleChange,
            cancelEditing,
            startEditing,
            requestDeleteTodo,
        }),
        [
            editingTitle,
            isUpdating,
            isDeleting,
            handleTitleChange,
            cancelEditing,
            startEditing,
            requestDeleteTodo,
        ]
    );

    return (
        <div className={styles.todos}>
            <div className={styles.todosFilters}>
                <SortTodoButton sortOrder={sortOrder} toggleSortOrder={toggleSortOrder} />
                <SearchTodos searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            </div>
            <TodosContext value={contextValue}>
                <TodosList
                    todos={filteredAndSortedTodos}
                    isLoading={isLoading}
                    editingId={editingId}
                    onSaveTodo={requestUpdateTodo}
                />
            </TodosContext>
            <AddTodoButton isCreating={isCreating} onAddTodo={requestAddTodo} />
        </div>
    );
};
