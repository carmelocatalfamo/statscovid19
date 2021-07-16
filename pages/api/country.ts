import { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

import { CountryData } from '@/models/Api'

const handler = async (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    const response = await axios.get<CountryData[]>(
      'https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-andamento-nazionale.json'
    )

    res.status(200).json(response.data)
  } catch (error) {
    console.log(error)
    res.status(400).json([])
  }
}

export default handler
