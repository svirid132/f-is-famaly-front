import './../styles/globals.css'
import {ThemeProvider} from 'styled-components';

const theme = {
  navigationHeight: "60px"
}

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
