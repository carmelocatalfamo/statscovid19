import React, { useMemo } from 'react'
import { NextPage } from 'next'

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
    intensiveCare,
    newPositives,
    testPositivesRatio,
    today,
    totalPositives,
    yesterday
  } = useMemo(() => composeData(data), [data])

  return (
    <WithTemplate>
      <Counters
        isLoading={isLoading}
        totalPositives={today?.totale_positivi}
        totalPositivesChanges={today?.variazione_totale_positivi}
        newPositives={today?.nuovi_positivi}
        intensiveCare={today?.terapia_intensiva}
        intensiveCareChanges={
          today?.terapia_intensiva - yesterday?.terapia_intensiva
        }
        lastUpdate={today?.data}
      />
      <TotalPositives size={100} data={totalPositives} />
      <NewPositives size={100} data={newPositives} />
      <TestPositivesRatio size={100} data={testPositivesRatio} />
      <IntensiveCare size={100} data={intensiveCare} />
    </WithTemplate>
  )
}

const composeData = (data: CountryData[] = []) => {
  const [yesterday, today] = data.slice(-2)

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
    intensiveCare,
    newPositives,
    testPositivesRatio,
    today,
    totalPositives,
    yesterday
  }
}

export default Home
