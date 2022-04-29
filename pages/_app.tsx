import React, { useEffect } from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import Head from 'next/head'
import nookies from 'nookies'
import { hotjar } from 'react-hotjar'
import { useRouter } from 'next/router'

import { changeTheme } from '@/store/slices/ui'
import { CookieBanner } from '@/components/CookieBanner'
import { GlobalStyle } from '@/styles/GlobalStyle'
import { Theme } from '@/models/Theme'
import { useAppSelector } from '@/hooks/useAppSelector'
import { wrapper } from '@/store'
import themes from '@/styles/themes'

const {
  NODE_ENV,
  NEXT_PUBLIC_GOOGLE_ANALYTICS_ID,
  NEXT_PUBLIC_HOTJAR_ID,
  NEXT_PUBLIC_HOTJAR_SNIPPET_VERSION
} = process.env

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter()
  const theme = useAppSelector(state => state.ui.theme)
  const title = 'Statistiche COVID-19 Italia'
  const description =
    'Numeri, grafici e statistiche dei dati ufficiali forniti dalla Protezione Civile sul COVID-19 in Italia prima e dopo la fase 2.'

  // GA page events
  useEffect(() => {
    if (NODE_ENV === 'production') {
      const handleRouteChange = (url: string) => {
        window.gtag('config', NEXT_PUBLIC_GOOGLE_ANALYTICS_ID, {
          page_path: url
        })
      }

      router.events.on('routeChangeComplete', handleRouteChange)

      return () => {
        router.events.off('routeChangeComplete', handleRouteChange)
      }
    }
  }, [router.events])

  // Hotjar
  useEffect(() => {
    if (NODE_ENV === 'production') {
      hotjar.initialize(
        Number(NEXT_PUBLIC_HOTJAR_ID),
        Number(NEXT_PUBLIC_HOTJAR_SNIPPET_VERSION)
      )
    }
  }, [])

  return (
    <ThemeProvider theme={themes[theme]}>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta key='og:title' property='og:title' content={title} />
        <meta
          key='og:description'
          property='og:description'
          content={description}
        />
        <meta key='og:site_name' property='og:site_name' content={title} />
        <meta property='fb:app_id' content='2677310915825589' />
        <meta
          property='og:image'
          content='https://www.statscovid19.it/share.png'
        />
        <meta property='og:url' content='https://www.statscovid19.it/' />
        <meta property='og:type' content='article' />
        <meta name='twitter:card' content='statscovid19_share_image' />
        <meta name='twitter:image:alt' content='statscovid19' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <GlobalStyle />
      <CookieBanner />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

MyApp.getInitialProps = wrapper.getInitialAppProps(
  store =>
    async ({ Component, ctx }) => {
      const pageLevelInitialProps = Component.getInitialProps
        ? await Component.getInitialProps(ctx)
        : {}

      const isServer = !!ctx.req

      if (isServer) {
        const cookies = nookies.get(ctx)

        if (cookies.theme) {
          const isDark = cookies.theme === Theme.dark
          store.dispatch(changeTheme(isDark ? Theme.dark : Theme.light))
        }
      }

      return {
        pageProps: { ...pageLevelInitialProps }
      }
    }
)

export default wrapper.withRedux(MyApp)
