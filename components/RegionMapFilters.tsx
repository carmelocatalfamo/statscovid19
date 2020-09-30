import React, { FC } from 'react'
import styled, { useTheme } from 'styled-components'

import { Select } from './commons/Select'
import { Text } from './commons/Text'

export enum RegionOptionValues {
  positives = 'positives',
  shortName = 'shortName'
}

export const regionOptionValues = [
  { value: RegionOptionValues.positives, label: 'positivi totali' },
  { value: RegionOptionValues.shortName, label: 'province' }
]

type Props = {
  value: { value: RegionOptionValues, label: string }
  setFilter: any
}

const RegionMapFilters: FC<Props> = ({ value, setFilter }) => {
  const theme = useTheme()

  return (
    <Filters>
      <PositiveCasesFilter>
        <StyledText>Mostra</StyledText>
        <SelectContainer>
          <Select
            instanceId='region_filter'
            options={regionOptionValues}
            value={value}
            onChange={setFilter}
            isSearchable={false}
          />
        </SelectContainer>
      </PositiveCasesFilter>

      <Symbols>
        <Color color={theme.map.shades[0]}>{'< 500'}</Color>
        <Color color={theme.map.shades[3]}>500/1k</Color>
        <Color color={theme.map.shades[1]}>1.5/2.5k</Color>
        <Color color={theme.map.shades[4]}>2.5/10k</Color>
        <Color color={theme.map.shades[2]}>10/25k</Color>
        <Color color={theme.map.shades[5]}>{'> 25k'}</Color>
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
  width: 170px;
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
  max-width: 110px;

  @media (max-width: 768px) {
    margin-top: 32px;
  }
`

const Color = styled.div`
  height: 22px;
  width: 50px;
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

export { RegionMapFilters }
