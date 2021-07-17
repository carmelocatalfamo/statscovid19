import React, { useMemo } from 'react'
import { NextPage } from 'next'
import styled from 'styled-components'

import { Counters } from '@/components/Counters'
import { IntensiveCare } from '@/components/charts/IntensiveCare'
import { NewPositives } from '@/components/charts/NewPositives'
import { TestPositivesRatio } from '@/components/charts/TestPositivesRatio'
import { TotalPositives } from '@/components/charts/TotalPositives'
import { WithTemplate } from '@/components/WithTemplate'
import { useGetDailyCountryDataQuery } from '@/store/services/covid'
import { CountryData } from '@/models/Api'

const Home: NextPage = () => {
  const { data, isLoading } = useGetDailyCountryDataQuery()

  const {
    counters,
    intensiveCare,
    newPositives,
    testPositivesRatio,
    totalPositives
  } = useMemo(() => composeData(data), [data])

  return (
    <WithTemplate>
      <Counters
        isLoading={isLoading}
        totalPositives={counters.totalPositives}
        totalPositivesChanges={counters.totalPositivesChanges}
        newPositives={counters.newPositives}
        intensiveCare={counters.intensiveCare}
        intensiveCareChanges={counters.intensiveCareChanges}
        lastUpdate={counters.lastUpdate}
      />
      <StyledTotalPositives data={totalPositives} isLoading={isLoading} />
      <StyledNewPositives data={newPositives} isLoading={isLoading} />
      <StyledTestPositivesRatio
        data={testPositivesRatio}
        isLoading={isLoading}
      />
      <StyledIntensiveCare data={intensiveCare} isLoading={isLoading} />
    </WithTemplate>
  )
}

const composeData = (data: CountryData[] = []) => {
  const [yesterday, today] = data.slice(-2)

  const counters = {
    intensiveCare: today?.terapia_intensiva,
    intensiveCareChanges:
      today?.terapia_intensiva - yesterday?.terapia_intensiva,
    lastUpdate: today?.data,
    newPositives: today?.nuovi_positivi,
    totalPositives: today?.totale_positivi,
    totalPositivesChanges: today?.variazione_totale_positivi
  }

  const testPositivesRatio = data.map(
    ({ data: date, nuovi_positivi, tamponi }, index) => ({
      date,
      positives: nuovi_positivi,
      tests: tamponi - (data[index - 1]?.tamponi || 0)
    })
  )

  const totalPositives = data.map(({ data, totale_positivi }) => ({
    date: data,
    positives: totale_positivi
  }))

  const newPositives = data.map(({ data, nuovi_positivi }) => ({
    date: data,
    positives: nuovi_positivi
  }))

  const intensiveCare = data.map(({ data, terapia_intensiva }) => ({
    date: data,
    intensiveCare: terapia_intensiva
  }))

  return {
    counters,
    intensiveCare,
    newPositives,
    testPositivesRatio,
    totalPositives
  }
}

const StyledTotalPositives = styled(TotalPositives)`
  grid-column-start: 1;
  grid-column-end: 5;
`

const StyledNewPositives = styled(NewPositives)`
  grid-column-start: 1;
  grid-column-end: 5;
`

const StyledTestPositivesRatio = styled(TestPositivesRatio)`
  grid-column-start: 1;
  grid-column-end: 5;
`

const StyledIntensiveCare = styled(IntensiveCare)`
  grid-column-start: 1;
  grid-column-end: 5;
`

export default Home
