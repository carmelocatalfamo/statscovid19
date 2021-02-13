import { NextApiRequest, NextApiResponse } from 'next'
import puppeteer from 'puppeteer'
import fs from 'fs'

const writeFilePromise = (filePath: string, data: string) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(filePath, data, (err) => {
      if (err) reject(err)
      resolve(true)
    })
  })
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (
    !req.query.token ||
    !process.env.WEBHOOKS_TOKEN ||
    (req.query.token && req.query.token !== process.env.WEBHOOKS_TOKEN)
  ) {
    return res.status(200).json({ success: false })
  }

  const browser = await puppeteer.launch({
    headless: true,
    executablePath: '/usr/bin/chromium-browser',
    args: ['--no-sandbox', '--disable-gpu']
  })

  const page = await browser.newPage()
  await page.goto('http://www.governo.it/it/articolo/domande-frequenti-sulle-misure-adottate-dal-governo/15638')

  const response = await page.$$eval('path[id]', el => {
    const zones = {
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

  try {
    await writeFilePromise('public/zones.json', JSON.stringify(response))
    res.status(200).json({ success: true })
  } catch (error) {
    res.status(400).json({ success: false, error: error.message })
  }
}

export default handler
