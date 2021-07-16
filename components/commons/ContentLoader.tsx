import React from 'react'
import { useTheme } from 'styled-components'
import ReactContentLoader from 'react-content-loader'

type Props = {
  children?: React.ReactNode
  height?: number | string
  width?: number | string
}

const ContentLoader = ({
  children,
  height = '100%',
  width = '100%'
}: Props) => {
  const { loader } = useTheme()

  return (
    <ReactContentLoader
      speed={2}
      width={width}
      height={height}
      backgroundColor={loader.background}
      foregroundColor={loader.foreground}
    >
      {children}
    </ReactContentLoader>
  )
}

export { ContentLoader }
