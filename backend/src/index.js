const path = require('path')
const express = require('express')
const app = express()
const cors = require('cors')
const config = require('./config')
const routes = require('./routes')

app.use(cors())
app.use(express.json())
app.use(express.static('build'))
app.use('/api', routes)

app.get('/*', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../build/index.html'), (err) => {
    if (err) res.status(500).send()
  })
})

app.listen(config.PORT, () => {
  console.log(`Listening on port: ${config.PORT}`)
})
