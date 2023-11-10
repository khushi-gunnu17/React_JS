import { useState, useEffect } from 'react';
import { TodoProvider } from './contexts';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';

// Context API is directly available in the form of hooks.

function App() {

  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos((prev) =>  [{id : Date.now(), ...todo}, ...prev])          // Brush up js 
  }

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => ( prevTodo.id === id ? todo : prevTodo)))

    // prev.map((eachVal) => {
    //   if( eachVal.id === id ) {
    //     todo
    //   } else {
    //     prevTodo
    //   }
    // })         // above one is a ternary operation 
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id ))
  }

  const toggleComplete = (id) => {
    setTodos((prev) => 
    prev.map((prevTodo) => 
      prevTodo.id === id ? {...prevTodo, completed : !prevTodo.completed} : prevTodo))     // Overwriting method in the true portion of thr ternary operator.
  }

  // Local Storage of Browser and not of react and js 
  // all the values are in the form of a string and not object, so we need to convert it into the json format.

  // Functionalities 
  // It is necessary to do get first 
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))

    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])

  useEffect( () => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos] )


  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
      <div className='bg-[#172842] min-h-screen py-8'>
          <div className='w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white'>
              <h1 className='text-2xl font-bold text-center mb-8 mt-2'>Manage Your Todos</h1>

              <div className='mb-4'>
                <TodoForm />
              </div>

              <div className='flex flex-wrap gap-y-3'>
                {todos.map((todo) => (
                  <div key={todo.id}
                    className='w-full'
                  >
                    <TodoItem todo={todo} />
                  </div>
                ))}
              </div>
          </div>
      </div>
    </TodoProvider>
  )
}

export default App
