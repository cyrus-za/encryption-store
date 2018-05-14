const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')

const encryptionStore = require('./routes/encryptionStore')
const homePage = require('./routes/homePage')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())

app.use('/', homePage)
app.use('/api/v1/encryption-store', encryptionStore)

module.exports = app
