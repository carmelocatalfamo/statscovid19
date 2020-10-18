import { IncomingMessage, ServerResponse } from 'http'

import { Theme } from '../models/Theme'

export const getInitialTheme = async (req?: IncomingMessage, res?: ServerResponse): Promise<Theme> => {
  const isServer = !!req
  const defaultTheme = Theme.light

  // If server side
  if (isServer) {
    const Cookies = (await import('cookies')).default

    const cookie = req.headers.cookie?.split(';').find((c) => c.trim().startsWith('theme='))
    const value = cookie ? cookie.split('=')[1] : undefined

    if (cookie && value in Theme) return Theme[value]

    const cookies = new Cookies(req, res)

    cookies.set('theme', defaultTheme, {
      httpOnly: false
    })

    return defaultTheme

  // Client side
  } else {
    const Cookies = (await import('js-cookie')).default
    const value = Cookies.get('theme')

    if (value && value in Theme) {
      return Theme[value]
    }

    Cookies.set('theme', defaultTheme)
    return defaultTheme
  }
}

export const setTheme = async (theme: Theme): Promise<void> => {
  const Cookies = (await import('js-cookie')).default
  Cookies.set('theme', theme)
}
