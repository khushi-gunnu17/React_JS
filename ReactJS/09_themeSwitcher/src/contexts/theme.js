// import React from 'react'
import { createContext, useContext } from 'react';

export const ThemeContext = createContext({
    themeMode : "Light",        // variables
    darkTheme : () => {},       // and method 
    lightTheme : () => {},
})
// Default values can be given here with this syntax. 

export const ThemeProvider = ThemeContext.Provider

export default function useTheme() {            // custom hook 
    return useContext(ThemeContext)
}