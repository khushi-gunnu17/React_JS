import React from 'react'           // react is the core foundational library.
import ReactDOM from 'react-dom/client'     // ReactDom is the implementation of React on the web 
// import {jsx as _jsx} from "react/jsx-runtime.js"   
import App from './App.jsx'

// function MyApp() {
//   return (
//     <div>
//       <h1>Custom App ! Khushi</h1>
//     </div>
//   )
// }

// const ReactElement = {                 // This syntax not supported by createRoot and render
//   type : 'a',
//   props : {
//       href : 'https://google.com',
//       target : '_blank'
//   },
//   children : 'Click me to visit google'
// }

const anotherUser = "Lauren Sharma";

const ReactElement = React.createElement(      // injected by babel // transfiler  
  'a',
  {href : 'https://google.com', target : '_blank'},
  'Click me to visit goole.',
  anotherUser   // evaluated expression
)

// this syntax supported by createRoot
const anotherElement = (
  <a href='https://google.com' target='_blank'>Visit Google</a>
)


// Virtual DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    // MyApp()   
    // <MyApp />       // MyApp()  = not good for readability 
    // <App />        // custom tags
    ReactElement   
    // anotherElement
    // Every react uses a bundler to correct the syntax, here it is babel
  // </React.StrictMode>,
)

// vite is lightweight 
// jsx = JavaScript is mix with Html.


// https://github.com/facebook/react/tree/main    == react library on github 


// babel here converts MyApp into element parsing like done in the reactElement above , because React actually understands that 