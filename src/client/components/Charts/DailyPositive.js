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
    newDailyTotalPositive: day.nuovi_positivi,
    newDailyActualPositive: day.variazione_totale_positivi
  }))

  const CustomLegendComponent = props => {
    return <LegendContent {...props} getDescriptionByKey={getDescriptionByKey} />
  }

  return (
    <Container>
      <StyledTitle>Nuovi positivi giornalieri</StyledTitle>
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
          <Legend content={CustomLegendComponent} />
          <Line
            type='monotone'
            dataKey='newDailyTotalPositive'
            name='Nuovi positivi totali'
            stroke={theme.colors.red}
            activeDot={{ r: 8 }}
          />
          <Line
            type='monotone'
            dataKey='newDailyActualPositive'
            name='Variazione positivi attuali'
            stroke={theme.colors.blue}
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </Container>
  )
})

const getDescriptionByKey = key => {
  switch (key) {
    case 'newDailyTotalPositive':
      return ': totale casi positivi del giorno corrente meno totale casi positivi del giorno precedente.'

    case 'newDailyActualPositive':
      return ': totale casi attualmente positivi del giorno corrente meno totale casi attualmente positivi del giorno precedente.'

    default:
      return ''
  }
}

const Container = styled.div`
  width: 100%;
  padding: 32px 0px;
`

const StyledTitle = styled(Title)`
  margin-bottom: 32px;
`
