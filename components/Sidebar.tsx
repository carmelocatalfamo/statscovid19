import React from 'react'
import styled, { useTheme } from 'styled-components'
import { AiFillPieChart } from 'react-icons/ai'
import { FiMap } from 'react-icons/fi'
import { useRouter } from 'next/router'
import isArray from 'lodash/isArray'
import { IoIosBug } from 'react-icons/io'

import { SidebarLink } from './SidebarLink'
import { SidebarRegionsMenu } from './SidebarRegionsMenu'
import { regions } from '../utils/regions'

export const Sidebar = () => {
  const theme = useTheme()
  const { query, pathname } = useRouter()
  const region = isArray(query.region) ? query.region[0] : query.region

  return (
    <Aside>
      <ul>
        <li>
          <SidebarLink
            label='Italia'
            href='/'
            active={pathname === '/'}
            Icon={AiFillPieChart}
          />
        </li>
        <li>
          <SidebarLink
            label='Regioni'
            active={regions.map(({ slug }) => slug).includes(region)}
            Icon={FiMap}
          />
          <SidebarRegionsMenu />
        </li>
      </ul>

      <div>
        <ExternalLink
          href='https://github.com/carmelocatalfamo/statscovid19/issues'
          target='_blank'
        >
          <IoIosBug
            color={theme.colors.text}
            size={16}
          />
          Segnalazione problemi
        </ExternalLink>
      </div>
    </Aside>
  )
}

const Aside = styled.aside`
  position: fixed;
  background-color: ${props => props.theme.colors.sidebar};
  width: 255px;
  height: calc(100vh - 70px);
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const ExternalLink = styled.a`
  font-family: ${props => props.theme.fonts.text.family};
  color: ${props => props.theme.colors.text};
  font-size: 12px;
  text-decoration: none;
  transition: 0.2s ease-in-out color;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    transition: 0.2s ease-in-out fill;
    margin-right: 6px;
  }

  &:hover {
    color: ${props => props.theme.colors.title};

    svg {
      fill: ${props => props.theme.colors.title};
    }
  }
`
