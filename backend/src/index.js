const express = require('express')
const app = express()
const cors = require('cors')
const config = require('./config')
const routes = require('./routes')

app.use(cors())
app.use(express.json())

app.use('/api', routes)

app.listen(config.PORT, () => {
  console.log(`Listening on port: ${config.PORT}`)
})
