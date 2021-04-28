require('dotenv').config({ path: `${__dirname}/.env` })

const config = {
  PORT: process.env.PORT || 3001,
  DB_HOST: process.env.DB_HOST,
  DB: process.env.DB,
  DB_USERNAME: process.env.DB_USERNAME,
  DB_PASSWORD: process.env.DB_PASSWORD,
}

module.exports = config
