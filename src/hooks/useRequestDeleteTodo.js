import { useState } from 'react';
import { TODOS_URL, METHODS } from '../constants';

export const useRequestDeleteTodo = (setTodos) => {
    const [isDeleting, setIsDeleting] = useState(false);

    const requestDeleteTodo = (id) => {
        setIsDeleting(true);

        fetch(`${TODOS_URL}/${id}`, {
            method: METHODS.DELETE,
        })
            .then((response) => response.json())
            .then(() => {
                setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
            })
            .finally(() => setIsDeleting(false));
    };

    return {
        isDeleting,
        requestDeleteTodo,
    };
};
