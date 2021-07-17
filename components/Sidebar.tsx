import React from 'react'
import styled from 'styled-components'

import { SidebarFooter } from '@/components/SidebarFooter'
import { SidebarMainMenu } from '@/components/SidebarMainMenu'

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
  flex-direction: column;
  height: calc(100vh - 70px);
  justify-content: space-between;
  overflow: overlay;
  padding: 30px;
  position: fixed;
  width: 255px;

  ${props => props.theme.breakpoint.large} {
    display: flex;
  }
`
