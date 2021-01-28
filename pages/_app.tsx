import React from 'react'
import Head from 'next/head'
import { AppContext } from 'next/app'
import { ThemeProvider } from 'styled-components'

import { GlobalStyle } from '../styles/GlobalStyle'
import themes from '../styles/themes'

function MyApp ({ Component, pageProps }) {
  const title = 'Statistiche COVID-19 Italia'
  const description = 'Numeri, grafici e statistiche dei dati ufficiali forniti dalla Protezione Civile sul COVID-19 in Italia prima e dopo la fase 2.'

  return (
    <ThemeProvider theme={themes.light}>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta key='og:title' property='og:title' content={title} />
        <meta key='og:description' property='og:description' content={description} />
        <meta key='og:site_name' property='og:site_name' content={title} />
        <meta property='fb:app_id' content='2677310915825589' />
        <meta property='og:image' content='https://www.statscovid19.it/share.png' />
        <meta property='og:url' content='https://www.statscovid19.it/' />
        <meta property='og:type' content='article' />
        <meta name='twitter:card' content='statscovid19_share_image' />
        <meta name='twitter:image:alt' content='statscovid19' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

MyApp.getInitialProps = async ({ Component, ctx }: AppContext) => {
  const pageLevelInitialProps = Component.getInitialProps
    ? await Component.getInitialProps(ctx)
    : {}

  return {
    pageProps: { ...pageLevelInitialProps }
  }
}

export default MyApp
