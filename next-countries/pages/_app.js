import '../styles/globals.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import { useState } from 'react'

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState('light')
  return <Component {...pageProps} />
}

export default MyApp
