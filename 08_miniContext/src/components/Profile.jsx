import React, {useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const {user} = useContext(UserContext)              // asking for the user values

    if (!user) return <div>Please Login !</div>

    return <div>Welcome {user.username} </div>
}

export default Profile