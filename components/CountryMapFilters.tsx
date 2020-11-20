import React, { FC } from 'react'
import styled, { useTheme } from 'styled-components'

import { Select } from './commons/Select'
import { Text } from './commons/Text'

export enum PositiveCases {
  allTime = 'allTime',
  now = 'now'
}

export const positiveCasesOptions = [
  { value: PositiveCases.allTime, label: 'totali' },
  { value: PositiveCases.now, label: 'attuali' }
]

type Props = {
  value: { value: PositiveCases, label: string }
  setPositiveFilter: any
}

const CountryMapFilters: FC<Props> = ({ value, setPositiveFilter }) => {
  const theme = useTheme()

  return (
    <Filters>
      <PositiveCasesFilter>
        <StyledText>Mostra positivi</StyledText>
        <SelectContainer>
          <Select
            instanceId='positives'
            options={positiveCasesOptions}
            value={value}
            onChange={setPositiveFilter}
            isSearchable={false}
          />
        </SelectContainer>
      </PositiveCasesFilter>

      <Symbols>
        <Color color={theme.map.shades[0]}>{'< 10k'}</Color>
        <Color color={theme.map.shades[3]}>50/100k</Color>
        <Color color={theme.map.shades[1]}>10/25k</Color>
        <Color color={theme.map.shades[4]}>100/250k</Color>
        <Color color={theme.map.shades[2]}>25/50k</Color>
        <Color color={theme.map.shades[5]}>{'> 250k'}</Color>
      </Symbols>
    </Filters>
  )
}

const Filters = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 32px 0px;
  }
`

const StyledText = styled(Text)`
  font-family: ${(props) => props.theme.fonts.title.family};
  text-transform: uppercase;
`

const SelectContainer = styled.div`
  width: 110px;
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
  max-width: 130px;

  @media (max-width: 768px) {
    margin-top: 32px;
  }
`

const Color = styled.div`
  height: 22px;
  width: 60px;
  line-height: 25px;
  user-select: none;
  border-radius: 30px;
  margin-right: 5px;
  margin-bottom: 5px;
  text-align: center;
  color: white;
  font-size: 12px;
  color: white;
  background-color: ${props => props.color};
  font-family: ${props => props.theme.fonts.title.family};
  font-weight: ${props => props.theme.fonts.title.weight.bold};
`

export { CountryMapFilters }
