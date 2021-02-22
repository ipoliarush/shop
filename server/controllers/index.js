const 
  verify = require('./verify'),
  users = require('./users')

module.exports = {
  verify,
  UsersController: users
}