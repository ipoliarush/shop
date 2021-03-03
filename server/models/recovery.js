const 
  { Schema, model } = require('mongoose')

const UserRecoverySchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId, ref: 'Users'
  },
  code: {
    type: Number
  },
  attempts: {
    type: Number,
    default: 0
  },
}, {
  timestamps: {
    updatedAt: 'updatedAt'
  }
}, { 
  collection: 'recovery' 
})

module.exports = model('Recovery', UserRecoverySchema)