import React from 'react'
import styled from 'styled-components'
import { MdLinearScale } from 'react-icons/md'

import { Text } from '../../styles/components'

export default ({ getDescriptionByKey, ...props }) => {
  const iconStyle = { verticalAlign: 'middle', marginRight: 5 }

  return (
    <LegendContaner>
      {props.payload.map(legend => {
        const description = (getDescriptionByKey && getDescriptionByKey(legend.dataKey)) || ''

        return (
          <LegendLabel key={legend.dataKey}>
            <MdLinearScale color={legend.color} style={iconStyle} />
            <strong>{legend.value}</strong>{description}
          </LegendLabel>
        )
      })}
    </LegendContaner>
  )
}

const LegendContaner = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  margin: 16px 0px;
`

const LegendLabel = styled(Text)`
  font-size: 16px;
  margin: 2px 16px;

  strong {
    font-family: ${props => props.theme.fonts.title.family};
    font-weight: ${props => props.theme.fonts.title.weight.bold};
  }
`
