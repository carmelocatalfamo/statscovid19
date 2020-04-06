const find = require('lodash/find')

const metadataList = [
  {
    path: '/',
    title: 'Statistiche COVID-19 Italia',
    description: 'Rappresentazione grafica dei dati ufficiali forniti dalla Protezione Civile sul COVID-19 in Italia.'
  }, {
    path: '/piemonte',
    title: 'Statistiche COVID-19 Piemonte',
    description: 'Rappresentazione grafica dei dati ufficiali forniti dalla Protezione Civile sul COVID-19 in Piemonte.'
  }, {
    path: '/valledaosta',
    title: "Statistiche COVID-19 Valle d'Aosta",
    description: "Rappresentazione grafica dei dati ufficiali forniti dalla Protezione Civile sul COVID-19 in Valle d'Aosta."
  }, {
    path: '/lombardia',
    title: 'Statistiche COVID-19 Lombardia',
    description: 'Rappresentazione grafica dei dati ufficiali forniti dalla Protezione Civile sul COVID-19 in Lombardia.'
  }, {
    path: '/trentinoaltoadige',
    title: 'Statistiche COVID-19 Trentino-Alto adige',
    description: 'Rappresentazione grafica dei dati ufficiali forniti dalla Protezione Civile sul COVID-19 in Trentino-Alto adige.'
  }, {
    path: '/veneto',
    title: 'Statistiche COVID-19 Veneto',
    description: 'Rappresentazione grafica dei dati ufficiali forniti dalla Protezione Civile sul COVID-19 in Veneto.'
  }, {
    path: '/friuliveneziagiulia',
    title: 'Statistiche COVID-19 Friuli-Venezia giulia',
    description: 'Rappresentazione grafica dei dati ufficiali forniti dalla Protezione Civile sul COVID-19 in Friuli-Venezia giulia.'
  }, {
    path: '/liguria',
    title: 'Statistiche COVID-19 Liguria',
    description: 'Rappresentazione grafica dei dati ufficiali forniti dalla Protezione Civile sul COVID-19 in Liguria.'
  }, {
    path: '/emiliaromagna',
    title: 'Statistiche COVID-19 Emilia-Romagna',
    description: 'Rappresentazione grafica dei dati ufficiali forniti dalla Protezione Civile sul COVID-19 in Emilia-Romagna.'
  }, {
    path: '/toscana',
    title: 'Statistiche COVID-19 Toscana',
    description: 'Rappresentazione grafica dei dati ufficiali forniti dalla Protezione Civile sul COVID-19 in Toscana.'
  }, {
    path: '/umbria',
    title: 'Statistiche COVID-19 Umbria',
    description: 'Rappresentazione grafica dei dati ufficiali forniti dalla Protezione Civile sul COVID-19 in Umbria.'
  }, {
    path: '/marche',
    title: 'Statistiche COVID-19 Marche',
    description: 'Rappresentazione grafica dei dati ufficiali forniti dalla Protezione Civile sul COVID-19 in Marche.'
  }, {
    path: '/lazio',
    title: 'Statistiche COVID-19 Lazio',
    description: 'Rappresentazione grafica dei dati ufficiali forniti dalla Protezione Civile sul COVID-19 in Lazio.'
  }, {
    path: '/abruzzo',
    title: 'Statistiche COVID-19 Abruzzo',
    description: 'Rappresentazione grafica dei dati ufficiali forniti dalla Protezione Civile sul COVID-19 in Abruzzo.'
  }, {
    path: '/molise',
    title: 'Statistiche COVID-19 Molise',
    description: 'Rappresentazione grafica dei dati ufficiali forniti dalla Protezione Civile sul COVID-19 in Molise.'
  }, {
    path: '/campania',
    title: 'Statistiche COVID-19 Campania',
    description: 'Rappresentazione grafica dei dati ufficiali forniti dalla Protezione Civile sul COVID-19 in Campania.'
  }, {
    path: '/puglia',
    title: 'Statistiche COVID-19 Puglia',
    description: 'Rappresentazione grafica dei dati ufficiali forniti dalla Protezione Civile sul COVID-19 in Puglia.'
  }, {
    path: '/basilicata',
    title: 'Statistiche COVID-19 Basilicata',
    description: 'Rappresentazione grafica dei dati ufficiali forniti dalla Protezione Civile sul COVID-19 in Basilicata.'
  }, {
    path: '/calabria',
    title: 'Statistiche COVID-19 Calabria',
    description: 'Rappresentazione grafica dei dati ufficiali forniti dalla Protezione Civile sul COVID-19 in Calabria.'
  }, {
    path: '/sicilia',
    title: 'Statistiche COVID-19 Sicilia',
    description: 'Rappresentazione grafica dei dati ufficiali forniti dalla Protezione Civile sul COVID-19 in Sicilia.'
  }, {
    path: '/sardegna',
    title: 'Statistiche COVID-19 Sardegna',
    description: 'Rappresentazione grafica dei dati ufficiali forniti dalla Protezione Civile sul COVID-19 in Sardegna.'
  }
]

// Remove last slash from path
const clearPath = (path) => {
  if (path.length > 1 && path.slice(path.length - 1) === '/') {
    path = path.substring(0, path.length - 1)
  }

  return path
}

module.exports = (pathFromRequest) => {
  const path = clearPath(pathFromRequest)
  const metadata = find(metadataList, m => m.path === path)

  return {
    title: metadata && metadata.title ? metadata.title : metadataList[0].title,
    description: metadata && metadata.description ? metadata.description : metadataList[0].description
  }
}
