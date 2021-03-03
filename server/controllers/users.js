const 
  User = require('../models/users'),
  Recovery = require('../models/users'),
  bcrypt = require('bcrypt'),
  { secret, emailsecret } = require('../config'),
  { mailer_verify, mailer_recovery } = require('../mailer'),
  jwt = require('jsonwebtoken'),
  saltRounds = 10,
  getRandomInt = require('../function/get-random-int')

exports.users_login = (req, res) => {

  User.findOne({ email: req.body.email }, (err, user) => {

    if (user) {
      bcrypt.compare(req.body.password, user.password, (err, rezult) => {
        if (rezult) {
          if (!user.isVerified) {
            return res.status(401).json({
              success: false, 
              message: 'Пользователь не подтвердил ел. адрес',
              code: 3
            })
          } else {
            jwt.sign({ id: user.id, created: user.createdAt, type: 'auth' }, secret, (err, token) => {
              return res.status(200).json({ 
                success: true, 
                message: 'Пользователь успешно авторизирован',
                token: token,
                user: {
                  id: user.id,
                  firstName: user.firstName,
                  name: user.firstName,
                  email: user.email,
                  phone: user.phone
                }  
              })
            })
          } 
        }

        else return res.status(401).json({
          success: false, 
          message: 'Ел. адрес или пароль неверны',
          code: 2
        })
      })
    }

    else if (err) {
      return res.status(500).json({ 
        success: false, 
        message: 'Во время авторизации возникли проблемы',
      })
    }
    
    else return res.status(401).json({
      success: false, 
      message: 'Ел. адрес или пароль неверны',
      code: 2
    })
  })
}

exports.users_register = async (req, res) => {

  //заполняем данные о новом пользователе
  const newUser = new User({
    firstName: req.body.firstName,
    email: req.body.email,
    password: await bcrypt.hash(req.body.password, saltRounds),
  })

  User.findOne({ email: req.body.email }, (err, data) => {
    if (err) {
      return res.status(500).json({ 
        success: false, 
        message: 'Во время регистрации возникли проблемы',
        error: err
      })
    } else if (data) {
      return res.status(409).json({ 
        success: false,   
        message: 'Пользователь с таким эл. адресом уже существует',
        code: 2, 
      })
    } else newUser.save((err) => {
      if (err) {
        return res.status(500).json({ 
          success: false, 
          message: 'Во время регистрации возникли проблемы',
        })
      } else {
        jwt.sign({ userId: newUser._id, email: newUser.email, name: newUser.firstName, type: 'users_register_confirm' }, emailsecret, { expiresIn: '2h' }, (err, token) => {

          if (token) {
            mailer_verify(newUser.email, token)

            return res.status(200).json({ 
              success: true, 
              message: 'Ссылка для подтверждения отправлена на эл. адрес',
              token: token
            })
          } else {
            return res.status(500).json({ 
              success: false, 
              message: 'Во время регистрации возникли проблемы',
            })
          }
        })
      }
    })
  })
}

exports.users_register_confirm = (req, res) => {
  
  jwt.verify(req.params.token, emailsecret, (err, decoded) => {

    if (err || decoded.type !== 'users_register_confirm') {
      return res.status(401).json({ 
        success: false, 
        message: 'Ссылка для подтверждения недействительна',
      })
    } else {
      User.findOneAndUpdate({ $and: [{ _id: decoded.userId }, { isVerified: false }] }, { isVerified: true }, { new: true }, (err, user) => {
        if (user) {
          return res.status(200).json({ 
            success: true, 
            user: decoded
          })
        }

        return res.status(401).json({ 
          success: false, 
          message: 'Ссылка для подтверждения недействительна',
        })
      })
    }
    
  })
}

exports.users_delete = (req, res) => {

  if (req.params.userId !== res.userData.id) {
    return res.status(401).json({
      success: false,
      message: 'Не удалось удалить пользователя',
    })
  } else {
    User.deleteOne({ _id: req.params.userId }, (err, deleted) => {
      if (!deleted.deletedCount || err) {
        return res.status(401).json({
          success: false,
          message: 'Не удалось удалить пользователя',
        })
      }
  
      return res.status(201).json({
        success: true,
        message: 'Пользователь успешно удален',
      })
    })
  }
}

exports.users_recovery = (req, res) => {

  const 
    blockingTime = 86400000, //24 часа
    date = new Date(), //Текущее время
    maxAttempts = 5, //Максимальное количество попыток восстановления пароля в сутки
    newCode = getRandomInt(100000, 999999) //Генерация проверочного кода

  User.findOne({ email: req.body.email }, (err, user) => {
    if (!user || err) {
      return res.status(500).json({
        success: false,
        message: 'Во время восстановления пароля возникли проблемы'
      })
    } else if (user.recovery.attempts > maxAttempts) {
      if (date - user.recovery.updated >= blockingTime) {

        User.findByIdAndUpdate({ _id: user._id }, { recovery: { attempts: 1, code: newCode } }, { new: true }, (err, updated) => {
          if (err) {
            return res.status(500).json({
              success: false,
              message: 'Во время восстановления пароля возникли проблемы'
            })
          } else {
            mailer_recovery(updated.email, newCode)

            return res.status(200).json({ 
              success: true, 
              message: 'Проверочный код отправлен',
              user: {
                id: user.id,
                email: user.email,
              }  
            })
          }
        })
      } else {
        return res.status(401).json({
          success: false,
          message: 'Превышено количество попыток восстановления пароля в сутки',
          code: 2
        })
      }
    } else {

      User.findByIdAndUpdate({ _id: user._id }, { recovery: { $inc: { attempts: 1 }, code: newCode } }, { new: true }, (err, updated) => {
        if (err) {
          return res.status(500).json({
            success: false,
            message: 'Во время восстановления пароля возникли проблемы'
          })
        } else {
          mailer_recovery(updated.email, newCode)

          return res.status(200).json({ 
            success: true, 
            message: 'Проверочный код отправлен',
            user: {
              id: user.id,
              email: user.email,
            }  
          })
        }
      })
    }
  })
}
