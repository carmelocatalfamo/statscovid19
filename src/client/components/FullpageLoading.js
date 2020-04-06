import React from 'react'
import styled, { keyframes } from 'styled-components'

import Logo from './Logo'
import { Text } from '../styles/components'

export default () => {
  return (
    <Container>
      <Animation>
        <Logo />
      </Animation>
      <StyledText>Caricamento dati...</StyledText>
    </Container>
  )
}

const Container = styled.div`
  background-color: ${props => props.theme.colors.background};
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const Animation = styled.div`
  pointer-events: none;
  animation: ${rotate} infinite 2s ease;
`

const StyledText = styled(Text)`
  font-family: ${props => props.theme.fonts.title.family};
  font-weight: ${props => props.theme.fonts.title.weight.bold};
  color: ${props => props.theme.fonts.title.color};
  margin-top: 16px;
`
