const { Router } = require('express')
const router = Router()
const Users = require('../models/users')
const bcrypt = require('bcrypt')

router.post('/register', async (req, res) => {

  const user = new Users([
    req.body.firstName,
    req.body.lastName,
    req.body.email,
    bcrypt.hashSync(req.body.password, 8),
    new Date(),
  ],

  function (err) {
    if (err) return res.status(500).send("There was a problem registering the user.")
    db.selectByEmail(req.body.email, (err,user) => {
      if (err) return res.status(500).send("There was a problem getting user")
      let token = jwt.sign({ id: user.id }, config.secret, { expiresIn: 86400 });
      res.status(200).send({ auth: true, token: token, user: user });
    }); 
  }); 
});