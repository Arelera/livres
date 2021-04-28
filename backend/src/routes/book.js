const router = require('express').Router()

router.get('/', (req, res) => {
  res.send({ hey: 'yo' })
})

module.exports = router
