import React from 'react'
import styled from 'styled-components'

import { SidebarMainMenu } from '@/components/SidebarMainMenu'
import { SidebarFooter } from '@/components/SidebarFooter'

export const Sidebar = () => {
  return (
    <Aside>
      <SidebarMainMenu />
      <SidebarFooter />
    </Aside>
  )
}

const Aside = styled.aside`
  background-color: ${props => props.theme.colors.sidebar};
  display: none;
  overflow: overlay;
  position: fixed;
  width: 255px;
  height: calc(100vh - 70px);
  padding: 30px;
  flex-direction: column;
  justify-content: space-between;

  ${props => props.theme.breakpoint.large} {
    display: flex;
  }
`
