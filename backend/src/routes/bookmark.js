const router = require('express').Router()
const Book = require('../models/book')
const Bookmark = require('../models/bookmark')

router.get('/', async (req, res) => {
  const books = await Bookmark.findAll({
    include: [
      {
        model: Book,
        required: true,
      },
    ],
  })
  res.send(books)
})

router.post('/:book_id', async (req, res) => {
  const { book_id } = req.params

  try {
    await Bookmark.create({
      book_id,
      created_at: new Date().toISOString(),
    })
    res.status(201).send({ msg: 'Bookmark created.' })
  } catch (error) {
    if (error.name === 'SequelizeUniqueConstraintError') {
      res.status(400).send({ error: 'Bookmark already exists.' })
    } else {
      res.status(500).send({ error: 'Internal server error.' })
    }
  }
})

module.exports = router
