import React from 'react'
import { IoIosBug, IoMdLock, IoMdMail } from 'react-icons/io'
import Link from 'next/link'
import styled, { useTheme } from 'styled-components'

type Props = {
  onItemClick?: () => void
}

export const SidebarFooter = ({ onItemClick }: Props) => {
  const { colors } = useTheme()

  return (
    <Footer>
      <span onClick={onItemClick}>
        <Link href='/privacy' passHref>
          <ExternalLink>
            <IoMdLock color={colors.text} size={16} />
            Privacy Policy
          </ExternalLink>
        </Link>
      </span>

      <span onClick={onItemClick}>
        <ExternalLink href='mailto:info@statscovid19.it'>
          <IoMdMail color={colors.text} size={16} />
          info@statscovid19.it
        </ExternalLink>
      </span>

      <span onClick={onItemClick}>
        <ExternalLink
          href='https://github.com/carmelocatalfamo/statscovid19/issues'
          target='_blank'
        >
          <IoIosBug color={colors.text} size={16} />
          Segnalazione problemi
        </ExternalLink>
      </span>
    </Footer>
  )
}

const ExternalLink = styled.a`
  font-family: ${props => props.theme.fonts.text.family};
  color: ${props => props.theme.colors.text};
  font-size: 12px;
  text-decoration: none;
  transition: 0.2s ease-in-out color;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 10px;
  margin-left: 15px;

  svg {
    transition: 0.2s ease-in-out fill;
    margin-right: 6px;
  }

  &:hover {
    color: ${props => props.theme.colors.title};

    svg {
      fill: ${props => props.theme.colors.title};
    }
  }
`

const Footer = styled.div`
  padding-top: 30px;
`
