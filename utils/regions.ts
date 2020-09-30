import { RegionApiResponse } from '../types/api'
import { useTheme } from 'styled-components'

export type Region = {
  code: number
  slug: string
  name: string
  maxWidth: string
}

export const regions: Region[] = [
  { code: 1, slug: 'piemonte', name: 'Piemonte', maxWidth: '600px' },
  { code: 2, slug: 'valledaosta', name: "Valle d'Aosta", maxWidth: '600px' },
  { code: 3, slug: 'lombardia', name: 'Lombardia', maxWidth: '800px' },
  { code: 4, slug: 'trentinoaltoadige', name: 'Trentino-Alto adige', maxWidth: '700px' },
  { code: 5, slug: 'veneto', name: 'Veneto', maxWidth: '700px' },
  { code: 6, slug: 'friuliveneziagiulia', name: 'Friuli-Venezia giulia', maxWidth: '700px' },
  { code: 7, slug: 'liguria', name: 'Liguria', maxWidth: '900px' },
  { code: 8, slug: 'emiliaromagna', name: 'Emilia-Romagna', maxWidth: '900px' },
  { code: 9, slug: 'toscana', name: 'Toscana', maxWidth: '700px' },
  { code: 10, slug: 'umbria', name: 'Umbria', maxWidth: '600px' },
  { code: 11, slug: 'marche', name: 'Marche', maxWidth: '700px' },
  { code: 12, slug: 'lazio', name: 'Lazio', maxWidth: '800px' },
  { code: 13, slug: 'abruzzo', name: 'Abruzzo', maxWidth: '700px' },
  { code: 14, slug: 'molise', name: 'Molise', maxWidth: '700px' },
  { code: 15, slug: 'campania', name: 'Campania', maxWidth: '750px' },
  { code: 16, slug: 'puglia', name: 'Puglia', maxWidth: '850px' },
  { code: 17, slug: 'basilicata', name: 'Basilicata', maxWidth: '600px' },
  { code: 18, slug: 'calabria', name: 'Calabria', maxWidth: '500px' },
  { code: 19, slug: 'sicilia', name: 'Sicilia', maxWidth: '900px' },
  { code: 20, slug: 'sardegna', name: 'Sardegna', maxWidth: '500px' }
  // { code: 21, slug: 'pabolzano', name: 'P.A. Bolzano', maxWidth: '700px' },
  // { code: 22, slug: 'patrento', name: 'P.A. Trento', maxWidth: '700px' },
]

export const findByCode = (code: number): Region => (
  regions.find(region => String(region.code) === String(code))
)

export const findBySlug = (slug: string): Region => (
  regions.find(region => String(region.slug) === String(slug))
)

const positiveNumbersToColors = (counter: number) => {
  const theme = useTheme()

  if (counter < 1000) {
    return theme.map.shades[0]
  } else if (counter >= 1000 && counter < 5000) {
    return theme.map.shades[1]
  } else if (counter >= 5000 && counter < 10000) {
    return theme.map.shades[2]
  } else if (counter >= 10000 && counter < 25000) {
    return theme.map.shades[3]
  } else if (counter > 25000 && counter < 50000) {
    return theme.map.shades[4]
  } else {
    return theme.map.shades[5]
  }
}

export const allTimePositive = (regions: RegionApiResponse[]): any => {
  return regions.map(region => ({
    region: findByCode(region.codice_regione)?.slug,
    color: positiveNumbersToColors(region.totale_casi),
    positive: region.totale_casi
  }))
}

export const activePositive = (regions: RegionApiResponse[]): any => {
  return regions.map(region => ({
    region: findByCode(region.codice_regione)?.slug,
    color: positiveNumbersToColors(region.totale_positivi),
    positive: region.totale_positivi
  }))
}
