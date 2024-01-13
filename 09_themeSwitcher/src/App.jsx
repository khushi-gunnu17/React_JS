import { useEffect, useLayoutEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './contexts/theme'
import ThemeButton from './components/ThemeButton'
import Card from './components/Card'

// All this code is running on the client side and not on the server side.

function App() {
  const [themeMode, setThemeMode] = useState("light")

  // The functionality mentioned in the provider automatically gets accessed by the method of the same name.
  const lightTheme = () => {
    setThemeMode("light")
  }

  const darkTheme = () => {
    setThemeMode("dark")
  }

  // actual change in theme 
  useEffect( () => {
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode] )

  return (
    
    <ThemeProvider value={{themeMode, darkTheme, lightTheme}}>   {/* Wrapping  */}
      <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
              <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                  <ThemeButton />
              </div>

              <div className="w-full max-w-sm mx-auto">
                  <Card />
              </div>
          </div>
      </div>
    </ThemeProvider>
  )
}

export default App
