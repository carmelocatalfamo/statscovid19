import {
  CountryApiResponse,
  RegionApiResponse,
  ZoneApiResponse
} from '../models/Api'

export const fetchCountryLatest = async (): Promise<CountryApiResponse> => {
  try {
    const res = await fetch('https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-andamento-nazionale-latest.json')

    if (!res.ok) {
      throw new Error(res.statusText)
    }

    const json = await res.json()
    return json[0]
  } catch (error) {
    return null
  }
}

export const fetchCountry = async (): Promise<CountryApiResponse[]> => {
  try {
    const res = await fetch('https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-andamento-nazionale.json')

    if (!res.ok) {
      throw new Error(res.statusText)
    }

    const json = await res.json()
    return json
  } catch (error) {
    return []
  }
}

export const fetchRegions = async (): Promise<RegionApiResponse[]> => {
  try {
    const res = await fetch('https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-regioni.json')

    if (!res.ok) {
      throw new Error(res.statusText)
    }

    const json = await res.json()
    return json
  } catch (error) {
    return []
  }
}

export const fetchZones = async (): Promise<ZoneApiResponse[]> => {
  try {
    const res = await fetch('/api/zones')

    if (!res.ok) {
      throw new Error(res.statusText)
    }

    const json = await res.json()
    return json
  } catch (error) {
    return []
  }
}
