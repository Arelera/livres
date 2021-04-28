const express = require('express')
const app = express()
const cors = require('cors')
const config = require('./config')

const bookRouter = require('./routes/book')

app.use(cors())
app.use(express.json())

app.use('/api/books', bookRouter)

app.listen(config.PORT, () => {
  console.log(`Listening on port: ${config.PORT}`)
})
