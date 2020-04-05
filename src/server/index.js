const express = require('express')
const exphbs = require('express-handlebars')
const compression = require('compression')
const path = require('path')

const app = express()

// Use compression if env is production
if (process.env.NODE_ENV === 'production') {
  app.use(compression())
}

// App view engine
const handlebarsOptions = {
  extname: '.hbs',
  helpers: {
    json: function (context) {
      try {
        const str = JSON.stringify(context)
        return str
      } catch (e) {
        return ''
      }
    },
    isEquals: function (val1, val2) {
      return val1 === val2
    }
  }
}

app.set('views', path.resolve(__dirname, 'public/html'))
app.engine('.hbs', exphbs(handlebarsOptions))
app.set('view engine', '.hbs')

// Webpack middleware
if (process.env.NODE_ENV !== 'production') {
  const webpackMiddleware = require('./middlewares/webpack')
  webpackMiddleware(app)
}

// Serve static files
app.use('/public', express.static(path.resolve(__dirname, './public')))
app.use('/robots.txt', express.static(path.resolve(__dirname, './public/files/robots.txt')))

// Let's encrypt verirication
const certsPath = path.resolve(path.resolve(__dirname, './public/certs/.well-known/acme-challenge'))
app.use('/.well-known/acme-challenge', express.static(certsPath, { dotfiles: 'allow' }))

// Serve always index.hbs
app.get('*', (req, res) => {
  const baseUrl = `${req.protocol}://${req.get('host')}`

  res.render('index', {
    layout: false,
    NODE_ENV: process.env.NODE_ENV,
    BASE_URL: baseUrl,
    URL: baseUrl + req.originalUrl,
    ENV: {
      NODE_ENV: process.env.NODE_ENV
    }
  })
})

app.listen(3000, () => {
  console.log('App listening on port 3000')
})
