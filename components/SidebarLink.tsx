import React from 'react'
import { IconType } from 'react-icons'
import Link from 'next/link'
import styled, { useTheme } from 'styled-components'

import { Text } from '@/components/commons/Text'

type Props = {
  active?: boolean
  href?: string
  Icon: IconType
  label: string
  onClick?: () => void
}

export const SidebarLink = ({ active, href, Icon, label, onClick }: Props) => {
  const { colors } = useTheme()
  const iconColor = active ? colors.primary : colors.text
  const textColor = active ? colors.title : colors.text

  const renderLink = (handleOnClick?: () => void) => {
    return (
      <StyledLink onClick={handleOnClick}>
        <Icon size={22} color={iconColor} />
        <ItemText style={{ color: textColor }}>{label}</ItemText>
      </StyledLink>
    )
  }

  if (!href) {
    return renderLink(onClick)
  }

  return (
    <Link href={href} passHref>
      {renderLink()}
    </Link>
  )
}

const StyledLink = styled.a`
  align-items: center;
  cursor: pointer;
  display: flex;
  padding: 15px;
  text-decoration: none;
`

const ItemText = styled(Text)`
  margin-left: 20px;
`
