import React, { useState } from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Helmet from 'react-helmet'

import WithNavbar from '../components/WithNavbar'
import RegionsMap from '../components/RegionsMap'
import MapFilters, { options } from '../components/HomeMapFilters'
import PositiveChart from '../components/Charts/Positive'
import TestChart from '../components/Charts/Tests'
import RecoveredChart from '../components/Charts/Recovered'
import DailyPositive from '../components/Charts/DailyPositive'
import DeathsChart from '../components/Charts/Deaths'
import DailyRecoveredChart from '../components/Charts/DailyRecovered'
import DailyDeathsChart from '../components/Charts/DailyDeaths'
import HospitalizedChart from '../components/Charts/Hospitalized'
import { allTimePositive, activePositive } from '../utils/regions'
import { Container, Title } from '../styles/components'
import { formatNumber } from '../utils/numbers'

export default withRouter(({ history }) => {
  const [positiveFilter, setPositiveFilter] = useState(options[0])
  const regions = useSelector(state => state.dataset.dailyRegions)
  const dailyCountry = useSelector(state => state.dataset.dailyCountry[0])

  const positivePerRegions = positiveFilter.value === 'totali'
    ? allTimePositive(regions) : activePositive(regions)

  const positiveInCountry = positiveFilter.value === 'totali'
    ? dailyCountry.totale_casi : dailyCountry.totale_positivi

  const mapTexts = positivePerRegions.reduce(
    (texts, { region, positive }) => Object.assign({ ...texts, [region]: formatNumber(positive) }),
    {}
  )

  const mapColors = positivePerRegions.reduce(
    (texts, { region, color }) => Object.assign({ ...texts, [region]: color }),
    {}
  )

  return (
    <WithNavbar>
      <Helmet>
        <title>Statistiche COVID-19 Italia</title>
      </Helmet>

      <Container>
        <StyledTitle>
          COVID-19: <span>{formatNumber(positiveInCountry)}</span> casi {positiveFilter.label} in italia
        </StyledTitle>
      </Container>

      <Container>
        <MapFilters
          value={positiveFilter}
          setPositiveFilter={setPositiveFilter}
        />
      </Container>

      <Container>
        <Map>
          <RegionsMap
            onRegionClick={slug => history.push(`/${slug}`)}
            texts={mapTexts}
            colors={mapColors}
          />
        </Map>
      </Container>

      <Container>
        <PositiveChart />
        <DailyPositive />
        <HospitalizedChart />
        <TestChart />
        <RecoveredChart />
        <DailyRecoveredChart />
        <DeathsChart />
        <DailyDeathsChart />
      </Container>
    </WithNavbar>
  )
})

const Map = styled.div`
  font-family: ${props => props.theme.fonts.title.family};
  font-weight: ${props => props.theme.fonts.title.weight.bold};
`

const StyledTitle = styled(Title)`
  margin: 32px 0px;
  text-align: center;

  span {
    color: ${props => props.theme.fonts.text.color};
  }
`
