import { useEffect, useState } from 'react';
import { TODOS_URL } from '../constants/todosUrl';

export const useRequestGetTodos = () => {
    const [todos, setTodos] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);

        fetch(TODOS_URL)
            .then((response) => response.json())
            .then((loadedTodos) => {
                setTodos(loadedTodos);
            })
            .finally(() => setIsLoading(false));
    }, []);

    return {
        isLoading,
        setTodos,
        todos,
    };
};
