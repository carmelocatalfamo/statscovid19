import React, { FC } from 'react'
import styled from 'styled-components'

import { Navbar } from './Navbar'
import { Sidebar } from './Sidebar'

export const WithTemplate: FC = ({ children }) => {
  return (
    <>
      <Navbar />
      <Page>
        <Sidebar/>
        <Content>
          <Grid>
            {children}
          </Grid>
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
  margin-left: 255px;
  min-height: 100%;
  overflow: overlay;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 30px;
  grid-row-gap: 30px;
  padding: 30px;
`
