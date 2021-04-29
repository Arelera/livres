const { Op } = require('sequelize')
const Book = require('../models/book')

const router = require('express').Router()

router.get('/', async (req, res) => {
  const books = await Book.findAll({ limit: 10 })
  res.send(books)
})

router.get('/search', async (req, res) => {
  const { query } = req.query

  const response = await Book.findAll({
    where: { title: { [Op.like]: `%${query}%` } },
  })

  if (!response.length) {
    return res.status(404).send([])
  }

  res.send(response)
})

module.exports = router
