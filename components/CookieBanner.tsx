import React, { useEffect, useState } from 'react'
import { IoMdClose } from 'react-icons/io'
import nookies from 'nookies'
import styled, { useTheme } from 'styled-components'

import { Text } from '@/components/commons/Text'

export const CookieBanner = () => {
  const { colors } = useTheme()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const cookies = nookies.get(null)
    const { privacy } = cookies
    const isVisible = !privacy || (privacy && privacy !== 'true')
    setVisible(isVisible)
  }, [])

  const handleClickAccept = () => {
    setVisible(false)
    const maxAge = 3 * 24 * 60 * 60
    nookies.set(null, 'privacy', 'true', { maxAge })
  }

  if (!visible) return null

  return (
    <Banner>
      <Header>
        <Icon color={colors.white} size={22} onClick={handleClickAccept} />
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
  border-radius: 10px;
  bottom: 30px;
  max-width: 650px;
  padding: 15px;
  position: fixed;
  right: 30px;
  width: calc(100% - 60px);
  z-index: 20;
`

const Header = styled.div`
  text-align: right;
`

const StyledText = styled(Text)`
  color: ${props => props.theme.colors.white};
  padding: 15px;
`

const Icon = styled(IoMdClose)`
  cursor: pointer;
`

const Button = styled.button`
  border-radius: 10px;
  border: none;
  color: ${props => props.theme.colors.primary};
  cursor: pointer;
  font-family: ${props => props.theme.fonts.text.family};
  font-weight: bold;
  line-height: 1.6;
  margin: 15px;
  outline: none;
  padding: 10px 15px;
`
