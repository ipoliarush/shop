const jwtsecret = require('./jwtsecret'),
  uri = require('./mongodb')

module.exports = {
  secret: jwtsecret,
  uri: uri
}