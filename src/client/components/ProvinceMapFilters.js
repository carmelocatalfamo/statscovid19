import React from 'react'
import styled from 'styled-components'

import Select from './Select'
import { Text } from '../styles/components'

export const options = [
  { value: 'positive', label: 'positivi totali' },
  { value: 'shortName', label: 'province' }
]

export default ({ value, setFilter }) => {
  return (
    <Filters>
      <PositiveCasesFilter>
        <Text>Mostra</Text>
        <SelectContainer>
          <Select
            options={options}
            value={value}
            onChange={setFilter}
            isSearchable={false}
          />
        </SelectContainer>
      </PositiveCasesFilter>

      <Symbols>
        <SymbolsGroup>
          <Color color='#FFBCD8'>{'< 500'}</Color>
          <Color color='#FF7CB8'>500/1k</Color>
          <Color color='#FA5C98'>1.5/2.5k</Color>
        </SymbolsGroup>
        <SymbolsGroup>
          <Color color='#DA3C78'>2.5/10k</Color>
          <Color color='#BA1C58'>10/25k</Color>
          <Color color='#9A0038'>> 25k</Color>
        </SymbolsGroup>
      </Symbols>
    </Filters>
  )
}

const Filters = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 32px;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 32px 0px;
  }
`

const SelectContainer = styled.div`
  width: 175px;
  margin-left: 8px;

  & div[class*='singleValue'] {
    font-size: 20px;
  }
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
  @media (max-width: 768px) {
    margin-top: 32px;
  }
`

const SymbolsGroup = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 10px 0px;
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
