const 
  User = require('../models/users'),
  Recovery = require('../models/recovery'),
  bcrypt = require('bcrypt'),
  { secret, emailsecret } = require('../config'),
  { mailer_verify, mailer_recovery } = require('../mailer'),
  jwt = require('jsonwebtoken'),
  saltRounds = 10,
  getRandomInt = require('../function/get-random-int'),
  { validationResult } = require('express-validator')

exports.users_login = (req, res) => {

  const error = () => {
    return res.status(500).json({ 
      success: false, 
      message: 'Во время авторизации возникли проблемы',
    })
  }

  if (validationResult(req).errors.length) {
    return error()
  }

  User.findOne({ email: req.body.email }, (err, user) => {
    if (err) {
      return error()
    } else if (!user) {
      return res.status(401).json({
        success: false, 
        message: 'Ел. адрес или пароль неверны',
        code: 2
      })
    } else {
      bcrypt.compare(req.body.password, user.password, (err, rezult) => {
        if (err) {
          return error()
        } else if (!rezult) {
          return res.status(401).json({
            success: false, 
            message: 'Ел. адрес или пароль неверны',
            code: 2
          })
        } else if (rezult && !user.isVerified) {
          return res.status(401).json({
            success: false, 
            message: 'Пользователь не подтвердил ел. адрес',
            code: 3
          })
        } else {
          jwt.sign({ id: user.id, created: user.createdAt, type: 'auth' }, secret, (err, token) => {
            if (err) {
              return error()
            } else {
              return res.status(200).json({ 
                success: true, 
                message: 'Пользователь успешно авторизирован',
                JWT: token,
                user: {
                  id: user.id,
                  firstName: user.firstName,
                  email: user.email,
                  phone: user.phone
                }  
              })
            }
          })
        } 
      })
    }
  })
}

exports.users_register = async (req, res) => {

  const error = () => {
    return res.status(500).json({ 
      success: false, 
      message: 'Во время регистрации возникли проблемы',
    })
  }

  if (validationResult(req).errors.length) {
    return error()
  }

  const newUser = new User({
    firstName: req.body.firstName,
    email: req.body.email,
    password: await bcrypt.hash(req.body.password, saltRounds),
  })

  User.findOne({ email: req.body.email }, (err, data) => {
    if (err) {
      return error()
    } else if (data) {
      return res.status(409).json({ 
        success: false,   
        message: 'Пользователь с таким эл. адресом уже существует',
        code: 2, 
      })
    } else {
      newUser.save(err => {
        if (err) {
          return error()
        } else {
          jwt.sign({ userId: newUser._id, email: newUser.email, name: newUser.firstName, type: 'users_register_confirm' }, emailsecret, { expiresIn: '2h' }, (err, token) => {
            if (err || !token) {
              return error()
            } else {
              mailer_verify(newUser.email, token)
              
              return res.status(200).json({ 
                success: true, 
                message: 'Ссылка для подтверждения отправлена на эл. адрес',
              })
            }
          })
        }
      })
    }
  })
}

exports.users_register_confirm = (req, res) => {

  const error = () => {
    return res.status(500).json({
      success: false,
      message: 'Ссылка для подтверждения недействительна',
    })
  }

  if (validationResult(req).errors.length) {
    return error()
  }
  
  jwt.verify(req.params.token, emailsecret, (err, decoded) => {

    if (err || decoded.type !== 'users_register_confirm') {
      return error()
    } else {
      User.findOneAndUpdate({ $and: [{ _id: decoded.userId }, { isVerified: false }] }, { isVerified: true }, { new: true }, (err, user) => {
        if (user) {
          return res.status(200).json({ 
            success: true, 
            user: decoded
          })
        } else {
          return error()
        }
      })
    }
    
  })
}

exports.users_delete = (req, res) => {

  const error = () => {
    return res.status(500).json({
      success: false,
      message: 'Не удалось удалить пользователя',
    })
  }

  if (validationResult(req).errors.length) {
    return error()
  } else if (req.params.userId !== res.userData.id) {
    return error()
  } else {
    User.deleteOne({ _id: req.params.userId }, (err, deleted) => {
      if (!deleted.deletedCount || err) {
        return error()
      } else {
        Recovery.deleteOne({ userId: req.params.userId }, (err, deleted) => {
          if (!deleted.deletedCount || err) {
            return error()
          } else {
            return res.status(201).json({
              success: true,
              message: 'Пользователь успешно удален',
            })
          }
        })
      }
    })
  }
}

