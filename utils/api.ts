import mergeWith from 'lodash/mergeWith'
import isNumber from 'lodash/isNumber'

import { CountryApiResponse, ProvinceApiResponse, RegionApiResponse } from '../types/api'

export const fetchDailyRegions = async (): Promise<RegionApiResponse[]> => {
  /**
   * In questa fetch request è presente un fix:
   * Nella mappa che mostra l'italia in questo momento è presente il
   * trentino-alto adige come unica regione ma nei dati ci arriva
   * divisa in province autonome P.A. Bolzano (21) e P.A. Trento(22).
   *
   * Questo "codice" serve per eliminare 21 e 22 e unirle in una nuova
   * region (Trentino-Alto adige) con codice_region = 4.
   */
  const regionsToDelete = [21, 22]

  try {
    const res = await fetch('https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-regioni-latest.json')

    if (!res.ok) {
      throw new Error(res.statusText)
    }

    const json: RegionApiResponse[] = await res.json()

    const trentinoRegion = json.filter(region => regionsToDelete.includes(region.codice_regione))
      .reduce((trentinoRegion, otherRegion) => {
        if (!Object.keys(trentinoRegion).length) return otherRegion

        return mergeWith(trentinoRegion, otherRegion, (trentinoValue, regionValue) => {
          if (isNumber(trentinoValue) && isNumber(regionValue)) {
            return trentinoValue + regionValue
          }

          return regionValue
        })
      }, {} as RegionApiResponse)

    trentinoRegion.denominazione_regione = 'Trentino-Alto adige'
    trentinoRegion.codice_regione = 4

    return json.map((region) => {
      // Aggiungi la regione del trentino sostituendola alla prima regione da cancellare
      if (region.codice_regione === regionsToDelete[0]) return trentinoRegion
      // A tutte le altre assegna null
      if (regionsToDelete.includes(region.codice_regione)) return null
      // Altrimenti ritorna le regioni.
      return region
    }).filter(region => !!region)
  } catch (error) {
    return []
  }
}

export const fetchDailyCountry = async (): Promise<CountryApiResponse | null> => {
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

export const fetchDailyProvinces = async (): Promise<ProvinceApiResponse[]> => {
  try {
    const res = await fetch('https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-province-latest.json')

    if (!res.ok) {
      throw new Error(res.statusText)
    }

    const json = await res.json()
    return json
  } catch (error) {
    return []
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
    return null
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
    return null
  }
}
