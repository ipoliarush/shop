const { Router } = require('express')
const router = Router()
const User = require('../models/Users')
const bcrypt = require('bcrypt')
const config = require('../config')
const jwt = require('jsonwebtoken');

const salt = bcrypt.genSaltSync(10)

router.post('/register', async (req, res) => {

  const newUser = new User({

    firstName: req.body.firstName,
    phone: req.body.phone.replace(/[^\d]/g, ''),
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, salt),
    dateReg: new Date(),

  })

  const searchEmail = await User.findOne({ email: req.body.email }).exec();
  const searchPhone = await User.findOne({ phone: req.body.phone.replace(/[^\d]/g, '') }).exec();

  if (searchPhone) 
    res.json({ success: false, code: '3', message: 'Пользователь с таким телефоном уже зарегистрирован' })
  
  else if (searchEmail) 
    res.json({ success: false, code: '2', message: 'Пользователь с таким ел. адрессом уже зарегистрирован' })
  
  else 

    await newUser.save((err, user) => {
      if (err) {
        return res
          .status(400)
          .json({ success: false, code: '4', message:  'Во время регистрации возникли проблемы' })
      }
    
      else {
        return res
          .status(200)
          .json({ 
            success: true, 
            token: jwt.sign({ id: user.id }, config.secret, { expiresIn: 86400 }),
            user: {
              id: user.id,
              firstName: user.firstName,
              name: user.firstName,
              email: user.email,
              phone: user.phone,
            }  
          })
      }
    })
  
})

router.post('/login', async (req, res) => {

  const password = bcrypt.hashSync(req.body.password, salt)

  await User.findOne({ email: req.body.email }).exec((err, user) => {
    if(err) 
      return res
        .status(400)
        .json({ success: false, code: '5', message:  'Во время проверки ел. адреса возникли проблемы' })
    
    else if (!user)
      return res
      .json({ success: false, code: '6', message: 'Пользователь с таким ел. адресом не найден' })
    
    else if(user.password !== password) {
      return res
      .json({ success: false, code: '7', message: 'Введен неверный пароль' })
    }
    
    else 
      return res
        .status(200)
        .json({ 
          success: true, 
          token: jwt.sign({ id: user.id }, config.secret, { expiresIn: 86400 }),
          user: {
            id: user.id,
            firstName: user.firstName,
            name: user.firstName,
            email: user.email,
            phone: user.phone,
          }  
        })
  });
})

module.exports = router