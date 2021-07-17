import React, { useMemo } from 'react'
import { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import styled from 'styled-components'

import { Counters } from '@/components/Counters'
import { IntensiveCare } from '@/components/charts/IntensiveCare'
import { NewPositives } from '@/components/charts/NewPositives'
import { RegionData } from '@/models/Api'
import { regions } from '@/utils/regions'
import { TestPositivesRatio } from '@/components/charts/TestPositivesRatio'
import { TotalPositives } from '@/components/charts/TotalPositives'
import { useGetDailyRegionDataQuery } from '@/store/services/covid'
import { WithTemplate } from '@/components/WithTemplate'
import { Zone } from '@/components/Zone'

type Props = {
  region: typeof regions[0]
}

const Region: NextPage<Props> = ({ region }) => {
  const { code, name, slug } = region
  const { data, isFetching, isLoading } = useGetDailyRegionDataQuery(code)
  const title = `Statistiche COVID-19 ${name}`
  const description = `${name}: numeri, grafici e statistiche dei dati ufficiali forniti dalla Protezione Civile sul COVID-19 prima e dopo la fase 2.`
  const isLoadingNewData = isLoading || isFetching

  const {
    counters,
    intensiveCare,
    newPositives,
    testPositivesRatio,
    totalPositives
  } = useMemo(() => composeData(data), [data])

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
        isLoading={isLoadingNewData}
        totalPositives={counters.totalPositives}
        totalPositivesChanges={counters.totalPositivesChanges}
        newPositives={counters.newPositives}
        intensiveCare={counters.intensiveCare}
        intensiveCareChanges={counters.intensiveCareChanges}
        lastUpdate={counters.lastUpdate}
      />
      <StyledTotalPositives
        data={totalPositives}
        isLoading={isLoadingNewData}
      />
      <StyledZone regionSlug={slug} />
      <StyledNewPositives data={newPositives} isLoading={isLoadingNewData} />
      <StyledTestPositivesRatio
        data={testPositivesRatio}
        isLoading={isLoadingNewData}
      />
      <StyledIntensiveCare data={intensiveCare} isLoading={isLoadingNewData} />
    </WithTemplate>
  )
}

const composeData = (data: RegionData[] = []) => {
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

  ${props => props.theme.breakpoint.medium} {
    grid-column-end: 4;
  }
`

const StyledZone = styled(Zone)`
  grid-column-start: 1;
  grid-column-end: 5;
  grid-row-start: 3;

  ${props => props.theme.breakpoint.medium} {
    grid-row-start: auto;
    grid-column-start: 4;
    grid-column-end: 5;
  }
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

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const region = regions.find(({ slug }) => slug === query.region)

  return {
    props: { region },
    notFound: !region
  }
}

export default Region
