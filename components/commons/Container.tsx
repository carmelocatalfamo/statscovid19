import styled from 'styled-components'

const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1024px;
  padding: 0px 16px;

  @media (min-width: 48em) {
    max-width: 1200px;
  }
`

export { Container }
