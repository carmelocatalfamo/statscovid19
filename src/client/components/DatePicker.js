import 'react-dates/initialize'
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import { DateRangePicker } from 'react-dates'

import { setStartDate, setEndDate } from '../actions'
import moment from '../utils/moment'

export default ({ name }) => {
  const dispatch = useDispatch()
  const startDate = useSelector(state => state.datePicker.startDate)
  const endDate = useSelector(state => state.datePicker.endDate)
  const [focusedInput, setFocusedInput] = useState(null)

  const onDatesChange = ({ startDate, endDate }) => {
    dispatch(setStartDate(startDate))
    dispatch(setEndDate(endDate))
  }

  return (
    <DatePickerContainer>
      <DateRangePicker
        displayFormat='DD/MM/YYYY'
        startDate={startDate}
        startDateId={`${name}_start_date_id`}
        endDate={endDate} // momentPropTypes.momentObj or null,
        endDateId={`${name}_end_date_id`} // PropTypes.string.isRequired,
        onDatesChange={onDatesChange} // PropTypes.func.isRequired,
        focusedInput={focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
        onFocusChange={setFocusedInput}
        isOutsideRange={(date) => moment(date).isAfter(moment())}
      />
    </DatePickerContainer>
  )
}

const DatePickerContainer = styled.div`
  margin-bottom: 32px;
`
