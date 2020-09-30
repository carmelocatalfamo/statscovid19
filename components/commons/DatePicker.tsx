import 'react-dates/initialize'
import React, { FC, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import { DateRangePicker } from 'react-dates'

import { changeStartDate, changeEndDate } from '../../actions'
import { moment } from '../../utils/moment'
import { State } from '../../reducers'
import { Title } from './Title'

type Props = {
  name: string
}

const DatePicker: FC<Props> = ({ name }) => {
  const dispatch = useDispatch()
  const startDate = useSelector<State, moment.Moment | null>(state => moment(state.datePicker.startDate))
  const endDate = useSelector<State, moment.Moment | null>(state => moment(state.datePicker.endDate))
  const [focusedInput, setFocusedInput] = useState(null)

  const onDatesChange = ({ startDate, endDate }) => {
    console.log(startDate, endDate)
    dispatch(changeStartDate(startDate))
    dispatch(changeEndDate(endDate || null))
  }

  const onFullPeriodClick = () => {
    dispatch(changeStartDate(moment().date(24).month(1).year(2020)))
    dispatch(changeEndDate(moment()))
  }

  const onLastTwoWeeksClick = () => {
    dispatch(changeStartDate(moment().subtract(1, 'month')))
    dispatch(changeEndDate(moment()))
  }

  return (
    <Container>
      <DatePickerContainer>
        <FiltersText>Periodo</FiltersText>
        <DateRangePicker
          displayFormat='DD/MM/YYYY'
          startDate={startDate || null}
          startDateId={`${name}_start_date_id`}
          endDate={endDate || null} // momentPropTypes.momentObj or null,
          endDateId={`${name}_end_date_id`} // PropTypes.string.isRequired,
          onDatesChange={onDatesChange} // PropTypes.func.isRequired,
          focusedInput={focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
          onFocusChange={setFocusedInput}
          isOutsideRange={(date) => moment(date).isAfter(moment()) || date.isSameOrBefore(moment().date(23).month(1).year(2020))}
        />
      </DatePickerContainer>
      <Shortcuts>
        <FiltersText>Filtri rapidi</FiltersText>
        <Buttons>
          <Button onClick={onFullPeriodClick}>Periodo completo</Button>
          <Button onClick={onLastTwoWeeksClick}>Ultimo mese</Button>
        </Buttons>
      </Shortcuts>
    </Container>
  )
}

const Container = styled.div`
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
`

const DatePickerContainer = styled.div`
  margin-bottom: 20px;
`

const Shortcuts = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  align-items: flex-start;
  flex-direction: column;
`

const Button = styled.button`
  background-color: ${props => props.theme.button.primary.background};
  color: ${props => props.theme.button.primary.color};
  font-family: ${props => props.theme.fonts.title.family};
  font-size: 16px;
  text-transform: uppercase;
  cursor: pointer;
  padding: 5.5px 10px;
  border: none;
  outline: none;
  margin-right: 10px;
  margin-top: 10px;
  border-radius: 30px;

  &:last-child {
    margin-right: 0px;
  }

  &:hover {
    background-color: ${props => props.theme.button.primary.hover};
  }

  @media (min-width: 768px) {
    margin-top: 0px;
  }
`

const Buttons = styled.div``

const FiltersText = styled(Title).attrs({ as: 'p' })`
  text-transform: uppercase;
  font-size: 16px;
  flex: 1;
  margin-bottom: 0px;
  margin-top: 10px;

  @media (min-width: 768px) {
    margin-bottom: 10px;
    margin-top: 0px;
  }
`

export { DatePicker }
