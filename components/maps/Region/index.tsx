import React from 'react'

import { Abruzzo } from '@/components/maps/Region/Abruzzo'
import { Basilicata } from '@/components/maps/Region/Basilicata'
import { Bolzano } from '@/components/maps/Region/Bolzano'
import { Calabria } from '@/components/maps/Region/Calabria'
import { Campania } from '@/components/maps/Region/Campania'
import { Emiliaromagna } from '@/components/maps/Region/Emiliaromagna'
import { Friuliveneziagiulia } from '@/components/maps/Region/Friuliveneziagiulia'
import { Lazio } from '@/components/maps/Region/Lazio'
import { Liguria } from '@/components/maps/Region/Liguria'
import { Lombardia } from '@/components/maps/Region/Lombardia'
import { Marche } from '@/components/maps/Region/Marche'
import { Molise } from '@/components/maps/Region/Molise'
import { Piemonte } from '@/components/maps/Region/Piemonte'
import { Puglia } from '@/components/maps/Region/Puglia'
import { Sardegna } from '@/components/maps/Region/Sardegna'
import { Sicilia } from '@/components/maps/Region/Sicilia'
import { Toscana } from '@/components/maps/Region/Toscana'
import { Trento } from '@/components/maps/Region/Trento'
import { Umbria } from '@/components/maps/Region/Umbria'
import { Valledaosta } from '@/components/maps/Region/Valledaosta'
import { Veneto } from '@/components/maps/Region/Veneto'

type Props = {
  regionSlug: string
  fill: string
  stroke: string
}

export const Region = ({ regionSlug, ...props }: Props) => {
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
