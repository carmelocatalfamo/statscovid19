import React from 'react'
import { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'

import { Counters } from '../components/Counters'
import { RegionApiResponse } from '../models/Api'
import { fetchRegions } from '../utils/api'
import { WithTemplate } from '../components/WithTemplate'
import { TestPositivesRatio } from '../components/charts/TestPositivesRatio'
import { regions } from '../utils/regions'
import { TotalPositives } from '../components/charts/TotalPositives'
import { Zone } from '../components/Zone'

type Props = {
  regionDataPerDay: RegionApiResponse[]
  region: typeof regions[0]
}

const Region: NextPage<Props> = ({ regionDataPerDay, region }) => {
  const reversedCountryDataPerDay = [...regionDataPerDay].reverse()
  const today = reversedCountryDataPerDay[0]
  const yesterday = reversedCountryDataPerDay[1]
  const title = `Statistiche COVID-19 ${region.name}`
  const description = `${region.name}: numeri, grafici e statistiche dei dati ufficiali forniti dalla Protezione Civile sul COVID-19 prima e dopo la fase 2.`

  const testPositivesRatio = regionDataPerDay.map(({ data, nuovi_positivi, tamponi }, index) => ({
    date: data,
    positives: nuovi_positivi,
    tests: tamponi - (regionDataPerDay[index - 1]?.tamponi || 0)
  }))

  const totalPositives = regionDataPerDay.map(({ data, totale_positivi }) => ({
    date: data,
    positives: totale_positivi
  }))

  return (
    <WithTemplate>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta key='og:title' property="og:title" content={title} />
        <meta key='og:description' property="og:description" content={description} />
        <meta key='og:site_name' property="og:site_name" content={title} />
      </Head>

      <Counters
        currentPositives={today.totale_positivi}
        currentPositivesChanges={today.variazione_totale_positivi}
        newPositives={today.nuovi_positivi}
        intensiveCare={today.terapia_intensiva}
        intensiveCareChanges={today.terapia_intensiva - yesterday.terapia_intensiva}
        lastUpdate={today.data}
      />
      <TotalPositives size={75} data={totalPositives} />
      <Zone regionSlug={region.slug} />
      <TestPositivesRatio size={100} data={testPositivesRatio} />
    </WithTemplate>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const region = regions.find(({ slug }) => slug === query.region)
  const data = await fetchRegions()

  return {
    props: {
      region,
      regionDataPerDay: data.filter(({ codice_regione }) => codice_regione === region.code)
    }
  }
}

export default Region
