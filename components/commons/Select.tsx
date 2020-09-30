import React from 'react'
import styled, { withTheme } from 'styled-components'
import ReactSelect from 'react-select'

const Select = withTheme(props => {
  return <StyledSelect appTheme={props.theme} {...props} />
})

const StyledSelect = styled(ReactSelect).attrs(props => {
  return {
    ...props,
    instanceId: props.instanceId,
    styles: {
      menuList: (provided) => ({
        ...provided,
        backgroundColor: props.appTheme.select.background
      }),
      option: (provided, state) => ({
        ...provided,
        color: state.isSelected
          ? props.appTheme.select.isSelectedColor
          : props.appTheme.select.color,
        backgroundColor: state.isSelected
          ? props.appTheme.select.isSelectedBackground
          : 'transparent',
        fontFamily: props.appTheme.fonts.title.family,
        textTransform: 'uppercase',
        cursor: 'pointer'
      }),
      control: (provided) => ({
        ...provided,
        cursor: 'pointer',
        borderRadius: '30px',
        backgroundColor: props.appTheme.select.background,
        borderColor: props.appTheme.select.background,
        boxShadow: `0 0 0 1px ${props.appTheme.select.background}`,
        '&:hover': {
          borderColor: props.appTheme.select.background
        }
      }),
      valueContainer: (provided) => ({
        ...provided,
        paddingRight: 0
      }),
      singleValue: (provided) => ({
        ...provided,
        color: props.appTheme.select.color,
        fontFamily: props.appTheme.fonts.title.family,
        textTransform: 'uppercase',
        lineHeight: '11px'
      }),
      indicatorSeparator: (provided) => ({
        ...provided,
        display: 'none'
      }),
      indicatorsContainer: (provided) => ({
        ...provided,
        color: props.appTheme.select.color
      })
    }
  }
})``

export { Select }
