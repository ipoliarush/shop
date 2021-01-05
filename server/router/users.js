const { Router } = require('express')
const router = Router()
const User = require('../models/Users')
const bcrypt = require('bcrypt')

router.post('/signup', async (req, res) => {

  const searchEmail = await User.findOne({ email: req.body.email }).exec();

  const user = new User({

    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8),
    dateReg: new Date(),

  })

  if (searchEmail) res.json({ success: false, code: '2', message: 'Такой пользователь уже зарегестрирован' })
  else 

    await user.save(err => {
      if (err) return res.status(400).json({ success: false, code: '4', message:  'Во время регистрации возникли проблемы' })
      else {
        console.log(searchEmail)
        res.redirect('/')
      }
    })
  
})

module.exports = router