import { createAction } from '@reduxjs/toolkit'

export const changeStartDate = createAction<string | null>('CHANGE_START_DATE')
export const changeEndDate = createAction<string | null>('CHANGE_END_DATE')
