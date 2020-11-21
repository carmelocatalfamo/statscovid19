import React, { FC } from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { MdKeyboardBackspace } from 'react-icons/md'

import { Container } from './commons/Container'
import { Title } from './commons/Title'
import { Logo } from './commons/Logo'
import { ThemeSwitch } from './ThemeSwitch'

const Navbar: FC = () => {
  const router = useRouter()
  const text = router.pathname === '/'
    ? <><Logo width={30} height={30} />Statistiche COVID-19 Italia</>
    : <><MdKeyboardBackspace /> indietro</>

  return (
    <Nav>
      <Content>
        <StyledTitle>
          <Link href='/'><a>{text}</a></Link>
        </StyledTitle>
        <ThemeSwitch />
      </Content>
    </Nav>
  )
}

const Nav = styled.nav`
  background: ${props => props.theme.colors.background};
  width: 100%;
  padding: 16px 0px;
`

const Content = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const StyledTitle = styled(Title).attrs({ as: 'p' })`
  font-size: 22px;

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

export { Navbar }
