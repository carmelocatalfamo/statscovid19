import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Helmet from 'react-helmet'

export default () => {
  return (
    <Container>
      <Helmet>
        <title>404 Pagina non trovata</title>
      </Helmet>

      <Title>404 ~ page not found!</Title>
      <StyledLink to='/'>Torna alla Home</StyledLink>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Title = styled.h1`
  margin-top: 0px;
  text-transform: uppercase;
`

const StyledLink = styled(Link)`
  display: block;
  position: relative;
  z-index: 1;
`
