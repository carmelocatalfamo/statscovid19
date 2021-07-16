import { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

import { RegionData } from '@/models/Api'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { regionCode } = req.query

  if (!regionCode) {
    return res.status(400).json({})
  }

  try {
    const response = await axios.get<RegionData[]>(
      'https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-regioni.json'
    )

    const dailyRegionData = response.data.filter(
      ({ codice_regione }) => String(codice_regione) === String(regionCode)
    )

    res.status(200).json(dailyRegionData)
  } catch (error) {
    console.log(error)
    res.status(400).json([])
  }
}

export default handler
