const { Router } = require('express'),
  router = Router(),
  User = require('../models/users'),
  { secret } = require('../config'),
  { UsersController } = require('../controllers'),
  jwt = require('jsonwebtoken'),
  checkAuth = require('../middleware/check-auth')

// метод POST регистрация пользователя
router.post('/register', UsersController.users_register)

// метод GET подтверждение регистрации пользователя
router.get('/:token', UsersController.users_register_confirm)

// метод POST авторизация пользователя
router.post('/login', UsersController.users_login)

// метод DELETE удаление пользователя
router.delete('/:userId', checkAuth, UsersController.users_delete)

// метод POST ввостановление пароля
router.post('/recovery', UsersController.users_recovery)


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