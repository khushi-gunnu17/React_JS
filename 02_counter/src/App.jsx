import { useState } from 'react'    // Hook from here
// import React, {useState, useEffect} from 'react'  
import './App.css'
// Here, Babel is automatically injecting React 

function App() {

  // in array , const datatype doesn't mean that the data cannot be changed
  // for changing the state 
  let [counter, setCounter] = useState(15)      // anything in the parameter, here default value
  // [value, function]
  // Two things we get from useState in the form of array 

  // let counter = 15

  const addValue = () => {
    // console.log("Value Added", Math.random());

    // counter += 1;
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // useState sends the values in batches to the UI, value of counter will only be incremented by 1 because react takes a snapshot of the state and render accordingly.



    setCounter((prevCounter) => {
      if (prevCounter < 20 && prevCounter >= 1) {
          return prevCounter + 1
      } else {
          return prevCounter
      }
  })        // setCounter takes a callback 
    // setCounter(counter => counter + 1);   // same as the above one line 
    // setCounter((prevCounter) => prevCounter + 1);
    // setCounter(prevCounter => prevCounter + 1);
    // Now, here the value gets increased by 3.
    // interview Question
    // prevCounter = last updated state of counter, the name can be anything by the ways

    // console.log("clicked, now the value is : ", counter);

  }

  const removeValue = () => {
    setCounter((prevCounter) => {
      if (prevCounter > 1 && prevCounter <= 20) {
          return prevCounter - 1
      } else {
          return prevCounter
      }
  })
    // console.log("clicked, now the value is : ", counter);
  }

  return (
    <>
      <h1>React project</h1>
      <h2>Counter Value : {counter}</h2>

      <button
      onClick={addValue}>Add Value : {counter}</button>
      <br />
      <button
      onClick={removeValue}>Remove Value : {counter}</button>
      <p>footer : {counter}</p>
    </>
  )
}

export default App


// UI updation is controlled by react


// HW = Make the value to not to be increased above 30 and not let it go down below zero.