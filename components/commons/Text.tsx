import styled from 'styled-components'

const Text = styled.p`
  color: ${props => props.theme.fonts.text.color};
  font-family: ${props => props.theme.fonts.text.family};
  font-weight: ${props => props.theme.fonts.text.weight.regular};
  font-size: 18px;
  line-height: 21px;

  & i {
    font-style: italic;
  }
`

export { Text }
