import React, { useState } from 'react'
import { AiFillPieChart } from 'react-icons/ai'
import { FiMap } from 'react-icons/fi'
import { useRouter } from 'next/router'
import isArray from 'lodash/isArray'

import { SidebarLink } from './SidebarLink'
import { SidebarRegionsMenu } from './SidebarRegionsMenu'
import { regions } from '../utils/regions'

type Props = {
  className?: string
  onItemClick?: () => void
}

export const SidebarMainMenu = ({ className, onItemClick }: Props) => {
  const { query, pathname } = useRouter()
  const region = isArray(query.region) ? query.region[0] : query.region
  const [regionMenuIsOpen, setRegionMenuIsOpen] = useState(!!region)

  const handleOnClickRegions = () => {
    setRegionMenuIsOpen(state => !state)
  }

  return (
    <ul className={className}>
      <li onClick={onItemClick}>
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
          onClick={handleOnClickRegions}
          Icon={FiMap}
        />
        <SidebarRegionsMenu
          isOpen={regionMenuIsOpen}
          onRegionClick={onItemClick}
        />
      </li>
    </ul>
  )
}
