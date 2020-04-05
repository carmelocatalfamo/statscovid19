import React from 'react'

export default ({ region, ...otherProps }) => {
  switch (region) {
    case 'piemonte':
      const Piemonte = require('./Piemonte').default
      return <Piemonte {...otherProps} />

    case 'valledaosta':
      const Valledaosta = require('./Valledaosta').default
      return <Valledaosta {...otherProps} />

    case 'lombardia':
      const Lombardia = require('./Lombardia').default
      return <Lombardia {...otherProps} />

    case 'trentinoaltoadige':
      const Trentinoaltoadige = require('./Trentinoaltoadige').default
      return <Trentinoaltoadige {...otherProps} />

    case 'veneto':
      const Veneto = require('./Veneto').default
      return <Veneto {...otherProps} />

    case 'friuliveneziagiulia':
      const Friuliveneziagiulia = require('./Friuliveneziagiulia').default
      return <Friuliveneziagiulia {...otherProps} />

    case 'liguria':
      const Liguria = require('./Liguria').default
      return <Liguria {...otherProps} />

    case 'emiliaromagna':
      const Emiliaromagna = require('./Emiliaromagna').default
      return <Emiliaromagna {...otherProps} />

    case 'toscana':
      const Toscana = require('./Toscana').default
      return <Toscana {...otherProps} />

    case 'umbria':
      const Umbria = require('./Umbria').default
      return <Umbria {...otherProps} />

    case 'marche':
      const Marche = require('./Marche').default
      return <Marche {...otherProps} />

    case 'lazio':
      const Lazio = require('./Lazio').default
      return <Lazio {...otherProps} />

    case 'abruzzo':
      const Abruzzo = require('./Abruzzo').default
      return <Abruzzo {...otherProps} />

    case 'molise':
      const Molise = require('./Molise').default
      return <Molise {...otherProps} />

    case 'campania':
      const Campania = require('./Campania').default
      return <Campania {...otherProps} />

    case 'puglia':
      const Puglia = require('./Puglia').default
      return <Puglia {...otherProps} />

    case 'basilicata':
      const Basilicata = require('./Basilicata').default
      return <Basilicata {...otherProps} />

    case 'calabria':
      const Calabria = require('./Calabria').default
      return <Calabria {...otherProps} />

    case 'sicilia':
      const Sicilia = require('./Sicilia').default
      return <Sicilia {...otherProps} />

    case 'sardegna':
      const Sardegna = require('./Sardegna').default
      return <Sardegna {...otherProps} />

    default:
      return null
  }
}
