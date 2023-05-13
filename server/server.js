const express = require("express")
const { connect } = require("./dbConfig")
require("dotenv").config()
const app = express()

const port = process.env.SERVER_PORT

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.listen(port, () => {
    console.log(`App is listening on port ${port}`)
    connect()
})