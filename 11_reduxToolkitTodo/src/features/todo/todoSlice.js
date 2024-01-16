import { createSlice, nanoid } from '@reduxjs/toolkit';
// nanoid is used for creating unique IDs.

const initialState = {
    todos : [{id : 1, text : "Hello World"}]
}

// Slice = bigger version of reducer 
// reducer is a functionality.
// reducer needs to be exported twice.
export const todoSlice = createSlice({
    name : 'todo',          // the name will be shown in the redux toolkit of the chrome extension.

    initialState, 

    reducers : {
        // properties and functions are there in this.
        addTodo : (state, action) => {
            const todo = {
                id : nanoid(), 
                text : action.payload
                // payload is an object in itself.
            }
            state.todos.push(todo)          // here, the todo is pushed into the state.
        },
        // state provides the current scenario of the initial state.
        // updates state value in the store.
        // state is preserved here in redux - toolkit.
        // and actions give the values such as id when a method is being called. 

        removeTodo : (state, action) => {
            state.todos = state.todos.filter( (todo) => todo.id !== action.payload )
            // overwriting the state
        },
    }
})

export const {addTodo, removeTodo} = todoSlice.actions

export default todoSlice.reducer