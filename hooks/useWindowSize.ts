import { useState, useEffect } from 'react'

import { breakpoints } from '@/styles/breakpoints'

export const useWindowSize = () => {
  const isClient = typeof window === 'object'

  const getSize = () => {
    const width = isClient ? window.innerWidth : undefined

    return {
      width,
      height: isClient ? window.innerHeight : undefined,
      isSmaller: width <= breakpoints.small,
      isSmall: width > breakpoints.small && width <= breakpoints.medium,
      isMedium: width > breakpoints.medium && width <= breakpoints.large,
      isLarge: width > breakpoints.large
    }
  }

  const [windowSize, setWindowSize] = useState(getSize)

  useEffect(() => {
    if (!isClient) {
      return
    }

    const handleResize = () => {
      setWindowSize(getSize())
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return windowSize
}
