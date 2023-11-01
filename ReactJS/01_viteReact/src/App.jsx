import Normal from './Index.jsx'


// jsx 
function App() {

  const username = "khushi Sharma";

  return (
    // <h1>ReactJs with vite | Khushi Sharma</h1>
    
    <>   {/* This is called a fragment , bcoz only one element can be exported */}  

    <Normal />
    <h3>hello guys ! {username} here </h3>     
     {/* {} = evaluated expression , final outcome only here */}

    <p>This is a Paragraph</p>   {/* */ }

    </>
  )
}

export default App