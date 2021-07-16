import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { CountryData, RegionData, RegionZoneData } from '@/models/Api'

export const covidApi = createApi({
  reducerPath: 'covidApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  endpoints: builder => ({
    getDailyCountryData: builder.query<CountryData[], void>({
      query: () => `/country`
    }),
    getDailyRegionData: builder.query<RegionData[], number>({
      query: regionCode => `/regions?regionCode=${regionCode}`
    }),
    getRegionsZoneData: builder.query<RegionZoneData[], void>({
      query: () => `/zones`
    })
  })
})

export const {
  useGetDailyCountryDataQuery,
  useGetDailyRegionDataQuery,
  useGetRegionsZoneDataQuery
} = covidApi
