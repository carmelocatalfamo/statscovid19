import React, { FC } from 'react'
import styled from 'styled-components'

import { Container } from './commons/Container'
import { Title } from './commons/Title'
import { Text } from './commons/Text'

const Banner: FC = () => {
  return (
    <Alert>
      <Container>
        <StyledTitle as='h3'>Attenzione:</StyledTitle>
        <StyledText>I dati presenti su questo sito sono in continuo aggiornamento e vengono presi direttamente dalle <a href='https://github.com/pcm-dpc/COVID-19' target='_blank' rel='noopener noreferrer'>fonti ufficiali</a> della <a href='http://www.protezionecivile.gov.it/' target='_blank' rel='noopener noreferrer'>Protezione Civile</a>.</StyledText>
        <StyledText>In caso di problemi o malfunzionamenti visitare la sezione <a href='https://github.com/carmelocatalfamo/statscovid19-issues' target='_blank' rel='noopener noreferrer'>segnalazione problemi</a>.</StyledText>
      </Container>
    </Alert>
  )
}

const Alert = styled.div`
  background: ${props => props.theme.colors.light};
  width: 100%;
  padding: 32px 0px;
`

const StyledTitle = styled(Title)`
  font-size: 20px;
  margin-bottom: 2px;
`

const StyledText = styled(Text)`
  a {
    color: ${props => props.theme.colors.title};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`

export { Banner }
