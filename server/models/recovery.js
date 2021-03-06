const 
  { Schema, model } = require('mongoose')

const UserRecoverySchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  code: {
    type: Number
  },
  attempts: {
    type: Number,
    default: 1
  },
  limit: {
    type: Number,
    default: 0
  },
  used: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: {
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  }
})

module.exports = model('Recovery', UserRecoverySchema)