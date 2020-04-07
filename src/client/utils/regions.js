import groupBy from 'lodash/groupBy'
import map from 'lodash/map'

export const regions = [
  { code: 13, slug: 'abruzzo', name: 'Abruzzo', maxWidth: '700px' },
  { code: 17, slug: 'basilicata', name: 'Basilicata', maxWidth: '600px' },
  { code: 18, slug: 'calabria', name: 'Calabria', maxWidth: '500px' },
  { code: 15, slug: 'campania', name: 'Campania', maxWidth: '750px' },
  { code: 8, slug: 'emiliaromagna', name: 'Emilia-Romagna', maxWidth: '900px' },
  { code: 6, slug: 'friuliveneziagiulia', name: 'Friuli-Venezia giulia', maxWidth: '700px' },
  { code: 12, slug: 'lazio', name: 'Lazio', maxWidth: '800px' },
  { code: 7, slug: 'liguria', name: 'Liguria', maxWidth: '900px' },
  { code: 3, slug: 'lombardia', name: 'Lombardia', maxWidth: '800px' },
  { code: 11, slug: 'marche', name: 'Marche', maxWidth: '700px' },
  { code: 14, slug: 'molise', name: 'Molise', maxWidth: '700px' },
  { code: 1, slug: 'piemonte', name: 'Piemonte', maxWidth: '600px' },
  { code: 16, slug: 'puglia', name: 'Puglia', maxWidth: '850px' },
  { code: 20, slug: 'sardegna', name: 'Sardegna', maxWidth: '500px' },
  { code: 19, slug: 'sicilia', name: 'Sicilia', maxWidth: '900px' },
  { code: 9, slug: 'toscana', name: 'Toscana', maxWidth: '700px' },
  { code: 4, slug: 'trentinoaltoadige', name: 'Trentino-Alto adige', maxWidth: '700px' },
  { code: 10, slug: 'umbria', name: 'Umbria', maxWidth: '600px' },
  { code: 2, slug: 'valledaosta', name: "Valle d'Aosta", maxWidth: '600px' },
  { code: 5, slug: 'veneto', name: 'Veneto', maxWidth: '700px' }
]

export const findByCode = code => {
  return regions.find(region => {
    return String(region.code) === String(code)
  })
}

export const findBySlug = slug => {
  return regions.find(region => {
    return region.slug === slug
  })
}

const positiveNumbersToColors = num => {
  if (num < 1000) {
    return '#FFBCD8'
  } else if (num >= 1000 && num < 5000) {
    return '#FF7CB8'
  } else if (num >= 5000 && num < 10000) {
    return '#FA5C98'
  } else if (num >= 10000 && num < 25000) {
    return '#DA3C78'
  } else if (num > 25000 && num < 50000) {
    return '#BA1C58'
  } else {
    return '#9A0038'
  }
}

export const allTimePositive = regions => {
  const groupedRegions = groupBy(regions, region => region.codice_regione)

  return map(groupedRegions, (reports, regionCode) => {
    const positive = reports.reduce((counter, report) => {
      counter += report.totale_casi
      return counter
    }, 0)

    return {
      region: findByCode(regionCode)?.slug,
      color: positiveNumbersToColors(positive),
      positive
    }
  })
}

export const activePositive = regions => {
  const groupedRegions = groupBy(regions, region => region.codice_regione)

  return map(groupedRegions, (reports, regionCode) => {
    const positive = reports.reduce((counter, report) => {
      counter += report.totale_positivi
      return counter
    }, 0)

    return {
      region: findByCode(regionCode)?.slug,
      color: positiveNumbersToColors(positive),
      positive
    }
  })
}
