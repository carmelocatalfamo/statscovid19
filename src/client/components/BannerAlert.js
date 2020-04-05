import React from 'react'
import styled from 'styled-components'

import { Text, Title, Container } from '../styles/components'

export default () => {
  return (
    <Alert>
      <Container>
        <StyledTitle>Attenzione:</StyledTitle>
        <StyledText>I dati presenti su questo sito sono in continuo aggiornamento e vengono presi direttamente dalle <a href='https://github.com/pcm-dpc/COVID-19' target='_blank' rel='noopener noreferrer'>fonti ufficiali</a> della <a href='http://www.protezionecivile.gov.it/' target='_blank' rel='noopener noreferrer'>Protezione Civile</a>.</StyledText>
        <StyledText>Per segnalare problemi o malfunzionamenti visitare la sezione <a href='https://github.com/carmelocatalfamo/statscovid19-issues' target='_blank' rel='noopener noreferrer'>"Segnalazione problemi"</a>.</StyledText>
      </Container>
    </Alert>
  )
}

const Alert = styled.div`
  background: ${props => props.theme.colors.header};
  width: 100%;
  padding: 16px 0px;
`

const StyledTitle = styled(Title)`
  font-size: 20px;
  margin-bottom: 8px;
`

const StyledText = styled(Text)`
  font-size: 16px;

  a {
    color: ${props => props.theme.fonts.title.color};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`
