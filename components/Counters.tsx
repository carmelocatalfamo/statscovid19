import React, { useMemo } from 'react'
import { FaUserInjured } from 'react-icons/fa'
import {
  RiCalendarEventFill,
  RiHospitalLine,
  RiVirusLine
} from 'react-icons/ri'
import NoSSR from 'react-no-ssr'
import styled, { useTheme } from 'styled-components'

import { Card } from '@/components/commons/Card'
import { CounterCard } from '@/components/CounterCard'
import { toLocaleString } from '@/utils/functions'

type Props = {
  intensiveCare: number
  intensiveCareChanges: number
  isLoading?: boolean
  lastUpdate: string
  newPositives: number
  totalPositives: number
  totalPositivesChanges: number
}

export const Counters = ({ isLoading, ...otherProps }: Props) => {
  const { colors } = useTheme()
  const cards = useMemo(() => {
    const {
      intensiveCare,
      intensiveCareChanges,
      lastUpdate,
      newPositives,
      totalPositives,
      totalPositivesChanges
    } = otherProps

    return [
      {
        CardComponent: FirstCard,
        change: totalPositivesChanges,
        color: colors.primary,
        description: 'Positivi attuali',
        highlighted: undefined,
        icon: RiVirusLine,
        title: totalPositives && toLocaleString(totalPositives)
      },
      {
        CardComponent: SecondCard,
        change: undefined,
        color: colors.gradient1,
        description: 'Nuovi positivi',
        highlighted: undefined,
        icon: FaUserInjured,
        title: newPositives && toLocaleString(newPositives)
      },
      {
        CardComponent: ThirdCard,
        change: intensiveCareChanges,
        color: colors.gradient2,
        description: 'In terapia intensiva',
        highlighted: undefined,
        icon: RiHospitalLine,
        title: intensiveCare && toLocaleString(intensiveCare)
      },
      {
        CardComponent: FourthCard,
        change: undefined,
        color: colors.white,
        description: 'Ultimo aggiornamento',
        highlighted: colors.primary,
        icon: RiCalendarEventFill,
        title: new Date(lastUpdate).toLocaleDateString('it-IT')
      }
    ]
  }, [otherProps])

  return (
    <NoSSR>
      {cards.map(({ CardComponent, ...card }) => (
        <CardComponent key={card.description} highlighted={card.highlighted}>
          <CounterCard
            color={card.color}
            description={card.description}
            change={card.change}
            Icon={card.icon}
            isLoading={isLoading}
            title={card.title}
            highlighted={card.highlighted}
          />
        </CardComponent>
      ))}
    </NoSSR>
  )
}

const FirstCard = styled(Card)`
  grid-column-start: 1;
  grid-column-end: 5;

  ${props => props.theme.breakpoint.small} {
    grid-column-start: 1;
    grid-column-end: 3;
  }

  ${props => props.theme.breakpoint.medium} {
    grid-column-start: 1;
    grid-column-end: 2;
  }
`

const SecondCard = styled(Card)`
  grid-column-start: 1;
  grid-column-end: 5;

  ${props => props.theme.breakpoint.small} {
    grid-column-start: 3;
    grid-column-end: 5;
  }

  ${props => props.theme.breakpoint.medium} {
    grid-column-start: 2;
    grid-column-end: 3;
  }
`

const ThirdCard = styled(Card)`
  grid-column-start: 1;
  grid-column-end: 5;

  ${props => props.theme.breakpoint.small} {
    grid-column-start: 1;
    grid-column-end: 3;
  }

  ${props => props.theme.breakpoint.medium} {
    grid-column-start: 3;
    grid-column-end: 4;
  }
`

const FourthCard = styled(Card)`
  grid-column-start: 1;
  grid-column-end: 5;

  ${props => props.theme.breakpoint.small} {
    grid-column-start: 3;
    grid-column-end: 5;
  }

  ${props => props.theme.breakpoint.medium} {
    grid-column-start: 4;
    grid-column-end: 5;
  }
`
