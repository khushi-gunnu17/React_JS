// How the data is sent

import React, {useState, useContext} from 'react'
import UserContext from '../context/UserContext'

function Login() {
    const [username , setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext)           // setting up the user name 

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username, password})
    }

    return (
        <div>
            <h2>Login</h2>

            <input type='text'
            value={username}
            onChange={(e) => setUsername(e.target.value)} 
            placeholder='username'/>

            {"  "}     {/*  space  */}
            {"  "}      {/*Two spaces won't matter as only one space is considered*/}

            <input type='password' 
            value={password}
            onChange={(e) => setPassword(e.target.value)} 
            placeholder='password'/>
            
            {"  "}

            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Login