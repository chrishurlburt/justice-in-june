import { ReactElement } from 'react'

import Document, { Head, Main, NextScript } from 'next/document'

import { ServerStyleSheet } from 'styled-components'

export default class extends Document<{ styleTags: ReactElement[] }> {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />))
    const styleTags = sheet.getStyleElement()

    return { ...page, styleTags }
  }

  render() {
    return (
      <html lang="en">
        <Head>
          {this.props.styleTags}
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta property="og:url" content="https://justiceinjune.org" />
          <meta property="og:title" content="Justice in June" />
          <meta property="og:description" content="Justice in June cultivates a community rooted in truth, inspires action and is committed to awareness." />
          <meta property="og:image" content="/social_image.jpg" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Justice in June" />
          <meta name="twitter:description" content="Justice in June cultivates a community rooted in truth, inspires action and is committed to awareness." />
          <meta name="twitter:image" content="/social_image.jpg" />
          <link rel="icon" href="/favicon.png" />
          <link href="https://fonts.googleapis.com/css2?family=Libre+Caslon+Text:wght@400;700&family=Work+Sans:wght@400;600&display=swap" rel="stylesheet"></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
