const { Sequelize } = require('sequelize')
const config = require('../config')

const sequelize = new Sequelize({
  dialect: 'mysql',
  host: config.DB_HOST,
  database: config.DB,
  username: config.DB_USERNAME,
  password: config.DB_PASSWORD,
})

module.exports = sequelize
