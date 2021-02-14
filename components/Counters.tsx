import React, { FC } from 'react'
import { useTheme } from 'styled-components'
import { RiVirusLine, RiHospitalLine, RiCalendarEventFill } from 'react-icons/ri'
import { FaUserInjured } from 'react-icons/fa'

import { Card } from './commons/Card'
import { CounterCard } from './CounterCard'
import { toLocaleString } from '../utils/functions'

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
  const lastUpdateFormatted = new Date(lastUpdate).toLocaleDateString('it-IT')

  return (
    <>
      <Card size={25}>
        <CounterCard
          title={toLocaleString(currentPositives)}
          change={currentPositivesChanges}
          description='Positivi attuali'
          color={theme.colors.primary}
          Icon={RiVirusLine}
        />
      </Card>
      <Card offset={25} size={25}>
        <CounterCard
          title={toLocaleString(newPositives)}
          description='Nuovi positivi'
          color={theme.colors.gradient1}
          Icon={FaUserInjured}
        />
      </Card>
      <Card offset={50} size={25}>
        <CounterCard
          title={toLocaleString(intensiveCare)}
          change={intensiveCareChanges}
          description='In terapia intensiva'
          color={theme.colors.gradient2}
          Icon={RiHospitalLine}
        />
      </Card>
      <Card offset={75} size={25} highlighted={theme.colors.primary}>
        <CounterCard
          title={lastUpdateFormatted}
          titleColorInverse
          description='Ultimo aggiornamento'
          color='#FFFFFF'
          Icon={RiCalendarEventFill}
        />
      </Card>
    </>
  )
}
