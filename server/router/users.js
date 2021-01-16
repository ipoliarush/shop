const { Router } = require('express'),
  router = Router(),
  User = require('../models/Users'),
  bcrypt = require('bcrypt'),
  { secret } = require('../config'),
  jwt = require('jsonwebtoken'),
  recovery = require('../mailer/recovery')

const salt = bcrypt.genSaltSync(10)

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

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
            token: jwt.sign({ id: user.id }, secret, { expiresIn: 60 }),
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

  await User.findOne({ email: req.body.email }).exec((err, user) => {
    if(err) 
      return res
      .status(400)
      .json({ success: false, code: '5', message:  'Во время проверки ел. адреса возникли проблемы' })
    
    else if (!user)
      return res
      .json({ success: false, code: '6', message: 'Пользователь с таким ел. адресом не найден' })
    
    else if(!bcrypt.compareSync(req.body.password, user.password)) {
      return res
      .json({ success: false, code: '7', message: 'Введен неверный пароль' })
    }
    
    else 
      // return res
      // .status(200)
      // .json({ 
      //   success: true, 
      //   token: jwt.sign({ id: user.id }, secret, { expiresIn: 60 }),
      //   user: {
      //     id: user.id,
      //     firstName: user.firstName,
      //     name: user.firstName,
      //     email: user.email,
      //     phone: user.phone,
      //   }  
      // })

      jwt.sign({ id: user.id }, secret, (err, token) => {
        res
        .status(200)
        .json({ 
          success: true, 
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
  });
})

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