import React, { FC, useState } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import isArray from 'lodash/isArray'
import styled from 'styled-components'

import { Container } from '../components/commons/Container'
import { DailyGenericData } from '../components/charts/DailyGenericData'
import { Error } from '../components/Error'
import { fetchDailyProvinces, fetchDailyRegions, fetchRegions } from '../utils/api'
import { findByCode, positiveNumbersToColors } from '../utils/provinces'
import { findBySlug } from '../utils/regions'
import { formatNumber } from '../utils/numbers'
import { NewPositives } from '../components/charts/NewPositives'
import { Positives as PositiveChart } from '../components/charts/Positives'
import { Province as ProvinceMap } from '../components/map/Province'
import { ProvinceApiResponse, RegionApiResponse } from '../types/api'
import { RegionMapFilters, RegionOptionValues, regionOptionValues } from '../components/RegionMapFilters'
import { Tests } from '../components/charts/Tests'
import { Text } from '../components/commons/Text'
import { Title } from '../components/commons/Title'
import { WithNavbar } from '../components/templates/WithNavbar'
import { wrapper } from '../utils/store'

type Props = {
  totalPositives: number
  dailyProvinces: ProvinceApiResponse[]
  regionPerDay: RegionApiResponse[]
}

const Region: FC<Props> = ({ totalPositives, dailyProvinces, regionPerDay }) => {
  const router = useRouter()
  const [filter, setFilter] = useState(regionOptionValues[0])
  const slug = isArray(router.query.region) ? router.query.region[0] : router.query.region
  const region = findBySlug(slug)

  if (!region) {
    return <Error code={404} title='Questa pagina non è stata trovata' />
  }

  const provinces = dailyProvinces.filter(province => {
    return province.codice_regione === region.code && province.lat
  })

  const unassignedData = dailyProvinces.filter(province => {
    return province.codice_regione === region.code && !province.lat && province.totale_casi > 0
  })

  const mapTexts = provinces.reduce((texts, province) => {
    const { slug, shortName } = findByCode(province.codice_provincia)

    return Object.assign({
      ...texts,
      [slug]: filter.value === RegionOptionValues.positives
        ? formatNumber(province.totale_casi)
        : shortName
    })
  }, {})

  const mapColors = provinces.reduce((texts, province) => {
    const slug = findByCode(province.codice_provincia)?.slug
    return Object.assign({ ...texts, [slug]: positiveNumbersToColors(province.totale_casi) })
  }, {})

  const title = `Coronavirus: numeri e grafici sul COVID-19 in ${region.name}`
  const description = `${region.name}: numeri, grafici e statistiche dei dati ufficiali forniti dalla Protezione Civile sul COVID-19 prima e dopo la fase 2.`

  return (
    <WithNavbar>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta key='og:title' property="og:title" content={title} />
        <meta key='og:description' property="og:description" content={description} />
        <meta key='og:site_name' property="og:site_name" content={title} />
      </Head>

      <Container>
        <StyledTitle>
          {region.name}: <span>{formatNumber(totalPositives)} casi totali</span>
        </StyledTitle>

        {unassignedData.map((date, index) => (
          <StyledText
            key={`${date.denominazione_provincia}_${index}`}
            isLast={(index + 1) === unassignedData.length}
          >
            {date.denominazione_provincia}: {formatNumber(date.totale_casi)}
          </StyledText>
        ))}
      </Container>

      <Container>
        <RegionMapFilters
          value={filter}
          setFilter={setFilter}
        />
      </Container>

      <Container>
        <Map maxWidth={region.maxWidth}>
          <ProvinceMap region={slug} texts={mapTexts} colors={mapColors} />
        </Map>
      </Container>

      <Container>
        <PositiveChart data={regionPerDay} />
        <NewPositives data={regionPerDay} />
        <Tests data={regionPerDay} />
        <DailyGenericData data={regionPerDay} />
      </Container>
    </WithNavbar>
  )
}

const StyledTitle = styled(Title)`
  margin-top: 32px;
  margin-bottom: 32px;
  text-align: center;

  span {
    color: ${props => props.theme.colors.highlight};
  }
`

const StyledText = styled(Text)<{ isLast?: boolean }>`
  text-align: center;
  margin-bottom: ${props => props.isLast ? '32px' : '6px'};

  span {
    color: ${props => props.theme.fonts.text.color};
  }
`

const Map = styled.div<{ maxWidth: string }>`
  margin: 0 auto;
  max-width: ${props => props.maxWidth};
  font-family: ${props => props.theme.fonts.title.family};
  font-weight: ${props => props.theme.fonts.title.weight.bold};
`

export const getServerSideProps = wrapper.getServerSideProps(
  async ({ query }) => {
    const dailyRegions = await fetchDailyRegions()
    const dailyProvinces = await fetchDailyProvinces()
    const regions = await fetchRegions()

    const slug = isArray(query.region) ? query.region[0] : query.region
    const region = findBySlug(slug)
    const totalPositives = dailyRegions
      .filter(r => String(r.codice_regione) === String(region.code))
      .reduce((totalCases, r) => {
        totalCases += r.totale_casi
        return totalCases
      }, 0)

    return {
      props: {
        totalPositives,
        dailyProvinces,
        regionPerDay: regions.filter(r => String(r.codice_regione) === String(region.code))
      }
    }
  }
)

export default Region
