import React from 'react'
import styled from 'styled-components'

import Select from './Select'
import { Text } from '../styles/components'

export const options = [
  { value: 'totali', label: 'totali' },
  { value: 'attuali', label: 'attuali' }
]

export default ({ value, setPositiveFilter }) => {
  return (
    <Filters>
      <PositiveCasesFilter>
        <Text>Mostra positivi</Text>
        <SelectContainer>
          <Select
            options={options}
            value={value}
            onChange={setPositiveFilter}
            isSearchable={false}
          />
        </SelectContainer>
      </PositiveCasesFilter>

      <Symbols>
        <Color color='#FFBCD8'>{'< 1k'}</Color>
        <Color color='#FF7CB8'>1/5k</Color>
        <Color color='#FA5C98'>5/10k</Color>
        <Color color='#DA3C78'>10/25k</Color>
        <Color color='#BA1C58'>25/50k</Color>
        <Color color='#9A0038'>> 50k</Color>
      </Symbols>
    </Filters>
  )
}

const Filters = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 32px 0px;
  }
`

const SelectContainer = styled.div`
  width: 105px;
  margin-left: 8px;
`

const PositiveCasesFilter = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  p {
    white-space: nowrap;
  }
`

const Symbols = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    margin-top: 32px;
  }
`

const Color = styled.div`
  height: 32px;
  width: 50px;
  line-height: 36px;
  user-select: none;
  border-radius: 6px;
  margin-right: 5px;
  text-align: center;
  color: white;
  font-size: 12px;
  color: white;
  background-color: ${props => props.color};
  font-family: ${props => props.theme.fonts.title.family};
  font-weight: ${props => props.theme.fonts.title.weight.bold};
`
