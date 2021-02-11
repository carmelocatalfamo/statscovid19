import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { useRouter } from 'next/router'
import isArray from 'lodash/isArray'

import { Text } from './commons/Text'
import { regions } from '../utils/regions'

export const SidebarRegionsMenu = () => {
  const { query } = useRouter()
  const region = isArray(query.region) ? query.region[0] : query.region

  return (
    <List>
      {regions.map(({ code, slug, name }) => (
        <li key={code}>
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
`

const Anchor = styled.a`
  text-decoration: none;
  font-size: 12px;
`

const RegionName = styled(Text)<{ active?: boolean }>`
  color: ${props => props.active
    ? props.theme.colors.title
    : props.theme.colors.text
  };
`
