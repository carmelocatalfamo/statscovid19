import { covidApi } from '@/store/services/covid'

export const middleware = getDefaultMiddleware =>
  getDefaultMiddleware().concat(covidApi.middleware)
