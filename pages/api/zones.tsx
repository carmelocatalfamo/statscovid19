import { NextApiRequest, NextApiResponse } from 'next'
import path from 'path'
import fs from 'fs'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const filePath = path.resolve('./public', 'zones.json')
    const content = fs.readFileSync(filePath, 'utf-8')
    const json = JSON.parse(content)
    res.status(200).json(json)
  } catch (error) {
    res.status(400).json({ success: false })
  }
}

export default handler
