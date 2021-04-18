import React, { FC } from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { useRouter } from 'next/router'
import isArray from 'lodash/isArray'

import { Text } from './commons/Text'
import { regions } from '../utils/regions'

type Props = {
  isOpen: boolean
  onRegionClick?: (regionSlug: string) => void
}

export const SidebarRegionsMenu: FC<Props> = ({ isOpen, onRegionClick }) => {
  const { query } = useRouter()
  const region = isArray(query.region) ? query.region[0] : query.region

  return (
    <List
      style={{ maxHeight: isOpen ? '1000px' : '0px' }}
    >
      {regions.map(({ code, slug, name }) => (
        <li key={code} onClick={() => onRegionClick?.(slug)}>
          <Link
            href={`/${slug}`}
            passHref
          >
            <Anchor>
              <RegionName active={region === slug}>
                {name}
              </RegionName>
            </Anchor>
          </Link>
        </li>
      ))}
    </List>
  )
}

const List = styled.ul`
  margin-top: -10px;
  padding-left: 58px;
  overflow: hidden;
  transition: 0.2s linear max-height;
`

const Anchor = styled.a`
  text-decoration: none;
  font-size: 16px;
  margin: 10px 0px;
  display: block;

  ${props => props.theme.breakpoint.large} {
    font-size: 12px;
    margin: 0px;
  }
`

const RegionName = styled(Text)<{ active?: boolean }>`
  color: ${props => props.active
    ? props.theme.colors.title
    : props.theme.colors.text
  };
`
