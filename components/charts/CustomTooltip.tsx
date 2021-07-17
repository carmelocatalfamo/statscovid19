import React from 'react'
import styled from 'styled-components'

import { Text } from '@/components/commons/Text'

export const CustomTooltip = ({
  active,
  formatter,
  label,
  labelFormatter,
  payload
}) => {
  if (!active) return null

  return (
    <Container>
      <Label>{labelFormatter(label)}</Label>
      {payload?.map(({ dataKey, color, value }) => (
        <Key key={dataKey} style={{ color }}>
          {formatter(value, dataKey)}
        </Key>
      ))}
    </Container>
  )
}

const Container = styled.div`
  background-color: ${props => props.theme.colors.content};
  border-radius: 10px;
  padding: 12px 16px;
`

const Label = styled(Text)`
  color: ${props => props.theme.colors.title};
`

const Key = styled(Text)`
  font-size: 14px;
`
