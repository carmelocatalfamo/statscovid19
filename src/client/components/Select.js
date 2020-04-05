import React from 'react'
import styled, { withTheme } from 'styled-components'
import Select from 'react-select'

export default withTheme(props => {
  return <StyledSelect appTheme={props.theme} {...props} />
})

const StyledSelect = styled(Select).attrs(props => {
  return {
    ...props,
    theme: theme => ({
      ...theme,
      borderRadius: 6,
      colors: {
        ...theme.colors,
        primary25: props.appTheme.colors.primary,
        primary: props.appTheme.colors.primary
      }
    })
  }
})``
