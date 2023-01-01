require("dotenv").config()

const mongoose = require("mongoose")

const app = require('./app')

const { DB_HOST, PORT = 3000 } = process.env

mongoose.set('strictQuery', true)

mongoose.connect(DB_HOST)
  .then(() => app.listen(PORT), () => console.log(`Sucess connection to DB. Server is running on port ${PORT}`))
  .catch(error => {
    console.log(error.message)
    process.exit(1)
  })

// app.listen(3000, () => {
//   console.log("Server running. Use our API on port: 3000")
// })