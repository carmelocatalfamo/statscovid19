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
import { Text } from '@/components/commons/Text'
import { CustomTooltip } from '@/components/charts/CustomTooltip'
import { Loader } from '@/components/charts/Loader'
import { toLocaleDate } from '@/utils/functions'
import { TimeRangeSelect, timeRangeOptions } from '@/components/TimeRangeSelect'

type Props = {
  data: {
    date: string
    positives: number
    tests: number
  }[]
  isLoading?: boolean
}

const labelMap = {
  ratio: 'Percentuale'
}

export const TestPositivesRatio = ({
  data,
  isLoading,
  ...otherProps
}: Props) => {
  const theme = useTheme()
  const [timeRange, setTimeRange] = useState(timeRangeOptions[0])
  const axisFontSize = 12
  const axisColor = theme.colors.text

  useEffect(() => {
    try {
      const timeRange = window.localStorage.getItem('timeRange')
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
    window.localStorage.setItem('timeRange', JSON.stringify(timeRange))
  }, [timeRange])

  const renderTitle = () => (
    <Header>
      <Title>Andamento rapporto Tamponi/Positivi</Title>
      <TimeRangeSelect
        instanceId='test_positives_ratio'
        value={timeRange}
        setValue={setTimeRange}
      />
    </Header>
  )

  const filteredData = data
    .map(d => {
      let percentage =
        d.tests > 0 ? Number(((d.positives * 100) / d.tests).toFixed(2)) : 0
      if (percentage > 100) percentage = 100
      if (percentage < 0) percentage = 0

      return {
        ratio: percentage,
        date: d.date
      }
    })
    .filter(d => {
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
              tickFormatter={v => `${v}%`}
            />
            <Tooltip
              content={CustomTooltip}
              labelFormatter={v => toLocaleDate(v)}
              formatter={(value, label) => `${labelMap[label]}: ${value}%`}
            />
            <Line
              type='monotone'
              dataKey='ratio'
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
