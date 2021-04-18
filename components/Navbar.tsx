import React, { useContext } from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FiMenu, FiX } from 'react-icons/fi'

import { Logo } from './commons/Logo'
import { Text } from './commons/Text'
import { ButtonIcon } from './commons/ButtonIcon'
import { ThemeSwitch } from './ThemeSwitch'
import { regions } from '../utils/regions'
import { SHOW_MENU, StateContext } from '../hooks/useState'

export const Navbar = () => {
  const router = useRouter()
  const { state: { menu }, dispatch } = useContext(StateContext)
  const regionSlug = router.query.region
  const region = regions.find(({ slug }) => slug === regionSlug)

  const handleOnClickMenu = () => {
    dispatch({
      type: SHOW_MENU,
      payload: !menu
    })
  }

  return (
    <Content>
      <Link href='/' passHref>
        <Brand>
          <Logo width={35} height={35} />
          <Name>
            <span>Statistiche Covid-19 </span>
            {region ? ` ${region.name}` : ' Italia'}
          </Name>
        </Brand>
      </Link>
      <div>
        <ThemeSwitch />
        <ButtonIcon
          title='Menù'
          icon={menu ? FiX : FiMenu}
          onClick={handleOnClickMenu}
        />
      </div>
    </Content>
  )
}

const Content = styled.nav`
  background-color: ${props => props.theme.colors.navbar};
  border-bottom: 1px solid ${props => props.theme.colors.content};
  width: 100%;
  height: 70px;
  padding: 0px 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  z-index: 10;
  top: 0px;
  left: 0px;
`

const Brand = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
`

const Name = styled(Text)`
  color: ${props => props.theme.colors.title};
  font-size: 20px;
  font-weight: bold;
  margin-left: 12px;

  span {
    display: none;
  }

  ${props => props.theme.breakpoint.small} {
    span {
      display: inline-block;
    }
  }
`
