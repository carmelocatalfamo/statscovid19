import React, { FC, useEffect, useRef, useState } from 'react'
import styled, { useTheme } from 'styled-components'
import { IconType } from 'react-icons'
import isNumber from 'lodash/isNumber'

import { Text } from '../components/commons/Text'
import { toLocaleString } from '../utils/functions'

type Props = {
  color: string
  title: string
  titleColorInverse?: boolean
  change?: number
  description: string
  Icon: IconType
  className?: string
}

export const CounterCard: FC<Props> = ({ color, title, titleColorInverse, description, change, Icon }) => {
  const theme = useTheme()
  const cardElement = useRef<HTMLDivElement>()
  const [vertical, setVertical] = useState(false)
  const changeSymbol = change < 0 ? '-' : '+'
  const changeColor = change < 0
    ? theme.colors.success
    : change > 0 ? theme.colors.danger : theme.colors.title

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

  return (
    <Content
      ref={cardElement}
      style={{
        flexDirection: vertical ? 'column' : 'row',
        textAlign: vertical ? 'center' : 'left'
      }}
    >
      <IconContainer style={{ marginRight: vertical ? '0px' : '22px' }}>
        <IconBackground style={{ backgroundColor: color }} />
        <Icon size={26} color={color} />
      </IconContainer>
      <div>
        <Header>
          <Title inverse={titleColorInverse}>{title}</Title>
          {isNumber(change) && (
            <Change style={{ color: changeColor }}>
              {changeSymbol}{toLocaleString(Math.abs(change))}
            </Change>
          )}
        </Header>
        <Description>{description}</Description>
      </div>
    </Content>
  )
}

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: row;
`

const IconContainer = styled.div`
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
  color: ${props => props.inverse
    ? '#FFFFFF'
    : props.theme.colors.title
  };
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
