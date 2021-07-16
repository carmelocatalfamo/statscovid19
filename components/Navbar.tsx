import React from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import { useRouter } from 'next/router'
import isArray from 'lodash/isArray'
import Link from 'next/link'
import styled from 'styled-components'

import { ButtonIcon } from '@/components/commons/ButtonIcon'
import { changeMenuIsVisible } from '@/store/slices/ui'
import { Logo } from '@/components/commons/Logo'
import { regions } from '@/utils/regions'
import { Text } from '@/components/commons/Text'
import { ThemeSwitch } from '@/components/ThemeSwitch'
import { useAppDispatch } from '@/hooks/useAppDispatch'
import { useAppSelector } from '@/hooks/useAppSelector'

export const Navbar = () => {
  const { query } = useRouter()
  const dispatch = useAppDispatch()
  const menuIsVisible = useAppSelector(state => state.ui.menuIsVisible)
  const regionSlug = isArray(query.region) ? query.region[0] : query.region
  const region = regions.find(({ slug }) => slug === regionSlug)
  const MenuIcon = menuIsVisible ? FiX : FiMenu

  const handleOnClickMenu = () => {
    dispatch(changeMenuIsVisible(!menuIsVisible))
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
        <StyledButtonIcon
          title='Menù'
          Icon={MenuIcon}
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

const StyledButtonIcon = styled(ButtonIcon)`
  ${props => props.theme.breakpoint.large} {
    display: none;
  }
`
