const mongoose = require('mongoose')
require("dotenv").config()

const mongoUri = process.env.MONGO_URI



async function connect(){
    try {
        await mongoose.connect(mongoUri)
        console.log("\nSuccessfully connected to simplyLit db")
    } catch (e) {
        console.log(`\nAn error occured when connecting to simplyLit\n\n${e}`)
    }
}

module.exports = {
    connect
}
