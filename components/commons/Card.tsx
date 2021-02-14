import React, { FC } from 'react'
import styled from 'styled-components'
import isFunction from 'lodash/isFunction'

import { Text } from './Text'

export type CardSize = 25 | 50 | 75 | 100

type Props = {
  offset?: 25 | 50 | 75
  size: CardSize
  title?: string | (() => JSX.Element)
  highlighted?: string
}

export const Card: FC<Props> = ({ title, offset, size, highlighted, children }) => {
  const gridColumnMap = {
    25: 1,
    50: 2,
    75: 3,
    100: 4
  }

  if (offset + size > 100) {
    throw new Error('Offset + Size must be <= 100')
  }

  const gridStart = (gridColumnMap[offset] || 0) + 1
  const gridEnd = gridStart + gridColumnMap[size]

  return (
    <Content
      highlighted={highlighted}
      style={{ gridColumn: `${gridStart} / ${gridEnd}` }}
    >
      {title && (
        isFunction(title) ? title() : <Title>{title}</Title>
      )}
      <Body>{children}</Body>
    </Content>
  )
}

const Content = styled.div<{ highlighted?: string }>`
  background-color: ${props => props.highlighted
    ? props.highlighted
    : props.theme.colors.sidebar
  };
  transition: 0.2s ease-in-out backgroundColor;
  border-radius: 10px;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.1);
`

const Title = styled(Text)`
  color: ${props => props.theme.colors.title};
  border-bottom: 2px solid ${props => props.theme.colors.content};
  font-size: 16px;
  font-weight: bold;
  padding: 22px 30px;
`

const Body = styled.div`
  padding: 30px;
  height: calc(100% - 70px);
`
