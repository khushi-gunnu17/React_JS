import { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {

  return (
    <>
      <h1>Learn About Redux toolkit</h1>
      <AddTodo />
      <Todos />
    </>
  )
}

export default App


// libraries to be installed --> 
// npm install @reduxjs/toolkit
// npm install react - redux


// Visit websites on React and React redux and redux toolkit