import { AppProps } from 'next/app'
import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from '../styles'

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  const [currentTheme] = useState<typeof lightTheme | typeof darkTheme>(lightTheme)
  return (
    <>
      <ThemeProvider theme={currentTheme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default App
