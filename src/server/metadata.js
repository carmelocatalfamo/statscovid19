const find = require('lodash/find')

const metadataList = [
  {
    path: '/',
    title: 'Coronavirus: numeri e grafici sul COVID-19 in Italia',
    description: 'Numeri, grafici e statistiche dei dati ufficiali forniti dalla Protezione Civile sul COVID-19 in Italia prima e dopo la fase 2.'
  }, {
    path: '/piemonte',
    title: 'Coronavirus: numeri e grafici sul COVID-19 in Piemonte',
    description: 'Numeri, grafici e statistiche dei dati ufficiali forniti dalla Protezione Civile sul COVID-19 in Piemonte prima e dopo la fase 2.'
  }, {
    path: '/valledaosta',
    title: "Coronavirus: numeri e grafici sul COVID-19 in Valle d'Aosta",
    description: "Numeri, grafici e statistiche dei dati ufficiali forniti dalla Protezione Civile sul COVID-19 in Valle d'Aosta prima e dopo la fase 2."
  }, {
    path: '/lombardia',
    title: 'Coronavirus: numeri e grafici sul COVID-19 in Lombardia',
    description: 'Numeri, grafici e statistiche dei dati ufficiali forniti dalla Protezione Civile sul COVID-19 in Lombardia prima e dopo la fase 2.'
  }, {
    path: '/trentinoaltoadige',
    title: 'Coronavirus: numeri e grafici sul COVID-19 in Trentino-Alto adige',
    description: 'Numeri, grafici e statistiche dei dati ufficiali forniti dalla Protezione Civile sul COVID-19 in Trentino-Alto adige prima e dopo la fase 2.'
  }, {
    path: '/veneto',
    title: 'Coronavirus: numeri e grafici sul COVID-19 in Veneto',
    description: 'Numeri, grafici e statistiche dei dati ufficiali forniti dalla Protezione Civile sul COVID-19 in Veneto prima e dopo la fase 2.'
  }, {
    path: '/friuliveneziagiulia',
    title: 'Coronavirus: numeri e grafici sul COVID-19 in Friuli-Venezia Giulia',
    description: 'Numeri, grafici e statistiche dei dati ufficiali forniti dalla Protezione Civile sul COVID-19 in Friuli-Venezia Giulia prima e dopo la fase 2.'
  }, {
    path: '/liguria',
    title: 'Coronavirus: numeri e grafici sul COVID-19 in Liguria',
    description: 'Numeri, grafici e statistiche dei dati ufficiali forniti dalla Protezione Civile sul COVID-19 in Liguria prima e dopo la fase 2.'
  }, {
    path: '/emiliaromagna',
    title: 'Coronavirus: numeri e grafici sul COVID-19 in Emilia-Romagna',
    description: 'Numeri, grafici e statistiche dei dati ufficiali forniti dalla Protezione Civile sul COVID-19 in Emilia-Romagna prima e dopo la fase 2.'
  }, {
    path: '/toscana',
    title: 'Coronavirus: numeri e grafici sul COVID-19 in Toscana',
    description: 'Numeri, grafici e statistiche dei dati ufficiali forniti dalla Protezione Civile sul COVID-19 in Toscana prima e dopo la fase 2.'
  }, {
    path: '/umbria',
    title: 'Coronavirus: numeri e grafici sul COVID-19 in Umbria',
    description: 'Numeri, grafici e statistiche dei dati ufficiali forniti dalla Protezione Civile sul COVID-19 in Umbria prima e dopo la fase 2.'
  }, {
    path: '/marche',
    title: 'Coronavirus: numeri e grafici sul COVID-19 in Marche',
    description: 'Numeri, grafici e statistiche dei dati ufficiali forniti dalla Protezione Civile sul COVID-19 in Marche prima e dopo la fase 2.'
  }, {
    path: '/lazio',
    title: 'Coronavirus: numeri e grafici sul COVID-19 in Lazio',
    description: 'Numeri, grafici e statistiche dei dati ufficiali forniti dalla Protezione Civile sul COVID-19 in Lazio prima e dopo la fase 2.'
  }, {
    path: '/abruzzo',
    title: 'Coronavirus: numeri e grafici sul COVID-19 in Abruzzo',
    description: 'Numeri, grafici e statistiche dei dati ufficiali forniti dalla Protezione Civile sul COVID-19 in Abruzzo prima e dopo la fase 2.'
  }, {
    path: '/molise',
    title: 'Coronavirus: numeri e grafici sul COVID-19 in Molise',
    description: 'Numeri, grafici e statistiche dei dati ufficiali forniti dalla Protezione Civile sul COVID-19 in Molise prima e dopo la fase 2.'
  }, {
    path: '/campania',
    title: 'Coronavirus: numeri e grafici sul COVID-19 in Campania',
    description: 'Numeri, grafici e statistiche dei dati ufficiali forniti dalla Protezione Civile sul COVID-19 in Campania prima e dopo la fase 2.'
  }, {
    path: '/puglia',
    title: 'Coronavirus: numeri e grafici sul COVID-19 in Puglia',
    description: 'Numeri, grafici e statistiche dei dati ufficiali forniti dalla Protezione Civile sul COVID-19 in Puglia prima e dopo la fase 2.'
  }, {
    path: '/basilicata',
    title: 'Coronavirus: numeri e grafici sul COVID-19 in Basilicata',
    description: 'Numeri, grafici e statistiche dei dati ufficiali forniti dalla Protezione Civile sul COVID-19 in Basilicata prima e dopo la fase 2.'
  }, {
    path: '/calabria',
    title: 'Coronavirus: numeri e grafici sul COVID-19 in Calabria',
    description: 'Numeri, grafici e statistiche dei dati ufficiali forniti dalla Protezione Civile sul COVID-19 in Calabria prima e dopo la fase 2.'
  }, {
    path: '/sicilia',
    title: 'Coronavirus: numeri e grafici sul COVID-19 in Sicilia',
    description: 'Numeri, grafici e statistiche dei dati ufficiali forniti dalla Protezione Civile sul COVID-19 in Sicilia prima e dopo la fase 2.'
  }, {
    path: '/sardegna',
    title: 'Coronavirus: numeri e grafici sul COVID-19 in Sardegna',
    description: 'Numeri, grafici e statistiche dei dati ufficiali forniti dalla Protezione Civile sul COVID-19 in Sardegna prima e dopo la fase 2.'
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
