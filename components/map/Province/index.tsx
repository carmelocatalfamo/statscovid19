/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-case-declarations */
import React, { FC } from 'react'

type Props = {
  region: string
  texts: any
  colors: any
}

const Province: FC<Props> = ({ region, ...otherProps }) => {
  switch (region) {
    case 'piemonte':
      const { Piemonte } = require('./Piemonte')
      return <Piemonte {...otherProps} />

    case 'valledaosta':
      const { Valledaosta } = require('./Valledaosta')
      return <Valledaosta {...otherProps} />

    case 'lombardia':
      const { Lombardia } = require('./Lombardia')
      return <Lombardia {...otherProps} />

    case 'trentinoaltoadige':
      const { Trentinoaltoadige } = require('./Trentinoaltoadige')
      return <Trentinoaltoadige {...otherProps} />

    case 'veneto':
      const { Veneto } = require('./Veneto')
      return <Veneto {...otherProps} />

    case 'friuliveneziagiulia':
      const { Friuliveneziagiulia } = require('./Friuliveneziagiulia')
      return <Friuliveneziagiulia {...otherProps} />

    case 'liguria':
      const { Liguria } = require('./Liguria')
      return <Liguria {...otherProps} />

    case 'emiliaromagna':
      const { Emiliaromagna } = require('./Emiliaromagna')
      return <Emiliaromagna {...otherProps} />

    case 'toscana':
      const { Toscana } = require('./Toscana')
      return <Toscana {...otherProps} />

    case 'umbria':
      const { Umbria } = require('./Umbria')
      return <Umbria {...otherProps} />

    case 'marche':
      const { Marche } = require('./Marche')
      return <Marche {...otherProps} />

    case 'lazio':
      const { Lazio } = require('./Lazio')
      return <Lazio {...otherProps} />

    case 'abruzzo':
      const { Abruzzo } = require('./Abruzzo')
      return <Abruzzo {...otherProps} />

    case 'molise':
      const { Molise } = require('./Molise')
      return <Molise {...otherProps} />

    case 'campania':
      const { Campania } = require('./Campania')
      return <Campania {...otherProps} />

    case 'puglia':
      const { Puglia } = require('./Puglia')
      return <Puglia {...otherProps} />

    case 'basilicata':
      const { Basilicata } = require('./Basilicata')
      return <Basilicata {...otherProps} />

    case 'calabria':
      const { Calabria } = require('./Calabria')
      return <Calabria {...otherProps} />

    case 'sicilia':
      const { Sicilia } = require('./Sicilia')
      return <Sicilia {...otherProps} />

    case 'sardegna':
      const { Sardegna } = require('./Sardegna')
      return <Sardegna {...otherProps} />

    default:
      return null
  }
}

export { Province }
