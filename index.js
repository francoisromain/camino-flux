require('dotenv').config()
const express = require('express')
const compression = require('compression')
const serveIndex = require('serve-index')

const port = process.env.NODE_PORT
const app = express()

const { titresAuth, titresGet } = require('./lib/titres/index')

app.use(compression())

app.use(
  '/',
  express.static('public'),
  serveIndex('public', { icons: true, view: 'details' })
)

app.get('/titres', titresAuth, titresGet)

app.listen(port, () => {
  console.log(`Url: http://localhost:${port}`)
})
