import {
  ThemeProvider, CSSReset, ColorModeProvider,
  useColorMode
} from '@chakra-ui/core'
import Head from 'next/head'
import theme from '../styles/theme'
import { Global, css } from '@emotion/core'

const GlobalStyle = ({ children }) => {
  const { colorMode } = useColorMode()

  return (
    <>
      <CSSReset />
      <Global
        styles={css`
          html {
            min-width: 360px;
            scroll-behavior: smooth;
            overflow-x: hidden;
          }
          #__next {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
            background: ${colorMode === 'light' ? 'white' : '#171923'};
          }
        `}
      />
      {children}
    </>
  )
}

const MyApp = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <ColorModeProvider value='light'>
        <GlobalStyle>
          <Head>
            <meta content='IE=edge' httpEquiv='X-UA-Compatible' />
            <meta
              content='width=device-width, initial-scale=1'
              name='viewport'
            />
          </Head>
          <Component {...pageProps} />
        </GlobalStyle>
      </ColorModeProvider>
    </ThemeProvider>
  )
}

export default MyApp
