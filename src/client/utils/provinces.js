const provinces = [
  { code: 69, slug: 'chieti', name: 'Chieti', shortName: 'CH' },
  { code: 66, slug: 'laquila', name: "L'Aquila", shortName: 'AQ' },
  { code: 68, slug: 'pescara', name: 'Pescara', shortName: 'PE' },
  { code: 67, slug: 'teramo', name: 'Teramo', shortName: 'TE' },
  { code: 77, slug: 'matera', name: 'Matera', shortName: 'MT' },
  { code: 76, slug: 'potenza', name: 'Potenza', shortName: 'PZ' },
  { code: 21, slug: 'bolzano', name: 'Bolzano', shortName: 'BZ' },
  { code: 79, slug: 'catanzaro', name: 'Catanzaro', shortName: 'CZ' },
  { code: 78, slug: 'cosenza', name: 'Cosenza', shortName: 'CS' },
  { code: 101, slug: 'crotone', name: 'Crotone', shortName: 'KR' },
  { code: 80, slug: 'reggiocalabria', name: 'Reggio di Calabria', shortName: 'RC' },
  { code: 102, slug: 'vibovalentia', name: 'Vibo Valentia', shortName: 'VV' },
  { code: 64, slug: 'avellino', name: 'Avellino', shortName: 'AV' },
  { code: 62, slug: 'benevento', name: 'Benevento', shortName: 'BN' },
  { code: 61, slug: 'caserta', name: 'Caserta', shortName: 'CE' },
  { code: 63, slug: 'napoli', name: 'Napoli', shortName: 'NA' },
  { code: 65, slug: 'salerno', name: 'Salerno', shortName: 'SA' },
  { code: 37, slug: 'bologna', name: 'Bologna', shortName: 'BO' },
  { code: 38, slug: 'ferrara', name: 'Ferrara', shortName: 'FE' },
  { code: 40, slug: 'forlicesena', name: 'Forlì-Cesena', shortName: 'FC' },
  { code: 36, slug: 'modena', name: 'Modena', shortName: 'MO' },
  { code: 34, slug: 'parma', name: 'Parma', shortName: 'PR' },
  { code: 33, slug: 'piacenza', name: 'Piacenza', shortName: 'PC' },
  { code: 39, slug: 'ravenna', name: 'Ravenna', shortName: 'RA' },
  { code: 35, slug: 'reggionellemilia', name: "Reggio nell'Emilia", shortName: 'RE' },
  { code: 99, slug: 'rimini', name: 'Rimini', shortName: 'RN' },
  { code: 31, slug: 'gorizia', name: 'Gorizia', shortName: 'GO' },
  { code: 93, slug: 'pordenone', name: 'Pordenone', shortName: 'PN' },
  { code: 32, slug: 'trieste', name: 'Trieste', shortName: 'TS' },
  { code: 30, slug: 'udine', name: 'Udine', shortName: 'UD' },
  { code: 60, slug: 'frosinone', name: 'Frosinone', shortName: 'FR' },
  { code: 59, slug: 'latina', name: 'Latina', shortName: 'LT' },
  { code: 57, slug: 'rieti', name: 'Rieti', shortName: 'RI' },
  { code: 58, slug: 'roma', name: 'Roma', shortName: 'RM' },
  { code: 56, slug: 'viterbo', name: 'Viterbo', shortName: 'VT' },
  { code: 10, slug: 'genova', name: 'Genova', shortName: 'GE' },
  { code: 8, slug: 'imperia', name: 'Imperia', shortName: 'IM' },
  { code: 11, slug: 'laspezia', name: 'La Spezia', shortName: 'SP' },
  { code: 9, slug: 'savona', name: 'Savona', shortName: 'SV' },
  { code: 16, slug: 'bergamo', name: 'Bergamo', shortName: 'BG' },
  { code: 17, slug: 'brescia', name: 'Brescia', shortName: 'BS' },
  { code: 13, slug: 'como', name: 'Como', shortName: 'CO' },
  { code: 19, slug: 'cremona', name: 'Cremona', shortName: 'CR' },
  { code: 97, slug: 'lecco', name: 'Lecco', shortName: 'LC' },
  { code: 98, slug: 'lodi', name: 'Lodi', shortName: 'LO' },
  { code: 20, slug: 'mantova', name: 'Mantova', shortName: 'MN' },
  { code: 15, slug: 'milano', name: 'Milano', shortName: 'MI' },
  { code: 108, slug: 'monzaebrianza', name: 'Monza e della Brianza', shortName: 'MB' },
  { code: 18, slug: 'pavia', name: 'Pavia', shortName: 'PV' },
  { code: 14, slug: 'sondrio', name: 'Sondrio', shortName: 'SO' },
  { code: 12, slug: 'varese', name: 'Varese', shortName: 'VA' },
  { code: 42, slug: 'ancona', name: 'Ancona', shortName: 'AN' },
  { code: 44, slug: 'ascolipiceno', name: 'Ascoli Piceno', shortName: 'AP' },
  { code: 109, slug: 'fermo', name: 'Fermo', shortName: 'FM' },
  { code: 43, slug: 'macerata', name: 'Macerata', shortName: 'MC' },
  { code: 41, slug: 'pesaroeurbino', name: 'Pesaro e Urbino', shortName: 'PU' },
  { code: 70, slug: 'campobasso', name: 'Campobasso', shortName: 'CB' },
  { code: 94, slug: 'isernia', name: 'Isernia', shortName: 'IS' },
  { code: 6, slug: 'alessandria', name: 'Alessandria', shortName: 'AL' },
  { code: 5, slug: 'asti', name: 'Asti', shortName: 'AT' },
  { code: 96, slug: 'biella', name: 'Biella', shortName: 'BI' },
  { code: 4, slug: 'cuneo', name: 'Cuneo', shortName: 'CN' },
  { code: 3, slug: 'novara', name: 'Novara', shortName: 'NO' },
  { code: 1, slug: 'torino', name: 'Torino', shortName: 'TO' },
  { code: 103, slug: 'verbanocusioossola', name: 'Verbano-Cusio-Ossola', shortName: 'VB' },
  { code: 2, slug: 'vercelli', name: 'Vercelli', shortName: 'VC' },
  { code: 72, slug: 'bari', name: 'Bari', shortName: 'BA' },
  { code: 110, slug: 'barlettaandriatrani', name: 'Barletta-Andria-Trani', shortName: 'BT' },
  { code: 74, slug: 'brindisi', name: 'Brindisi', shortName: 'BR' },
  { code: 71, slug: 'foggia', name: 'Foggia', shortName: 'FG' },
  { code: 75, slug: 'lecce', name: 'Lecce', shortName: 'LE' },
  { code: 73, slug: 'taranto', name: 'Taranto', shortName: 'TA' },
  { code: 92, slug: 'cagliari', name: 'Cagliari', shortName: 'CA' },
  { code: 91, slug: 'nuoro', name: 'Nuoro', shortName: 'NU' },
  { code: 95, slug: 'oristano', name: 'Oristano', shortName: 'OR' },
  { code: 90, slug: 'sassari', name: 'Sassari', shortName: 'SS' },
  { code: 111, slug: 'sudsardegna', name: 'Sud Sardegna', shortName: 'SU' },
  { code: 84, slug: 'agrigento', name: 'Agrigento', shortName: 'AG' },
  { code: 85, slug: 'caltanissetta', name: 'Caltanissetta', shortName: 'CL' },
  { code: 87, slug: 'catania', name: 'Catania', shortName: 'CT' },
  { code: 86, slug: 'enna', name: 'Enna', shortName: 'EN' },
  { code: 83, slug: 'messina', name: 'Messina', shortName: 'ME' },
  { code: 82, slug: 'palermo', name: 'Palermo', shortName: 'PA' },
  { code: 88, slug: 'ragusa', name: 'Ragusa', shortName: 'RG' },
  { code: 89, slug: 'siracusa', name: 'Siracusa', shortName: 'SR' },
  { code: 81, slug: 'trapani', name: 'Trapani', shortName: 'TP' },
  { code: 51, slug: 'arezzo', name: 'Arezzo', shortName: 'AR' },
  { code: 48, slug: 'firenze', name: 'Firenze', shortName: 'FI' },
  { code: 53, slug: 'grosseto', name: 'Grosseto', shortName: 'GR' },
  { code: 49, slug: 'livorno', name: 'Livorno', shortName: 'LI' },
  { code: 46, slug: 'lucca', name: 'Lucca', shortName: 'LU' },
  { code: 45, slug: 'massacarrara', name: 'Massa Carrara', shortName: 'MS' },
  { code: 50, slug: 'pisa', name: 'Pisa', shortName: 'PI' },
  { code: 47, slug: 'pistoia', name: 'Pistoia', shortName: 'PT' },
  { code: 100, slug: 'prato', name: 'Prato', shortName: 'PO' },
  { code: 52, slug: 'siena', name: 'Siena', shortName: 'SI' },
  { code: 22, slug: 'trento', name: 'Trento', shortName: 'TN' },
  { code: 54, slug: 'perugia', name: 'Perugia', shortName: 'PG' },
  { code: 55, slug: 'terni', name: 'Terni', shortName: 'TR' },
  { code: 7, slug: 'aosta', name: 'Aosta', shortName: 'AO' },
  { code: 25, slug: 'belluno', name: 'Belluno', shortName: 'BL' },
  { code: 28, slug: 'padova', name: 'Padova', shortName: 'PD' },
  { code: 29, slug: 'rovigo', name: 'Rovigo', shortName: 'RO' },
  { code: 26, slug: 'treviso', name: 'Treviso', shortName: 'TV' },
  { code: 27, slug: 'venezia', name: 'Venezia', shortName: 'VE' },
  { code: 23, slug: 'verona', name: 'Verona', shortName: 'VR' },
  { code: 24, slug: 'vicenza', name: 'Vicenza', shortName: 'VI' }
]

export const findByCode = code => {
  return provinces.find(province => {
    return String(province.code) === String(code)
  })
}

export const positiveNumbersToColors = num => {
  if (num < 500) {
    return '#FFBCD8'
  } else if (num >= 500 && num < 1500) {
    return '#FF7CB8'
  } else if (num >= 1500 && num < 2500) {
    return '#FA5C98'
  } else if (num >= 2500 && num < 10000) {
    return '#DA3C78'
  } else if (num > 10000 && num < 25000) {
    return '#BA1C58'
  } else {
    return '#9A0038'
  }
}