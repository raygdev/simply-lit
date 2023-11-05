const express = require("express")
const { connect } = require("./dbConfig")
require("dotenv").config()
const app = express()
const cors = require('cors')
const cookieParser = require('cookie-parser')
const port = process.env.SERVER_PORT
const lettersRouter = require('./routes/lettersRoutes/lettersRoutes')
const userRouter = require("./routes/userRoutes/userRoutes")


app.use(express.json())
app.use(cors())
app.use(cookieParser())
app.use(express.urlencoded({ extended: false }))

app.use(lettersRouter)
app.use(userRouter)

app.listen(port, () => {
    console.log(`App is listening on port ${port}`)
    connect()
})

