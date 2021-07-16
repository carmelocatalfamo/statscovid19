import React from 'react'
import styled from 'styled-components'

import { Navbar } from '@/components/Navbar'
import { Menu } from '@/components/Menu'
import { Sidebar } from '@/components/Sidebar'

type Props = {
  children?: React.ReactNode
}

export const WithTemplate = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      <Menu />
      <Page>
        <Sidebar />
        <Content>
          <Grid>{children}</Grid>
        </Content>
      </Page>
    </>
  )
}

const Page = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 70px;
  height: 100vh;
`

const Content = styled.div`
  background-color: ${props => props.theme.colors.content};
  flex: 1;
  min-height: 100%;
  overflow: overlay;

  ${props => props.theme.breakpoint.large} {
    margin-left: 255px;
  }
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 30px;
  grid-row-gap: 30px;
  padding: 30px;
`
