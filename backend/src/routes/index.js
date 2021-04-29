const router = require('express').Router()
const bookRouter = require('./book')
const bookmarkRouter = require('./bookmark')

router.use('/books', bookRouter)
router.use('/bookmarks', bookmarkRouter)

module.exports = router
