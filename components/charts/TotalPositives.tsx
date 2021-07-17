import React, { useEffect, useState } from 'react'
import styled, { useTheme } from 'styled-components'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts'

import { Card } from '@/components/commons/Card'
import { CustomTooltip } from '@/components/charts/CustomTooltip'
import { Loader } from '@/components/charts/Loader'
import { Text } from '@/components/commons/Text'
import { TimeRangeSelect, timeRangeOptions } from '@/components/TimeRangeSelect'
import { toLocaleDate, toLocaleString } from '@/utils/functions'

type Props = {
  data: {
    date: string
    positives: number
  }[]
  isLoading?: boolean
}

const labelMap = {
  positives: 'Positivi'
}

export const TotalPositives = ({ data, isLoading, ...otherProps }: Props) => {
  const theme = useTheme()
  const [timeRange, setTimeRange] = useState(timeRangeOptions[0])
  const axisFontSize = 12
  const axisColor = theme.colors.text

  useEffect(() => {
    try {
      const timeRange = window.localStorage.getItem('timeRangeTotalPositives')
      const savedTimeRange = JSON.parse(timeRange)
      const newValue =
        timeRangeOptions.find(r => r.value === savedTimeRange?.value) ||
        timeRangeOptions[0]
      setTimeRange(newValue)
    } catch (error) {
      setTimeRange(timeRangeOptions[0])
    }
  }, [])

  useEffect(() => {
    window.localStorage.setItem(
      'timeRangeTotalPositives',
      JSON.stringify(timeRange)
    )
  }, [timeRange])

  const renderTitle = () => (
    <Header>
      <Title>Positivi</Title>
      <TimeRangeSelect
        instanceId='test_positives'
        value={timeRange}
        setValue={setTimeRange}
      />
    </Header>
  )

  const filteredData = data.filter(d => {
    const dates = timeRange?.getDates()
    if (!dates) return true
    const date = new Date(d.date).getTime()
    return date >= dates.from && date <= dates.to
  })

  return (
    <Card {...otherProps} title={renderTitle}>
      <Loader isLoading={isLoading}>
        <ResponsiveContainer height={300}>
          <LineChart data={filteredData}>
            <CartesianGrid strokeDasharray='3' stroke={theme.colors.content} />
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
              formatter={(value, label) =>
                `${labelMap[label]}: ${toLocaleString(value)}`
              }
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
      </Loader>
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
