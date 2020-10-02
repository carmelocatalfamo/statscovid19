import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import styled, { useTheme } from 'styled-components'
import { MdBrightness1 } from 'react-icons/md'
import {
  CartesianGrid,
  Legend,
  LegendPayload,
  LegendProps,
  Line,
  LineChart,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  TooltipProps,
  XAxis,
  YAxis
} from 'recharts'

import { Text } from '../commons/Text'
import { Title } from '../commons/Title'
import { compressNumber, formatNumber } from '../../utils/numbers'
import { moment } from '../../utils/moment'
import { DatePicker } from '../commons/DatePicker'
import { State } from '../../reducers'

type Props = {
  data: any[]
}

const Positives: FC<Props> = ({ data }) => {
  const theme = useTheme()
  const startDate = useSelector<State, moment.Moment>(state => moment(state.datePicker.startDate))
  const endDate = useSelector<State, moment.Moment>(state => moment(state.datePicker.endDate))

  const dataPerDay = data
    .map((day, index, list) => ({
      date: day.data,
      positivesIncrement: day.totale_positivi - (list[index - 1]?.totale_positivi || 0),
      actualPositives: day.totale_positivi
    }))
    .filter(({ date }) => (
      moment(date).isSameOrAfter(startDate, 'days') &&
      moment(date).isSameOrBefore(endDate, 'days')
    ))

  const renderTooltip = (props: TooltipProps) => {
    if (!props.active) return null

    return (
      <TooltipContainer>
        <TooltipDate>{moment(props.label).format('DD MMMM YYYY')}</TooltipDate>
        {props.payload?.map((item) => (
          <TooltipItem key={item.dataKey.toString()}>
            <span>{item.name}:</span> {formatNumber(Number(item.value))}
          </TooltipItem>
        ))}
        <TooltipItem>
          <span>Differenza:</span> {formatNumber(Number(props.payload[0].payload.positivesIncrement))}
        </TooltipItem>
      </TooltipContainer>
    )
  }

  const renderLegend = (props: LegendProps) => {
    const text = {
      actualPositives: {
        label: 'Positivi attuali',
        description: 'casi attualmente positivi in italia'
      }
    }

    return (
      <LegendContaner>
        {props.payload.map((legend: LegendPayload & { dataKey: string }) => {
          const label = text[legend.dataKey].label
          const description = text[legend.dataKey].description

          return (
            <LegendLabel key={legend.dataKey}>
              <LegendIcon color={legend.color} />
              <strong>{label}</strong>{description ? `: ${description}` : description}
            </LegendLabel>
          )
        })}
      </LegendContaner>
    )
  }

  return (
    <Container>
      <StyledTitle>Positivi</StyledTitle>
      <DatePicker name='positives' />
      <StyledResponsiveContainer width='100%' height={500}>
        <LineChart data={dataPerDay}>
          <CartesianGrid strokeDasharray='0 0' stroke={theme.charts.stroke} strokeWidth='1' strokeOpacity='0.4' />
          <XAxis
            dataKey='date'
            stroke={theme.charts.axis}
            tickFormatter={date => moment(date).format('DD/MM')}
          />
          <YAxis
            stroke={theme.charts.axis}
            tickFormatter={num => compressNumber(num, 1)}
          />
          <Tooltip content={renderTooltip} />
          <Legend content={renderLegend} />
          <Line
            type='monotone'
            dataKey='actualPositives'
            name='Positivi attuali'
            stroke={theme.charts.lines[0]}
            dot={{ fill: theme.charts.lines[0] }}
            activeDot={{ r: 8 }}
          />
          <ReferenceLine x='2020-05-04T17:00:00' stroke={theme.colors.highlight} label='FASE 2' />
        </LineChart>
      </StyledResponsiveContainer>
    </Container>
  )
}

const StyledResponsiveContainer = styled(ResponsiveContainer)`
  font-family: ${props => props.theme.fonts.title.family};
`

const Container = styled.div`
  width: 100%;
  padding: 32px 0px;
`

const StyledTitle = styled(Title)`
  margin-bottom: 24px;
`

const TooltipContainer = styled.div`
  background-color: ${props => props.theme.colors.backgroundDarker};
  padding: 14px;
`

const TooltipDate = styled(Title).attrs({ as: 'h3' })`
  color: ${props => props.theme.colors.title};
  text-transform: uppercase;
  font-size: 16px;
`

const TooltipItem = styled(Title).attrs({ as: 'p' })`
  color: ${props => props.theme.colors.title};
  text-transform: uppercase;
  font-size: 16px;
  margin-top: 5px;

  span {
    color: ${props => props.theme.colors.highlight};
  }
`

const LegendContaner = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  margin: 16px 0px;
`

const LegendLabel = styled(Text)`
  font-size: 16px;
  margin: 2px 16px;

  strong {
    font-family: ${props => props.theme.fonts.title.family};
    text-transform: uppercase;
  }
`

const LegendIcon = styled(MdBrightness1)`
  vertical-align: middle;
  margin-right: 5px;
  margin-bottom: 3px;
`

export { Positives }
