import { call, all } from 'redux-saga/effects'
import axios from 'axios'

const fixTrentinoCode = regions => {
  return regions.map(r => {
    if (r.codice_regione === 21 || r.codice_regione === 22) {
      r.codice_regione = 4
    }

    return r
  })
}

export function * fetchData () {
  const url = {
    country: 'https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-andamento-nazionale.json',
    dailyCountry: 'https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-andamento-nazionale-latest.json',
    regions: 'https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-regioni.json',
    dailyRegions: 'https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-regioni-latest.json',
    dailyProvinces: 'https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-province-latest.json'
  }

  try {
    const [
      countryResponse,
      dailyCountryResponse,
      regionsResponse,
      dailyRegionsResponse,
      dailyProvincesResponse
    ] = yield all([
      call(axios.get, url.country),
      call(axios.get, url.dailyCountry),
      call(axios.get, url.regions),
      call(axios.get, url.dailyRegions),
      call(axios.get, url.dailyProvinces)
    ])

    return {
      country: countryResponse.data,
      dailyCountry: dailyCountryResponse.data,
      regions: fixTrentinoCode(regionsResponse.data),
      dailyRegions: fixTrentinoCode(dailyRegionsResponse.data),
      dailyProvinces: fixTrentinoCode(dailyProvincesResponse.data)
    }
  } catch (error) {
    return {
      country: [],
      dailyCountry: [],
      regions: [],
      dailyRegions: [],
      dailyProvinces: []
    }
  }
}
