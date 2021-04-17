import React, { FC, useEffect, useState } from 'react'
import styled, { useTheme } from 'styled-components'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

import { Card, CardSize } from '../commons/Card'
import { Text } from '../commons/Text'
import { CustomTooltip } from './CustomTooltip'
import { toLocaleDate, toLocaleString } from '../../utils/functions'
import { TimeRangeSelect, timeRangeOptions } from '../TimeRangeSelect'

type Props = {
  size: CardSize
  data: {
    date: string
    positives: number
  }[]
}

const labelMap = {
  positives: 'Nuovi positivi'
}

export const NewPositives: FC<Props> = ({ data, size }) => {
  const theme = useTheme()
  const [timeRange, setTimeRange] = useState(timeRangeOptions[0])
  const axisFontSize = 12
  const axisColor = theme.colors.text

  useEffect(() => {
    try {
      const timeRange = window.localStorage.getItem('timeRangeNewPositives')
      const savedTimeRange = JSON.parse(timeRange)
      const newValue = timeRangeOptions.find(r => r.value === savedTimeRange?.value) || timeRangeOptions[0]
      setTimeRange(newValue)
    } catch (error) {
      setTimeRange(timeRangeOptions[0])
    }
  }, [])

  useEffect(() => {
    window.localStorage.setItem('timeRangeNewPositives', JSON.stringify(timeRange))
  }, [timeRange])

  const _data = data
    .filter(d => {
      const dates = timeRange?.getDates()
      if (!dates) return true
      const date = new Date(d.date).getTime()
      return date >= dates.from && date <= dates.to
    })

  return (
    <Card
      size={size}
      title={() => (
        <Header>
          <Title>Nuovi Positivi</Title>
          <TimeRangeSelect
            instanceId='new_positives'
            value={timeRange}
            setValue={setTimeRange}
          />
        </Header>
      )}
    >
      <ResponsiveContainer height={300}>
        <LineChart data={_data}>
          <CartesianGrid
            strokeDasharray='3'
            stroke={theme.colors.content}
          />
          <XAxis
            dataKey='date'
            fontSize={axisFontSize}
            fontFamily={theme.fonts.text.family}
            color={axisColor}
            tickFormatter={v => toLocaleDate(v)}
          />
          <YAxis
            fontSize={axisFontSize}
            fontFamily={theme.fonts.text.family}
            color={axisColor}
            tickFormatter={v => toLocaleString(v)}
          />
          <Tooltip
            content={CustomTooltip}
            labelFormatter={v => toLocaleDate(v)}
            formatter={(value, label) => `${labelMap[label]}: ${toLocaleString(value)}`}
          />
          <Line
            type='monotone'
            dataKey='positives'
            stroke={theme.colors.primary}
            dot={{ r: 0, fill: theme.colors.content }}
            activeDot={{ r: 4, fill: theme.colors.primary }}
          />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  )
}

const Title = styled(Text)`
  color: ${props => props.theme.colors.title};
  font-size: 16px;
  font-weight: bold;
  text-align: right;
  margin-bottom: 10px;

  ${props => props.theme.breakpoint.small} {
    text-align: left;
    margin-bottom: 0px;
  }
`

const Header = styled.div`
  align-items: flex-end;
  flex-direction: column;
  display: flex;
  justify-content: space-between;
  padding: 22px 30px;
  border-bottom: 2px solid ${props => props.theme.colors.content};

  ${props => props.theme.breakpoint.small} {
    align-items: center;
    flex-direction: row;
  }
`
