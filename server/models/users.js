const { Schema, model } = require('mongoose')

const schema = new Schema({
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
  dateRegistration: {
    type: Date,
    required: true
  }
})

model.exports = model('Users', schema)