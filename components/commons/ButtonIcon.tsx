import React from 'react'
import styled, { useTheme } from 'styled-components'
import { IconType } from 'react-icons'

type Props = {
  onClick?: () => void
  icon: IconType
  title?: string
  size?: number
  color?: string
}

const ButtonIcon = ({ onClick, icon, title, size, color }: Props) => {
  const { colors } = useTheme()
  const Icon = icon
  const _size = size || 22
  const _color = color || colors.text

  return (
    <Button title={title} onClick={onClick}>
      <Icon size={_size} color={_color} />
    </Button>
  )
}

const Button = styled.button`
  height: 44px;
  width: 44px;
  padding: 0px;
  cursor: pointer;
  background: transparent;
  border: none;
  outline: none;
`

export { ButtonIcon }
