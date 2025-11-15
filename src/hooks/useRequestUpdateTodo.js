import { useState } from 'react';
import { TODOS_URL, METHODS } from '../constants';

export const useRequestUpdateTodo = (setTodos) => {
    const [isUpdating, setIsUpdating] = useState(false);
    const [editingId, setEditingId] = useState(null);
    const [editingTitle, setEditingTitle] = useState('');

    const requestUpdateTodo = (id) => {
        setIsUpdating(true);

        fetch(`${TODOS_URL}/${id}`, {
            method: METHODS.UPDATE,
            headers: { 'Content-type': 'application/json;charset=utf-8' },
            body: JSON.stringify({
                title: editingTitle,
            }),
        })
            .then((response) => response.json())
            .then((updatedTodo) => {
                setEditingId(null);
                setEditingTitle('');
                setTodos((prevTodos) =>
                    prevTodos.map((todo) => (todo.id === updatedTodo.id ? updatedTodo : todo))
                );
            })
            .finally(() => setIsUpdating(false));
    };

    const startEditing = (id, currentTitle) => {
        setEditingId(id);
        setEditingTitle(currentTitle);
    };

    const cancelEditing = () => {
        setEditingId(null);
        setEditingTitle('');
    };

    const handleTitleChange = (newTitle) => {
        setEditingTitle(newTitle);
    };

    return {
        isUpdating,
        requestUpdateTodo,
        startEditing,
        cancelEditing,
        editingId,
        editingTitle,
        handleTitleChange,
    };
};
