import React from 'react'
import styled, { useTheme } from 'styled-components'
import { IconType } from 'react-icons'

type Props = {
  className?: string
  color?: string
  Icon: IconType
  onClick?: () => void
  size?: number
  title?: string
}

const ButtonIcon = ({
  className,
  color,
  Icon,
  onClick,
  size,
  title
}: Props) => {
  const { colors } = useTheme()

  return (
    <Button className={className} title={title} onClick={onClick}>
      <Icon size={size || 22} color={color || colors.text} />
    </Button>
  )
}

const Button = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  height: 44px;
  outline: none;
  padding: 0px;
  width: 44px;
`

export { ButtonIcon }
