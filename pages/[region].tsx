import React, { useMemo } from 'react'
import { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import NoSSR from 'react-no-ssr'

import { Counters } from '@/components/Counters'
import { IntensiveCare } from '@/components/charts/IntensiveCare'
import { NewPositives } from '@/components/charts/NewPositives'
import { RegionData } from '@/models/Api'
import { regions } from '@/utils/regions'
import { TestPositivesRatio } from '@/components/charts/TestPositivesRatio'
import { TotalPositives } from '@/components/charts/TotalPositives'
import { useGetDailyRegionDataQuery } from '@/store/services/covid'
import { useWindowSize } from '@/hooks/useWindowSize'
import { WithTemplate } from '@/components/WithTemplate'
import { Zone } from '@/components/Zone'

type Props = {
  region: typeof regions[0]
}

const Region: NextPage<Props> = ({ region }) => {
  const { isSmaller, isSmall } = useWindowSize()
  const { ...props } = useGetDailyRegionDataQuery(region.code)
  const { data, isFetching, isLoading } = props

  const title = `Statistiche COVID-19 ${region.name}`
  const description = `${region.name}: numeri, grafici e statistiche dei dati ufficiali forniti dalla Protezione Civile sul COVID-19 prima e dopo la fase 2.`

  const {
    intensiveCare,
    newPositives,
    testPositivesRatio,
    today,
    totalPositives,
    yesterday
  } = useMemo(() => composeData(data), [data])

  const renderPositivesAndZone = () => {
    if (isSmall || isSmaller) {
      return (
        <NoSSR>
          <Zone offset={0} size={100} regionSlug={region.slug} />
          <TotalPositives size={100} data={totalPositives} />
        </NoSSR>
      )
    }

    return (
      <NoSSR>
        <TotalPositives size={75} data={totalPositives} />
        <Zone regionSlug={region.slug} />
      </NoSSR>
    )
  }

  return (
    <WithTemplate>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta key='og:title' property='og:title' content={title} />
        <meta
          key='og:description'
          property='og:description'
          content={description}
        />
        <meta key='og:site_name' property='og:site_name' content={title} />
      </Head>

      <Counters
        isLoading={isLoading || isFetching}
        totalPositives={today?.totale_positivi}
        totalPositivesChanges={today?.variazione_totale_positivi}
        newPositives={today?.nuovi_positivi}
        intensiveCare={today?.terapia_intensiva}
        intensiveCareChanges={
          today?.terapia_intensiva - yesterday?.terapia_intensiva
        }
        lastUpdate={today?.data}
      />
      {renderPositivesAndZone()}
      <NewPositives size={100} data={newPositives} />
      <TestPositivesRatio size={100} data={testPositivesRatio} />
      <IntensiveCare size={100} data={intensiveCare} />
    </WithTemplate>
  )
}

const composeData = (data: RegionData[] = []) => {
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

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const region = regions.find(({ slug }) => slug === query.region)

  return {
    props: {
      region
    }
  }
}

export default Region
