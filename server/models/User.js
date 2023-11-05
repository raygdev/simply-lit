const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    role: {type: String, required: true}
}, {
    timestamps: true,
    toJSON: true
})

const User = mongoose.Model("Users", userSchema)

module.exports = { User }