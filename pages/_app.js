import "@/styles/globals.css";
import GlobalStyle from '../styles/GlobalStyles'
import { SessionProvider } from 'next-auth/react'
import { ThemeProvider } from 'styled-components'

const theme = {
  colors: {
    primary: '#FF1B6B',
    secondary: '#45CAFF',
  },
}

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </SessionProvider>
  );
}

export default MyApp;
