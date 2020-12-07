import '../styles/font.setting.css'
import { AppProps } from 'next/app'
import React, { createContext, useReducer, Dispatch } from 'react'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme, ThemeType } from '../styles'
import 'highlight.js/styles/nord.css'

type Action = { type: 'LIGHT' } | { type: 'DARK' }

const switchThemeReducer = (currentTheme: ThemeType, action: Action) => {
  switch (action.type) {
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
    dispatch: Dispatch<Action>
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