exports.users_email_recovery = (req, res) => {

  const error = () => {
    return res.status(500).json({
      success: false,
      message: 'Во время восстановления пароля возникли проблемы'
    })
  }

  if (validationResult(req).errors.length) {
    return error()
  }

  const 
    blockingMinTime = 60000, //Время бокировки между запросами 1 минута
    blockingMaxTime = 86400000, //Время блокировки после максимального количества попыток возобновления 24 часа
    date = new Date(), //Текущее время
    maxAttempts = 5, //Максимальное количество попыток восстановления пароля в сутки
    newCode = getRandomInt(100000, 999999) //Генерация проверочного кода

  //Поиск пользователя по указаному эл. адресу
  User.findOne({ email: req.body.email }, (err, user) => {
    if (err) {
      return error()
    } else if (!user) {
      return res.status(401).json({
        success: false,   
        message: 'Пользователя с таким эл. адресом не существует',
        code: 2,
      })
    } else {
      //Если пользователь найден проверяем данные на актуальность
      Recovery.findOne({ userId: user._id }, (err, recovery) => {
        if (err) {
          return error()
        } else if (!recovery) {
          const newRecovery = new Recovery({
            userId: user._id,
            code: newCode
          })

          newRecovery.save(err => {
            if (err) {
              return error()
            } else {
              mailer_recovery(user.email, newRecovery.code )
      
              return res.status(200).json({ 
                success: true, 
                message: 'Проверочный код отправлен',
                user: {
                  id: user._id,
                  email: user.email,
                }  
              })
            } 
          })
        } else if (date - recovery.updatedAt < blockingMinTime) {
          return res.status(401).json({
            success: false,
            message: 'Блокировка между запросами',
            code: 4
          })
        } else if (recovery.attempts < maxAttempts) {
          Recovery.findOneAndUpdate({ userId: user._id }, { $inc: { attempts: 1 }, code: newCode, limit: 0, used: false }, { new: true }, (err, updated) => {
            if (err) {
              return error()
            } else {
              mailer_recovery(user.email, updated.code)
      
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
        } else if (recovery.attempts >= maxAttempts && (date - recovery.updatedAt) > blockingMaxTime) {
          Recovery.findOneAndUpdate({ userId: user._id }, { attempts: 1 , code: newCode, limit: 0, used: false }, { new: true }, (err, updated) => {
            if (err) {
              return error()
            } else {
              mailer_recovery(user.email, updated.code)
      
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
            code: 3
          })
        }
      })
    }
  })
}

exports.users_confirm = (req, res) => {
  const error = () => {
    return res.status(500).json({
      success: false,
      message: 'Во время проверки кода восстановления возникли проблемы'
    })
  }

  if (validationResult(req).errors.length) {
    return error()
  }

  const 
    maxLimit = 5, //Максимальное количество попыток проверки одного кода подтверждения
    date = new Date(), //Текущее время
    lifeTime = 1200000 //Время действия кода 20 минут 1200000

  User.findOne({ email: req.body.email }, (err, user) => {
    if (err) {
      return error()
    } else if (!user) {
      return res.status(401).json({
        success: false,   
        message: 'Пользователя с таким эл. адресом не существует',
        code: 2,
      })
    } else {
      Recovery.findOne({ userId: user._id }, (err, recovery) => {
        if (err || !recovery) {
          return error()
        } else if (recovery.used || (date - recovery.updatedAt) > lifeTime) {
          return res.status(401).json({ 
            success: false, 
            message: 'Код ввостановления недействителен',
            code: 5  
          })
        } else if (recovery.limit >= maxLimit) {
          return res.status(401).json({ 
            success: false, 
            message: 'Превышен лимит ввода кода восстановления',
            code: 4  
          })
        } else if (recovery.code !== parseInt(req.body.code)) {
          Recovery.findOneAndUpdate({ userId: user._id }, { $inc: { limit: 1 } }, err => {
            if (err) {
              return error()
            } else {
              return res.status(401).json({ 
                success: false, 
                message: 'Код восстановления неверный',
                code: 3  
              })
            }
          })
        } else {
          Recovery.findOneAndUpdate({ userId: user._id }, { used: true }, err => {
            if (err) {
              return error()
            } else {
              return res.status(200).json({ 
                success: true, 
                message: 'Проверочный код верный',
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
  })
}