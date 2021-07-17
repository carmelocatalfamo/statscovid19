import React from 'react'
import Select from 'react-select'
import styled, { CSSObject, useTheme } from 'styled-components'

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
  setValue: (value: Option) => void
  value: Option
}

export const TimeRangeSelect = ({
  instanceId,
  setValue,
  value,
  ...props
}: Props) => {
  const { colors } = useTheme()

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
        container: (provided: CSSObject) => ({
          ...provided,
          margin: '-10px 0px'
        }),
        control: (provided: CSSObject) => ({
          ...provided,
          backgroundColor: 'transparent',
          borderColor: 'transparent !important',
          cursor: 'pointer',
          boxShadow: 'none'
        }),
        valueContainer: (provided: CSSObject) => ({
          ...provided,
          justifyContent: 'flex-end'
        }),
        indicatorSeparator: () => ({
          display: 'none'
        }),
        singleValue: (provided: CSSObject) => ({
          ...provided,
          color: `${colors.title} !important`,
          fontSize: 14
        }),
        menu: (provided: CSSObject) => ({
          ...provided,
          backgroundColor: colors.content
        }),
        option: (provided: CSSObject, { isSelected }) => {
          const backgroundColor = isSelected ? colors.primary : 'transparent'
          return {
            ...provided,
            color: isSelected ? '#FFFFFF' : colors.text,
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
  font-family: ${props => props.theme.fonts.text.family};
  min-width: 200px;

  [class*='-indicatorContainer'] {
    color: ${props => props.theme.colors.title} !important;
    padding: 8px 0px;
  }
`
