import React, { FC } from 'react'
import styled, { useTheme } from 'styled-components'
import Select from 'react-select'

export const timeRangeOptions = [
  {
    value: 'all_period',
    label: 'Tutto il periodo',
    getDates: () => null
  },
  {
    value: 'last_one_year',
    label: 'Ultimo anno',
    getDates: () => {
      const now = new Date()
      return {
        to: now.getTime(),
        from: now.setFullYear(now.getFullYear() - 1)
      }
    }
  },
  {
    value: 'last six months',
    label: 'Ultimi sei mesi',
    getDates: () => {
      const now = new Date()
      return {
        to: now.getTime(),
        from: now.setMonth(now.getMonth() - 6)
      }
    }
  },
  {
    value: 'last_three_months',
    label: 'Ultimi tre mesi',
    getDates: () => {
      const now = new Date()
      return {
        to: now.getTime(),
        from: now.setMonth(now.getMonth() - 3)
      }
    }
  },
  {
    value: 'last_one_month',
    label: 'Ultimo mese',
    getDates: () => {
      const now = new Date()
      return {
        to: now.getTime(),
        from: now.setMonth(now.getMonth() - 1)
      }
    }
  }
]

export type Option = typeof timeRangeOptions[0]

type Props = {
  instanceId: string
  value: Option,
  setValue: (value: Option) => void
}

export const TimeRangeSelect: FC<Props> = ({ instanceId, value, setValue, ...props }) => {
  const theme = useTheme()

  return (
    <StyledSelect
      {...props}
      instanceId={instanceId}
      options={timeRangeOptions}
      value={value}
      isClearable={false}
      isSearchable={false}
      onChange={setValue}
      styles={{
        container: (provided) => ({
          ...provided,
          margin: '-10px 0px'
        }),
        control: (provided) => ({
          ...provided,
          backgroundColor: 'transparent',
          borderColor: 'transparent !important',
          cursor: 'pointer',
          boxShadow: 'none'
        }),
        valueContainer: (provided) => ({
          ...provided,
          justifyContent: 'flex-end'
        }),
        indicatorSeparator: () => ({
          display: 'none'
        }),
        singleValue: (provided) => ({
          ...provided,
          color: `${theme.colors.title} !important`,
          fontSize: 14
        }),
        menu: (provided) => ({
          ...provided,
          backgroundColor: theme.colors.content
        }),
        option: (provided, state) => {
          const backgroundColor = state.isSelected ? theme.colors.primary : 'transparent'
          return {
            ...provided,
            color: state.isSelected ? '#FFFFFF' : theme.colors.text,
            backgroundColor,
            cursor: 'pointer',
            ':active': {
              backgroundColor
            }
          }
        }
      }}
    />
  )
}

const StyledSelect = styled(Select)`
  min-width: 200px;
  font-family: ${props => props.theme.fonts.text.family};

  [class*='-indicatorContainer'] {
    color: ${props => props.theme.colors.title} !important;
    padding: 8px 0px;
  }
`
