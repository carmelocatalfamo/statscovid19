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
  highlighted?: boolean
  Icon: IconType
  isLoading?: boolean
  title: string
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
  const { colors } = useTheme()
  const cardElement = useRef<HTMLDivElement>()
  const [vertical, setVertical] = useState(false)
  const iconColor = highlighted || !color ? '#fff' : color
  const changeTextColor = change <= 0 ? colors.success : colors.danger

  useEffect(() => {
    if (cardElement.current) {
      const resizeListener = () => {
        const { clientWidth } = cardElement.current
        setVertical(clientWidth < 230)
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
      const foregroundColor = highlighted ? colors.primary : undefined

      return (
        <ContentLoader
          backgroundColor={backgroundColor}
          foregroundColor={foregroundColor}
          height={55}
          uniqueKey={uniqueKey}
        >
          <rect
            height='40%'
            rx='3'
            ry='3'
            width='50%'
            x={vertical ? '25%' : '0%'}
            y='15%'
          />
          <rect
            height='30%'
            rx='3'
            ry='3'
            width='70%'
            x={vertical ? '15%' : '0%'}
            y='65%'
          />
        </ContentLoader>
      )
    }

    return (
      <>
        <Header>
          <Title inverse={highlighted}>{title}</Title>
          {isNumber(change) && (
            <Change style={{ color: changeTextColor }}>
              {`${change < 0 ? '-' : '+'}${toLocaleString(Math.abs(change))}`}
            </Change>
          )}
        </Header>
        <Description>{description}</Description>
      </>
    )
  }

  return (
    <Container ref={cardElement} verticalOrientation={vertical}>
      <IconContent>
        <IconBackground style={{ backgroundColor: iconColor }} />
        <Icon size={26} color={iconColor} />
      </IconContent>
      <CardContent>{renderCardContent()}</CardContent>
    </Container>
  )
}

const Container = styled.div<{ verticalOrientation: boolean }>`
  align-items: center;
  display: flex;
  flex-direction: ${props => (props.verticalOrientation ? 'column' : 'row')};
  flex-wrap: wrap;
  text-align: ${props => (props.verticalOrientation ? 'center' : 'left')};

  & > div {
    margin-right: ${props => (props.verticalOrientation ? '0px' : '22px')};
  }
`

const IconContent = styled.div`
  align-items: center;
  display: flex;
  height: 60px;
  justify-content: center;
  position: relative;
  width: 60px;
`

const IconBackground = styled.div`
  border-radius: 30px;
  height: 100%;
  left: 0px;
  opacity: 0.2;
  position: absolute;
  top: 0px;
  width: 100%;
`

const Header = styled.div`
  align-items: flex-end;
  display: inline-flex;
`

const Title = styled(Text)<{ inverse?: boolean }>`
  color: ${props => (props.inverse ? '#FFFFFF' : props.theme.colors.title)};
  font-size: 22px;
  font-weight: bold;
`

const Change = styled(Text)`
  font-size: 12px;
  font-weight: bold;
  margin-bottom: 4px;
  margin-left: 10px;
`

const Description = styled(Text)`
  font-size: 14px;
`

const CardContent = styled.div`
  flex: 1;
`
