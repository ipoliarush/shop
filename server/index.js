const 
  express = require('express'),
  mongoose = require('mongoose'),
  { users, profile } = require('./router'),
  path = require('path'),
  { uri } = require('./config')

const 
  PORT = process.env.PORT || 3030,
  app = express()

const allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', '*')
  res.header('Access-Control-Allow-Headers', '*')
  next()
} 

app.use(allowCrossDomain)

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
// app.use(express.static(path.resolve(__dirname, '../dist')))
// app.get('*', (req, res) => {
//   res.sendFile(path.resolve(__dirname, '../dist', 'index.html'))
// })
app.use('/users', users)
app.use(profile)


async function start() {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    })
    app.listen(PORT, () => {
      console.log('Server has been started...')
    })
  }
  catch (e) {
    console.log(e)
  }
}

start()