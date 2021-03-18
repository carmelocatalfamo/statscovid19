import React, { useState } from 'react'
import styled, { useTheme } from 'styled-components'
import { AiFillPieChart } from 'react-icons/ai'
import { FiMap } from 'react-icons/fi'
import { useRouter } from 'next/router'
import isArray from 'lodash/isArray'
import { IoIosBug, IoMdLock, IoMdMail } from 'react-icons/io'

import { SidebarLink } from './SidebarLink'
import { SidebarRegionsMenu } from './SidebarRegionsMenu'
import { regions } from '../utils/regions'
import Link from 'next/link'

export const Sidebar = () => {
  const theme = useTheme()
  const { query, pathname } = useRouter()
  const region = isArray(query.region) ? query.region[0] : query.region
  const [regionMenuIsOpen, setRegionMenuIsOpen] = useState(!!region)

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
            onClick={() => setRegionMenuIsOpen(state => !state)}
            Icon={FiMap}
          />
          <SidebarRegionsMenu
            isOpen={regionMenuIsOpen}
          />
        </li>
      </ul>

      <Footer>
        <Link href='/privacy' passHref>
          <ExternalLink>
            <IoMdLock
              color={theme.colors.text}
              size={16}
            />
            Privacy Policy
          </ExternalLink>
        </Link>

        <ExternalLink href='mailto:info@statscovid19.it'>
          <IoMdMail
            color={theme.colors.text}
            size={16}
          />
          info@statscovid19.it
        </ExternalLink>

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
      </Footer>
    </Aside>
  )
}

const Aside = styled.aside`
  overflow: overlay;
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
  justify-content: flex-start;
  margin-top: 10px;
  margin-left: 15px;

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

const Footer = styled.div`
  padding-top: 30px;
`
