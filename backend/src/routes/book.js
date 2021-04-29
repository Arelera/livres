const Book = require('../models/book')

const router = require('express').Router()

router.get('/', async (req, res) => {
  const books = await Book.findAll({ limit: 10 })
  res.send(books)
})

module.exports = router
