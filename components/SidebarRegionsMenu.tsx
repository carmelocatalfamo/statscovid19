import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { useRouter } from 'next/router'
import isArray from 'lodash/isArray'

import { regions } from '@/utils/regions'
import { Text } from '@/components/commons/Text'

type Props = {
  isOpen: boolean
  onRegionClick?: (regionSlug: string) => void
}

export const SidebarRegionsMenu = ({ isOpen, onRegionClick }: Props) => {
  const { query } = useRouter()
  const region = isArray(query.region) ? query.region[0] : query.region

  return (
    <List style={{ maxHeight: isOpen ? '1000px' : '0px' }}>
      {regions.map(({ code, slug, name }) => (
        <li key={code} onClick={() => onRegionClick?.(slug)}>
          <Link href={`/${slug}`} passHref>
            <Anchor>
              <RegionName active={region === slug}>{name}</RegionName>
            </Anchor>
          </Link>
        </li>
      ))}
    </List>
  )
}

const List = styled.ul`
  margin-top: -10px;
  overflow: hidden;
  padding-left: 58px;
  transition: 0.2s linear max-height;
`

const Anchor = styled.a`
  display: block;
  font-size: 16px;
  margin: 10px 0px;
  text-decoration: none;

  ${props => props.theme.breakpoint.large} {
    font-size: 12px;
    margin: 0px;
  }
`

const RegionName = styled(Text)<{ active?: boolean }>`
  color: ${props =>
    props.active ? props.theme.colors.title : props.theme.colors.text};
`
