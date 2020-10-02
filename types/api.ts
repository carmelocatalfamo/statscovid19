/* eslint-disable camelcase */
interface BaseApiResponse {
  casi_da_screening: number
  casi_da_sospetto_diagnostico: number
  casi_testati: number
  data: string
  deceduti: number
  dimessi_guariti: number
  isolamento_domiciliare: number
  note: string | null
  nuovi_positivi: number
  ricoverati_con_sintomi: number
  stato: string
  tamponi: number
  terapia_intensiva: number
  totale_casi: number
  totale_ospedalizzati: number
  totale_positivi: number
  variazione_totale_positivi: number
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface CountryApiResponse extends BaseApiResponse {}

export interface RegionApiResponse extends BaseApiResponse {
  codice_regione: number
  denominazione_regione: string
  lat: number | null
  long: number | null
}

export interface ProvinceApiResponse {
  codice_provincia: number
  codice_regione: number
  data: string
  denominazione_provincia: string
  denominazione_regione: string
  lat: number | null
  long: number | null
  note: string | null
  sigla_provincia: string
  stato: string
  totale_casi: number
}