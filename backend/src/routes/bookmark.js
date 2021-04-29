const router = require('express').Router()
const Bookmark = require('../models/bookmark')

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
