const express = require("express")
const { connect } = require("./dbConfig")
require("dotenv").config()
const app = express()
const cors = require('cors')
const port = process.env.SERVER_PORT
const lettersRouter = require('./routes/lettersRoutes/lettersRoutes')


app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: false }))

app.use(lettersRouter)

app.listen(port, () => {
    console.log(`App is listening on port ${port}`)
    connect()
})

