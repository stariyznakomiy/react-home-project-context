import { useState } from 'react';
import { TODOS_URL, METHODS } from '../constants';

export const useRequestAddTodo = (setTodos) => {
    const [isCreating, setIsCreating] = useState(false);

    const requestAddTodo = () => {
        setIsCreating(true);

        fetch(TODOS_URL, {
            method: METHODS.ADD,
            headers: { 'Content-type': 'application/json;charset=utf-8' },
            body: JSON.stringify({
                title: 'Новое задание',
            }),
        })
            .then((response) => response.json())
            .then((newTodo) => {
                setTodos((prevTodos) => [...prevTodos, newTodo]);
            })
            .finally(() => setIsCreating(false));
    };

    return {
        isCreating,
        requestAddTodo,
    };
};
