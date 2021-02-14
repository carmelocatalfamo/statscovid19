import React, { FC } from 'react'

import { Abruzzo } from './Abruzzo'
import { Basilicata } from './Basilicata'
import { Bolzano } from './Bolzano'
import { Calabria } from './Calabria'
import { Campania } from './Campania'
import { Emiliaromagna } from './Emiliaromagna'
import { Friuliveneziagiulia } from './Friuliveneziagiulia'
import { Lazio } from './Lazio'
import { Liguria } from './Liguria'
import { Lombardia } from './Lombardia'
import { Marche } from './Marche'
import { Molise } from './Molise'
import { Piemonte } from './Piemonte'
import { Puglia } from './Puglia'
import { Sardegna } from './Sardegna'
import { Sicilia } from './Sicilia'
import { Toscana } from './Toscana'
import { Trento } from './Trento'
import { Umbria } from './Umbria'
import { Valledaosta } from './Valledaosta'
import { Veneto } from './Veneto'

type Props = {
  regionSlug: string
  fill: string
  stroke: string
}

export const Region: FC<Props> = ({ regionSlug, ...props }) => {
  const style = { maxHeight: '300px' }

  switch (regionSlug) {
    case 'abruzzo':
      return <Abruzzo {...props} style={style} />
    case 'basilicata':
      return <Basilicata {...props} style={style} />
    case 'calabria':
      return <Calabria {...props} style={style} />
    case 'campania':
      return <Campania {...props} style={style} />
    case 'emiliaromagna':
      return <Emiliaromagna {...props} style={style} />
    case 'friuliveneziagiulia':
      return <Friuliveneziagiulia {...props} style={style} />
    case 'lazio':
      return <Lazio {...props} style={style} />
    case 'liguria':
      return <Liguria {...props} style={style} />
    case 'lombardia':
      return <Lombardia {...props} style={style} />
    case 'marche':
      return <Marche {...props} style={style} />
    case 'molise':
      return <Molise {...props} style={style} />
    case 'bolzano':
      return <Bolzano {...props} style={style} />
    case 'trento':
      return <Trento {...props} style={style} />
    case 'piemonte':
      return <Piemonte {...props} style={style} />
    case 'puglia':
      return <Puglia {...props} style={style} />
    case 'sardegna':
      return <Sardegna {...props} style={style} />
    case 'sicilia':
      return <Sicilia {...props} style={style} />
    case 'toscana':
      return <Toscana {...props} style={style} />
    case 'umbria':
      return <Umbria {...props} style={style} />
    case 'valledaosta':
      return <Valledaosta {...props} style={style} />
    case 'veneto':
      return <Veneto {...props} style={style} />
    default:
      return null
  }
}
