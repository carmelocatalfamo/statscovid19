import { gtag } from '@/declarations/gtag'

declare global {
  interface Window {
    gtag: gtag
  }
}

export {}
