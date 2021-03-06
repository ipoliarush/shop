const 
  { Router } = require('express'),
  router = Router(),
  { UsersController } = require('../controllers'),
  checkAuth = require('../middleware/check-auth'),
  { body, param } = require('express-validator'),
  alphaHelp = /^[а-яА-ЯіІїЇєЄ]*$/

// метод POST регистрация пользователя
router.post('/register', body('email').isEmail(), UsersController.users_register)

// метод GET подтверждение регистрации пользователя
router.get('/:token', param('token').isJWT().escape(), UsersController.users_register_confirm)

// метод POST авторизация пользователя
router.post('/login', body('email').isEmail(), body('password').isLength({ min: 8, max: 64 }).escape(), UsersController.users_login)

// метод DELETE удаления пользователя
router.delete('/:userId', param('userId').isMongoId().escape(), checkAuth, UsersController.users_delete)

// метод POST ввостановления пароля
router.post('/recovery', body('email').isEmail(), UsersController.users_email_recovery)

// метод POST подтверждения ввостановления пароля
router.post('/confirm', body('email').isEmail(), UsersController.users_confirm)

module.exports = router