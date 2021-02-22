const 
  User = require('../models/users'),
  bcrypt = require('bcrypt'),
  { emailsecret } = require('../config'),
  jwt = require('jsonwebtoken')

const verify = async (req, res) => {

  User.findOne({ email: req.body.email }, (err, user) => {
    if (err) {
      return res
      .status(400)
      .json({ 
        success: false, 
        message: 'Во время авторизации возникли проблемы' 
      })
    }

    else if (user) {
      if(!bcrypt.compareSync(req.body.password, user.password)) {
        return res
        .json({
          success: false, 
          code: 2, 
          message: 'Ел. адрес или пароль неверны' 
        })
      }

      else if (!user.isVerified) {
        return res
        .json({
          success: false, 
          code: 3, 
          message: 'Пользователь не подтвердил ел. адрес' 
        })
      }
      
      else {
        jwt.sign({ id: user.id, created: user.createdAt }, secret, (err, token) => {
          return res
          .status(200)
          .json({ 
            success: true, 
            code: 1,
            token: token,
            user: {
              id: user.id,
              firstName: user.firstName,
              name: user.firstName,
              email: user.email,
              phone: user.phone,
            }  
          })
        })
      }
    }
  })
}

module.exports = verify