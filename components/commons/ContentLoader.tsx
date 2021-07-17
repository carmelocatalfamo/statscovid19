import React from 'react'
import { useTheme } from 'styled-components'
import ReactContentLoader from 'react-content-loader'

type Props = {
  backgroundColor?: string
  children?: React.ReactNode
  foregroundColor?: string
  height?: number | string
  uniqueKey?: string
  width?: number | string
}

const ContentLoader = ({
  backgroundColor,
  children,
  foregroundColor,
  height = '100%',
  uniqueKey,
  width = '100%'
}: Props) => {
  const { loader } = useTheme()

  return (
    <ReactContentLoader
      speed={2}
      width={width}
      height={height}
      backgroundColor={backgroundColor || loader.background}
      foregroundColor={foregroundColor || loader.foreground}
      uniqueKey={uniqueKey}
    >
      {children}
    </ReactContentLoader>
  )
}

export { ContentLoader }
