const { Schema, model } = require('mongoose')

const UserSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  dateReg: {
    type: Date
  }
})

module.exports = model('Users', UserSchema)