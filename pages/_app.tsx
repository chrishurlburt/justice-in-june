import { createGlobalStyle } from 'styled-components'
import Head from 'next/head'

import { Layout, Header } from '../components'

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
      <GlobalStyle />
    </>
  )
}

export default App
