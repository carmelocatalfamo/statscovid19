import { useDispatch } from 'react-redux'

import { AppStore } from '@/store'

type AppDispatch = AppStore['dispatch']

export const useAppDispatch = () => useDispatch<AppDispatch>()
