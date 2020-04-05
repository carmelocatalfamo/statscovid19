import React from 'react'
import { useSelector } from 'react-redux'
import styled, { withTheme } from 'styled-components'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts'

import dayjs from '../../utils/dayjs'
import LegendContent from './LegendContent'
import { Title } from '../../styles/components'
import { formatNumber } from '../../utils/numbers'

export default withTheme(({ theme, regionCode }) => {
  const dataPerDay = useSelector(state => {
    if (regionCode) {
      return state.dataset.regions.filter(region => {
        return String(region.codice_regione) === String(regionCode)
      })
    }

    return state.dataset.country
  })

  const data = dataPerDay.map(day => ({
    date: day.data,
    hospitalized: day.ricoverati_con_sintomi,
    intensiveCare: day.terapia_intensiva,
    homeConfinement: day.isolamento_domiciliare
  }))

  return (
    <Container>
      <StyledTitle>Ricoverati</StyledTitle>
      <ResponsiveContainer width='100%' height={500}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis
            dataKey='date'
            stroke={theme.fonts.text.color}
            tickFormatter={date => dayjs(date).format('DD/MM')}
          />
          <YAxis
            stroke={theme.fonts.text.color}
            tickFormatter={formatNumber}
          />
          <Tooltip
            labelFormatter={date => dayjs(date).format('DD MMMM YYYY')}
            formatter={formatNumber}
          />
          <Legend content={LegendContent} />
          <Line
            type='monotone'
            dataKey='hospitalized'
            name='Ricoverati con sintomi'
            stroke={theme.colors.violet}
            activeDot={{ r: 8 }}
          />
          <Line
            type='monotone'
            dataKey='intensiveCare'
            name='Terapia intensiva'
            stroke={theme.colors.red}
            activeDot={{ r: 8 }}
          />
          <Line
            type='monotone'
            dataKey='homeConfinement'
            name='Isolamento domiciliare'
            stroke={theme.colors.blue}
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </Container>
  )
})

const Container = styled.div`
  width: 100%;
  padding: 32px 0px;
`

const StyledTitle = styled(Title)`
  margin-bottom: 32px;
`
