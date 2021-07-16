import React from 'react'
import { FaUserInjured } from 'react-icons/fa'
import {
  RiCalendarEventFill,
  RiHospitalLine,
  RiVirusLine
} from 'react-icons/ri'
import { useTheme } from 'styled-components'
import NoSSR from 'react-no-ssr'

import { Card, CardSize, CardOffset } from '@/components/commons/Card'
import { CounterCard } from '@/components/CounterCard'
import { toLocaleString } from '@/utils/functions'
import { useWindowSize } from '@/hooks/useWindowSize'

type Props = {
  intensiveCare: number
  intensiveCareChanges: number
  isLoading?: boolean
  lastUpdate: string
  newPositives: number
  totalPositives: number
  totalPositivesChanges: number
}

export const Counters = ({
  intensiveCare,
  intensiveCareChanges,
  isLoading,
  lastUpdate,
  newPositives,
  totalPositives,
  totalPositivesChanges
}: Props) => {
  const theme = useTheme()
  const { isSmall, isSmaller } = useWindowSize()

  const cards = [
    {
      change: totalPositivesChanges,
      color: theme.colors.primary,
      description: 'Positivi attuali',
      highlighted: undefined,
      icon: RiVirusLine,
      offset: undefined,
      size: isSmaller ? 100 : isSmall ? 50 : 25,
      title: totalPositives && toLocaleString(totalPositives)
    },
    {
      change: undefined,
      color: theme.colors.gradient1,
      description: 'Nuovi positivi',
      highlighted: undefined,
      icon: FaUserInjured,
      offset: isSmaller ? 0 : isSmall ? 50 : 25,
      size: isSmaller ? 100 : isSmall ? 50 : 25,
      title: newPositives && toLocaleString(newPositives)
    },
    {
      change: intensiveCareChanges,
      color: theme.colors.gradient2,
      description: 'In terapia intensiva',
      highlighted: undefined,
      icon: RiHospitalLine,
      offset: isSmaller ? 0 : isSmall ? undefined : 50,
      size: isSmaller ? 100 : isSmall ? 50 : 25,
      title: intensiveCare && toLocaleString(intensiveCare)
    },
    {
      change: undefined,
      color: '#FFFFFF',
      description: 'Ultimo aggiornamento',
      highlighted: theme.colors.primary,
      icon: RiCalendarEventFill,
      offset: isSmaller ? 0 : isSmall ? 50 : 75,
      size: isSmaller ? 100 : isSmall ? 50 : 25,
      title: new Date(lastUpdate).toLocaleDateString('it-IT')
    }
  ]

  return (
    <NoSSR>
      {cards.map(card => (
        <Card
          key={card.description}
          offset={card.offset as CardOffset}
          size={card.size as CardSize}
          highlighted={card.highlighted}
        >
          <CounterCard
            color={card.color}
            description={card.description}
            change={card.change}
            Icon={card.icon}
            isLoading={isLoading}
            title={card.title}
            highlighted={card.highlighted}
          />
        </Card>
      ))}
    </NoSSR>
  )
}
