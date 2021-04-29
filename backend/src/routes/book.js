const { Op } = require('sequelize')
const Book = require('../models/book')
const Bookmark = require('../models/bookmark')

const router = require('express').Router()

router.get('/', async (req, res) => {
  const { page } = req.query
  const books = await Book.findAll({
    include: [
      {
        model: Bookmark,
      },
    ],
    order: [['id', 'ASC']],
    limit: 10,
    offset: (page || 0) * 10,
  })
  res.send(books)
})

router.get('/search', async (req, res) => {
  const { query, page } = req.query

  const response = await Book.findAll({
    where: { title: { [Op.like]: `%${query}%` } },
    include: [
      {
        model: Bookmark,
      },
    ],
    order: [['id', 'ASC']],
    limit: 10,
    offset: (page || 0) * 10,
  })

  if (!response.length) {
    return res.status(404).send([])
  }

  res.send(response)
})

module.exports = router
