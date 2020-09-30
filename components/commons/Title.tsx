import styled from 'styled-components'

const Title = styled.h1`
  color: ${props => props.theme.colors.title};
  font-family: ${props => props.theme.fonts.title.family};
  font-weight: ${props => props.theme.fonts.title.weight.bold};
  font-size: 32px;
`

export { Title }
