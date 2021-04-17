import React, { FC } from 'react'
import { useTheme } from 'styled-components'
import { RiVirusLine, RiHospitalLine, RiCalendarEventFill } from 'react-icons/ri'
import { FaUserInjured } from 'react-icons/fa'
import NoSSR from 'react-no-ssr'

import { Card, CardSize, CardOffset } from './commons/Card'
import { CounterCard } from './CounterCard'
import { toLocaleString } from '../utils/functions'
import { useWindowSize } from '../hooks/useWindowSize'

type Props = {
  currentPositives: number
  currentPositivesChanges: number
  newPositives: number
  intensiveCare: number
  intensiveCareChanges: number
  lastUpdate: string
}

export const Counters: FC<Props> = ({
  currentPositives,
  currentPositivesChanges,
  newPositives,
  intensiveCare,
  intensiveCareChanges,
  lastUpdate
}) => {
  const theme = useTheme()
  const { width } = useWindowSize()
  const lastUpdateFormatted = new Date(lastUpdate).toLocaleDateString('it-IT')
  const isMedium = width <= 980
  const isSmall = width <= 570

  const cards = {
    first: {
      offset: undefined,
      size: isSmall ? 100 : isMedium ? 50 : 25
    },
    second: {
      offset: isSmall ? 0 : isMedium ? 50 : 25,
      size: isSmall ? 100 : isMedium ? 50 : 25
    },
    third: {
      offset: isSmall ? 0 : isMedium ? undefined : 50,
      size: isSmall ? 100 : isMedium ? 50 : 25
    },
    fourth: {
      offset: isSmall ? 0 : isMedium ? 50 : 75,
      size: isSmall ? 100 : isMedium ? 50 : 25
    }
  }

  return (
    <NoSSR>
      <Card
        offset={cards.first.offset as CardOffset}
        size={cards.first.size as CardSize}
      >
        <CounterCard
          title={toLocaleString(currentPositives)}
          change={currentPositivesChanges}
          description='Positivi attuali'
          color={theme.colors.primary}
          Icon={RiVirusLine}
        />
      </Card>
      <Card
        offset={cards.second.offset as CardOffset}
        size={cards.second.size as CardSize}
      >
        <CounterCard
          title={toLocaleString(newPositives)}
          description='Nuovi positivi'
          color={theme.colors.gradient1}
          Icon={FaUserInjured}
        />
      </Card>
      <Card
        offset={cards.third.offset as CardOffset}
        size={cards.third.size as CardSize}
      >
        <CounterCard
          title={toLocaleString(intensiveCare)}
          change={intensiveCareChanges}
          description='In terapia intensiva'
          color={theme.colors.gradient2}
          Icon={RiHospitalLine}
        />
      </Card>
      <Card
        offset={cards.fourth.offset as CardOffset}
        size={cards.fourth.size as CardSize}
        highlighted={theme.colors.primary}
      >
        <CounterCard
          title={lastUpdateFormatted}
          titleColorInverse
          description='Ultimo aggiornamento'
          color='#FFFFFF'
          Icon={RiCalendarEventFill}
        />
      </Card>
    </NoSSR>
  )
}
