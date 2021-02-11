import React from 'react'
import styled from 'styled-components'

import { Text } from '../commons/Text'

export const CustomTooltip = ({ active, payload, label, labelFormatter, formatter }) => {
  if (active) {
    return (
      <Container>
        <Label>{labelFormatter(label)}</Label>
        {payload?.map(({ dataKey, color, value }) => (
          <Key
            key={dataKey}
            style={{ color }}
          >
            {formatter(value, dataKey)}
          </Key>
        ))}
      </Container>
    )
  }

  return null
}

const Container = styled.div`
  background-color: ${props => props.theme.colors.content};
  padding: 12px 16px;
  border-radius: 10px;
`

const Label = styled(Text)`
  color: ${props => props.theme.colors.title};
`

const Key = styled(Text)`
  font-size: 14px;
`
