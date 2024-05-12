import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: 'To do',
            completedStatus: false
        }
    ],
    addTodo: (todo) => {},
    editTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    updateStatus: (id,status) => {}
});

export const useTodo = () => {
    return useContext(TodoContext);
}

export const TodoProvider = TodoContext.Provider;