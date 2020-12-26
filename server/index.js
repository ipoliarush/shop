const express = require('express')
const mongoose = require('mongoose')

const path = require('path')
// import cors from 'cors';
// import config from './config';
// import bcrypt from 'bcrypt';
// import jwt from 'jsonwebtoken';
// import { urlencoded, json } from 'body-parser';

const PORT = process.env.PORT || 3000
const app = express()





app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.resolve(__dirname, '../dist')))

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../dist', 'index.html'))
})

const url = "mongodb+srv://ipol:1q2w3e4r5t@cluster0.xv0xz.mongodb.net/usersdb"


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