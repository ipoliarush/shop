const 
  User = require('../models/users'),
  TempUser = require('../models/tempusers'),
  bcrypt = require('bcrypt'),
  { confirm } = require('../mailer'),
  saltRounds = 10

let getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const register = async (req, res) => {

  //запрос на поиск ел. адрес 
  const query = { email: req.body.email }
  const code = getRandomInt(100000, 999999)

  //заполняем данные о новом пользователе
  const newUser = new TempUser({
    firstName: req.body.firstName,
    email: req.body.email,
    password: await bcrypt.hash(req.body.password, saltRounds),
    confirm: {
      code: code,
      attempt: 1
    }
  })

  TempUser.findOneAndUpdate(query, { 'confirm.code': code, $inc: { 'confirm.attempt': 1 }, 'confirm.attempt_time': Date.now() }, { new: true }, (err, user) => {
    if (err) {
      return res
      .status(400)
      .json({ 
        success: false, 
        message: 'Во время регистрации возникли проблемы' 
      })
    }

    if (user) {
      confirm(user.email, code)

      return res
      .status(200)
      .json({ 
        success: true, 
        code: 3,
        content: {
          email: user.email,
          confirm: user.confirm 
        },
        message: 'Код подтверждения повторно отправлен на ел. адрес'
      })
    }

    else {
      User.findOne(query, (err, user) => {
        if (err) {
          return res
          .status(400)
          .json({ 
            success: false, 
            message: 'Во время регистрации возникли проблемы' 
          })
        }
    
        if (user) {
          return res
          .json({ 
            success: false,  
            code: 2,  
            message: 'Пользователь с таким эл. адресом уже существует' 
          })
        }
        
        newUser.save((err, user) => {
          if (err) {
            return res
            .status(400)
            .json({ 
              success: false, 
              message: 'Во время регистрации возникли проблемы' 
            })
          }
        
          else {
            confirm(user.email, code)
    
            return res
            .status(200)
            .json({ 
              success: true, 
              code: 1,
              content: {
                email: user.email,
                confirm: user.confirm
              },
              message: 'Код подтверждения отправлен на ел. адрес'
            })
          }
        })
      })
    }
  })
}

module.exports = register