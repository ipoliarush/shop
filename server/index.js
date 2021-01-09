const express = require('express')
const mongoose = require('mongoose')
const router = require('./router')
const path = require('path')

const url = "mongodb+srv://ipol:1q2w3e4r5t@cluster0.xv0xz.mongodb.net/usersdb"
const PORT = process.env.PORT || 3030
const app = express()

const allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', '*')
  res.header('Access-Control-Allow-Headers', '*')
  next()
} 

app.use(allowCrossDomain)


app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static(path.resolve(__dirname, '../dist')))
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../dist', 'index.html'))
})
app.use(router)


async function start() {
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true
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