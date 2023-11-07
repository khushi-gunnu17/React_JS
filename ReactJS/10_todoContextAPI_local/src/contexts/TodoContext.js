import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos : [                   // properties 
        {           
            id : 1,
            todo : "Todo Message",
            completed : false,
        }
    ],

    addTodo : (todo) => {},
    updateTodo : (id, todo) => {},
    deleteTodo : (id) => {},
    toggleComplete : (id) => {}
})
// 

export const useTodo = () => {              // custom hook
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider