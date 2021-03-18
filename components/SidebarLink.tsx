import React, { FC } from 'react'
import styled, { useTheme } from 'styled-components'
import { IconType } from 'react-icons'
import Link from 'next/link'

import { Text } from './commons/Text'

type Props = {
  label: string
  href?: string
  onClick?: () => void
  active?: boolean
  Icon: IconType
}

export const SidebarLink: FC<Props> = ({ href, label, active, onClick, Icon }) => {
  const theme = useTheme()
  const iconColor = active ? theme.colors.primary : theme.colors.text
  const textColor = active ? theme.colors.title : theme.colors.text

  const renderLink = (handleOnClick?: () => void) => {
    return (
      <StyledLink
        onClick={handleOnClick}
      >
        <Icon
          size={22}
          color={iconColor}
        />
        <ItemText style={{ color: textColor }}>
          {label}
        </ItemText>
      </StyledLink>
    )
  }

  if (!href) {
    return (
      renderLink(onClick)
    )
  }

  return (
    <Link href={href} passHref>
      {renderLink()}
    </Link>
  )
}

const StyledLink = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 15px;
  cursor: pointer;
`

const ItemText = styled(Text)`
  margin-left: 20px;
`
