const
  jwt = require('jsonwebtoken'),
  { secret } = require('../config')

module.exports = (req, res, next) => {
  const 
    token = req.headers.authorization.split(' ')[1]

  jwt.verify(token, secret, (err, decoded) => {
    if (decoded) {
      res.userData = decoded
      next()
    }

    else {
      return res.status(401).json({
        message: 'Auth failed'
      })
    }
  })
}