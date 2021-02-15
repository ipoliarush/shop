const { Schema, model } = require('mongoose')

const UserSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  phone: {
    type: Number,
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
  isActivated: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: {
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  }
}, { 
  collection: 'users' 
})
module.exports = model('Users', UserSchema)