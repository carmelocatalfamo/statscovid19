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
import { formatNumber, nFormatter } from '../../utils/numbers'

export default withTheme(({ theme, regionCode }) => {
  const dataPerDay = useSelector(state => {
    if (regionCode) {
      return state.dataset.regions.filter(region => {
        return String(region.codice_regione) === String(regionCode)
      })
    }

    return state.dataset.country
  })

  const data = dataPerDay.map(day => ({ date: day.data, recovered: day.dimessi_guariti }))

  const CustomLegendComponent = props => {
    return <LegendContent {...props} getDescriptionByKey={getDescriptionByKey} />
  }

  return (
    <Container>
      <StyledTitle>Dimessi</StyledTitle>
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
            tickFormatter={num => nFormatter(num, 1)}
          />
          <Tooltip
            labelFormatter={date => dayjs(date).format('DD MMMM YYYY')}
            formatter={formatNumber}
          />
          <Legend content={CustomLegendComponent} />
          <Line
            type='monotone'
            dataKey='recovered'
            name='Dimessi guariti'
            stroke={theme.colors.green}
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </Container>
  )
})

const getDescriptionByKey = (key) => {
  switch (key) {
    case 'recovered':
      return ': totale dimessi guariti dall\'inizio della pandemia.'

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
