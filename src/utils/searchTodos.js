export const searchTodos = (todos, phrase) => {
    return todos.filter((todo) => todo.title.toLowerCase().includes(phrase.toLowerCase()));
};
