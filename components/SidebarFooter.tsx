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
  align-items: center;
  color: ${props => props.theme.colors.text};
  display: flex;
  font-family: ${props => props.theme.fonts.text.family};
  font-size: 12px;
  justify-content: flex-start;
  margin-left: 15px;
  margin-top: 10px;
  text-decoration: none;
  transition: 0.2s ease-in-out color;

  svg {
    margin-right: 6px;
    transition: 0.2s ease-in-out fill;
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
