import React from 'react'
import Head from 'next/head'
import { AppContext } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { useSelector } from 'react-redux'

import 'react-dates/lib/css/_datepicker.css'

import { getInitialTheme } from '../utils/manageTheme'
import { GlobalStyle } from '../styles/GlobalStyle'
import { State } from '../reducers'
import { theme as darkTheme } from '../styles/themes/dark'
import { theme as lightTheme } from '../styles/themes/light'
import { wrapper } from '../utils/store'
import { changeTheme } from '../actions'
import { ReactDatesStyle } from '../styles/ReactDatesStyle'

function MyApp ({ Component, pageProps }) {
  const isDark = useSelector<State, boolean>(state => state.theme === 'dark')
  const theme = isDark ? darkTheme : lightTheme
  const title = 'Coronavirus: numeri e grafici sul COVID-19 in Italia'
  const description = 'Numeri, grafici e statistiche dei dati ufficiali forniti dalla Protezione Civile sul COVID-19 in Italia prima e dopo la fase 2.'

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta key='og:title' property="og:title" content={title} />
        <meta key='og:description' property="og:description" content={description} />
        <meta key='og:site_name' property="og:site_name" content={title} />
        <meta property="fb:app_id" content="2677310915825589" />
        <meta property="og:image" content="https://www.statscovid19.it/share.png" />
        <meta property="og:url" content="https://www.statscovid19.it/" />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="statscovid19_share_image" />
        <meta name="twitter:image:alt" content="statscovid19" />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <GlobalStyle />
      <ReactDatesStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

MyApp.getInitialProps = async ({ Component, ctx }: AppContext) => {
  const theme = await getInitialTheme(ctx.req, ctx.res)
  ctx.store.dispatch(changeTheme(theme))

  const pageLevelInitialProps = Component.getInitialProps
    ? await Component.getInitialProps(ctx)
    : {}

  return {
    pageProps: { ...pageLevelInitialProps }
  }
}

export default wrapper.withRedux(MyApp)
