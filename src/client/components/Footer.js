import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import Logo from './Logo'
import { regions } from '../utils/regions'
import { Container, Title, Text } from '../styles/components'

export default () => {
  return (
    <Footer>
      <TitleContainer>
        <StyledTitle>
          <Link to='/'><Logo width={35} height={35} />Statistiche COVID-19 Italia</Link>
        </StyledTitle>
      </TitleContainer>

      <MenuContainer>
        <Menu>
          <MenuTitle>Regioni</MenuTitle>
          <MenuContent>
            {regions.filter((region, index) => index < 10).map(region => (
              <MenuItem key={region.code}>
                <Link to={`/${region.slug}`}>{region.name}</Link>
              </MenuItem>
            ))}
          </MenuContent>
        </Menu>

        <Menu>
          <MenuContent style={{ marginTop: '27px' }}>
            {regions.filter((region, index) => index >= 10).map(region => (
              <MenuItem key={region.code}>
                <Link to={`/${region.slug}`}>{region.name}</Link>
              </MenuItem>
            ))}
          </MenuContent>
        </Menu>

        <Menu>
          <MenuTitle>Altre sezioni</MenuTitle>
          <MenuContent>
            <MenuItem>
              <a
                target='_blank'
                rel='noopener noreferrer'
                href='https://github.com/carmelocatalfamo/statscovid19-issues'
              >
                Segnalazione problemi
              </a>
            </MenuItem>
            <MenuItem>
              <Link to='/privacy'>Privacy Policy</Link>
            </MenuItem>
          </MenuContent>
        </Menu>
      </MenuContainer>
    </Footer>
  )
}

const Footer = styled.div`
  background: ${props => props.theme.colors.header};
  width: 100%;
  padding: 32px 0px;
`

const TitleContainer = styled(Container)`
  margin-bottom: 32px;
`

const MenuContainer = styled(Container)`
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: flex-start;
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
    p {
      margin-top: 16px;
    }

    &:first-child {
      p {
        margin-top: 0px;
      }
    }
  }
`

const MenuContent = styled.ul`
  @media (max-width: 768px) {
    margin-top: 0px !important;
  }

  a {
    color: ${props => props.theme.fonts.text.color};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`

const MenuItem = styled.li`
  margin: 5px 0px;
`

const MenuTitle = styled(Text)`
  font-family: ${props => props.theme.fonts.title.family};
  font-weight: ${props => props.theme.fonts.title.weight.bold};
  font-size: 18px;
`
