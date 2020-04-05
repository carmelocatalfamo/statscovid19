import React from 'react'
import styled from 'styled-components'
import { Link, withRouter } from 'react-router-dom'
import { MdKeyboardBackspace } from 'react-icons/md'

import ThemeSwitch from './ThemeSwitch'
import Logo from './Logo'
import { Title, Container } from '../styles/components'

export default withRouter(({ match }) => {
  const text = match.path === '/' && match.isExact
    ? <><Logo width={30} height={30} />Statistiche COVID-19 Italia</>
    : <><MdKeyboardBackspace /> indietro</>

  return (
    <Navbar>
      <Content>
        <StyledTitle>
          <Link to='/'>{text}</Link>
        </StyledTitle>
        <ThemeSwitch />
      </Content>
    </Navbar>
  )
})

const Navbar = styled.nav`
  background: ${props => props.theme.colors.header};
  width: 100%;
  padding: 16px 0px;
`

const Content = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const StyledTitle = styled(Title)`
  font-size: 18px;

  a {
    color: inherit;
    text-decoration: none;
    display: flex;
    align-items: center;
    height: 34px;

    svg {
      margin-bottom: 4px;
      margin-right: 4px;
    }
  }
`
