import React from 'react'

import { Abruzzo } from '@/components/RegionMap/svg/Abruzzo'
import { Basilicata } from '@/components/RegionMap/svg/Basilicata'
import { Bolzano } from '@/components/RegionMap/svg/Bolzano'
import { Calabria } from '@/components/RegionMap/svg/Calabria'
import { Campania } from '@/components/RegionMap/svg/Campania'
import { Emiliaromagna } from '@/components/RegionMap/svg/Emiliaromagna'
import { Friuliveneziagiulia } from '@/components/RegionMap/svg/Friuliveneziagiulia'
import { Lazio } from '@/components/RegionMap/svg/Lazio'
import { Liguria } from '@/components/RegionMap/svg/Liguria'
import { Lombardia } from '@/components/RegionMap/svg/Lombardia'
import { Marche } from '@/components/RegionMap/svg/Marche'
import { Molise } from '@/components/RegionMap/svg/Molise'
import { Piemonte } from '@/components/RegionMap/svg/Piemonte'
import { Puglia } from '@/components/RegionMap/svg/Puglia'
import { Sardegna } from '@/components/RegionMap/svg/Sardegna'
import { Sicilia } from '@/components/RegionMap/svg/Sicilia'
import { Toscana } from '@/components/RegionMap/svg/Toscana'
import { Trento } from '@/components/RegionMap/svg/Trento'
import { Umbria } from '@/components/RegionMap/svg/Umbria'
import { Valledaosta } from '@/components/RegionMap/svg/Valledaosta'
import { Veneto } from '@/components/RegionMap/svg/Veneto'

type Props = {
  regionSlug: string
  fill: string
  stroke: string
}

const RegionMap = ({ regionSlug, ...props }: Props) => {
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

export { RegionMap }
