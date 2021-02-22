const 
  User = require('../models/users'),
  bcrypt = require('bcrypt'),
  { secret, emailsecret } = require('../config'),
  { mailer_verify } = require('../mailer'),
  jwt = require('jsonwebtoken'),
  saltRounds = 10

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
          }

          else jwt.sign({ id: user.id, created: user.createdAt }, secret, (err, token) => {
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
        error: err
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
    }

    else if (data) {
      return res.status(409).json({ 
        success: false,   
        message: 'Пользователь с таким эл. адресом уже существует',
        code: 2, 
      })
    }
    
    else newUser.save((err) => {
      if (err) {
        return res.status(500).json({ 
          success: false, 
          message: 'Во время регистрации возникли проблемы',
        })
      }
    
      else {
        jwt.sign({ userId: newUser._id, email: newUser.email, name: newUser.firstName }, emailsecret, { expiresIn: '2h' }, (err, token) => {

          if (token) {
            mailer_verify(newUser.email, token)

            return res.status(200).json({ 
              success: true, 
              message: 'Ссылка для подтверждения отправлена на ел. адрес',
              token: token
            })
          }
          else {
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

  jwt.verify(req.params.token, emailsecret, (err, key) => {

    if (key) {

      User.findOneAndUpdate({ $and: [{ _id: key.userId }, { isVerified: false }] }, { isVerified: true }, { new: true }, (err, user) => {
        if (user) {
          return res.status(200).json({ 
            success: true, 
            user: key
          })
        }

        else {
          return res.status(401).json({ 
            success: false, 
            message: 'Ссылка для подтверждения недействительна',
          })
        }
      })
    }
    
    else {
      return res.status(401).json({ 
        success: false, 
        message: 'Ссылка для подтверждения недействительна',
      })
    }
  })
}