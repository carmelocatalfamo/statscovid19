import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { Container, Title } from '../styles/components'

export default () => {
  return (
    <Footer>
      <StyledContainer>
        <div>
          <StyledTitle>
            <Link to='/'>Statistiche COVID-19 Italia</Link>
          </StyledTitle>
        </div>

        <Menu>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://github.com/carmelocatalfamo/statscovid19-issues'
          >
            Segnalazione problemi
          </a>
          <Link to='/privacy'>Privacy Policy</Link>
        </Menu>
      </StyledContainer>
    </Footer>
  )
}

const Footer = styled.div`
  background: ${props => props.theme.colors.header};
  width: 100%;
  padding: 32px 0px;
`

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const StyledTitle = styled(Title)`
  font-size: 22px;

  a {
    color: inherit;
    text-decoration: none;
    display: flex;
    align-items: center;

    svg {
      margin-bottom: 4px;
      margin-right: 4px;
    }
  }
`
const Menu = styled.div`
  @media (max-width: 768px) {
    margin-top: 16px;
  }

  a {
    color: ${props => props.theme.fonts.text.color};
    text-decoration: none;
    margin-left: 16px;

    @media (max-width: 768px) {
      margin-left: 0px;
      margin-right: 16px;
    }

    &:hover {
      text-decoration: underline;
    }
  }
`
