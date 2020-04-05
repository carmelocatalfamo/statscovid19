import { call, all } from 'redux-saga/effects'
import axios from 'axios'

export function * fetchData () {
  const url = {
    country: 'https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-andamento-nazionale.json',
    dailyCountry: 'https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-andamento-nazionale-latest.json',
    regions: 'https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-regioni.json',
    dailyRegions: 'https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-regioni-latest.json',
    provinces: 'https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-province.json',
    dailyProvinces: 'https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-province-latest.json',
    note: 'https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-note-it.json'
  }

  try {
    const [
      countryResponse,
      dailyCountryResponse,
      regionsResponse,
      dailyRegionsResponse,
      provincesResponse,
      dailyProvincesResponse,
      noteResponse
    ] = yield all([
      call(axios.get, url.country),
      call(axios.get, url.dailyCountry),
      call(axios.get, url.regions),
      call(axios.get, url.dailyRegions),
      call(axios.get, url.provinces),
      call(axios.get, url.dailyProvinces),
      call(axios.get, url.note)
    ])

    return {
      country: countryResponse.data,
      dailyCountry: dailyCountryResponse.data,
      regions: regionsResponse.data,
      dailyRegions: dailyRegionsResponse.data,
      provinces: provincesResponse.data,
      dailyProvinces: dailyProvincesResponse.data,
      note: noteResponse.data
    }
  } catch (error) {
    return {
      country: [],
      dailyCountry: [],
      regions: [],
      dailyRegions: [],
      provinces: [],
      dailyProvinces: [],
      note: []
    }
  }
}
