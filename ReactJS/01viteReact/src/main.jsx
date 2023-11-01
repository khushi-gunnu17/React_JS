import React from 'react'           // react is the core foundational library.
import ReactDOM from 'react-dom/client'     // ReactDom is the implementation of React on the web 
// import {jsx as _jsx} from "react/jsx-runtime.js"
import App from './App.jsx'

function MyApp() {
  return (
    <div>
      <h1>Custom App ! Khushi</h1>
    </div>
  )
}

// const ReactElement = {                 // This syntax not supported 
//   type : 'a',
//   props : {
//       href : 'https://google.com',
//       target : '_blank'
//   },
//   children : 'Click me to visit google'
// }

const anotherUser = "Lauren Sharma";

const ReactElement = React.createElement(
  'a',
  {href : 'https://google.com', target : '_blank'},
  'Click me to visit goole.',
  anotherUser
)

const anotherElement = (
  <a href='https://google.com' target='_blank'>Visit Google</a>
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    // MyApp()   
    // <MyApp />    
    // <App />
    ReactElement   
    // anotherElement
    // Every react uses a bundler to correct the syntax
  // </React.StrictMode>,
)

// vite is lightweight 
// jsx = JavaScript is mix with Html.


// https://github.com/facebook/react/tree/main    == react library on github 