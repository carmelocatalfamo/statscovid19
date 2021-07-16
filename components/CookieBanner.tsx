import React, { useEffect, useState } from 'react'
import { IoMdClose } from 'react-icons/io'
import nookies from 'nookies'
import styled from 'styled-components'

import { Text } from '@/components/commons/Text'

export const CookieBanner = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const cookies = nookies.get(null)
    const isVisible =
      !cookies.privacy || (cookies.privacy && cookies.privacy !== 'true')
    setVisible(isVisible)
  }, [])

  const handleClickAccept = () => {
    nookies.set(null, 'privacy', 'true', {
      maxAge: 3 * 24 * 60 * 60
    })

    setVisible(false)
  }

  if (!visible) return null

  return (
    <Banner>
      <Header>
        <IoMdClose
          color='#FFF'
          size={22}
          onClick={handleClickAccept}
          style={{ cursor: 'pointer' }}
        />
      </Header>
      <StyledText>
        Su questo sito utilizziamo cookie tecnici necessari alla navigazione e
        funzionali all’erogazione del servizio.
        <br />
        Utilizziamo i cookie anche per fornire un’esperienza di navigazione
        sempre migliore e per facilitare le interazioni con le funzionalità del
        sito stesso.
      </StyledText>
      <Button onClick={handleClickAccept}>
        Accetto e proseguo la navigazione
      </Button>
    </Banner>
  )
}

const Banner = styled.div`
  background-color: ${props => props.theme.colors.primary};
  z-index: 20;
  position: fixed;
  right: 30px;
  bottom: 30px;
  padding: 15px;
  border-radius: 10px;
  width: calc(100% - 60px);
  max-width: 650px;
`

const Header = styled.div`
  text-align: right;
`

const StyledText = styled(Text)`
  color: #fff;
  padding: 15px;
`

const Button = styled.button`
  color: ${props => props.theme.colors.primary};
  font-family: ${props => props.theme.fonts.text.family};
  font-weight: bold;
  border: none;
  margin: 15px;
  padding: 10px 15px;
  line-height: 1.6;
  border-radius: 10px;
  outline: none;
  cursor: pointer;
`
