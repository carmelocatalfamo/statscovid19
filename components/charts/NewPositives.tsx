import React, { useEffect, useState } from 'react'
import styled, { useTheme } from 'styled-components'
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
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
  positives: 'Nuovi positivi'
}

export const NewPositives = ({ data, isLoading, ...otherProps }: Props) => {
  const { colors, fonts } = useTheme()
  const [timeRange, setTimeRange] = useState(timeRangeOptions[0])
  const axisFontSize = 12
  const axisColor = colors.text

  useEffect(() => {
    try {
      const timeRange = window.localStorage.getItem('timeRangeNewPositives')
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
      'timeRangeNewPositives',
      JSON.stringify(timeRange)
    )
  }, [timeRange])

  const renderTitle = () => (
    <Header>
      <Title>Nuovi Positivi</Title>
      <TimeRangeSelect
        instanceId='new_positives'
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
            <CartesianGrid strokeDasharray='3' stroke={colors.content} />
            <XAxis
              dataKey='date'
              fontSize={axisFontSize}
              fontFamily={fonts.text.family}
              color={axisColor}
              tickFormatter={v => toLocaleDate(v)}
            />
            <YAxis
              fontSize={axisFontSize}
              fontFamily={fonts.text.family}
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
              stroke={colors.primary}
              dot={{ r: 0, fill: colors.content }}
              activeDot={{ r: 4, fill: colors.primary }}
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
  margin-bottom: 10px;
  text-align: right;

  ${props => props.theme.breakpoint.small} {
    margin-bottom: 0px;
    text-align: left;
  }
`

const Header = styled.div`
  align-items: flex-end;
  border-bottom: 2px solid ${props => props.theme.colors.content};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 22px 30px;

  ${props => props.theme.breakpoint.small} {
    align-items: center;
    flex-direction: row;
  }
`
