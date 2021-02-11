import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { Logo } from './commons/Logo'
import { Text } from './commons/Text'
import { ThemeSwitch } from './ThemeSwitch'
import { regions } from '../utils/regions'

export const Navbar = () => {
  const router = useRouter()
  const regionSlug = router.query.region
  const region = regions.find(({ slug }) => slug === regionSlug)

  return (
    <Content>
      <Link href='/' passHref>
        <Brand>
          <Logo width={35} height={35} />
          <Name>Statistiche Covid-19 {region ? region.name : 'Italia'}</Name>
        </Brand>
      </Link>
      <ThemeSwitch />
    </Content>
  )
}

const Content = styled.nav`
  background-color: ${props => props.theme.colors.navbar};
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
`
