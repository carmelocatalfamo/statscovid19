import React, { FC, useState } from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'

import { allTimePositive, activePositive } from '../utils/regions'
import { Container } from '../components/commons/Container'
import { CountryApiResponse, RegionApiResponse } from '../models/Api'
import { CountryMap } from '../components/map/Country'
import { CountryMapFilters, PositiveCases, positiveCasesOptions } from '../components/CountryMapFilters'
import { DailyGenericData } from '../components/charts/DailyGenericData'
import { fetchDailyCountry, fetchDailyRegions, fetchCountry } from '../utils/api'
import { formatNumber } from '../utils/numbers'
import { NewPositives } from '../components/charts/NewPositives'
import { Positives as PositiveChart } from '../components/charts/Positives'
import { Tests } from '../components/charts/Tests'
import { Title } from '../components/commons/Title'
import { WithNavbar } from '../components/templates/WithNavbar'
import { wrapper } from '../store/store'

type Props = {
  countryPerDays: CountryApiResponse[]
  dailyCountry: CountryApiResponse
  dailyRegions: RegionApiResponse[]
}

const Home: FC<Props> = ({ countryPerDays, dailyCountry, dailyRegions }) => {
  const router = useRouter()
  const [positiveFilter, setPositiveFilter] = useState(positiveCasesOptions[0])
  const positivesPerRegions = positiveFilter.value === PositiveCases.allTime
    ? allTimePositive(dailyRegions) : activePositive(dailyRegions)
  const positivesInCountry = positiveFilter.value === PositiveCases.allTime
    ? dailyCountry.totale_casi : dailyCountry.totale_positivi
  const mapTexts = positivesPerRegions.reduce(
    (texts, { region, positive }) => Object.assign({
      ...texts,
      [region]: formatNumber(positive)
    }),
    {}
  )
  const mapColors = positivesPerRegions.reduce(
    (texts, { region, color }) => Object.assign({
      ...texts,
      [region]: color
    }),
    {}
  )

  return (
    <WithNavbar>
      <Container>
        <StyledTitle as='h1'>
          COVID-19: <span>{formatNumber(positivesInCountry)}</span> casi {positiveFilter.label} in italia
        </StyledTitle>
      </Container>

      <Container>
        <CountryMapFilters
          value={positiveFilter}
          setPositiveFilter={setPositiveFilter}
        />
      </Container>

      <Container>
        <Map>
          <CountryMap
            onRegionClick={(slug: string) => router.push(`/${slug}`)}
            texts={mapTexts}
            colors={mapColors}
          />
        </Map>
      </Container>

      <Container>
        <PositiveChart data={countryPerDays} />
        <NewPositives data={countryPerDays} />
        <Tests data={countryPerDays} />
        <DailyGenericData data={countryPerDays} />
      </Container>
    </WithNavbar>
  )
}

const Map = styled.div`
  font-family: ${props => props.theme.fonts.title.family};
  font-weight: ${props => props.theme.fonts.title.weight.bold};
`

const StyledTitle = styled(Title)`
  margin: 32px 0px;
  text-align: center;

  span {
    color: ${props => props.theme.colors.highlight};
  }
`

export const getServerSideProps = wrapper.getServerSideProps(
  async () => {
    const countryPerDays = await fetchCountry()
    const dailyCountry = await fetchDailyCountry()
    const dailyRegions = await fetchDailyRegions()

    return {
      props: {
        countryPerDays,
        dailyCountry,
        dailyRegions
      }
    }
  }
)

export default Home
