const { Router } = require('express'),
  router = Router(),
  User = require('../models/users'),
  { secret } = require('../config'),
  { UsersController, verify } = require('../controllers'),
  jwt = require('jsonwebtoken'),
  recovery = require('../mailer/recovery')

// function getRandomInt(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min
// }

router.post('/register', UsersController.users_register)

router.post('/login',  UsersController.users_login)

router.get('/:token', UsersController.users_register_confirm)

router.post('/recovery', async (req, res) => {

  await User.findOne({ email: req.body.email }).exec((err, user) => {

    //Если возникла ошибка во время проверки ел. адреса
    if(err) 
      res
      .status(400)
      .json({ success: false, code: '5', message:  'Во время востановления пароля возникли проблемы' })
    
    //Если пользователь с данным ел. адресом не найден
    else if (!user)
      res
      .status(200)
      .json({ 
        success: true, 
        code: '1',
        message: 'Проверочный код отправлен',
        user: {
          id: '805362',
          email: req.body.email,
        } 
      })
    
    //Если пользователь с данным ел. адресом найден
    else {
      recovery(user.email, getRandomInt(100000, 999999))

      res
      .status(200)
      .json({ 
        success: true, 
        code: '1',
        message: 'Проверочный код отправлен',
        user: {
          id: user.id,
          email: user.email,
        }  
      })
    }
  })
})

router.post('/confirm', async (req, res) => {

  await User.findOne({ email: req.body.email }).exec((err, user) => {
    if(err) 
      return res
      .status(400)
      .json({ success: false, code: '5', message:  'Во время проверки ел. адреса возникли проблемы' })
    
    else if (!user)
      return res
      .json({ success: false, code: '6', message: 'Пользователь с таким ел. адресом не найден' })
    
    else 
      return res
      .status(200)
      .json({ 
        success: true, 
        token: jwt.sign({ id: user.id }, secret),
        user: {
          id: user.id,
          firstName: user.firstName,
          name: user.firstName,
          email: user.email,
          phone: user.phone,
        }  
      })
  })
})

module.exports = router