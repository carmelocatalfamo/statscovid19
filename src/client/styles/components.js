import styled from 'styled-components'

export const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1024px;
  padding: 0px 16px;

  @media (min-width: 48em) {
    max-width: 1200px;
  }
`

export const Title = styled.h1`
  color: ${props => props.theme.fonts.title.color};
  font-family: ${props => props.theme.fonts.title.family};
  font-weight: ${props => props.theme.fonts.title.weight.bold};
  font-size: 32px;
`

export const Text = styled.p`
  color: ${props => props.theme.fonts.text.color};
  font-family: ${props => props.theme.fonts.text.family};
  font-weight: ${props => props.theme.fonts.text.weight.regular};
  font-size: 16px;
  line-height: 22px;

  & i {
    font-style: italic;
  }
`
