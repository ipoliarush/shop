const { Router } = require('express'),
  router = Router(),
  { secret } = require('../config'),
  jwt = require('jsonwebtoken')

router.get('/profile', verifyToken, (req, res) => {
  jwt.verify(req.token, secret, (err, authData) => {
    if(err) {
      res.status(403)
    }
    else 
      res.json({
        success: true,
        authData
      })
  })
})

function verifyToken(req, res, next) {
  const bearerHeader = req.headers['Authorization']

  if(typeof bearerHeader !== 'undefined') {
    const bearerToken = bearerHeader.split(' ')[1]
    req.token = bearerToken
    next()
  } else {
    res.sendStatus(403)
  }
}

module.exports = router