import styled from 'styled-components'

export const Text = styled.p`
  color: ${props => props.theme.colors.text};
  font-family: ${props => props.theme.fonts.text.family};
  line-height: 1.6;
`
