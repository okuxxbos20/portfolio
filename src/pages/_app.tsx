import { AppProps } from 'next/app'
import React, { createContext, useReducer, Dispatch } from 'react'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme, ThemeType } from '../styles'

const switchThemeReducer = (currentTheme: ThemeType, action: 'LIGHT' | 'DARK') => {
  switch (action) {
    case 'LIGHT':
      return lightTheme
    case 'DARK':
      return darkTheme
    default:
      return currentTheme
  }
}

export const ThemeContext = createContext(
  {} as {
    currentTheme: ThemeType
    dispatch: Dispatch<'LIGHT' | 'DARK'>
  }
)

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  const [currentTheme, dispatch] = useReducer(switchThemeReducer, darkTheme)
  return (
    <>
      <ThemeProvider theme={currentTheme}>
        <ThemeContext.Provider value={{ currentTheme, dispatch }}>
          <Component {...pageProps} />
        </ThemeContext.Provider>
      </ThemeProvider>
    </>
  )
}

export default App
