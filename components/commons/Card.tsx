import React from 'react'
import isFunction from 'lodash/isFunction'
import styled from 'styled-components'

import { Text } from '@/components/commons/Text'

type Props = {
  children?: React.ReactNode
  className?: string
  highlighted?: string
  title?: string | (() => JSX.Element)
}

export const Card = ({ children, className, highlighted, title }: Props) => {
  return (
    <Content highlighted={highlighted} className={className}>
      {title && (isFunction(title) ? title() : <Title>{title}</Title>)}
      <Body>{children}</Body>
    </Content>
  )
}

const Content = styled.div<{
  highlighted?: Props['highlighted']
}>`
  background-color: ${props =>
    props.highlighted ? props.highlighted : props.theme.colors.sidebar};
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
