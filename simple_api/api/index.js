var router = require('express').Router()
var mocks = require('./mock')

const reply = (res, body, timeout = 1000, status = 200) =>
  setTimeout(() => {
    res.status(status).json(body)
  }, timeout)

router.get('/users', function(req, res, next) {
  var users = mocks.users,
      limit = Number(req.query.limit) || users.length,
      offset = Number(req.query.offset) || 0

  reply(res, users.slice(offset, limit + offset))
})

router.post('/report', function(req, res) {
  reply(res, {})
})

module.exports = router
