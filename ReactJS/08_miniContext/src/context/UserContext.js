import React from 'react'
// By wrapping any data with the context, it becomes a provider.
// Global User Context = the data will get access to this global variable.

const UserContext = React.createContext()

export default UserContext;