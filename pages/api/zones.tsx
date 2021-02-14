import { NextApiRequest, NextApiResponse } from 'next'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const json = await require('../../public/zones.json')
    res.status(200).json(json)
  } catch (error) {
    res.status(400).json({ success: false })
  }
}

export default handler
