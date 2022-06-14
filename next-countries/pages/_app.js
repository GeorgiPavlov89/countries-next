import '../styles/globals.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme, CountriesContext } from '../store';

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState('light')
  const [countries, setCountries] = useState([])
  return (

    <CountriesContext.Provider
    value={{ 
      theme,
      setTheme,
      countries,
      setCountries
    }}
    >
<ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
<Component {...pageProps} />
    
    </ThemeProvider>
    </CountriesContext.Provider>
  ) 
}

export default MyApp
