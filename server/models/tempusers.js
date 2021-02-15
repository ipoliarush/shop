const { Schema, model } = require('mongoose')

const UserSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true
  },
  confirm: {
    code: {
      type: Number,
    },
    attempt: {
      type: Number
    },
    attempt_max: {
      type: Number,
      default: 5
    },
    attempt_time: {
      type: Date,
      default: Date.now
    }
  }
}, { 
  collection: 'tempusers' 
})

module.exports = model('TempUsers', UserSchema)