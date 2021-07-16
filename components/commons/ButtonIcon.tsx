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
  height: 44px;
  width: 44px;
  padding: 0px;
  cursor: pointer;
  background: transparent;
  border: none;
  outline: none;
`

export { ButtonIcon }
