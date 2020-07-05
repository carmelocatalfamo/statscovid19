import React, { useState } from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'

import WithNavbar from '../components/WithNavbar'
import { Container, Title, Text } from '../styles/components'
import { findBySlug } from '../utils/regions'
import ProvinceMap from '../components/ProvinceMap'
import { formatNumber } from '../utils/numbers'
import { findByCode, positiveNumbersToColors } from '../utils/provinces'
import ProvinceMapFilters, { options } from '../components/ProvinceMapFilters'
import PositiveChart from '../components/Charts/Positive'
import TestChart from '../components/Charts/Tests'
import RecoveredChart from '../components/Charts/Recovered'
import DailyPositive from '../components/Charts/DailyPositive'
import DeathsChart from '../components/Charts/Deaths'
import DailyRecoveredChart from '../components/Charts/DailyRecovered'
import DailyDeathsChart from '../components/Charts/DailyDeaths'
import HospitalizedChart from '../components/Charts/Hospitalized'

export default ({ match }) => {
  const slug = match.params.region
  const region = findBySlug(slug)

  if (!slug || !region) return <Redirect to='/' />

  const [filter, setFilter] = useState(options[0])
  const allProvinces = useSelector(state => state.dataset.dailyProvinces)
  const totalCases = useSelector(state => state.dataset.dailyRegions
    .filter(r => String(r.codice_regione) === String(region.code))
    .reduce((totalCases, r) => {
      totalCases += r.totale_casi
      return totalCases
    }, 0)
  )

  const provinces = allProvinces.filter(province => {
    return province.codice_regione === region.code && province.lat
  })
  const unassignedData = allProvinces.filter(province => {
    return province.codice_regione === region.code && !province.lat
  })

  const mapTexts = provinces.reduce((texts, province) => {
    const { slug, shortName } = findByCode(province.codice_provincia)

    return Object.assign({
      ...texts,
      [slug]: filter.value === 'positive'
        ? formatNumber(province.totale_casi)
        : shortName
    })
  }, {})

  const mapColors = provinces.reduce((texts, province) => {
    const slug = findByCode(province.codice_provincia)?.slug
    return Object.assign({ ...texts, [slug]: positiveNumbersToColors(province.totale_casi) })
  }, {})

  return (
    <WithNavbar>
      <Container>
        <StyledTitle>
          {region.name}: <span>{formatNumber(totalCases)} casi totali</span>
        </StyledTitle>
        {unassignedData[0].totale_casi > 0 && (
          <StyledText>
            {unassignedData[0].denominazione_provincia}: {formatNumber(unassignedData[0].totale_casi)}
          </StyledText>
        )}
      </Container>

      <Container>
        <ProvinceMapFilters
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
        <PositiveChart regionCode={region.code} />
        <DailyPositive regionCode={region.code} />
        <HospitalizedChart regionCode={region.code} />
        <TestChart regionCode={region.code} />
        <RecoveredChart regionCode={region.code} />
        <DailyRecoveredChart regionCode={region.code} />
        <DeathsChart regionCode={region.code} />
        <DailyDeathsChart regionCode={region.code} />
      </Container>
    </WithNavbar>
  )
}

const StyledTitle = styled(Title)`
  margin-top: 32px;
  text-align: center;

  span {
    color: ${props => props.theme.fonts.text.color};
  }
`

const StyledText = styled(Text)`
  text-align: center;

  span {
    color: ${props => props.theme.fonts.text.color};
  }
`

const Map = styled.div`
  margin: 0 auto;
  max-width: ${props => props.maxWidth};
  font-family: ${props => props.theme.fonts.title.family};
  font-weight: ${props => props.theme.fonts.title.weight.bold};
`
