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
  border-radius: 10px;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.1);
  transition: 0.2s ease-in-out backgroundColor;
`

const Title = styled(Text)`
  border-bottom: 2px solid ${props => props.theme.colors.content};
  color: ${props => props.theme.colors.title};
  font-size: 16px;
  font-weight: bold;
  padding: 22px 30px;
`

const Body = styled.div`
  height: calc(100% - 70px);
  padding: 30px;
`
