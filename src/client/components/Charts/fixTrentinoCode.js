import groupBy from 'lodash/groupBy'
import map from 'lodash/map'

// fix per la regione del trentino alto adige
export default (dataPerDay) => {
  return map(groupBy(dataPerDay, d => d.data), (list, data) => {
    return {
      ...list[0],
      ...list[1],
      deceduti: list[0].deceduti + list[1].deceduti,
      dimessi_guariti: list[0].dimessi_guariti + list[1].dimessi_guariti,
      isolamento_domiciliare: list[0].isolamento_domiciliare + list[1].isolamento_domiciliare,
      nuovi_positivi: list[0].nuovi_positivi + list[1].nuovi_positivi,
      ricoverati_con_sintomi: list[0].ricoverati_con_sintomi + list[1].ricoverati_con_sintomi,
      tamponi: list[0].tamponi + list[1].tamponi,
      terapia_intensiva: list[0].terapia_intensiva + list[1].terapia_intensiva,
      totale_casi: list[0].totale_casi + list[1].totale_casi,
      totale_ospedalizzati: list[0].totale_ospedalizzati + list[1].totale_ospedalizzati,
      totale_positivi: list[0].totale_positivi + list[1].totale_positivi,
      variazione_totale_positivi: list[0].variazione_totale_positivi + list[1].variazione_totale_positivi,
    }
  })
}
