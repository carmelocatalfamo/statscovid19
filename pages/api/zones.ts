import { NextApiRequest, NextApiResponse } from 'next'
import chrome from 'chrome-aws-lambda'
import puppeteer from 'puppeteer'

import { regions } from '@/utils/regions'

const zones = {
  '#ffffff': 'white',
  '#ffd732': 'yellow',
  '#ee7f01': 'orange',
  '#e2001a': 'red'
}

const handler = async (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    const pageUrl =
      'http://www.governo.it/it/articolo/domande-frequenti-sulle-misure-adottate-dal-governo/15638'
    const headless =
      process.env.NODE_ENV === 'development' ? true : chrome.headless
    const args = chrome.args
    const executablePath = await chrome.executablePath

    const browser = await puppeteer.launch({ args, executablePath, headless })
    const page = await browser.newPage()
    await page.goto(pageUrl)

    const regionsColor = await page.$$eval('path[id]', el =>
      el.map(x => ({
        slug: x.getAttribute('id'),
        color: x.getAttribute('fill').toLowerCase()
      }))
    )

    await browser.close()

    const response = regionsColor.map(({ slug, color }) => ({
      region: regions.find(r => r.slug === slug),
      zone: zones[color] || null
    }))

    res.status(200).json(response)
  } catch (error) {
    console.log(error)
    res.status(400).json([])
  }
}

export default handler
