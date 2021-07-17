import React, { useEffect, useRef, useState } from 'react'
import { IconType } from 'react-icons'
import isNumber from 'lodash/isNumber'
import styled, { useTheme } from 'styled-components'

import { ContentLoader } from '@/components/commons/ContentLoader'
import { Text } from '@/components/commons/Text'
import { toLocaleString } from '@/utils/functions'

type Props = {
  change?: number
  className?: string
  color: string
  description: string
  Icon: IconType
  isLoading?: boolean
  title: string
  highlighted?: boolean
}

export const CounterCard = ({
  change,
  color,
  description,
  highlighted,
  Icon,
  isLoading,
  title
}: Props) => {
  const theme = useTheme()
  const cardElement = useRef<HTMLDivElement>()
  const [vertical, setVertical] = useState(false)
  const iconColor = highlighted || !color ? '#fff' : color

  const styles: Record<string, React.CSSProperties> = {
    container: {
      flexDirection: vertical ? 'column' : 'row',
      textAlign: vertical ? 'center' : 'left'
    },
    iconContent: {
      marginRight: vertical ? '0px' : '22px'
    },
    iconBackground: {
      backgroundColor: iconColor
    },
    change: {
      color: change <= 0 ? theme.colors.success : theme.colors.danger
    }
  }

  useEffect(() => {
    if (cardElement.current) {
      const el = cardElement.current
      const resizeListener = () => {
        const elWidth = el.clientWidth
        setVertical(!!(elWidth < 230))
      }

      resizeListener()
      window.addEventListener('resize', resizeListener)
      return () => window.removeEventListener('resize', resizeListener)
    }
  }, [cardElement.current])

  const renderCardContent = () => {
    if (isLoading) {
      const uniqueKey = highlighted ? 'highlighted_card' : 'card'
      const backgroundColor = highlighted ? '#8E63E3' : undefined
      const foregroundColor = highlighted ? theme.colors.primary : undefined

      return (
        <ContentLoader
          backgroundColor={backgroundColor}
          foregroundColor={foregroundColor}
          height={55}
          uniqueKey={uniqueKey}
        >
          <rect
            x={vertical ? '25%' : '0%'}
            y='15%'
            rx='3'
            ry='3'
            width='50%'
            height='40%'
          />
          <rect
            x={vertical ? '15%' : '0%'}
            y='65%'
            rx='3'
            ry='3'
            width='70%'
            height='30%'
          />
        </ContentLoader>
      )
    }

    return (
      <React.Fragment>
        <Header>
          <Title inverse={highlighted}>{title}</Title>
          {isNumber(change) && (
            <Change style={styles.change}>
              {`${change < 0 ? '-' : '+'}${toLocaleString(Math.abs(change))}`}
            </Change>
          )}
        </Header>
        <Description>{description}</Description>
      </React.Fragment>
    )
  }

  return (
    <Container ref={cardElement} style={styles.container}>
      <IconContent style={styles.iconContent}>
        <IconBackground style={styles.iconBackground} />
        <Icon size={26} color={iconColor} />
      </IconContent>
      <CardContent>{renderCardContent()}</CardContent>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: row;
`

const IconContent = styled.div`
  width: 60px;
  height: 60px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`

const IconBackground = styled.div`
  opacity: 0.2;
  width: 100%;
  height: 100%;
  border-radius: 30px;
  position: absolute;
  top: 0px;
  left: 0px;
`

const Header = styled.div`
  display: inline-flex;
  align-items: flex-end;
`

const Title = styled(Text)<{ inverse?: boolean }>`
  color: ${props => (props.inverse ? '#FFFFFF' : props.theme.colors.title)};
  font-weight: bold;
  font-size: 22px;
`

const Change = styled(Text)`
  font-weight: bold;
  font-size: 12px;
  margin-left: 10px;
  margin-bottom: 4px;
`

const Description = styled(Text)`
  font-size: 14px;
`

const CardContent = styled.div`
  flex: 1;
`
