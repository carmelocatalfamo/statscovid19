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
  // console.log(regionSlug)
  switch (regionSlug) {
    case 'abruzzo':
      return <Abruzzo {...props} />
    case 'basilicata':
      return <Basilicata {...props} />
    case 'calabria':
      return <Calabria {...props} />
    case 'campania':
      return <Campania {...props} />
    case 'emiliaromagna':
      return <Emiliaromagna {...props} />
    case 'friuliveneziagiulia':
      return <Friuliveneziagiulia {...props} />
    case 'lazio':
      return <Lazio {...props} />
    case 'liguria':
      return <Liguria {...props} />
    case 'lombardia':
      return <Lombardia {...props} />
    case 'marche':
      return <Marche {...props} />
    case 'molise':
      return <Molise {...props} />
    case 'bolzano':
      return <Bolzano {...props} />
    case 'trento':
      return <Trento {...props} />
    case 'piemonte':
      return <Piemonte {...props} />
    case 'puglia':
      return <Puglia {...props} />
    case 'sardegna':
      return <Sardegna {...props} />
    case 'sicilia':
      return <Sicilia {...props} />
    case 'toscana':
      return <Toscana {...props} />
    case 'umbria':
      return <Umbria {...props} />
    case 'valledaosta':
      return <Valledaosta {...props} />
    case 'veneto':
      return <Veneto {...props} />
    default:
      return null
  }
}
