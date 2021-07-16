import { regions } from '@/utils/regions'

export interface CountryData {
  casi_da_screening: number
  casi_da_sospetto_diagnostico: number
  casi_testati: number
  data: string
  deceduti: number
  dimessi_guariti: number
  ingressi_terapia_intensiva: number | null
  isolamento_domiciliare: number
  note_casi: string | null
  note_test: string | null
  note: string | null
  nuovi_positivi: number
  ricoverati_con_sintomi: number
  stato: string
  tamponi_test_antigenico_rapido: number | null
  tamponi_test_molecolare: number | null
  tamponi: number
  terapia_intensiva: number
  totale_casi: number
  totale_ospedalizzati: number
  totale_positivi_test_antigenico_rapido: number | null
  totale_positivi_test_molecolare: number | null
  totale_positivi: number
  variazione_totale_positivi: number
}

export interface RegionData extends CountryData {
  codice_regione: number
  denominazione_regione: string
  lat: number | null
  long: number | null
}

export interface RegionZoneData {
  region: typeof regions[0]
  zone: 'white' | 'yellow' | 'orange' | 'red'
}
