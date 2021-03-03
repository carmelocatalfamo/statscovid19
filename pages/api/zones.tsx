import { NextApiRequest, NextApiResponse } from 'next'
import puppeteer from 'puppeteer'
import chrome from 'chrome-aws-lambda'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const browser = await puppeteer.launch({
      args: chrome.args,
      executablePath: await chrome.executablePath,
      headless: process.env.NODE_ENV === 'development' ? true : chrome.headless
    })

    const page = await browser.newPage()
    await page.goto('http://www.governo.it/it/articolo/domande-frequenti-sulle-misure-adottate-dal-governo/15638')

    const response = await page.$$eval('path[id]', el => {
      const zones = {
        '#ffffff': 'white',
        '#ffd732': 'yellow',
        '#ee7f01': 'orange',
        '#e2001a': 'red'
      }

      // #FIX
      // Same as /utils/regions.ts.
      // importing file not work.
      const regions = [
        { code: 13, name: 'Abruzzo', slug: 'abruzzo' },
        { code: 17, name: 'Basilicata', slug: 'basilicata' },
        { code: 18, name: 'Calabria', slug: 'calabria' },
        { code: 15, name: 'Campania', slug: 'campania' },
        { code: 8, name: 'Emilia-Romagna', slug: 'emiliaromagna' },
        { code: 6, name: 'Friuli Venezia Giulia', slug: 'friuliveneziagiulia' },
        { code: 12, name: 'Lazio', slug: 'lazio' },
        { code: 7, name: 'Liguria', slug: 'liguria' },
        { code: 3, name: 'Lombardia', slug: 'lombardia' },
        { code: 11, name: 'Marche', slug: 'marche' },
        { code: 14, name: 'Molise', slug: 'molise' },
        { code: 21, name: 'P.A. Bolzano', slug: 'bolzano' },
        { code: 22, name: 'P.A. Trento', slug: 'trento' },
        { code: 1, name: 'Piemonte', slug: 'piemonte' },
        { code: 16, name: 'Puglia', slug: 'puglia' },
        { code: 20, name: 'Sardegna', slug: 'sardegna' },
        { code: 19, name: 'Sicilia', slug: 'sicilia' },
        { code: 9, name: 'Toscana', slug: 'toscana' },
        { code: 10, name: 'Umbria', slug: 'umbria' },
        { code: 2, name: "Valle d'Aosta", slug: 'valledaosta' },
        { code: 5, name: 'Veneto', slug: 'veneto' }
      ]

      return el.map(x => ({
        region: regions.find(({ slug }) => slug === x.getAttribute('id')),
        zone: zones[x.getAttribute('fill')] || null
      }))
    })

    await browser.close()
    res.status(200).json(response)
  } catch (error) {
    res.status(400).json([])
  }
}

export default handler
