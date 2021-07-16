import React, { useEffect } from 'react'
import styled from 'styled-components'

import { changeMenuIsVisible } from '@/store/slices/ui'
import { SidebarFooter } from '@/components/SidebarFooter'
import { SidebarMainMenu } from '@/components/SidebarMainMenu'
import { useAppDispatch } from '@/hooks/useAppDispatch'
import { useAppSelector } from '@/hooks/useAppSelector'

const Menu = () => {
  const dispatch = useAppDispatch()
  const menuIsVisible = useAppSelector(state => state.ui.menuIsVisible)

  useEffect(() => {
    document.body.style.overflow = menuIsVisible ? 'hidden' : null
  }, [menuIsVisible])

  const handleOnItemClick = () => {
    dispatch(changeMenuIsVisible(false))
  }

  return (
    <Container isVisible={menuIsVisible}>
      <Content>
        <SidebarMainMenu onItemClick={handleOnItemClick} />
        <SidebarFooter onItemClick={handleOnItemClick} />
      </Content>
    </Container>
  )
}

const Container = styled.menu<{ isVisible: boolean }>`
  background-color: ${props => props.theme.colors.sidebar};
  top: ${props => (props.isVisible ? '0vh' : '-100vh')};
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
