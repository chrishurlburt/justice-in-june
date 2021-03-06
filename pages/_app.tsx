import { createGlobalStyle } from 'styled-components'
import Head from 'next/head'
import ReactGA from 'react-ga'

import { Layout, Header, Footer } from '../components'

ReactGA.initialize('UA-170097702-1')

if (typeof window !== 'undefined') {
  ReactGA.set({ page: window.location.pathname })
  ReactGA.pageview(window.location.pathname)
}

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body, html {
    margin: 0;
    padding: 0;
    font-size: 18px;
    font-family: 'Work Sans', sans-serif;
    background-color: #f4eee9;
    color: #172435;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Libre Caslon Text', serif;
  }

  a {
    transition: color .2s ease-in-out;
    color: #172435;
    &:visited {
      color: #172435;
    }
    &:hover {
      color: #d8896a;
    }
  }
`

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Justice in June</title>
      </Head>
      <Header />
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Footer />
      <GlobalStyle />
    </>
  )
}

export default App
