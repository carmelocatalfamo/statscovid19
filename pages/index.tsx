import React from 'react'
import { GetServerSideProps, NextPage } from 'next'

import { Counters } from '../components/Counters'
import { CountryApiResponse } from '../models/Api'
import { fetchCountry } from '../utils/api'
import { WithTemplate } from '../components/WithTemplate'
import { TestPositivesRatio } from '../components/charts/TestPositivesRatio'
import { TotalPositives } from '../components/charts/TotalPositives'

type Props = {
  countryDataPerDay: CountryApiResponse[]
}

const Home: NextPage<Props> = ({ countryDataPerDay }) => {
  const reversedCountryDataPerDay = [...countryDataPerDay].reverse()
  const today = reversedCountryDataPerDay[0]
  const yesterday = reversedCountryDataPerDay[1]

  const testPositivesRatio = countryDataPerDay.map(({ data, nuovi_positivi, tamponi }, index) => ({
    date: data,
    positives: nuovi_positivi,
    tests: tamponi - (countryDataPerDay[index - 1]?.tamponi || 0)
  }))

  const totalPositives = countryDataPerDay.map(({ data, totale_positivi }) => ({
    date: data,
    positives: totale_positivi
  }))

  return (
    <WithTemplate>
      <Counters
        currentPositives={today.totale_positivi}
        currentPositivesChanges={today.variazione_totale_positivi}
        newPositives={today.nuovi_positivi}
        intensiveCare={today.terapia_intensiva}
        intensiveCareChanges={today.terapia_intensiva - yesterday.terapia_intensiva}
        lastUpdate={today.data}
      />
      <TotalPositives data={totalPositives} />
      <TestPositivesRatio data={testPositivesRatio} />
    </WithTemplate>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const data = await fetchCountry()

  return {
    props: {
      countryDataPerDay: data
    }
  }
}

export default Home
