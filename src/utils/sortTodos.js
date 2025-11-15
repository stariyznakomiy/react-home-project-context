export const sortTodosAlphabetically = (todos) => {
    return [...todos].sort((a, b) => a.title.localeCompare(b.title, 'ru'));
};
