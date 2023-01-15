const express = require('express')
const logger = require('morgan')
const cors = require('cors')

require("dotenv").config()

const contactsRouter = require('./routes/api/contactsRouter');
const authRouter = require('./routes/api/authRouter');

const app = express()

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short'

app.use(logger(formatsLogger))
app.use(cors())
app.use(express.json())
app.use(express.static("public")) // дозволяє експрессу віддавати статичні файли з указаної папки. І саме в цій папці за замовчуванням він буде файл шукати. В нас це аватарка користувача.

app.use('/api/users', authRouter)
app.use('/api/contacts', contactsRouter)

app.use((_, res) => {
  res.status(404).json({ message: 'Not found' })
})

app.use((err, _, res, __) => {
  const { status = 500, message = "Server error " } = err
  res.status(status).json(message)
})

module.exports = app