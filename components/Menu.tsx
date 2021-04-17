import React, { useContext, useEffect } from 'react'
import styled from 'styled-components'

import { SHOW_MENU, StateContext } from '../hooks/useState'
import { SidebarFooter } from './SidebarFooter'
import { SidebarMainMenu } from './SidebarMainMenu'

const Menu = () => {
  const { state: { menu }, dispatch } = useContext(StateContext)

  const handleOnItemClick = () => {
    dispatch({
      type: SHOW_MENU,
      payload: false
    })
  }

  useEffect(() => {
    document.body.style.overflow = menu ? 'hidden' : null
  }, [menu])

  return (
    <Container isOpen={menu}>
      <Content>
        <SidebarMainMenu onItemClick={handleOnItemClick} />
        <SidebarFooter onItemClick={handleOnItemClick} />
      </Content>
    </Container>
  )
}

const Container = styled.menu<{ isOpen: boolean }>`
  background-color: ${props => props.theme.colors.sidebar};
  top: ${props => props.isOpen ? '0vh' : '-100vh'};
  transition: 0.15s ease-in-out top;
  overflow: hidden;
  position: fixed;
  z-index: 9;
  left: 0px;
  height: 100vh;
  width: 100%;
`

const Content = styled.div`
  padding: 90px 20px 30px;
  height: 100%;
  overflow: scroll;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export { Menu }
