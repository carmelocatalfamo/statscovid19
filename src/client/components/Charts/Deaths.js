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
  ReferenceLine,
  ResponsiveContainer
} from 'recharts'

import dayjs from '../../utils/dayjs'
import LegendContent from './LegendContent'
import { Title } from '../../styles/components'
import { formatNumber, nFormatter } from '../../utils/numbers'
import fixTrentinoCode from './fixTrentinoCode'
import moment from '../../utils/moment'
import DatePicker from '../DatePicker'

export default withTheme(({ theme, regionCode }) => {
  const startDate = useSelector(state => state.datePicker.startDate)
  const endDate = useSelector(state => state.datePicker.endDate)
  let dataPerDay = useSelector(state => {
    if (regionCode) {
      return state.dataset.regions.filter(region => {
        return String(region.codice_regione) === String(regionCode)
      })
    }

    return state.dataset.country
  })

  // NOTE: fix per il trentino alto adige
  if (regionCode === 4) {
    dataPerDay = fixTrentinoCode(dataPerDay)
  }

  const data = dataPerDay
    .map(day => ({ date: day.data, deaths: day.deceduti }))
    .filter(({ date }) => (
      moment(date).isSameOrAfter(startDate) && moment(date).isSameOrBefore(endDate)
    ))

  const CustomLegendComponent = props => {
    return <LegendContent {...props} getDescriptionByKey={getDescriptionByKey} />
  }

  return (
    <Container>
      <StyledTitle>Deceduti</StyledTitle>
      <DatePicker name='deaths' />
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
            dataKey='deaths'
            name='Deceduti'
            stroke={theme.colors.red}
            activeDot={{ r: 8 }}
          />
          <ReferenceLine x='2020-05-04T17:00:00' stroke='#FF9800' label='fase 2' />
        </LineChart>
      </ResponsiveContainer>
    </Container>
  )
})

const getDescriptionByKey = key => {
  switch (key) {
    case 'deaths':
      return ': totale deceduti dall\'inizio della pandemia.'

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
